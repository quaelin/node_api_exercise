const PetitionsStats = require('./PetitionsStats');
const Petitions = require('./Petitions');

function HomePage() {
    return (
        <section>
            <section>
                <h1>Welcome</h1>
                <PetitionsStats />
            </section>
            <section>
                <h1>What is happening</h1>
                <Petitions />
            </section>
        </section>
    );
}

module.exports = HomePage;
