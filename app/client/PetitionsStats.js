const { useState, useEffect } = require('react');

function PetitionsStats() {
    const [petitionsCount, setPetitionsCount] = useState();

    useEffect(() => {
        fetch('/petitions-stats')
            .then((response) => response.json())
            .then(({ count }) => {
                setPetitionsCount(count);
            });
    }, []);

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
