import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CustomerInfoDetailPage from './Screens/';
import ArızaBildirimi from './Screens/ArızaBildirimi';
import ArizaBildirimiAciklama from './Screens/ArizaBildirimiAciklama';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="AnaEkran">
				<Stack.Screen
					name="AnaEkran"
					component={AnaEkran}
					options={{ title: 'Ana Ekran' }}
				/>

				<Stack.Screen
					name="ArizaBildirimi"
					component={ArızaBildirimi}
					options={{ title: 'Arıza Bildirimi' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
