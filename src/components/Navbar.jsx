import { Link } from "react-router-dom";

const Navbar = () =>{

    const navs = [
        {id:'1',name:'Home',link:'/'},
        {id:'2',name:'About',link:'/about'},
        {id:'3',name:'Wallet',link:'/wallet'},
    ];

    const NavItem = ({id,navName,link})=>{
        return (
            <li className="basis-1/8" key={id}><Link  className="rounded-lg bg-blue-100 text-lg text-black  px-3 py-1 hover:bg-white" to={link}>{navName}</Link></li>
        );
    };

    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-300 sticky top-0 p-4 w-full shadow">
            <ul className="flex flex-row gap-x-4">
            <li key="0"><h1 className="text-2xl text-slate-500">Tailed-Rx</h1></li>    
                
                { navs.map((item) => 
                    (
                        <NavItem id={item.id} navName={item.name} link={item.link} />
                    ) )
                }
                
            </ul>
        </div>
    );
};

export default Navbar;