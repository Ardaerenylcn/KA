import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native-safe-area-context';
import VisitEntryTopArea from '../component/VisitEntryComponent/visitEntryTopArea';
import VisitEntryMiddleArea from '../component/VisitEntryComponent/visitEntryMiddleArea';
import VisitEntryBottomArea from '../component/VisitEntryComponent/visitEntryBotttomArea';
import distances from '../constants/distances';
const VisitEntry = () => {
	return (
		<View>
			<VisitEntryTopArea
				visitEntryStoreCode="280025"
				visitEntryStoreName="GALLERİA MMM MİGROS"
			/>
			<VisitEntryMiddleArea />
			<VisitEntryBottomArea />
		</View>
	);
};

export default VisitEntry;
