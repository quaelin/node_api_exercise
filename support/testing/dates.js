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
    const date = new Date(now.getTime() - this.valueOf());
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();

    const before = new Date(year, month, day, hours + 1);
    before.nowWas = now;
    return before;
};
