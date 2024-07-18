import '../dates';

describe('Dates', function () {
    it('offers days granularity', () => {
        const now = new Date('2021-10-19T06:03:00.000Z');
        const before = (2).days().ago(now);

        expect(before.toISOString()).toEqual('2021-10-17T06:03:00.000Z');
    });

    it('offers hour granularity', () => {
        const now = new Date('2021-10-19T06:03:00.000Z');
        const before = (2).hours().ago(now);

        expect(before.toISOString()).toEqual('2021-10-19T04:03:00.000Z');
    });
});
