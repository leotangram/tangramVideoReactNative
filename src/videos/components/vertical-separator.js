import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default function VerticalSeparator(props) {
  return (
    <View style={[
      styles.separator,
      {
        borderTopColor: (props.color) ? props.color : '#eaeaea'
      }
    ]}>
      <Text>Esto es un separador</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1
  }
})