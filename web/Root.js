const PetitionCount = require('./PetitionCount');

function Root() {
    return (
        <section>
            <section>
                <h1>Welcome</h1>
                <PetitionCount />
            </section>
            <section>
                <h1>What is happening</h1>
                <section>
                    <h2>We need that</h2>
                </section>
            </section>
        </section>
    );
}

module.exports = Root;
