import { useState } from "react"
import {Link} from 'react-router-dom'
import './styles.css'

const itens = [
    {
        title: "Dashboard",
        content: [{ title:"Home", route:"/"}]
    },
        {
        title: "Configurações",
        content: [{ title:"configurações", route:"/perfil"}]
    },
        {
        title: "Utilítarios",
        content: [{ title:"configurações", route:"/relatórios"}]
    },
]

export default function Sidebar ({isOpen,closeSidebar }){
    const [openIndex, setOpenIndex] = useState (null); 
    const handleggleItem = (index)=>{
        setOpenIndex ((prev) =>
    (prev === index ? null:index ));
    }
        return (
        <aside className={`sidebar ${isOpen ? "sidebar-open" :""}`}>
            <nav className='sidebar-nav'>
                {
                    itens.map((item,index) => (
                        <div className='accordion-iten' key={item.title} >
                            <button className='accordion-header'
                            onClick={()=>handleggleItem (index)}
                            >
                             <span>{item.title}</span>
                             <span>{openIndex === index ? "-" : "+"}</span>
                            </button>
                            {
                                openIndex === index && (
                                    <ul className= 'accordion-content'>
                                        {
                                            item.content.map ((subItem)=> (
                                                <li key={subItem.title}>
                                                    <Link to = {subItem.route}
                                                        className='accordion-link'
                                                     onClick={closeSidebar}>
                                                        {subItem.title}
                                                     </Link>
                                                
                                                </li>
                                            ))
                                        }
                                    </ul>

                                )
                            }
                        </div>
                    ))
                }
            </nav>
        </aside>
    )
}