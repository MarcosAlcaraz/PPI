import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export default class Altas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nombre: "",
            Codigo: "",
            Tarea: "",
            URLi: "",
        };
    }
    render() {
        const alta = () => {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    if(xhttp.responseText === "1") {
                        console.log("Exito");
                        window.alert("Usuario Dado de Alta");
                    } else {
                        console.log("Error");
                        window.alert("No ha sido posible dar de Alta al Usuario");
                    }
                }
            };
            xhttp.open("GET", "https://ppi-project.000webhostapp.com/Altas.php?nombre=" + this.state.Nombre + "&codigo=" + this.state.Codigo + "&tarea=" + this.state.Tarea + "&imagenurl=" + this.state.URLi, true);
            xhttp.send();
        }
        return (
            <View>
                <Text style={(styles.text)}>Nombre</Text>
                <TextInput style={(styles.textinput)}
                onChangeText={Nombre => this.setState({Nombre})}
                />
                <Text style={(styles.text)}>Codigo</Text>
                <TextInput style={(styles.textinput)}
                onChangeText={Codigo => this.setState({Codigo})}
                />
                <Text style={(styles.text)}>Tarea</Text>
                <TextInput style={(styles.textinput)}
                onChangeText={Tarea => this.setState({Tarea})}
                />
                <Text style={(styles.text)}>URL Imagen</Text>
                <TextInput style={(styles.textinput)}
                onChangeText={URLi => this.setState({URLi})}
                />
                <View style={(styles.btn)}>
                    <Button title="Guardar" onPress={alta}></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        textAlign: 'center',
        fontSize: 20,
    },

    textinput:{
        borderWidth: 1,
        width: 256,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 40,
    },

    btn: {
        width: 150,
        alignSelf: 'center',
    }
})