import { View, Text, Animated, ScrollView } from 'react-native';
import React from 'react';
import CustomerInfoDetailHeadArea from '../component/CustomerInfo/CustomerInfoDetailPageComp/CustomerInfoDetailHeadArea';
import CustoemrInfoDetailBodyArea from '../component/CustomerInfo/CustomerInfoDetailPageComp/CustomerInfoDetailBodyArea';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VisitEntry from "../Screens/VisitEntry"
import ArızaBildirimi from './ArızaBildirimi';
import sokme from './sokme';
import Kurulum from './Kurulum';
import colors from '../constants/colors';

function CustomerInfoDetailPage({ navigation }) {
	return (
		<ScrollView>
			<>
				<CustomerInfoDetailHeadArea
					customerInfoDetailCustomerID="280025"
					customerInfoDetailCustomerNAME="GALLERİA MMM Migros"
					customerInfoDetailCustomerLogin="26.05.2023 - Cuma"
					customerInfoDetailCustomerDİSTANCE="22217"
					customerInfoStoreIsFalse=""
					navigation={navigation}
				/>
				<CustoemrInfoDetailBodyArea />
			</>
		</ScrollView>
	);
}
const Stack = createNativeStackNavigator();

function VisitEntryNavigate() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Müşteri Bilgileri"
				component={CustomerInfoDetailPage}
				options={{ headerShown: false }}
			/>

			<Stack.Screen
			name="Ziyaret Girişi"
			options={{ headerBackTitle: 'Geri' }} 
			component={VisitEntry}
		  />
		  <Stack.Screen

			name="Arıza Bildirimi"
			options={{
			  headerBackTitle: 'Geri',
			  headerTitle: 'Ekipmanlar',
			  headerTintColor: 'white',
			  headerStyle: {
				backgroundColor: colors.efesblue,
				
			  },
			}}
			component={ArızaBildirimi}
		  
		  />
		  	  <Stack.Screen
			name="Sokme"
			options={{ headerBackTitle: 'Geri' }} 
			component={sokme}
		  />
		   <Stack.Screen
			name="Kurulum"
			options={{ headerBackTitle: 'Geri' }} 
			component={Kurulum}
		  />

		</Stack.Navigator>
	);
}
export default VisitEntryNavigate;
