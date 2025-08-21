import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import HomePageView from "./user-public/homepage/pages/HomePageView";
import ArticlesView from "./user-public/article/pages/ArticlesView";
import ArticlePreviewDemo from "./test/ArticlePreviewDemo";
import Footer from "./shared/Components/Navigation/Footer/Footer";
import NavbarDarker from "./shared/Components/Navigation/NavBar/NavBarDarker";
import WhatsAppFloat from "./shared/Components/ExternalLinks/WhatsAppFloat";

let routes = (
    <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/categories" element={<ArticlesView />} />
        <Route path="/preview-demo" element={<ArticlePreviewDemo />} />
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
