import React from 'react'
import './onePost.scss'

function OnePost(props){
    return(
        <div>
            <section className='post'>
                <div className='post-top'>
                    <img className='post-pic' alt='profile pic' />
                    <p>
                        a name
                    </p>
                </div>
                <p className='post-content'>
                    {console.log(props)}
                    {props.post.post_content}
                </p>
            </section>
            <section className='filler'></section>
        </div>
    )
}

export default OnePost