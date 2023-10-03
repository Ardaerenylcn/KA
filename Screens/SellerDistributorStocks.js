import React, { useRef, useState } from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Image,
	Animated,
	Easing,
	Text,
	SafeAreaView,
	StatusBar,
	SectionList,
} from 'react-native';
import SellerDistributorAndProductStockHeader from '../component/SellerDistributorStockComponents/SellerDistirbutorHead';
import SellerDistirbutorStockBody from '../component/SellerDistributorStockComponents/SellerDistirbutorStockBody';
import colors from '../constants/colors';

const SellerDistributorStocks = () => {
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
					productFullName: 'EFES PİLSEN KAS 50 CL',
					type: 'STEINIE RB',
					stock: 216,
					gelKan: 180,
				},
				{
					productCode: '150008',
					productFullName: 'EFES PİLSEN KL 33 CL NRB',
					stock: 84,
					gelKan: 123,
				},
			],
		},
		{
			title: 'Miller Genuine Draft',
			data: [
				{
					productCode: '150137',
					productFullName: 'MGD KL 33 CL NRB',
					stock: 46,
					gelKan: 11,
				},
				{
					productCode: '150138',
					productFullName: 'MGD KL 33 CL NRB 4*6 MP',
					stock: 3,
					gelKan: 0,
				},
			],
		},
		{
			title: "Beck's",
			data: [
				{
					productCode: '150284',
					productFullName: 'BECKS KL 33 CL NRB',
					stock: 30,
					gelKan: 21,
				},
				{
					productCode: '150292',
					productFullName: 'BECKS TVA 50 CL KTU',
					stock: 60,
					gelKan: 69,
				},
			],
		},
		{
			title: 'Section 4',
			data: [
				{
					productCode: '123456',
					productFullName: 'Product 1',
					type: 'Type 1',
					stock: 100,
					gelKan: 50,
				},
				{
					productCode: '7891011',
					productFullName: 'Product 2',
					type: 'Type 2',
					stock: 75,
					gelKan: 25,
				},
			],
		},
		{
			title: 'Section 5',
			data: [
				{
					productCode: '111213',
					productFullName: 'Product 3',
					type: 'Type 3',
					stock: 200,
					gelKan: 100,
				},
				{
					productCode: '141516',
					productFullName: 'Product 4',
					type: 'Type 4',
					stock: 50,
					gelKan: 10,
				},
			],
		},
		{
			title: 'Section 6',
			data: [
				{
					productCode: '171819',
					productFullName: 'Product 5',
					type: 'Type 5',
					stock: 300,
					gelKan: 150,
				},
				{
					productCode: '202122',
					productFullName: 'Product 6',
					type: 'Type 6',
					stock: 25,
					gelKan: 5,
				},
			],
		},
		{
			title: 'Section 7',
			data: [
				{
					productCode: '232425',
					productFullName: 'Product 7',
					type: 'Type 7',
					stock: 75,
					gelKan: 20,
				},
				{
					productCode: '262728',
					productFullName: 'Product 8',
					type: 'Type 8',
					stock: 125,
					gelKan: 60,
				},
			],
		},
		{
			title: 'Section 8',
			data: [
				{
					productCode: '293031',
					productFullName: 'Product 9',
					type: 'Type 9',
					stock: 150,
					gelKan: 70,
				},
				{
					productCode: '323334',
					productFullName: 'Product 10',
					type: 'Type 10',
					stock: 45,
					gelKan: 15,
				},
			],
		},
		{
			title: 'Section 9',
			data: [
				{
					productCode: '353637',
					productFullName: 'Product 11',
					type: 'Type 11',
					stock: 200,
					gelKan: 100,
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
					type: 'Type 12',
					stock: 85,
					gelKan: 30,
				},
				{
					productCode: '353637',
					productFullName: 'Product 11',
					type: 'Type 11',
					stock: 200,
					gelKan: 100,
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
					type: 'Type 12',
					stock: 85,
					gelKan: 30,
				},
			],
		},
		{
			title: 'Section 10',
			data: [
				{
					productCode: '414243',
					productFullName: 'Product 13',
					type: 'Type 13',
					stock: 300,
					gelKan: 150,
				},
				{
					productCode: '444546',
					productFullName: 'Product 14',
					type: 'Type 14',
					stock: 40,
					gelKan: 10,
				},
			],
			
		},
		{
			title: 'Section 11',
			data: [
				{
					productCode: '353637',
					productFullName: 'Product 11',
					type: 'Type 11',
					stock: 200,
					gelKan: 100,
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
					type: 'Type 12',
					stock: 85,
					gelKan: 30,
				},
				{
					productCode: '353637',
					productFullName: 'Product 11',
					type: 'Type 11',
					stock: 200,
					gelKan: 100,
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
					type: 'Type 12',
					stock: 85,
					gelKan: 30,
				},
			],
		},
		{
			title: 'Section 12',
			data: [
				{
					productCode: '353637',
					productFullName: 'Product 11',
					type: 'Type 11',
					stock: 200,
					gelKan: 100,
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
					type: 'Type 12',
					stock: 85,
					gelKan: 30,
				},
				{
					productCode: '353637',
					productFullName: 'Product 11',
					type: 'Type 11',
					stock: 200,
					gelKan: 100,
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
					type: 'Type 12',
					stock: 85,
					gelKan: 30,
				},
			],
		},
		{
			title: 'Section 13',
			data: [
				{
					productCode: '353637',
					productFullName: 'Product 11',
					type: 'Type 11',
					stock: 200,
					gelKan: 100,
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
					type: 'Type 12',
					stock: 85,
					gelKan: 30,
				},
				{
					productCode: '353637',
					productFullName: 'Product 11',
					type: 'Type 11',
					stock: 200,
					gelKan: 100,
				},
				{
					productCode: '383940',
					productFullName: 'Product 12',
					type: 'Type 12',
					stock: 85,
					gelKan: 30,
				},
			],
		},
		
	];

	return (
		<SafeAreaView style={{ flex: 1 }}>
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
						<SellerDistirbutorStockBody
							productCode={item.productCode}
							productFullName={item.productFullName}
							type={item.type}
							stock={item.stock}
							gelKan={item.gelKan}
						/>
					)}
					renderSectionHeader={({ section: { title } }) => (
						<SellerDistributorAndProductStockHeader product={title} />
					)}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	floatingButton: {
		position: 'absolute',
		borderRadius: 28,
		bottom: 16,
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

export default SellerDistributorStocks;
