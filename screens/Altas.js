import { Text, View, TextInput } from 'react-native'
import React, { Component } from 'react'

export default class Altas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nombre:"",
            Codigo:"",
            Tarea:"",
            URLi:"",
        };
        xhttp.open('GET', "https://ppi-project.000webhostapp.com/Altas.phphttps://ppi-project.000webhostapp.com/Altas.php?nombre=" + this.state.nombre + "&codigo=218026031&tarea=Administrador_de_Servidores&imagenurl=https://ozgrozer.github.io/100k-faces/0/6/006850.jpg", true);
        xhttp.send();
    }
    render() {
        return (
            <View>
                <Text>Nombre</Text>
                <TextInput
                />
                <Text>Codigo</Text>
                <TextInput
                />
                <Text>Tarea</Text>
                <TextInput
                />
                <Text>Imagen</Text>
                <TextInput
                />
            </View>
        )
    }
}