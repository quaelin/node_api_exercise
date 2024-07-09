Number.prototype.day = () => 86400 * 1000;
Number.prototype.days = function () {
    return (1).day() * this.valueOf();
};
Number.prototype.ago = function () {
    const now = new Date();
    const date = new Date(now.getTime() - this.valueOf());
    date.nowWas = now;
    return date;
};
