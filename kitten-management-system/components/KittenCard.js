import React, { Component } from 'react';
import { Text, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@exponent/vector-icons';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class KittenCard extends Component {
  state = {
    imageStyle: {
      width: Dimensions.get('window').width,
      height: 9 / 16 * Dimensions.get('window').width,
    },
  };

  updateImageSize() {
    if (!this.props.kitten.profilePicture) {
      return this.setState(
        {
          imageStyle: {
            width: Dimensions.get('window').width,
            height: 9 / 16 * Dimensions.get('window').width,
          },
        }
      );    
    }
    Image.getSize(this.props.kitten.profilePicture.url, (width, height) => {
      this.setState({
        imageStyle: {
          width: Dimensions.get('window').width,
          height: height / width * Dimensions.get('window').width,
        },
      });
    });
  }

  componentWillMount() {
    this.updateImageSize();
  }

  componentWillReceiveProps() {
    this.updateImageSize();
  }

  like = async () => {
    this.props.mutate({
      variables: { 
        kittenId: this.props.kitten.id, 
        userId: this.props.userId 
      },
       refetchQueries: [{
        query: gql`query updateCache {
          user {
            id
            email
            likes {
              kitten {
                id
              }
            }
          }
        }`,
        variables: { repoFullName: 'apollostack/apollo-client' },
      }],
    })
  }

  render() {
    if (!this.props.kitten.profilePicture) return null;
    return (
      <View style={{ flexGrow: 1, ...this.state.imageStyle, marginBottom: 5 }}>
        <Image 
          source={{ uri: this.props.kitten.profilePicture.url }} 
          style={this.state.imageStyle}
          resizeMode="cover" 
        />
        <View style={{
          position: 'absolute', 
          width: this.state.imageStyle.width, 
          bottom: 0, 
          backgroundColor: 'rgba(0, 0, 0, 0.4)'
        }}>
          <Text style={{ 
            color: 'white', 
            fontSize: 16, 
            paddingVertical: 5, 
            textAlign: 'center'
          }}>
            {this.props.kitten.name}
          </Text>
        </View>
        {this.props.userId
        && <TouchableOpacity
          onPress={this.like}
        >
          <View style={{
            position: 'absolute',
            bottom: 5,
            right: 5, 
            height: 45, 
            width: 45, 
            borderRadius: 45,
            borderWidth: 1,
            backgroundColor: this.props.liked ? 'red' : 'white',
            borderColor: this.props.liked ? 'white': 'red',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Ionicons 
              name={this.props.liked ? "ios-heart" : "ios-heart-outline"} 
              size={25}
              color={this.props.liked ? 'white': 'red'}
              style={{ marginTop: 4 }}
            />
          </View>
        </TouchableOpacity>}
      </View>
    )
  }
}

const like = gql`
  mutation ($kittenId: ID!, $userId: ID!) {
    createLike(kittenId: $kittenId, userId: $userId) {
      createdAt
    }
  }
`;

export default graphql(like)(KittenCard);
