import { ScrollView, FlatList, Text, View } from 'react-native';
import React from 'react';
import DefectNoticeBodyComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerOperationsComponents/DefectNoticeBodyComponent';
import DefectNoticeHeadComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerOperationsComponents/DefectNoticeHeadComponent';

const mockData = [
	{
		id: 1,
		faultCode: '100176521',
		faultProduct: '4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA',
		agreement: '76901a8QRX',
	},
	{
		id: 2,
		faultCode: '100176522',
		faultProduct: '4713 SOGUTUCU EP DOLAP 3 KAPILI 2020 LUNA',
		agreement: '76901a8QRY',
	},
	{
		id: 3,
		faultCode: '100176523',
		faultProduct: '4714 SOGUTUCU EP DOLAP 1 KAPILI 2021 LUNA',
		agreement: '76901a8QRZ',
	},
];

const DefectNotice = () => {
	const renderItem = ({ item }) => (
		<View>
			{item.id === 1 && (
				<DefectNoticeHeadComponent
					storeCode="280025"
					storeFullName="GALLERİA MMM Migros"
					faultCode={item.faultCode}
				/>
			)}
			<DefectNoticeBodyComponent
				faultCode={item.faultCode}
				faultProduct={item.faultProduct}
				agreement={item.agreement}
			/>
		</View>
	);

	return (
		<>
			<FlatList
				data={mockData}
				renderItem={renderItem}
				keyExtractor={item => item.id.toString()}
			/>
		</>
	);
};

export default DefectNotice;
