import React from 'react'
import './onePost.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class OnePost extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        this.getPost()
      }
    
      getPost = () => {
          console.log(this.props)
        const { post_id } = this.props.post
        axios
          .get(`/api/post/${post_id}`)
          .then(res => {
            this.setState({ post: this.props.post })
          })
          .catch(err => console.log(err))
      }

    render(){

        return(
            <div>

                <section className='post'>
                    <div className='post-top'>
                        <div className='post-pic'></div>
                        <p>
                            {this.props.post.first_name}
                        </p>
                    </div>
                    <p className='post-content'>
                        {this.props.post.post_content}
                    </p>
                </section>
                <section className='filler'></section>
            </div>
        )
    }
    
}

const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {user}
}

export default withRouter(connect(mapStateToProps)(OnePost))