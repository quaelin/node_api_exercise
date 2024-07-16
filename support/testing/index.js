const eventually = require('./eventually');
const { Page } = require('./page');
const { seedDbWithPetitionCount, savePetition } = require('./seeding');

module.exports = {
    Page,
    eventually,
    seedDbWithPetitionCount,
    savePetition
};
