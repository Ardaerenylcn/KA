import React from 'react';
import { View, ScrollView } from 'react-native';
import VisitEntryTopArea from '../component/VisitEntryComponent/VisitEntryTopArea';
import VisitEntryMiddleArea from '../component/VisitEntryComponent/VisitEntryMiddleArea';
import VisitEntryBottomArea from '../component/VisitEntryComponent/VisitEntryBottomArea';

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
