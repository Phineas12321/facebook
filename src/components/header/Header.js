import React from 'react'
import {logout} from '../../redux/reducer'
import {Link} from 'react-router-dom'
import './header.scss'

function Header(props){
    return(
        <div>
            <section className='header-top'>
                <h1>facebook or whatever</h1>
                <button>
                    Search Users
                </button>
            </section>
            <section className='header-bottom'>
                <button>home</button>
                <button>friends</button>
                <Link to='/' ><button onClick={()=>logout()} >logout</button>
                </Link>
            </section>
        </div>
    )
}

export default Header