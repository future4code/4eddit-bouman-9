import React from 'react';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { postVoteComment } from '../../actions/posts'

const VoteContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const VotesNumber = styled.p`
  margin: 0 8px;
`;

const StyledArrowDownward = styled(ArrowDownward)`
  color: ${props => {
    if (props.voteColor === -1) { //demorando muito para mudar de cor, a api pode demorar, mas a cor deveria ser mais rapido
      return 'red'
    } else {
      return 'black'
    }
  }};
`;

const StyledArrowUpward = styled(ArrowUpward)`
  color: ${props => {
    if (props.voteColor === 1) {
      return 'green'
    } else {
      return 'black'
    }
  }};
`;

class VoteComment extends React.Component {
  toVoteDown(idPost,idComment,direction) {
    if (direction === -1) { 
      this.props.voteInPost(idPost,idComment, 0)
    } else {
      this.props.voteInPost(idPost,idComment, -1)
    }
  }

  toVoteUp(idPost, idComment, direction) {
    if (direction === 1) { 
      this.props.voteInPost(idPost,idComment, 0)
    } else {
      this.props.voteInPost(idPost,idComment, 1)
    }
  }

  render() {
    return (
      <VoteContainer>
        <StyledArrowDownward
          voteColor={this.props.voteDirection}
          onClick={() => this.toVoteDown(this.props.idPost,this.props.idComment, this.props.voteDirection)}
        />
        <VotesNumber>{this.props.votes}</VotesNumber>
        <StyledArrowUpward
          voteColor={this.props.voteDirection}
          onClick={() => this.toVoteUp(this.props.idPost,this.props.idComment, this.props.voteDirection)}
        />
      </VoteContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    voteInPost: (idPost,idComment, direction) => dispatch(postVoteComment(idPost,idComment, direction))
  }
}

export default connect(null, mapDispatchToProps)(VoteComment);