import React from 'react'
import Header from '../header/Header'
import Friends from '../friends/Friends'
import OnePost from '../onePost/OnePost'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'

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
                    <div>
                        <img alt='profile pic'/>
                        <Link to='/post'>make a post</Link>
                    </div>
                </section>
                <section>
                    <Friends/>
                </section>
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