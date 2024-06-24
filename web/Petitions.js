const { useEffect, useState } = require('react');
const { slug } = require('./slug');

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
                    <section key={index} id={slug(petition)}>
                        <h2>{petition.title}</h2>
                        <p>{petition.body}</p>
                    </section>
                );
            })}
        </>
    );
}

module.exports = Petitions;
