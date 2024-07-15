function Petition({ petition }) {
    return (
        <section>
            <h2>{petition.title}</h2>
            <p>{petition.body}</p>
        </section>
    );
}

module.exports = Petition;
