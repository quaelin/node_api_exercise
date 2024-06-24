const { useEffect, useState } = require('react');

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
            {petitions.map((petition, index) => {
                return (
                    <section key={index}>
                        <h2>{petition.title}</h2>
                    </section>
                );
            })}
        </>
    );
}

module.exports = Petitions;
