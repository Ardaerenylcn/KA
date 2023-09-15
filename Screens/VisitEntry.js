import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import VisitEntryTopArea from '../component/VisitEntryComponent/visitEntryTopArea';
import VisitEntryMiddleArea from '../component/VisitEntryComponent/visitEntryMiddleArea';
import VisitEntryBottomArea from '../component/VisitEntryComponent/visitEntryBotttomArea';

const VisitEntry = () => {
	return (

			<ScrollView style={{ flex: 1, marginTop: 0 }}>
				<View>
					<VisitEntryTopArea
						visitEntryStoreCode="280025"
						visitEntryStoreName="GALLERİA MMM MİGROS"
					/>
					<VisitEntryMiddleArea />
					<VisitEntryBottomArea />
				</View>
			</ScrollView>

	);
};

export default VisitEntry;
