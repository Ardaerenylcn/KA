import React, { useRef, useState } from 'react';

import PriceListPerportBodyComponent from '../component/PriceListReportBodyComponent';
import PriceListReportHeadComponent from '../component/PriceListReportHeadComponent';
import colors from '../constants/colors';
import PlaceHolder from '../component/Placeholder/PlaceHolder';
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Image,
	Animated,
	Easing,
	SafeAreaView,
	SectionList,
} from 'react-native';

const PriceListReport = () => {
	const sectionListRef = useRef(null);
	const [isButtonVisible, setIsButtonVisible] = useState(false);
	const pulseAnimation = useRef(new Animated.Value(1)).current;

	const handleScroll = event => {
		const yOffset = event.nativeEvent.contentOffset.y;
		if (yOffset > 100) {
			setIsButtonVisible(true);
		} else {
			setIsButtonVisible(false);
		}
	};
	const handlePress = () => {
		if (sectionListRef.current) {
			sectionListRef.current.scrollToLocation({
				sectionIndex: 0,
				itemIndex: 0,
			});

			Animated.sequence([
				Animated.timing(pulseAnimation, {
					toValue: 1.2,
					duration: 200,
					useNativeDriver: false,
					easing: Easing.linear,
				}),
				Animated.timing(pulseAnimation, {
					toValue: 1,
					duration: 200,
					useNativeDriver: false,
					easing: Easing.linear,
				}),
			]).start();
		}
	};

	const sections = [
		{
			title: 'Efes Pilsen',
			data: [
				{
					productCode: '150003',
					productFullName: 'EFES PİLSEN KAS 50 CL STEINIE RB ',
					closePriceVatInc: '1038,00',
					closePriceVatExc: '865,123',
					openPriceVatExc: '723,36',
					openPriceVatInc: '868,03',
					pera: '8,33',
				},
				{
					productCode: '150008',
					productFullName: 'EFES PİLSEN KL 33 CL NRB',
					closePriceVatInc: '1038,00',
					closePriceVatExc: '865,123',
					openPriceVatExc: '723,36',
					openPriceVatInc: '868,03',
					pera: '8,33',
				},
			],
		},
		{
			title: 'Miller Genuine Draft',
			data: [
				{
					productCode: '150137',
					productFullName: 'MGD KL 33 CL NRB',
					closePriceVatInc: '1038,00',
					closePriceVatExc: '865,123',
					openPriceVatExc: '723,36',
					openPriceVatInc: '868,03',
					pera: '8,33',
				},
				{
					productCode: '150138',
					productFullName: 'MGD KL 33 CL NRB 4*6 MP',
					closePriceVatInc: '1038,00',
					closePriceVatExc: '865,123',
					openPriceVatExc: '723,36',
					openPriceVatInc: '868,03',
					pera: '8,33',
				},
			],
		},
		{
			title: "Beck's",
			data: [
				{
					productCode: '150284',
					productFullName: 'BECKS KL 33 CL NRB',
				},
				{
					productCode: '150292',
					productFullName: 'BECKS TVA 50 CL KTU',
				},
			],
		},
		{
			title: 'Section 4',
			data: [
				{
					productCode: '123456',
					productFullName: 'Product 1',
				},
				{
					productCode: '7891011',
					productFullName: 'Product 2',
				},
			],
		},
		{
			title: 'Section 5',
			data: [
				{
					productCode: '111213',
					productFullName: 'Product 3',
				},
				{
					productCode: '141516',
					productFullName: 'Product 4',
				},
			],
		},
		{
			title: 'Section 6',
			data: [
				{
					productCode: '171819',
					productFullName: 'Product 5',
				},
				{
					productCode: '202122',
					productFullName: 'Product 6',
				},
			],
		},
		{
			title: 'Section 7',
			data: [
				{
					productCode: '232425',
					productFullName: 'Product 7',
				},
				{
					productCode: '262728',
					productFullName: 'Product 8',
				},
			],
		},
		{
			title: 'Section 8',
			data: [
				{
					productCode: '293031',
					productFullName: 'Product 9',
				},
				{
					productCode: '323334',
					productFullName: 'Product 10',
				},
			],
		},
		{
			title: 'Section 9',
			data: [
				{
					productCode: '353637',
					productFullName: 'Product 11',
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
				},
				{
					productCode: '353637',
					productFullName: 'Product 11',
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
				},
			],
		},
		{
			title: 'Section 10',
			data: [
				{
					productCode: '414243',
					productFullName: 'Product 13',
				},
				{
					productCode: '444546',
					productFullName: 'Product 14',
				},
			],
		},
		{
			title: 'Section 11',
			data: [
				{
					productCode: '353637',
					productFullName: 'Product 11',
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
				},
				{
					productCode: '353637',
					productFullName: 'Product 11',
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
				},
			],
		},
		{
			title: 'Section 12',
			data: [
				{
					productCode: '353637',
					productFullName: 'Product 11',
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
				},
				{
					productCode: '353637',
					productFullName: 'Product 11',
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
				},
			],
		},
		{
			title: 'Section 13',
			data: [
				{
					productCode: '353637',
					productFullName: 'Product 11',
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
				},
				{
					productCode: '353637',
					productFullName: 'Product 11',
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
				},
			],
		},
	];

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<PlaceHolder placeholder={'Malzeme ara..'} />
			<View>
				{isButtonVisible && (
					<TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
						<Animated.View
							style={[styles.pulse, { transform: [{ scale: pulseAnimation }] }]}
						/>
						<Image
							style={styles.tinyArrowLogo}
							source={require('../assets/icons/ic-arrow-up.png')}
						/>
					</TouchableOpacity>
				)}

				<SectionList
					ref={sectionListRef}
					onScroll={handleScroll}
					sections={sections}
					keyExtractor={(item, index) => item.productCode + index}
					renderItem={({ item }) => (
						<PriceListPerportBodyComponent
							productCode={item.productCode}
							productFullName={item.productFullName}
							closePriceVatExc={item.closePriceVatExc}
							closePriceVatInc={item.closePriceVatInc}
							openPriceVatExc={item.openPriceVatExc}
							openPriceVatInc={item.openPriceVatInc}
							pera={item.pera}
						/>
					)}
					renderSectionHeader={({ section: { title } }) => (
						<PriceListReportHeadComponent product={title} />
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	floatingButton: {
		position: 'absolute',
		borderRadius: 24,
		bottom: 68,
		right: 16,
		width: 48,
		height: 48,
		backgroundColor: colors.efesblue,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 3,
		flex: 1,
		zIndex: 1,
	},
	tinyArrowLogo: {
		width: 28,
		height: 28,
		zIndex: 1,
	},
	pulse: {
		position: 'absolute',
		width: 48,
		height: 48,
		borderRadius: 26,
		backgroundColor: colors.efesblue,
		opacity: 1,
		zIndex: 1,
	},
});

export default PriceListReport;
