import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native-safe-area-context';
import VisitEntryTopArea from '../component/VisitEntryComponent/visitEntryTopArea';
import VisitEntryMiddleArea from '../component/VisitEntryComponent/visitEntryMiddleArea';

const VisitEntry = () => {
	return (
		<SafeAreaView>
			<VisitEntryTopArea
				visitEntryStoreCode="280025"
				visitEntryStoreName="GALLERİA MMM MİGROS"
			/>
			<VisitEntryMiddleArea />
		</SafeAreaView>
	);
};

export default VisitEntry;
