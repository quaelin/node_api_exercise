import { useMemo, useState } from 'react';

export function useStore() {
    const [petitions, setPetitions] = useState([]);
    const [petitionsCount, setPetitionsCount] = useState();

    const store = useMemo(
        () => ({ petitions, setPetitions, petitionsCount, setPetitionsCount }),
        [petitions, petitionsCount]
    );

    return store;
}
