require('../dates');

describe('Dates', function () {
    it('exposes what now was at time of calculation', () => {
        const yesterday = (1).day().ago();

        expect(yesterday.getTime()).toEqual(
            new Date(yesterday.nowWas.getTime() - 86400 * 1000).getTime()
        );
    });

    it('exposes 2.days.ago', () => {
        const yesterday = (2).days().ago();

        expect(yesterday.getTime()).toEqual(
            new Date(yesterday.nowWas.getTime() - 2 * 86400 * 1000).getTime()
        );
    });
});
