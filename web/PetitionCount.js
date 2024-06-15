const { useEffect, useState } = require('react');

function PetitionCount() {
    const [petitions, setPetitions] = useState([]);

    useEffect(() => {
        fetch('/petitions')
            .then((response) => response.json())
            .then((data) => {
                setPetitions(data);
            });
    }, []);

    return (
        <div id="petitions-count">
            Already {petitions.length} petitions, and counting
        </div>
    );
}

module.exports = PetitionCount;
