import React, {Component} from 'react'
import { Button, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';

const backgroundColor = '#964f8e'
export default class HomeComponent extends Component {
  static navigationOptions  = ({ navigation }) => {
    const { params = {} } = navigation.state
    let tabBarLabel = 'Cloud'
    let tabBarIcon = () => (
      <Icon
        name='cloud-upload'
        size={32}
        color={backgroundColor}
      />
    )
    return { tabBarLabel, tabBarIcon}
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white'}}>
          Cloud Component
        </Text>
      </View>
    )
  }
}