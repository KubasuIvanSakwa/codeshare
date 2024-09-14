import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"

function Layout() {

    return (
        <section className=" bg-gradient-to-b from-[#15161a] to-[#23272F] w-full h-[100vh] overflow-hidden">
            <Nav />
            <section className="mt-[0.1rem] p-1">
                <Outlet />
            </section>
        </section>
    )
}

export default Layout