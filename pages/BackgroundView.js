import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
} from 'react-native';

const remote = 'http://mybestphonewallpapers.com/download/albert-einstein-3258.jpg';

export default class BackgroundView extends Component {
  render() {
    const resizeMode = 'center';
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode,
              opacity:0.1
            }}
            source={{ uri: remote }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          {this.props.children}
        </View>
      </View>
    );
  }
}