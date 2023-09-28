import { ScrollView } from 'react-native';
import React from 'react';
import ZiyaretListesiComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/ZiyaretListesiComponent';

const ZiyaretListesi = () => {
	return (
		<ScrollView>
			<ZiyaretListesiComponent
				storeCode={'280025'}
				storeFullName={'GALLERİA MMM MİGROS'}
				visiter={'CEM İNTEPE'}
				visiterDesc={'SATIŞ TEKNOLOJİLERİ UZMANI'}
				visiterVisitTime={'25.05.2023'}
			/>
		</ScrollView>
	);
};

export default ZiyaretListesi;
