require('../dates');

describe('Dates', function () {
    it('offers hour granularity', () => {
        const now = new Date('2021-10-19T06:03:00.000Z');
        const before = (2).hours().ago(now);

        expect(before.toISOString()).toEqual('2021-10-19T04:03:00.000Z');
    });
});

describe('midnights', () => {
    const timeDiff = new Date().getTimezoneOffset() / 60;

    it('exposes previous midnight', () => {
        expect(
            (1).midnightAgo(new Date(2010, 5, 5, 1, 2, 3)).toISOString()
        ).toEqual(`2010-06-05T0${timeDiff}:00:00.000Z`);
    });

    it('exposes 2 midnights ago', () => {
        expect(
            (2).midnightAgo(new Date(2010, 5, 5, 1, 2, 3)).toISOString()
        ).toEqual(`2010-06-04T0${timeDiff}:00:00.000Z`);
    });
});
