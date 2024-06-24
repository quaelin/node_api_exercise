const { useEffect, useState } = require('react');

const PetitionCount = require('./PetitionCount');
const Petitions = require('./Petitions');

function HomePage() {
    const [petitions, setPetitions] = useState([]);

    useEffect(() => {
        fetch('/petitions')
            .then((response) => response.json())
            .then((data) => {
                setPetitions(data);
            });
    }, []);

    return (
        <section>
            <section>
                <h1>Welcome</h1>
                <PetitionCount petitions={petitions} />
            </section>
            <section>
                <h1>What is happening</h1>
                <Petitions petitions={petitions} />
            </section>
        </section>
    );
}

module.exports = HomePage;
