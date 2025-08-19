import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import HomePageView from "./homepage/pages/HomePageView";
import NewsView from "./news/pages/NewsView";
import Footer from "./shared/Components/Navigation/Footer/Footer";
import NavbarDarker from "./shared/Components/Navigation/NavBar/NavBarDarker";
import WhatsAppFloat from "./shared/Components/ExternalLinks/WhatsAppFloat";

let routes = (
    <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/categories" element={<NewsView />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
);

function App() {
    return (
        <Router>
            <NavbarDarker />
            <WhatsAppFloat />

            {routes}

            <Footer />
        </Router>
    );
}

export default App;
