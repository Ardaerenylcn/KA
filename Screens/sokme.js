import { ScrollView } from 'react-native';
import React from 'react';
import SokmeHeadComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/SokmeHeadComponent';
import SokmeBodyComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/SokmeBodyComponent';

const Sokme = () => {
	return (
		<>
			<ScrollView>
				<SokmeHeadComponent
					StoreCode={'280025'}
					StoreFullName={'GALLERİA MMM MİGROS'}
				/>
				<SokmeBodyComponent
					BarcodeCode={'100176521'}
					CoolerDesc={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA '}
				/>
				<SokmeBodyComponent
					BarcodeCode={'100177089'}
					CoolerDesc={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA '}
				/>
			</ScrollView>
		</>
	);
};

export default Sokme;
