const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const config = {
    beforeParse: (window) => {
        window.fetch = (url, options) => {
            return fetch(`http://localhost:5001${url}`, options);
        };
    },
    runScripts: 'dangerously',
    resources: 'usable'
};

const openPage = async (url) => {
    const dom = await JSDOM.fromURL(url, config);
    return dom.window.document;
};

module.exports = {
    openPage
};
