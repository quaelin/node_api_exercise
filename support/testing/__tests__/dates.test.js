require('../dates');

describe('Dates', function () {
    it('returns top of the clock', () => {
        const before = (3).days().ago();

        expect(before.toISOString()).toMatch(/:00:00.000Z$/);
    });

    it('rounds up to the next hour', () => {
        const now = new Date('2021-10-19T06:03:00.000Z');
        const before = (3).days().ago(now);

        expect(before.toISOString()).toEqual('2021-10-16T07:00:00.000Z');
    });

    it('exposes what now was at time of calculation', () => {
        const yesterday = (1).day().ago();
        const now = yesterday.nowWas;
        const diff =
            (now.getTime() - yesterday.getTime()) / (1000 * 60 * 60 * 24);

        expect(diff < 1).toBe(true);
    });

    it('offers hour granularity', () => {
        const now = new Date('2021-10-19T06:03:00.000Z');
        const before = (3).hours().ago(now);

        expect(before.toISOString()).toEqual('2021-10-19T04:00:00.000Z');
    });
});
