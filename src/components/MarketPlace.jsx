import Card from "./Card"
import Search from "./Search"
import projects from '../../public/projects.js'


function MarketPlace() {
    const data = projects
    const arrFromObj = Object.getOwnPropertyNames(data);


    return (
        <section className="p-1 border relative h-fit overflow-y-hidden w-full flex flex-col gap-2">
            <Search />
            <section className="bg-red-400 lg:ml-[10rem] mr-[10rem] border h-[29rem] scroll-smooth overflow-x-hidden flex flex-wrap gap-4 overflow-y-scroll p-2">
                <section className="bg-yellow-500 flex h-[18rem] w-full justify-center items-center gap-2">
                    <Card />
                    <Card />
                </section>
                <section className="bg-yellow-500 flex h-[25rem] w-full gap-2 p-2 ">
                    <div className="bg-red-700 h-full w-[70%] rounded-lg">

                    </div>
                    <div className="bg-red-700 flex-1">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                </section>

                <section className="bg-yellow-500 flex flex-col h-[18rem] w-full gap-2 p-1">
                    <div className="w-full bg-white/60 flex justify-between">
                        <h1>Discover More &gt; </h1>
                        <p> &lt; &gt; </p>
                    </div>
                    <div className="w-full bg-red-500">
                        <ul className="flex">
                            <li className="border">11</li>
                            <li className="border">11</li>
                            <li className="border">11</li>
                            <li className="border">11</li>
                        </ul>
                    </div>
                </section>
            {/* {data.map((pr, key) => (
                <Card 
                    key={key} name={pr.contributorName} project={pr.name} descritpion={pr.description}
                />        
            ))} */}

            </section>
        </section>
    )
}

export default MarketPlace