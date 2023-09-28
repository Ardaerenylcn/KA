import { ScrollView } from 'react-native';
import React from 'react';
import ArızaBildirimiBodyComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/ArizaBildirimiBodyComponent';
import ArızaBildirimiHeadComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/ArizaBildirimiHeadComponent';

const ArızaBildirimi = () => {
	return (
		<>
			<ScrollView>
				<ArızaBildirimiHeadComponent
					storeCode="280025"
					storeFullName="GALLERİA MMM Migros"
					faultCode="100177089"
				/>
				<ArızaBildirimiBodyComponent
					faultCode={'100176521'}
					faultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					argeement={'76901a8QRX'}
				/>
				<ArızaBildirimiBodyComponent
					faultCode={'100176521'}
					faultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					argeement={'76901a8QRX'}
				/>
				<ArızaBildirimiBodyComponent
					faultCode={'100176521'}
					faultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					argeement={'76901a8QRX'}
				/>
				<ArızaBildirimiBodyComponent
					faultCode={'100176521'}
					faultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					argeement={'76901a8QRX'}
				/>
				<ArızaBildirimiBodyComponent
					faultCode={'100176521'}
					faultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					argeement={'76901a8QRX'}
				/>
				<ArızaBildirimiBodyComponent
					faultCode={'100176521'}
					faultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					argeement={'76901a8QRX'}
				/>
			</ScrollView>
		</>
	);
};

export default ArızaBildirimi;
