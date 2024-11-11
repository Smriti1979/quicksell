import React, {useState} from 'react';
import './Header.css';
import Display from '../../assets/Display.svg';


function Header({grouping, sorting, setGrouping, setSorting}){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className = "header">
        
        
            <button className='display-button' onClick={()=>setIsOpen(!isOpen)}>
             <img src={Display} alt="Display Icon"/><span>Display</span>
            </button>

            {
                isOpen && (
                    <div className = "dropdown-menu">
                        <div className="dropdown-item">
                            <span>Grouping</span>
                            <select value={grouping}
                            onChange={(e)=> setGrouping(e.target.value)}>
                                <option value="status">None</option>
                                <option value="user">Category</option>
                                <option value="priority">Priority</option>
                            </select>
                        </div>

                        <div className ="dopdown-menu">
                            <span>Ordering</span>
                            <select value={sorting}
                            onChange={(e)=>setSorting(e.target.value)}>
                                <option value="priority">Priority</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default Header;