import { ScrollView } from 'react-native';
import React from 'react';
import KurulumHeadComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/KurulumHeadComponent';
import KurulumBodyComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/KurulumBodyComponent';

export default function Kurulum() {
	return (
		<ScrollView>
			<>
				<KurulumHeadComponent />
				<KurulumBodyComponent
					code={'d049'}
					desciription={'DARK DİKEY TEK KAPILI'}
				/>
				<KurulumBodyComponent code={'4050'} desciription={'GUSTA MİNİ'} />
				<KurulumBodyComponent code={'4054'} desciription={'BARDAK'} />
				<KurulumBodyComponent code={'4055'} desciription={'DERİN DONDURUCU'} />
				<KurulumBodyComponent code={'4049'} desciription={'DİKEY İKİ KAPILI'} />
				<KurulumBodyComponent code={'4049'} desciription={'DİKEY TEK KAPILI'} />
				<KurulumBodyComponent code={'4049'} desciription={'DARK DİKEY MİNİ'} />
				<KurulumBodyComponent code={'4049'} desciription={'DARK DİKEY MİNİ'} />
				<KurulumBodyComponent code={'4049'} desciription={'DARK DİKEY MİNİ'} />
				<KurulumBodyComponent code={'4049'} desciription={'DARK DİKEY MİNİ'} />
			</>
		</ScrollView>
	);
}
