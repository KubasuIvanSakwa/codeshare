import Card from "./Card"
import Search from "./Search"
import projects from '../../public/projects.js'
import { useNavigate } from 'react-router-dom';
import { auth, signOut } from '../../firebase-config.js';

function MarketPlace() {
    const navigate = useNavigate();
    const handleSignOut = async () => {
        try {
          await signOut(auth);
          navigate('/');
        } catch (error) {
          console.error('Sign Out failed:', error);
        }
      };
    const data = projects
    const arrFromObj = Object.getOwnPropertyNames(data);


    return (
        <section className="relative h-fit overflow-y-hidden w-full flex flex-col gap-2">
            <button className="text-white border border-white rounded-md fixed top-5 left-5 px-4 py-1" onClick={handleSignOut}>Sign Out</button>
            <Search />
            <section className="pl-[5rem] h-[29rem] scroll-smooth overflow-x-hidden flex flex-wrap gap-4 overflow-y-scroll p-2">
            {data.map((pr, key) => (
                <Card 
                key={key} name={pr.contributorName} project={pr.name} descritpion={pr.description}/>        
            ))}
            </section>
        </section>
    )
}

export default MarketPlace