import { useContext, useEffect } from 'react';
import { AppContext } from '../AppContext.js';

export function useFetchPetitions() {
    const { setPetitions } = useContext(AppContext);

    const guestFetch = () => {
        fetch('/petitions')
            .then((response) => response.json())
            .then((data) => {
                setPetitions(data);
            });
    };

    useEffect(() => {
        guestFetch();
    }, []);
}
