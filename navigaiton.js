import { View, Text } from 'react-native'
import React from 'react'
import CustomerInfoPage from './Screens/CustomerInfoPage';
import CustomerInfoDetailPage from './Screens/CustomerInfoDetailPage'

export default function CustomerInfoPageNavigate() {
const Stack = createNativeStackNavigator();

  return (
      
          <Stack.Navigator>
            <Stack.Screen name="Müşteri Bilgileri" component={CustomerInfoPage} />
            <Stack.Screen name='Müşteri İşlemleri' component={CustomerInfoDetailPage} />
          </Stack.Navigator>
        );
      }
  