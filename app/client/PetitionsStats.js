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
        <div id="petitions-count">
            Already {petitionsCount} petitions, and counting
        </div>
    );
}

module.exports = PetitionsStats;
