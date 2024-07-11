Number.prototype.hour = () => 60 * 60 * 1000;
Number.prototype.day = () => 24 * (1).hour();
Number.prototype.days = function () {
    return (1).day() * this.valueOf();
};
Number.prototype.hours = function () {
    return (1).hour() * this.valueOf();
};
Number.prototype.ago = function (ref) {
    const now = ref || new Date();
    const before = new Date(now.getTime() - this.valueOf());
    before.nowWas = now;
    return before;
};
Number.prototype.midnightAgo = function (ref) {
    const now = ref || new Date();
    const midnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        0,
        0,
        0,
        0
    );

    return new Date(midnight.getTime() - (this.valueOf() - 1).days());
};
