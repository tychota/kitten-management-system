import React, { Component } from 'react';
import Header from 'react-navigation/src/views/Header';
import { Text, View, TextInput, Button, AsyncStorage } from 'react-native';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  };
  state = {
    email: '',
    password: '',
  }

  onPressLogin = async () => {
    try {
      const { data } = await this.props.createUser({ 
        variables: { 
          email: this.state.email, 
          password: this.state.password, 
        } 
      });
    } catch(e) {
      console.log(e);
    }
    try {
      const { data } = await this.props.login({ 
        variables: { 
          email: this.state.email, 
          password: this.state.password, 
        } 
      });
      console.log(data)
      await AsyncStorage.setItem('token', data.signinUser.token);
      this.props.navigation.navigate('Home');
    } catch(e) {
      console.log(e)
      alert('there was an error sending the query', e);
    }  
  }

  render() {
    return (
      <View 
        style={{ 
          flex: 1, 
          justifyContent: 'flex-start', 
          alignItems: 'stretch', 
          padding: 15,
          paddingTop: 50,
        }}
      >
        <Text 
          style={{
            paddingHorizontal: 5,
            fontSize: 16,
            color: '#888888',
            marginBottom: 5,
          }}>
          Email
        </Text>
        <TextInput 
          underlineColorAndroid="transparent"
          style={{
            height: 45,
            alignSelf: 'stretch',
            paddingVertical: 7,
            paddingHorizontal: 5,
            fontSize: 16,
            color: '#444444',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderColor: '#ababab',
            borderWidth: 1,
            marginBottom: 15
          }}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <Text 
          style={{
            paddingHorizontal: 5,
            fontSize: 16,
            color: '#888888',
            marginBottom: 5,
          }}>
          Password
        </Text>
        <TextInput 
          underlineColorAndroid="transparent"
          style={{
            height: 45,
            alignSelf: 'stretch',
            paddingVertical: 7,
            paddingHorizontal: 5,
            fontSize: 16,
            color: '#444444',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderColor: '#ababab',
            borderWidth: 1,
            marginBottom: 15
          }}
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <Button
          onPress={this.onPressLogin}
          title="Login"
          color="#888888"
          accessibilityLabel="Login to see nice kittens"
        />
      </View>
    );
  }
}

const createUser = gql`
  mutation ($email: String!, $password: String!) {
    createUser(authProvider: {email: {email: $email, password: $password}}) {
      id
    }
  }
`


const login = gql`
  mutation ($email: String!, $password: String!) {
    signinUser(email: {email: $email, password: $password}) {
      token
    }
  }
`;

export default compose(
  graphql(createUser, {props: ({mutate})=> ({createUser: mutate})}),
  graphql(login, {props: ({mutate})=> ({login: mutate})}),
)(LoginScreen);
