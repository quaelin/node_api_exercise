const { slug } = require('./slug');

function Petition({ petition }) {
    return (
        <section data-testid={slug(petition)}>
            <h2>{petition.title}</h2>
            <p>{petition.body}</p>
        </section>
    );
}

module.exports = Petition;
