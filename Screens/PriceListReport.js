import React, { useRef, useState, useEffect } from 'react';
import { priceListQuery } from '../network/services/appServices';
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
	const [price, setPrice] = useState([]);
	const [groupedPrice, setGroupedPrice] = useState([]);

	useEffect(() => {
		priceListQueryAction();
	}, []);

	const priceListQueryAction = async () => {
		try {
			const responsePrice = await priceListQuery();
			const priceData = responsePrice.data.body.reports;
			setPrice(priceData);

			const groupedData = groupDataByGoodsGroup(priceData);
			setGroupedPrice(groupedData);
		} catch (error) {
			console.log(error);
		}
	};

	const renderItem = ({ item }) => (
		<PriceListPerportBodyComponent
			productCode={item.materialNumber.replace(/^0+/, '')}
			productFullName={item.materialDescription}
			closePriceVatExc={item.closeChannelRecPriceVATFree}
			closePriceVatInc={item.closeChannelRecPriceVAT}
			openPriceVatExc={item.openChannelRecPriceVATFree}
			openPriceVatInc={item.openChannelRecPriceVAT}
			pera={item.currency}
		/>
	);

	const renderSectionHeader = ({ section }) => (
		<PriceListReportHeadComponent product={section.title} />
	);

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
				animated: true,
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

	const groupDataByGoodsGroup = data => {
		const groupedData = data.reduce((grouped, item) => {
			const goodsGroupCode = item.goodsGroupCodeText;
			if (!grouped[goodsGroupCode]) {
				grouped[goodsGroupCode] = [];
			}
			grouped[goodsGroupCode].push(item);
			return grouped;
		}, {});
		const groupedArray = Object.keys(groupedData).map(goodsGroupCodeText => ({
			title: goodsGroupCodeText,
			data: groupedData[goodsGroupCodeText],
		}));
		return groupedArray;
	};

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
					sections={groupedPrice}
					keyExtractor={(item, index) => item + index}
					renderSectionHeader={renderSectionHeader}
					renderItem={renderItem}
					onScroll={handleScroll}
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
