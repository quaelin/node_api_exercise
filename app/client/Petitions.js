import { useContext } from 'react';
import { AppContext } from './AppContext.js';
import { Petition } from './Petition.js';
import { useFetchPetitions } from './outbound/useFetchPetitions.js';

export function Petitions() {
    const { petitions } = useContext(AppContext);

    useFetchPetitions();

    return (
        <section>
            <h1>What is happening</h1>
            {petitions.map((petition, index) => (
                <Petition key={index} petition={petition} />
            ))}
        </section>
    );
}
