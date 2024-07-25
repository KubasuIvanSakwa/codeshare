import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"

function Layout() {

    return (
        <section className="bg-[#23272F] w-full h-[100vh]">
            <Nav />
            <section className="mt-[1.2rem] p-3">
                <Outlet />
            </section>
        </section>
    )
}

export default Layout