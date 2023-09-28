import { ScrollView } from 'react-native';
import React from 'react';
import DismantleDetailComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerOperationsComponents/DismantleDetailComponent';
import DismantleComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerOperationsComponents/DismantleComponent';
const Sokme = () => {
	return (
		<>
			<ScrollView>
				<DismantleComponent
					storeCode={'280025'}
					storeFullName={'GALLERİA MMM MİGROS'}
				/>
				<DismantleDetailComponent
					barcodeCode={'100176521'}
					coolerDesc={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA '}
				/>
				<DismantleDetailComponent
					barcodeCode={'100177089'}
					coolerDesc={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA '}
				/>
			</ScrollView>
		</>
	);
};

export default Sokme;
