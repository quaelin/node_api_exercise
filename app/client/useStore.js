import { useMemo, useState } from 'react';

export function useStore() {
    const [petitions, setPetitions] = useState([]);

    const store = useMemo(() => ({ petitions, setPetitions }), [petitions]);

    return store;
}
