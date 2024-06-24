function PetitionCount({ petitions }) {
    return (
        <div id="petitions-count">
            Already {petitions.length} petitions, and counting
        </div>
    );
}

module.exports = PetitionCount;
