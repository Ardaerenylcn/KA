import { ScrollView } from 'react-native';
import React from 'react';
import ArizaHeadComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerOperationsComponents/DefectComponents/DefectHeadComponent';
import ArizaBodyComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerOperationsComponents/DefectComponents/DefectBodyComponent';

const Defect = () => {
	return (
		<ScrollView>
			<ArizaHeadComponent
				storeCode={280025}
				storeFullName={'GALLERİA MMM MİGROS'}
				directorate={'Ulusal Zincir Mağzalar Satış Müdür'}
				address={'ESENLER-DIST.-İST-HALİÇ'}
				serialNumber={'100176521'}
				collerName={'SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA'}
				coolerDesc={'Tanım'}
			/>

			<ArizaBodyComponent
				serialNumber={'100176521'}
				collerName={'SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA'}
			/>
		</ScrollView>
	);
};

export default Defect;
