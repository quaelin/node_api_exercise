const PetitionsStats = require('./PetitionsStats');
const Petitions = require('./Petitions');
const { useFetchPetitions } = require('./useFetchPetitions');

function HomePage() {
    useFetchPetitions();

    return (
        <section>
            <PetitionsStats />
            <Petitions />
        </section>
    );
}

module.exports = HomePage;
