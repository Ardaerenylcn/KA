import { ScrollView } from 'react-native';
import React from 'react';
import SogutucuEnvanteriComponentHeadArea from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuEnvanteriComponentHeadArea';
import SogutucuEnvanteriComponentBodyArea from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuEnvanteriComponentBodyArea';

const SogutucuEnvanteri = () => {
	return (
		<ScrollView>
			<SogutucuEnvanteriComponentHeadArea
				storeCode={'280025'}
				storeFullName={'GALLERİA MMM MİGROS'}
			/>
			<SogutucuEnvanteriComponentBodyArea
				coolerCode={'100176521'}
				coolerDesc={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA '}
			/>
			<SogutucuEnvanteriComponentBodyArea
				coolerCode={'100176521'}
				coolerDesc={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA '}
			/>
		</ScrollView>
	);
};

export default SogutucuEnvanteri;
