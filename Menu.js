import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import INICIO from './screens/Inicio';
import PANTALLAB from './screens/MenuDeEstudiante';
import ACCIONES from './screens/Acciones';
import ALTAS from './screens/Altas';
import ID from './screens/Id';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="inicio" component={INICIO} />
        <Stack.Screen name="Menú de Estudiante" component={PANTALLAB} />
        <Stack.Screen name="Acciones" component={ACCIONES} />
        <Stack.Screen name="Altas" component={ALTAS} />
        <Stack.Screen name="Id" component={ID} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;