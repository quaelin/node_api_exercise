import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppContext } from './AppContext.js';
import { HomePage } from './HomePage.js';
import { useStore } from './useStore.js';

export function Root() {
    const value = useStore();

    return (
        <AppContext.Provider value={value}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}
