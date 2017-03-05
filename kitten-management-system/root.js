import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ApolloProvider } from 'react-apollo';

import client from './client';
import HomeScreen from './screens/Home';

const Navigation = StackNavigator({
  Home: { screen: HomeScreen },
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
