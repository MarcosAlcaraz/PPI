import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import INICIO from './screens/Inicio';
import PANTALLAB from './screens/MenuDeEstudiante';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="inicio" component={INICIO} />
        <Stack.Screen name="Menú de Estudiante" component={PANTALLAB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;