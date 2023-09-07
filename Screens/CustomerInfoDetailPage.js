import { View, Text, Animated,ScrollView } from 'react-native';
import React from 'react';
import CustomerInfoDetailHeadArea from '../component/CustomerInfo/CustomerInfoDetailPageComp/CustomerInfoDetailHeadArea';
import CustoemrInfoDetailBodyArea from '../component/CustomerInfo/CustomerInfoDetailPageComp/CustomerInfoDetailBodyArea';

const CustomerInfoDetailPage = () => {
	return (
    <ScrollView>
		<>
			<CustomerInfoDetailHeadArea
				customerInfoDetailCustomerID="280025"
				customerInfoDetailCustomerNAME="GALLERİA MMM Migros"
				customerInfoDetailCustomerLogin="26.05.2023 - Cuma"
				customerInfoDetailCustomerDİSTANCE="22217"
			/>
			<CustoemrInfoDetailBodyArea/>
		</>
    </ScrollView>
	);
};

export default CustomerInfoDetailPage;
