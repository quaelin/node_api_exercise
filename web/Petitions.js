const { slug } = require('./slug');

function Petitions({ petitions }) {
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
