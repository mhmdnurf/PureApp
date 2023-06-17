import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Profile() {
  return (
    <View>
      <Icon.Button name="facebook" backgroundColor="#3b5998">
        <Text style={{fontFamily: 'Arial', fontSize: 15}}>
          Login with Facebook
        </Text>
      </Icon.Button>
    </View>
  );
}
