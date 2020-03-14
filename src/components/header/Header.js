import React from 'react'
import {logout} from '../../redux/reducer'
import {Link} from 'react-router-dom'
import './header.scss'

function Header(props){
    return(
        <div className='header-all'>
            <section className='header-top'>
                <h3>facebook or whatever</h3>
                <Link to='/' >
                    <button onClick={()=>logout()} >logout</button>
                </Link>
            </section>
            
            <section className='header-bottom'>
                <Link to='/home' ><button>home</button></Link>
                <button>friends</button>
                <button>
                    Search Users
                </button>
            </section>
        </div>
    )
}
  
export default Header