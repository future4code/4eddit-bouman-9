import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {routes} from "../Router/index"
/* import PostCard from   '../PostCard' */
import TextField from '@material-ui/core/TextField';

const FeedWrapper = styled.div`
  width: 100%;
  height: 70vh;
  gap: 30px;
  place-content: top;
  justify-items: center;
  justify-content:center;
  display: flex;
  margin-top:30px;
`;

const CreatePostContainer = styled.form`
    background-color:rgb(255, 255, 255);
    border-radius: 4px;
    border: 1px solid rgb(204, 204, 204);
    height:130px;
    width:500px;
    display: flex;
   /*  margin-bottom: 16px; */
    padding: 8px;
    
`;




const PostContainer = styled.div`

`;



class FeedPage extends Component {
  render() {
    return (
      <FeedWrapper>
          <CreatePostContainer>
              <TextField
                 placeholder="Create Post"
                 multiline
                 rows="5"
                 variant="standard"
                 fullWidth
              />
              <Button type="submit" style={{ marginLeft:"20px"}} >Post!</Button>   
          </CreatePostContainer>
          <PostContainer>
           {/*  <PostCard>

            </PostCard> */}
          </PostContainer>
      </FeedWrapper>
    );
  }
}


function mapToDispatch(dispatch) {
  return{
    goToPage: () => dispatch(push(routes.signup)),
  }
}

export default connect(
  null,
  mapToDispatch)(FeedPage);
