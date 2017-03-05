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
    if (this.props.loading) return null;
    console.log(this.props);
    return (
      <ScrollView style={{ flex: 1}} contentContainerStyle={{alignItems: 'stretch'}}>
        <StatusBar hidden={true} />
        {this.props.allKittens.map(kitten => (
          <KittenCard 
            kitten={kitten} 
            key={kitten.id} 
            userId={this.props.userId}
            liked={this.props.kittenLiked.includes(kitten.id)}
          />
        ))}
      </ScrollView>
    );
  }
}

const query = gql`
  {
    allKittens {
      id
      name
      profilePicture {
        url
      }
      _likesMeta {
        count
      }
    }
    user {
      id
      email
      likes {
        kitten {
          id
        }
      }
    }
  }
`;


export default graphql(query, {
    props: ({ data: { loading, allKittens, user } }) => ({
      loading, 
      allKittens,
      userId: user && user.id, 
      kittenLiked : user ? user.likes.map(like => like.kitten.id)   : [],
    })
  }
)(HomeScreen);
