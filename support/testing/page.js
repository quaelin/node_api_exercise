const jsdom = require('jsdom');
const { oneliner } = require('./oneliner.js');
const { JSDOM } = jsdom;
const virtualConsole = new jsdom.VirtualConsole();
const config = {
    runScripts: 'dangerously',
    resources: 'usable',
    virtualConsole
};
const openWithJsdom = (isUrl, isHtml) =>
    isUrl
        ? JSDOM.fromURL
        : isHtml
          ? (target, options) => new JSDOM(target, options)
          : JSDOM.fromFile;

class Page {
    constructor() {
        this.errors = [];
    }

    async open(spec, options) {
        const isHtml =
            typeof spec == 'string' && oneliner(spec).indexOf('<') === 0;
        const isUrl = typeof spec == 'string' && spec.indexOf('http') === 0;
        const target = isUrl || isHtml ? spec : spec.pathname;
        const fetchImplementation =
            !!options && options.fetch
                ? options.fetch
                : (url, options) => {
                      return isUrl &&
                          typeof url == 'string' &&
                          url.indexOf('/') === 0
                          ? fetch(`${new URL(spec).origin}${url}`, options)
                          : fetch(url, options);
                  };
        return new Promise(async (resolve, reject) => {
            try {
                const dom = await openWithJsdom(isUrl, isHtml)(target, {
                    beforeParse: (window) => {
                        window.fetch = fetchImplementation;
                        window.__stryker__ = {
                            activeMutant: process.env.__STRYKER_ACTIVE_MUTANT__
                        };
                    },
                    ...config
                });

                virtualConsole.on('jsdomError', (error) => {
                    this.errors.push({ error });
                });
                this.window = dom.window;
                this.document = dom.window.document;
                if (this.document.readyState === 'loading') {
                    this.document.addEventListener('DOMContentLoaded', () =>
                        resolve()
                    );
                } else {
                    resolve();
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    async close() {
        return new Promise((resolve) => {
            this.window.close();
            resolve();
        });
    }

    executeScript(code) {
        code(this.window, this.document);
    }

    location() {
        return this.window.location.href;
    }

    title() {
        return this.document.title;
    }

    html() {
        return this.document.body.innerHTML;
    }

    section(text) {
        return this.find({ tag: 'section', text })
            .textContent.replace(/\s\s+/g, ' ')
            .trim();
    }

    color(text) {
        const label = this.find({ tag: 'label', text });
        const style = this.document.defaultView.getComputedStyle(label, null);

        return style.color;
    }

    activeElementId() {
        return this.document.activeElement.id;
    }

    inputValue(prompt) {
        return this.input(prompt).value;
    }

    inputId(prompt) {
        return this.input(prompt).id;
    }

    element(selector) {
        return this.document.querySelector(selector);
    }

    click(text) {
        this.find({ tag: 'button', text }).click();
    }

    enter(prompt, value) {
        let field = this.input(prompt);
        field.value = value;
        field.dispatchEvent(new this.window.Event('input'));
    }

    input(prompt) {
        let label = this.find({ tag: 'label', text: prompt });
        if (label.htmlFor.length === 0) {
            throw new Error(
                `label with text '${prompt}' is missing for attribute`
            );
        }
        let candidate = this.element(`#${label.htmlFor}`);
        if (candidate === null) {
            throw new Error(`input with id '${label.htmlFor}' not found`);
        }
        return candidate;
    }

    find(options) {
        if (!this.document) {
            throw new Error('page.document must be defined');
        }
        const document = options.in || this.document;
        let candidates = Array.from(
            document.querySelectorAll(options.tag)
        ).filter(
            (element) =>
                element.textContent.indexOf(options.text) !== -1 ||
                element.getAttribute('name') === options.text
        );
        if (candidates.length === 0) {
            throw new Error(
                `${options.tag} with text or name '${options.text}' not found`
            );
        }
        return candidates.sort(
            (a, b) => a.textContent.length - b.textContent.length
        )[0];
    }
}

module.exports = {
    Page
};
