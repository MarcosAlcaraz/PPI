import{Text,View,Button} from 'react-native'
import React, {Component}from 'react'

export default class Acciones extends Component {
    constructor(props) {
        super(props);
        this.state={
        };
    }
    render() {
        return(
            <view>
                <Text style={{fontSize: 20}}>
                    Bienvenido: {this.props.route.params.nombre}
                </Text>
                <Button title="Altas"></Button>
                <Button title="Bajas"></Button>
                <Button title="Cambios"></Button>
                <Button title="Lista" onPress={()=>{this.props.navigation.navigate("pantallab", {nombre:this.props.route.params.nombre})}}></Button>
            </view>
        )
    }
}