import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index";
import PostCard from   '../PostCard';
import TextField from '@material-ui/core/TextField';
import { getAllPosts, createNewPost } from '../../actions/posts'

const FeedWrapper = styled.div`
  width: 100%;
  height: 70vh;
  gap: 30px;
  place-content: top;
  justify-items: center;
  align-items:center;
  display: flex;
  flex-direction: column;
  margin-top:30px;
`;

const CreatePostContainer = styled.form`
  background-color:rgb(255, 255, 255);
  border-radius: 4px;
  border: 1px solid rgb(204, 204, 204);
  width: 500px;
  display: flex;
  margin-bottom: 30px;
  padding: 8px;
`;

const PostContainer = styled.div`
  width:500px;
`;

class FeedPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      postText: ''
    }
  }

  componentDidMount() {
    this.props.getPostList()
  }

  handleFieldChange = e => {
    const { name, value } = e.target;
      console.log(name, value)
    this.setState({ [name]: value })
  };

  handleOnSubmit = event => {
    event.preventDefault();
    if (this.state.title !== '' && this.state.postText !== '') {
      const post = {
        text: this.state.postText,
        title: this.state.title
      }
      this.props.createPost(post)
      this.setState({ postText: '', title: '' })
    }
  };

  render() {
    console.log(this.props.listOfPosts.length)
    return (
      <FeedWrapper>
          <CreatePostContainer onSubmit={this.handleOnSubmit}>
            <div>
            <TextField
                name="title"
                 placeholder="Post title"
                 variant="standard"
                 fullWidth
                 value={this.state.title}
                 onChange={this.handleFieldChange}
              />
              <TextField
                name="postText"
                 placeholder="Create Post"
                 multiline
                //  style={{height:'80px'}}
                 rows="5"
                 variant="standard"
                 fullWidth
                 onChange={this.handleFieldChange}
                 value={this.state.postText}
              />

            </div>
              <Button type="submit" style={{ marginLeft:"20px"}} >Post!</Button>   
          </CreatePostContainer>
           <PostContainer>
           {this.props.listOfPosts.map( post => (
               <PostCard key={post.id} postData={post} />
            ))}
          </PostContainer>
      </FeedWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    listOfPosts: state.posts.postArr
  }
}

function mapToDispatch(dispatch) {
  return{
    goToPage: () => dispatch(push(routes.signup)),
    getPostList: () => dispatch(getAllPosts()),
    createPost: (postContent) => dispatch(createNewPost(postContent))
  }
}

export default connect(
  mapStateToProps,
  mapToDispatch)(FeedPage);
