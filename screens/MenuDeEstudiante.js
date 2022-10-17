import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {

    let _this = this;
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        _this.setState({ users: myArr });
      }
    };

    xhttp.open('GET', 'https://ppi-project.000webhostapp.com/mostrardatos.php', true);
    xhttp.send();
  }

  render() {
    const getItem = (item) => {
      console.log(item.id);
      this.props.navigation.navigate("Id", { Nombre: item.Nombre, Codigo: item.Codigo, Tarea: item.Tarea, Imagen: item.Imagen });
    }
    const renderUser = ({ item }) => {
      return (
        <View style={{ margin: 10, borderWidth: 0.5, padding: 10 }}>
          <TouchableOpacity onPress={() => getItem(item)}>
            <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>
              User {item.id}
            </Text>
            <Text style={{ color: 'black' }}>Nombre : {item.Nombre}</Text>
            <Text style={{ color: 'black' }}>Codigo : {item.Codigo}</Text>
            <Text style={{ color: 'black' }}>Tarea : {item.Tarea}</Text>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View>
        <Text styles={{ fontSize: 20 }}>BIENVENIDO {this.props.route.params.nombre}</Text>
        <Text>Código: {this.props.route.params.codigo}</Text>

        <FlatList
          data={this.state.users}
          renderItem={renderUser}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}