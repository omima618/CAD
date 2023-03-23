import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Footer from './components/shared/footer/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';



function App() {
    return (
        <>
            <Router>
                <main>
                    <Routes>
                        <Route
                            path='/'
                            element={<Home />}
                        />
                        <Route
                            path='*'
                            element={<NotFound />}
                        />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
