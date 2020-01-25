import React from 'react';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { postVote } from '../../actions/posts'

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
    if (props.voteColor === -1) {
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

class VoteComponent extends React.Component {

  toVoteDown(id, direction) {
    if (direction === -1) { 
      this.props.voteInPost(id, 0)
    } else {
      this.props.voteInPost(id, -1)
    }
  }

  toVoteUp(id, direction) {
    if (direction === 1) { 
      this.props.voteInPost(id, 0)
    } else {
      this.props.voteInPost(id, 1)
    }
  }

  render() {
    return (
      <VoteContainer>
        <StyledArrowDownward
          voteColor={this.props.voteDirection}
          onClick={() => this.toVoteDown(this.props.id, this.props.voteDirection)}
        />
        <VotesNumber>{this.props.votes}</VotesNumber>
        <StyledArrowUpward
          voteColor={this.props.voteDirection}
          onClick={() => this.toVoteUp(this.props.id, this.props.voteDirection)}
        />
      </VoteContainer>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    voteInPost: (id, direction) => dispatch(postVote(id, direction))
  }
}

export default connect(null, mapDispatchToProps)(VoteComponent);