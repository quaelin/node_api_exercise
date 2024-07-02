const eventually = require('./eventually');
const { openPage } = require('./page');
const seedDbWithPetitionCount = require('./seeding');

module.exports = {
    openPage,
    eventually,
    seedDbWithPetitionCount
};
