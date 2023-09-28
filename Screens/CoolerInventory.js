import { ScrollView } from 'react-native';
import React from 'react';
import CoolerInventoryComponentHeadArea from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerInventorHeadAreaComponent';
import CoolerInventoryComponentBodyArea from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerInventoryBodyAreaComponent';

const CoolerInventory = () => {
	return (
		<ScrollView>
			<CoolerInventoryComponentHeadArea
				storeCode={'280025'}
				storeFullName={'GALLERİA MMM MİGROS'}
			/>
			<CoolerInventoryComponentBodyArea
				coolerCode={'100176521'}
				coolerDesc={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA '}
			/>
			<CoolerInventoryComponentBodyArea
				coolerCode={'100176521'}
				coolerDesc={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA '}
			/>
		</ScrollView>
	);
};

export default CoolerInventory;
