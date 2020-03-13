import React from 'react'
import {logout} from '../../redux/reducer'
import {Link} from 'react-router-dom'
import './header.scss'

function Header(props){
    return(
        <div>
            <section className='header-top'>
                <h3>facebook or whatever</h3>
                <Link to='/users'> 
                    <button>
                        Search Users
                    </button>
                </Link>
            </section>
            <section className='header-bottom'>
                <Link to='/home' ><button>home</button></Link>
                <button>friends</button>
                <Link to='/' >
                    <button onClick={()=>logout()} >logout</button>
                </Link>
            </section>
        </div>
    )
}

export default Header