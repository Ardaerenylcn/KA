import {ScrollView } from 'react-native';
import React from 'react';
import KurulumHeadComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/KurulumHeadComponent';
import KurulumBodyComponent from '../component/CustomerInfo/CustomerInfoDetailPageComp/SogutucuIslemleriComponents/KurulumBodyComponent';

export default function Kurulum() {
	return (
		<ScrollView>
			<>
				<KurulumHeadComponent />
				<KurulumBodyComponent Code={'4049'} Desciription={'DARK DİKEY TEK KAPILI'} />
				<KurulumBodyComponent Code={'4050'} Desciription={'GUSTA MİNİ'} />
				<KurulumBodyComponent Code={'4054'} Desciription={'BARDAK'} />
				<KurulumBodyComponent Code={'4055'} Desciription={'DERİN DONDURUCU'} />
				<KurulumBodyComponent Code={'4049'} Desciription={'DİKEY İKİ KAPILI'} />
				<KurulumBodyComponent Code={'4049'} Desciription={'DİKEY TEK KAPILI'} />
				<KurulumBodyComponent Code={'4049'} Desciription={'DARK DİKEY MİNİ'} />
				<KurulumBodyComponent Code={'4049'} Desciription={'DARK DİKEY MİNİ'} />
				<KurulumBodyComponent Code={'4049'} Desciription={'DARK DİKEY MİNİ'} />
				<KurulumBodyComponent Code={'4049'} Desciription={'DARK DİKEY MİNİ'} />
			</>
		</ScrollView>
	);
}
