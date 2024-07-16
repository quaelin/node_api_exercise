import { useContext } from 'react';
import { AppContext } from './AppContext.js';
import { useFetchStats } from './outbound/useFetchStats.js';

export function PetitionsStats() {
    const { petitionsCount } = useContext(AppContext);

    useFetchStats();

    return (
        <section>
            <h1>Welcome</h1>
            <div id="petitions-count">
                Already {petitionsCount} petitions, and counting
            </div>
        </section>
    );
}
