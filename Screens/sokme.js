import { ScrollView } from 'react-native';
import React from 'react';
import SokmeHeadComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/SokmeHeadComponent';
import SokmeBodyComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/SokmeBodyComponent';

const Sokme = () => {
	return (
		<>
			<ScrollView>
				<SokmeHeadComponent
					storeCode={'280025'}
					storeFullName={'GALLERİA MMM MİGROS'}
				/>
				<SokmeBodyComponent
					barcodeCode={'100176521'}
					coolerDesc={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA '}
				/>
				<SokmeBodyComponent
					barcodeCode={'100177089'}
					coolerDesc={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA '}
				/>
			</ScrollView>
		</>
	);
};

export default Sokme;
