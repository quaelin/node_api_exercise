const { Routes, Route, BrowserRouter } = require('react-router-dom');
const { AppContext } = require('./AppContext.js');
const HomePage = require('./HomePage');
const { useStore } = require('./useStore');

function Root() {
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

module.exports = Root;
