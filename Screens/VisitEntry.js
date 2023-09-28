import React from 'react';
import { View, ScrollView } from 'react-native';
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
