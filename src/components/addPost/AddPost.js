import React, {useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './addPost.scss'
  
function AddPost(props){

    const [post, setPost] = useState('')

    let handleInput=(e)=>{
        setPost(e.target.value)
    }

    let handleGetPosts=()=>{
        axios.get(`/api/posts/${props.user.user_id}`).then(res=>{
            props.setState({posts: res.data})
        }).catch(err => console.log(`this is one crazy error  ${err}`))
    }

    let createPost=()=>{
        axios.post('/api/posts', {post_content: post, user_id: props.user.user_id}).then(()=>{
            
            handleGetPosts()
        }).catch(err => console.log(`what's this?  An error!  ${err}`))
    }

    return(
        <div>
            <section className='add-top'>
                <h1>Create post</h1>
                <Link to='/home'><button className='add-top-button' onClick={createPost}>post</button></Link>
            </section>
            <section className='add-mid'>
                <div className='add-mid-pic'></div>
                <h1>{`${props.user.first_name} ${props.user.last_name}`}</h1>
            </section>
            <section className='add-bottom'>
                <textarea className='add-input' placeholder="What's on your mind?" onChange={handleInput} />
            </section>
            
        </div>
    )
}

const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {user}
}

export default connect(mapStateToProps)(AddPost)