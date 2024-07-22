import { PetitionsStats } from './PetitionsStats.js';
import { Petitions } from './Petitions.js';

export function HomePage() {
    return (
        <section>
            <PetitionsStats />
            <Petitions />
        </section>
    );
}
