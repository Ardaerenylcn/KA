import { ScrollView, FlatList } from 'react-native';
import React from 'react';
import CoolerInventoryComponentHeadArea from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerInventorHeadAreaComponent';
import CoolerInventoryComponentBodyArea from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerInventoryBodyAreaComponent';

const mockData = [
	{
		id: '1',
		storeCode: '280025',
		storeFullName: 'GALLERİA MMM MİGROS',
	},
	{
		id: '2',
		coolerCode: '100176521',
		coolerDesc: '4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA ',
	},
	{
		id: '3',
		coolerCode: '100176521',
		coolerDesc: '4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA ',
	},
];

const CoolerInventory = () => {
	return (
		<FlatList
			data={mockData}
			keyExtractor={item => item.id}
			renderItem={({ item }) => {
				if (item.storeCode && item.storeFullName) {
					return (
						<CoolerInventoryComponentHeadArea
							storeCode={item.storeCode}
							storeFullName={item.storeFullName}
						/>
					);
				} else {
					return (
						<CoolerInventoryComponentBodyArea
							coolerCode={item.coolerCode}
							coolerDesc={item.coolerDesc}
						/>
					);
				}
			}}
		/>
	);
};

export default CoolerInventory;
