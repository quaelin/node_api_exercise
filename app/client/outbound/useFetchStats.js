import { useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';

export function useFetchStats() {
    const { setPetitionsCount } = useContext(AppContext);

    const fetchStats = () => {
        fetch('/petitions-stats')
            .then((response) => response.json())
            .then(({ count }) => {
                setPetitionsCount(count);
            });
    };

    useEffect(() => {
        fetchStats();
    }, []);
}
