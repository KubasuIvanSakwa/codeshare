import Card from "./Card"
import Search from "./Search"
import projects from '../../public/projects.js'


function MarketPlace() {
    const data = projects
    const arrFromObj = Object.getOwnPropertyNames(data);


    return (
        <section className="relative h-fit overflow-y-hidden w-full flex flex-col gap-2">
            <Search />
            <section className="pl-[5rem] h-[29rem] scroll-smooth overflow-x-hidden flex flex-wrap gap-4 overflow-y-scroll p-2">
            {data.map((pr, key) => (
                <Card 
                    key={key} name={pr.contributorName} project={pr.name} descritpion={pr.description}
                />        
            ))}
            </section>
        </section>
    )
}

export default MarketPlace