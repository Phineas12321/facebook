import React from 'react'
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
                <button>logout</button>
            </section>
        </div>
    )
}

export default Header