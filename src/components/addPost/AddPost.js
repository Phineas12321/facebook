import React, {useState} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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
        axios.post('/api/posts', {post: post}).then(()=>{
            handleGetPosts()
        }).catch(err => console.log(`what's this?  An error!  ${err}`))
    }

    return(
        <div>
            <section>
                <h1>Create post</h1>
                <Link to='/home' onClick={createPost} >post</Link>
            </section>
            <section>
                <img  alt='profile pic'/>
                <h1>{`${props.first_name} ${props.last_name}`}</h1>
            </section>
            <input placeholder="What's on your mind?" onChange={handleInput} />
        </div>
    )
}

const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {user}
}

export default connect(mapStateToProps)(AddPost)