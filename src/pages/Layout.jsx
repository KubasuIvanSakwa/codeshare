import { Outlet } from "react-router-dom"

function Layout() {

    return (
        <section>
        layout
        <header>Header</header>
            <Outlet />
        </section>
    )
}

export default Layout