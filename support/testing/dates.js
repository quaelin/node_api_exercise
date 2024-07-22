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
