import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"

function Layout() {

    return (
        <section className=" bg-gradient-to-b from-[#15161a] to-[#23272F] w-full h-[100vh] overflow-hidden">
            <Nav />
            <section className="mt-[1.2rem] p-3">
                <Outlet />
            </section>
        </section>
    )
}

export default Layout