import React, { Component } from 'react';
import { Text } from 'react-native';  

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

export default HomeScreen;
