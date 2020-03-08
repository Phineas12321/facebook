import React from 'react'

function OnePost(props){
    return(
        <div>
            <section>
                <img alt='profile pic' />
                <p>
                    your name
                </p>
            </section>
            <p>
                {console.log(props)}
                {props.post.post_content}
            </p>
        </div>
    )
}

export default OnePost