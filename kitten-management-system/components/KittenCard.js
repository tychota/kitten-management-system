import React, { Component } from 'react';
import { Text, Image, View, Dimensions } from 'react-native';

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
      </View>
    )
  }
}

export default KittenCard;
