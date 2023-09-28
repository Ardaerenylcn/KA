import {ScrollView } from 'react-native';
import React from 'react';
import ArizaHeadComponent from './/../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/ArizaComponents/ArizaHeadComponent';
import ArizaBodyComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/ArizaComponents/ArizaBodyComponent';
const Ariza = () => {
	return (
		<ScrollView>
			<ArizaHeadComponent
				StroeCode={280025}
				StoreFullName={'GALLERİA MMM MİGROS'}
				Directorate={'Ulusal Zincir Mağzalar Satış Müdür'}
				Adress={'ESENLER-DIST.-İST-HALİÇ'}
				SerialNumber={'100176521'}
				CollerName={'SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA'}
				CoolerDesc={'Tanım'}
			/>

			<ArizaBodyComponent
				SerialNumber={'100176521'}
				CollerName={'SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA'}
			/>
		</ScrollView>
	);
};

export default Ariza;
