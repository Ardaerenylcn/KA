import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Announcement from './component/Announcement';


const Tab = createBottomTabNavigator();

function Duyurular() {
  return (
      <Announcement/>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
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
      <Tab.Screen name="Settings" component={SettingsScreen}options={{
          tabBarLabel: 'Profilim',
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Nerdeyim',
        }}/>
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
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
