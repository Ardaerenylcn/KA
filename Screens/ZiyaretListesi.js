import { ScrollView } from 'react-native';
import React from 'react';
import ZiyaretListesiComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/ZiyaretListesiComponent';

const ZiyaretListesi = () => {
	return (
		<ScrollView>
			<ZiyaretListesiComponent
				StoreCode={'280025'}
				StoreFullName={'GALLERİA MMM MİGROS'}
				Visiter={'CEM İNTEPE'}
				VisiterDesc={'SATIŞ TEKNOLOJİLERİ UZMANI'}
				VisiterVisitTime={'25.05.2023'}
			/>
		</ScrollView>
	);
};

export default ZiyaretListesi;
