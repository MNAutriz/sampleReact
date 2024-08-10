import Footer from "./Footer";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = ({search, setSearch, handleSearching, width}) => {
    return(
        <>
            <Header />
            <NavigationBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;
