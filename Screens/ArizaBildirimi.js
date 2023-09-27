import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import ArızaBildirimiBodyComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/ArizaBildirimiBodyComponent';
import ArızaBildirimiHeadComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/ArizaBildirimiHeadComponent';





const ArızaBildirimi = () => {
	return (
		<>
			<ScrollView>
				<ArızaBildirimiHeadComponent
					StoreCode="280025"
					StoreFullName="GALLERİA MMM Migros"
					FaultCode="100177089"
				/>
				<ArızaBildirimiBodyComponent
					FaultCode={'100176521'}
					FaultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					Argeement={'76901a8QRX'}
				/>
				<ArızaBildirimiBodyComponent
					FaultCode={'100176521'}
					FaultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					Argeement={'76901a8QRX'}
				/>
				<ArızaBildirimiBodyComponent
					FaultCode={'100176521'}
					FaultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					Argeement={'76901a8QRX'}
				/>
				<ArızaBildirimiBodyComponent
					FaultCode={'100176521'}
					FaultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					Argeement={'76901a8QRX'}
				/>
				<ArızaBildirimiBodyComponent
					FaultCode={'100176521'}
					FaultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					Argeement={'76901a8QRX'}
				/>
				<ArızaBildirimiBodyComponent
					FaultCode={'100176521'}
					FaultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					Argeement={'76901a8QRX'}
				/>
				<ArızaBildirimiBodyComponent
					FaultCode={'100176521'}
					FaultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					Argeement={'76901a8QRX'}
				/>
			</ScrollView>
		</>



	);
};

export default ArızaBildirimi;
