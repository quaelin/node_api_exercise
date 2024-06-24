const { slug } = require('../slug');

describe('slug', () => {
    it('is based on petition title', () => {
        expect(slug({ title: 'wonderful' })).toEqual('wonderful');
    });

    it('dashes spaces', () => {
        expect(slug({ title: 'wonderful title indeed' })).toEqual(
            'wonderful-title-indeed'
        );
    });

    it('goes lower case', () => {
        expect(slug({ title: 'WONDERFUL' })).toEqual('wonderful');
    });
});
