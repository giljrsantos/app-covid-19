import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

const Tab = createBottomTabNavigator();
const AppCovid = createStackNavigator();

import Geral from './pages/geral';
import Countries from './pages/countries';
import Grafico from './pages/grafico';
import Pais from './pages/countri'



export default function Routes(){
    return (
    <NavigationContainer>


        <AppCovid.Navigator screenOptions={{ headerShown: false}}>
          
          <AppCovid.Screen name="Global" component={Geral} />
          <AppCovid.Screen name="Paises" component={Countries} />           
          <AppCovid.Screen name="Pais" component={Pais} />
          <AppCovid.Screen name="Grafico" component={Grafico} />
        </AppCovid.Navigator>

    </NavigationContainer>
    );
}