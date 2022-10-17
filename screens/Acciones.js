import { Text, View, Button,StyleSheet } from 'react-native'
import React, { Component } from 'react'


export default class Acciones extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30, textAlign: 'center' }}>
                    Bienvenido
                </Text>
                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                    {this.props.route.params.nombre}
                </Text>
                <View style={styles.btn}>
                    <Button color={'lightblue'} title="Altas" onPress={() => {this.props.navigation.navigate("Altas")}}></Button>
                </View>
                <View style={styles.btn}>
                    <Button color={'lightblue'} title="Bajas"></Button>
                </View>
                
                <View style={styles.btn}>
                    <Button color={'lightblue'} title="Cambios"></Button>
                </View>
                <View style={styles.btn}>
                    <Button color={'lightblue'} title="Lista" onPress={() => { this.props.navigation.navigate("Menú de Estudiante", { nombre: this.props.route.params.nombre }) }}></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn:{
        marginTop: 40,
        width: 300,
        height: 40,
        marginLeft: 58
    }
})