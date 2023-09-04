import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Announcement from './component/Announcement';
import CustomerInfo from "./Screens/CustomerInfoPage"

const Tab = createBottomTabNavigator();

function Duyurular() {
  return (
    <Announcement />
  );
}


function Customer() {
  return (
    <CustomerInfo/>
  );
}

function ProfileScreen() {
  return (
 null
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DUYURULAR"
        component={Duyurular}
        options={{
          tabBarLabel: 'Duyurular',
        }}
      />
      <Tab.Screen name=" " component={Customer} options={{
        tabBarLabel: 'Müşteri Bilgileri',
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'Nerdeyim',
      }} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


export default App;
