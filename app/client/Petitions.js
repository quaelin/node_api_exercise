const { useContext } = require('react');
const { AppContext } = require('./AppContext.js');
const Petition = require('./Petition');

function Petitions() {
    const { petitions } = useContext(AppContext);

    return (
        <section>
            <h1>What is happening</h1>
            {petitions.map((petition, index) => (
                <Petition key={index} petition={petition} />
            ))}
        </section>
    );
}

module.exports = Petitions;
