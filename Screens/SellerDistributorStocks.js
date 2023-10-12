import React, { useRef, useState, useEffect } from 'react';
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
import SellerDistributorAndProductStockHeader from '../component/SellerDistributorStockComponents/SellerDistirbutorHead';
import SellerDistirbutorStockBody from '../component/SellerDistributorStockComponents/SellerDistirbutorStockBody';
import colors from '../constants/colors';

const removeLeadingZeros = numberString => {
	const number = parseInt(numberString, 10);
	return number.toString();
};

const fetchDataFromApi = async () => {
	try {
		const myHeaders = new Headers();
		myHeaders.append('MW_USERNAME', 'hip-efesmobilesuperuser');
		myHeaders.append('MW_PASSWORD', '9JnpczyhcR2dfPDpKf5zQLu58bdCPrpv');
		myHeaders.append('Content-Type', 'application/json');

		const raw = JSON.stringify({
			header: {
				transactionId: '687213a2-eac3-4b88-88b2-aaa22106fe03',
				messageId: 0,
				action: 'KA_SALESORDER_LOV_MATERIALS_QUERY',
				resource: 'KA_SALESORDER_LOV_MATERIALS',
				operation: 'READ',
				createdDate: '2023-08-17T07:40:15.606Z',
				callbackUrl: null,
				agentId: null,
				conversationId: null,
				correlationId: null,
			},
			body: {
				kaSalesorderLovMaterials: {
					language: 'tr',
					customerSelection: {
						customerNumber: '0000280025',
						language: 'tr',
						type: 'S',
					},
				},
			},
		});

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		};

		const response = await fetch(
			'https://qa.anadoluefes.com/salesorderlov/keyaccount/material',
			requestOptions
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('API verileri alınamadı:', error);
		return null;
	}
};

const SellerDistributorStocks = () => {
	const sectionListRef = useRef(null);
	const [isButtonVisible, setIsButtonVisible] = useState(false);
	const pulseAnimation = useRef(new Animated.Value(1)).current;
	const [materialLists, setMaterialLists] = useState([]);

	const handleScroll = event => {
		const yOffset = event.nativeEvent.contentOffset.y;
		if (yOffset > 100) {
			setIsButtonVisible(true);
		} else {
			setIsButtonVisible(false);
		}
	};

	const handlePress = () => {
		if (sectionListRef.current)
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
	};

	useEffect(() => {
		fetchDataFromApi()
			.then(data => {
				if (data && data.body.kaSalesorderLovMaterialsResult.materialLists) {
					const materialLists =
						data.body.kaSalesorderLovMaterialsResult.materialLists.map(
							item => ({
								...item,
								materialNumber: removeLeadingZeros(item.materialNumber),
							})
						);
					setMaterialLists(materialLists);
				} else {
					console.log('Veriler bulunamadı.');
				}
			})
			.catch(error => {
				console.error('Veri çekme hatası:', error);
			});
	}, []);

	const sections = materialLists.map(material => {
		return {
			title: material.goodsGroupDescription,
			data: [
				{
					productCode: material.materialNumber,
					productFullName: material.materialDescription,
					stock: 0,
					gelKan: 0,
				},
			],
		};
	});
	

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
