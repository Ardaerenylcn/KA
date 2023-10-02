import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Announcement from './component/Announcement';
import CustomerInfo from './Screens/CustomerInfoPage';
import SellerDistributorStocks from './Screens/SellerDistributorStocks';

const Tab = createBottomTabNavigator();

function Duyurular() {
	return <Announcement />;
}

function Customer() {
	return <CustomerInfo />;
}

function ProfileScreen() {
	return <SellerDistributorStocks />;
}

function MyTabs() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="DUYURULAR"
				component={Duyurular}
				options={{
					headerTitle: 'KA MOBİL',
					headerTintColor: 'white',
					tabBarBadge: 4,
					tabBarInactiveTintColor: '#9c9c9c',
					tabBarBadgeStyle: {
						backgroundColor: '#ff4040',
						fontSize: 12,
						fontWeight: '700',
					},
				}}
			/>
			<Tab.Screen
				name="Profilim"
				component={Customer}
				options={{
					headerTintColor: 'black',
					headerShown: false,
				}}
			/>

			<Tab.Screen
				name="Neredeyim"
				component={ProfileScreen}
				options={{
					headerTitle: 'Bayi/Dist. Stokları',
					headerTintColor: 'black',
				}}
			/>
		</Tab.Navigator>
	);
}

const App = () => {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	);
};

export default App;
