import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class Id extends Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.text}>
            {this.props.route.params.Nombre}
          </Text>
        </View>

        <View>
          <Text style={styles.text}>
            {this.props.route.params.Codigo}
          </Text>
        </View>

        <Image style={styles.imagen} source={ {uri : this.props.route.params.Imagen} } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imagen: {
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  },
})