import { ScrollView } from 'react-native';
import React from 'react';
import DefectNoticeBodyComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerOperationsComponents/DefectNoticeBodyComponent';
import DefectNoticeHeadComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerOperationsComponents/DefectNoticeHeadComponent';

const DefectNotice = () => {
	return (
		<>
			<ScrollView>
				<DefectNoticeHeadComponent
					storeCode="280025"
					storeFullName="GALLERİA MMM Migros"
					faultCode="100177089"
				/>
				<DefectNoticeBodyComponent
					faultCode={'100176521'}
					faultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					argeement={'76901a8QRX'}
				/>
				<DefectNoticeBodyComponent
					faultCode={'100176521'}
					faultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					argeement={'76901a8QRX'}
				/>
				<DefectNoticeBodyComponent
					faultCode={'100176521'}
					faultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					argeement={'76901a8QRX'}
				/>
				<DefectNoticeBodyComponent
					faultCode={'100176521'}
					faultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					argeement={'76901a8QRX'}
				/>
				<DefectNoticeBodyComponent
					faultCode={'100176521'}
					faultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					argeement={'76901a8QRX'}
				/>
				<DefectNoticeBodyComponent
					faultCode={'100176521'}
					faultProduct={'4712 SOGUTUCU EP DOLAP 2 KAPILI 2019 LUNA  '}
					argeement={'76901a8QRX'}
				/>
			</ScrollView>
		</>
	);
};

export default DefectNotice;
