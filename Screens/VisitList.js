import { ScrollView } from 'react-native';
import React from 'react';
import VisitListComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/VisitListComponent';

const VisitList = () => {
	return (
		<ScrollView>
			<VisitListComponent
				storeCode={'280025'}
				storeFullName={'GALLERİA MMM MİGROS'}
				visiter={'CEM İNTEPE'}
				visiterDesc={'SATIŞ TEKNOLOJİLERİ UZMANI'}
				visiterVisitTime={'25.05.2023'}
			/>
		</ScrollView>
	);
};

export default VisitList;
