const { useContext } = require('react');
const { AppContext } = require('./AppContext');
const { useFetchStats } = require('./outbound/useFetchStats');

function PetitionsStats() {
    const { petitionsCount } = useContext(AppContext);

    useFetchStats();

    return (
        <section>
            <h1>Welcome</h1>
            <div id="petitions-count">
                Already {petitionsCount} petitions, and counting
            </div>
        </section>
    );
}

module.exports = PetitionsStats;
