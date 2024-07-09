const { useState, useEffect } = require('react');
const Petition = require('./Petition');

function Petitions() {
    const [petitions, setPetitions] = useState([]);

    useEffect(() => {
        fetch('/petitions')
            .then((response) => response.json())
            .then((data) => {
                setPetitions(data);
            });
    }, []);

    return (
        <>
            {petitions.map((petition, index) => (
                <Petition key={index} petition={petition} />
            ))}
        </>
    );
}

module.exports = Petitions;
