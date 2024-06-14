const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const openPage = async (url) => {
    const dom = await JSDOM.fromURL(url, {
        beforeParse: (window) => {
            window.fetch = (ressource, options) => {
                return fetch(`${new URL(url).origin}${ressource}`, options);
            };
        },
        runScripts: 'dangerously',
        resources: 'usable'
    });
    return dom.window.document;
};

module.exports = {
    openPage
};
