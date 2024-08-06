import Footer from "./Footer";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = ({search, setSearch, handleSearching}) => {
    return(
        <>
            <Header />
            <NavigationBar search={search} setSearch={setSearch} handleSearching={handleSearching}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;
