import React from 'react'
import './onePost.scss'
import {connect} from 'react-redux'

function OnePost(props){
    return(
        <div>
            <section className='post'>
                <div className='post-top'>
                    <img className='post-pic' alt='profile pic' />
                    <p>
                        {props.user.first_name}
                    </p>
                </div>
                <p className='post-content'>
                    {props.post.post_content}
                </p>
            </section>
            <section className='filler'></section>
        </div>
    )
}

const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {user}
}

export default connect(mapStateToProps)(OnePost)