import React from 'react'
import Header from '../header/Header'
import Friends from '../friends/Friends'
import OnePost from '../onePost/OnePost'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import './allPosts.scss'

class AllPosts extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        this.handleGetPosts()
    }

    handleGetPosts=()=>{
        axios.get('/api/posts').then(res=>{
            this.setState({posts: res.data})
        }).catch(err => console.log(`oh no!  ${err}`))
    }

    render(){
        const mappedPosts = this.state.posts.map((e, i)=>{
            return(
                <OnePost
                    key = {i}
                    post = {e}
                />
            )
        })

        return(
            <div>
                <section>
                    <Header/>
                    <div className='allposts-top'>
                        <img alt='profile pic' className='allposts-top-pic' />
                        <Link to='/post'><button className='allposts-top-button' >What's on your mind?</button></Link>
                    </div>
                </section>
                <section className='filler'></section>
                <section className='allposts-friends'>
                    <div className='allposts-friends-in'>
                        <Friends/>
                        <Friends/>
                        <Friends/>
                        <Friends/>
                        <Friends/>
                        <Friends/>
                        <Friends/>
                        <Friends/>
                    </div>
                    
                </section>
                <section className='filler'></section>
                <section>
                    {mappedPosts}
                </section>
            </div>
        )
    }
        
    
}

const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {user}
}

export default connect(mapStateToProps)(AllPosts)