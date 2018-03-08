import React, {Component} from 'react'
import { Button, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';

const backgroundColor = '#007256'
export default class HomeComponent extends Component {
  static navigationOptions  = ({ navigation }) => {
    const { params = {} } = navigation.state
    let tabBarLabel = 'Info'
    let tabBarIcon = () => (
      <Icon
        name='info'
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
          Info Component
        </Text>
        <Button
          title='Back'
          onPress={() => {
            this.props.navigation.goBack()
          }}
        />
      </View>
    )
  }
}