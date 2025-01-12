import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import FlightDetailsPage from './pages/FlightDetailsPage';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            
<Route path="/flight/:flightId" element={<FlightDetailsPage />} />

        </Routes>
    </Router>
);

export default AppRouter;