import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ApolloProvider } from 'react-apollo';

import client from './client';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';

const Navigation = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
}, {
  initialRouteName: 'Login'
});

export default class Root extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <Navigation />
      </ApolloProvider>
    );
  }
}
