import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AppContext } from './store/AppContext.js';
import { useStore } from './store/useStore.js';
import { HomePage } from './HomePage.js';

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
