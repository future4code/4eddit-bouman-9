import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../img/4eddit.png';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router';

const HeaderContainer = styled.div`
  background-color: #E6B89C;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const Logo = styled.img`
  height: 100px;
`;

const LinksContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
`;

const StyledButton = styled(Button)`
  color: white;
`;

function Header(props) {
  const onClickToLogout = () => {
    props.goToLoginPage()
    window.localStorage.clear()
  }
  return (
    <HeaderContainer>
      <Logo src={LogoImg} />
      <LinksContainer>
        <StyledButton onClick={props.goToFeedPage}>Feed</StyledButton>
        <StyledButton onClick={onClickToLogout} >Logout</StyledButton>
      </LinksContainer>
    </HeaderContainer>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    goToFeedPage: () => dispatch(push(routes.feed)),
    goToLoginPage: () => dispatch(push(routes.root))
  }
}

export default connect(null, mapDispatchToProps)(Header);