import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Announcement from './component/Announcement';
import CustomerInfo from "./Screens/CustomerInfoPage"
import CustomerInfoDetailPage from './Screens/CustomerInfoDetailPage';
import CustomerInfoPageNavigate from './Screens/CustomerInfoPage';
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
   <CustomerInfoDetailPage/>
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
      <Tab.Screen name="Settings" component={Customer} options={{
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
