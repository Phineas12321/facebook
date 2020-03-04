import React from 'react'
import Header from '../header/Header'
import Friends from '../friends/Friends'
import OnePost from '../onePost/OnePost'

function AllPosts(props){
    return(
        <div>
            <section>
                <Header/>
                <div>
                    <img alt='profile pic'/>
                    <button>make a post</button>
                </div>
            </section>
            <section>
                <Friends/>
            </section>
            <section>
                <OnePost/>
            </section>
        </div>
    )
}

export default AllPosts