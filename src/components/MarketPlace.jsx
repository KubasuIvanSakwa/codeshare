import { Link } from "react-router-dom"
import Card from "./Card"
import Search from "./Search"

function MarketPlace() {

    return (
        <section className="relative bg-white h-fit overflow-y-hidden w-full flex flex-col gap-2">
            <Search />
            <section className="pl-[5rem] bg-blue-400 h-[29rem] scroll-smooth overflow-x-hidden flex flex-wrap gap-4 overflow-y-scroll p-2">
                <Card />
                <Card />
                <Card />
            </section>
            <section className="absolute h-[28rem] p-2 border-black shadow-lg border-l border-t border-b rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl w-[30%] bg-white right-0 top-[5.6rem]">
                <h1>Title</h1>
                picture
                <Link>Explore code</Link>
                decription
                user
                x
            </section>
        </section>
    )
}

export default MarketPlace