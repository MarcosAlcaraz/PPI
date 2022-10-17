import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import INICIO from '../screens/Inicio';
import PANTALLAB from '../screens/MenuDeEstudiante';
import ACCIONES from '../screens/Acciones';
//import ID from '';

const Stack = createNativeStackNavigator()

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="inicio" component={INICIO} />
        <Stack.Screen name="pantallab" component={PANTALLAB} />
        <Stack.Screen name="pantallaa" component={ACCIONES} />
        //<Stack.Screen name="id" component={ID} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStack;