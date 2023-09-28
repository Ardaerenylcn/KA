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
					description={'DARK DİKEY TEK KAPILI'}
				/>
				<InstallmentDetailComponent code={'4050'} description={'GUSTA MİNİ'} />
				<InstallmentDetailComponent code={'4054'} description={'BARDAK'} />
				<InstallmentDetailComponent code={'4055'} description={'DERİN DONDURUCU'} />
				<InstallmentDetailComponent code={'4049'} description={'DİKEY İKİ KAPILI'} />
				<InstallmentDetailComponent code={'4049'} description={'DİKEY TEK KAPILI'} />
				<InstallmentDetailComponent code={'4049'} description={'DARK DİKEY MİNİ'} />
				<InstallmentDetailComponent code={'4049'} description={'DARK DİKEY MİNİ'} />
				<InstallmentDetailComponent code={'4049'} description={'DARK DİKEY MİNİ'} />
				<InstallmentDetailComponent code={'4049'} description={'DARK DİKEY MİNİ'} />
			</>
		</ScrollView>
	);
}
