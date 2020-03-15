import React from 'react'
import {logout} from '../../redux/reducer'
import {Link} from 'react-router-dom'
import './header.scss'

function Header(props){
    return(
        <div className='header-all'>
            <section className='header-top'>
                <h3>fb or whatever</h3>
                <Link to='/' >
                    <button onClick={()=>logout()} >logout</button>
                </Link>
            </section>
            
            <section className='header-bottom'>
                <Link to='/home' ><button>home</button></Link>
                <Link to='/other'><button>other</button></Link>
                <button>
                    Search Users
                </button>
            </section>
        </div>
    )
}
  
export default Header