import { ScrollView } from 'react-native';
import React from 'react';
import InstallmentComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerOperationsComponents/InstallmentComponent';
import InstallmentDetailComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/CoolerOperationsComponents/InstallmentDetailComponent';

export default function Kurulum() {
	return (
		<ScrollView>
			<>
				<InstallmentComponent />
				<InstallmentDetailComponent
					code={'d049'}
					desciription={'DARK DİKEY TEK KAPILI'}
				/>
				<InstallmentDetailComponent code={'4050'} desciription={'GUSTA MİNİ'} />
				<InstallmentDetailComponent code={'4054'} desciription={'BARDAK'} />
				<InstallmentDetailComponent code={'4055'} desciription={'DERİN DONDURUCU'} />
				<InstallmentDetailComponent code={'4049'} desciription={'DİKEY İKİ KAPILI'} />
				<InstallmentDetailComponent code={'4049'} desciription={'DİKEY TEK KAPILI'} />
				<InstallmentDetailComponent code={'4049'} desciription={'DARK DİKEY MİNİ'} />
				<InstallmentDetailComponent code={'4049'} desciription={'DARK DİKEY MİNİ'} />
				<InstallmentDetailComponent code={'4049'} desciription={'DARK DİKEY MİNİ'} />
				<InstallmentDetailComponent code={'4049'} desciription={'DARK DİKEY MİNİ'} />
			</>
		</ScrollView>
	);
}
