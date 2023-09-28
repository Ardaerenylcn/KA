import { ScrollView } from 'react-native';
import React from 'react';
import SogutucuEnvanteriComponentHeadArea from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuEnvanteriComponentHeadArea';
import SogutucuEnvanteriComponentBodyArea from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuEnvanteriComponentBodyArea';

const SogutucuEnvanteri = () => {
	return (
		<ScrollView>
			<SogutucuEnvanteriComponentHeadArea
				StoreCode={'280025'}
				StoreFullName={'GALLERİA MMM MİGROS'}
			/>
			<SogutucuEnvanteriComponentBodyArea
				CoolerCode={'100176521'}
				CoolerDesc={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA '}
			/>
			<SogutucuEnvanteriComponentBodyArea
				CoolerCode={'100176521'}
				CoolerDesc={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA '}
			/>
		</ScrollView>
	);
};

export default SogutucuEnvanteri;
