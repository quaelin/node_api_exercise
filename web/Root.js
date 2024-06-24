const PetitionCount = require('./PetitionCount');
const Petitions = require('./Petitions');

function Root() {
    return (
        <section>
            <section>
                <h1>Welcome</h1>
                <PetitionCount />
            </section>
            <section>
                <h1>What is happening</h1>
                <Petitions />
            </section>
        </section>
    );
}

module.exports = Root;
