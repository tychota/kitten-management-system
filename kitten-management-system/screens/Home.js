import React, { Component } from 'react';
import { Text, ScrollView, Image, View, Dimensions, StatusBar } from 'react-native';
import KittenCard from 'kitten-management-system/components/KittenCard';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {

    if (this.props.data.loading) return null;
    console.log(this.props.data);
    return (
      <ScrollView style={{ flex: 1}} contentContainerStyle={{alignItems: 'stretch'}}>
        <StatusBar hidden={true} />
        {this.props.data.allKittens.map(kitten => (
          <KittenCard kitten={kitten} key={kitten.id} />
        ))}
      </ScrollView>
    );
  }
}

const query = gql`
  query {
    allKittens {
      id
      name
      profilePicture {
        url
      }
    }
  }
`;


export default graphql(query)(HomeScreen);
