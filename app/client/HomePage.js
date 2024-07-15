const PetitionsStats = require('./PetitionsStats');
const Petitions = require('./Petitions');

function HomePage() {
    return (
        <section>
            <PetitionsStats />
            <Petitions />
        </section>
    );
}

module.exports = HomePage;
