import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native'
import React, { Component } from 'react'

export default class Inicio

  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Mis Variables
      Codigo: "",
      Nip: "",
      res: 0,
    }
  }

  render() {
    // Aquí se programa la APP

    // Se va a programar un método en el area de programación
    const btnsuma = () => {

      let _this = this; //Variable para evitar el error del "this"
      var xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              console.log(xhttp.responseText);

              let cadena = xhttp.responseText;
              const datos = cadena.split(",");

              console.log(datos[2]);

              if (xhttp.responseText === '0') {
                  window.alert("Codigo o nip incorrectos");
              } 
              else
              {
                  //aqui se envian parametros
                  _this.props.navigation.navigate("Acciones", { nombre: datos[2], codigo: datos[1] });
              }
          }
      };
      xhttp.open("GET", "http://148.202.152.33/ws_claseaut.php?codigo=" + this.state.Codigo + "&nip=" + this.state.Nip, true);
      //console.log("http://148.202.152.33/ws_claseaut.php?codigo="+this.state.Codigo+"&nip="+this.state.Nip);
      xhttp.send();
  }
    
    return (
      <View>

        <Image style={styles.imagen1} source={{ uri: "https://www.dwgautocad.com/uploads/8/3/4/5/8345765/logo-udg-png-blanco-y-negro_orig.png" }} />

        <Text style={styles.encabezado}>UNIVERSIDAD DE GUADALAJARA</Text>

        <TextInput style={styles.inputs}
          placeholder="Código"
          onChangeText={Codigo => this.setState({ Codigo })}
        />

        <TextInput style={styles.inputs} placeholder="Nip"
          secureTextEntry={true}
          onChangeText={Nip => this.setState({ Nip })}
        />

        <View style={styles.btn}>
          <Button title='Iniciar sesión' onPress={btnsuma}></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 30,
    width: 150,
    alignSelf: 'center',
  },
  encabezado: {
    fontSize: 27,
    textAlign: "center",
    color: "lightskyblue",
    marginBottom: 50,
    marginTop: 20,
  },
  imagen1: {
    width: 108,
    height: 150,
    marginLeft: 142,
    marginTop: 20,
    alignItems: "center",
  },
  imagen2: {
    width: 200,
    height: 300,
    marginLeft: 100,
    marginTop: 10,
  },
  inputs: {
    width: 250,
    marginLeft: 70,
    borderWidth: 1,
    marginTop: 10,
    fontSize: 20,
  },
})