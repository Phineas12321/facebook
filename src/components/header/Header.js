import React from 'react'

function Header(props){
    return(
        <div>
            <section>
                <h1>facebook or whatever</h1>
                <button>
                    Search Users
                </button>
            </section>
            <section>
                <button>home</button>
                <button>friends</button>
                <button>logout</button>
            </section>
        </div>
    )
}

export default Header