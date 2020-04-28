import React from 'react';
import styled from 'styled-components';
import './App.css';

// Amplify
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const Outer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
  background-color: #dedede;
`;

const Inner = styled.div`
  display: grid;
  margin: 0 auto;
  width: 720px;
  height: calc(100vh - 80px);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const App = () => {
  return (
    <Outer>
      <Inner>
        <AmplifySignOut />
        <h2>Hello from demo branch!</h2>
      </Inner>
    </Outer>
  );
};

export default withAuthenticator(App);
