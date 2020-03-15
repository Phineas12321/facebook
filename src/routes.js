import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AddPost from './components/addPost/AddPost'
import Friends from './components/friends/Friends'
import Login from './components/login/Login'
import AllPosts from './components/allPosts/AllPosts'
import Other from './components/other/Other'

export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/home' component={AllPosts}/>
        <Route path='/post' component={AddPost}/>
        <Route path='/friends' component={Friends}/>
        <Route path='/other' component={Other}/>
    </Switch>
)