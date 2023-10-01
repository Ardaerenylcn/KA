import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Dimensions,
	Modal,
	TouchableWithoutFeedback,
	Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../constants/colors';
import distances from '../../../constants/distances';
import fonts from '../../../constants/fonts';
import styleVariables from '../../../Styles/styleVariables';

const App = () => {
	const handleSogutucuEkipmanSayimi = () => {
		showAlertDialog();
	};

	const handleSogutucuEnvanteri = () => {
		navigation.navigate('Sogutucu Envanteri');
	};

	const handleZiyaretListesiPress = () => {
		navigation.navigate('Ziyaret Listesi');
	};

	const handleArizaBildirimiPress = () => {
		navigation.navigate('Ariza Bildirimi');
	};

	const handleKurulumPress = () => {
		navigation.navigate('Kurulum');
	};

	const handleSokmePress = () => {
		navigation.navigate('Sokme');
	};

	const navigation = useNavigation();

	const data = [
		{ text: 'Ziyaret Listesi', icon: 'angle-right' },
		{ text: 'Soğutucu Envanteri', icon: 'angle-right' },
		{ text: 'Soğutucu Ekipman Sayımı', icon: 'angle-right' },
		{ text: 'Soğutucu İşlemlerim', icon: 'angle-right' },
	];

	const additionalTexts = {
		'Soğutucu İşlemleri': ['Arıza Bildirimi', 'Kurulum', 'Sökme'],
	};

	const [isExpanded, setIsExpanded] = useState(false);
	const [isAlertVisible, setAlertVisible] = useState(false);
	const [selectedAlertText, setSelectedAlertText] = useState(null);

	const showAlertDialog = () => {
		setAlertVisible(true);
	};

	const hideAlertDialog = () => {
		setAlertVisible(false);
	};

	const handleItemPress = item => {
		if (item.text === 'Soğutucu İşlemlerim') {
			setIsExpanded(!isExpanded);
		}
	};

	const handleAlertTextPress = text => {
		setSelectedAlertText(text);
	};

	const viewWidth = Dimensions.get('window').width;

	let iconName = isExpanded ? 'angle-down' : 'angle-right';

	return (
		<View
			style={[
				styles.customerInfoDetailComponentContainer,
				styleVariables.shadow,
			]}
		>
			<ScrollView style={styles.customerInfoDetailComponentlistContainer}>
				{data.map((item, index) => (
					<TouchableOpacity
						key={index}
						style={[
							styles.customerInfoDetailComponentListItem,
							item.text === 'Soğutucu İşlemleri' ? styles.noBorder : null,
						]}
						onPress={() => handleItemPress(item)}
					>
						{item.text === 'Ziyaret Listesi' ? (
							<TouchableOpacity onPress={handleZiyaretListesiPress}>
								<Text style={styles.customerInfoDetailComponentHandleText}>
									{item.text}
								</Text>
							</TouchableOpacity>
						) : item.text === 'Soğutucu Envanteri' ? (
							<TouchableOpacity onPress={handleSogutucuEnvanteri}>
								<Text style={styles.customerInfoDetailComponentHandleText}>
									{item.text}
								</Text>
							</TouchableOpacity>
						) : item.text === 'Soğutucu Ekipman Sayımı' ? (
							<TouchableOpacity onPress={handleSogutucuEkipmanSayimi}>
								<Text style={styles.customerInfoDetailComponentHandleText}>
									{item.text}
								</Text>
							</TouchableOpacity>
						) : (
							<>
								<Text style={styles.customerInfoDetailComponentHandleText}>
									{item.text}
								</Text>
								{item.text === 'Soğutucu İşlemleri' ? (
									<Icon
										name={iconName}
										size={20}
										color="black"
										style={styles.customerInfoDetailComponentHandleIcon}
									/>
								) : (
									<Icon
										name={item.icon}
										size={20}
										color="black"
										style={styles.customerInfoDetailComponentHandleIcon}
									/>
								)}
							</>
						)}
					</TouchableOpacity>
				))}
			</ScrollView>
			{isExpanded && (
				<View
					style={[
						styles.additionalTextContainer,
						styles.customerInfoDetailComponentlistContainer,
						{ width: viewWidth },
					]}
				>
					{additionalTexts['Soğutucu İşlemleri'].map((text, index) => (
						<TouchableOpacity
							key={index}
							style={styles.additionalItem}
							onPress={() => {
								if (text === 'Arıza Bildirimi') {
									handleArizaBildirimiPress();
								}
								if (text === 'Kurulum') {
									handleKurulumPress();
								}
								if (text === 'Sökme') {
									handleSokmePress();
								}
							}}
						>
							<Text style={styles.additionalItemText}>{text}</Text>
						</TouchableOpacity>
					))}
				</View>
			)}
			<Modal
				transparent={true}
				visible={isAlertVisible}
				animationType="fade"
				onRequestClose={hideAlertDialog}
			>
				<TouchableWithoutFeedback onPress={hideAlertDialog}>
					<View style={styles.customerInfoDetailComponentModalBackgrond}>
						<View style={styles.CustomerInfoDetailComponentmodalContainer}>
							<View style={styles.customerInfoDetailComponentBorderarea}>
								<View
									style={
										styles.customerInfoDetailComponentModalContainerAlertMessageView
									}
								>
									<Text
										style={styles.customerInfoDetailComponentModalAlertMessage}
									>
										Lütfen seçiniz.
									</Text>
								</View>
							</View>

							<View
								style={styles.customerInfoDetailComponentModalContainerTextArea}
							>
								<TouchableOpacity
									onPress={() => handleAlertTextPress('Noktada Soğutucu Yok')}
									style={[
										styles.customerInfoDetailModalAlertText,
										selectedAlertText === 'Noktada Soğutucu Yok' &&
											styles.selectedAlertText,
									]}
								>
									<View style={styles.modalTextContainer}>
										<Text style={styles.customerInfoDetailModalText}>
											Noktada Soğutucu Yok
										</Text>
										{selectedAlertText === 'Noktada Soğutucu Yok' && (
											<View
												style={
													styles.customerInfoDetailComponentModalIconContainer
												}
											>
												<Image
													style={styles.correctIconStyle}
													source={require('../../../assets/icons/ic_correct.png')}
												/>
											</View>
										)}
									</View>
								</TouchableOpacity>

								<TouchableOpacity
									onPress={() =>
										handleAlertTextPress('Nokta kapalı - müşteri problemi')
									}
									style={[
										styles.customerInfoDetailModalAlertText,
										selectedAlertText === 'Noktada Soğutucu Yok' &&
											styles.selectedAlertText,
									]}
								>
									<View style={styles.modalTextContainer}>
										<Text style={styles.customerInfoDetailModalText}>
											Nokta kapalı - müşteri problemi
										</Text>
										{selectedAlertText ===
											'Nokta kapalı - müşteri problemi' && (
											<View
												style={
													styles.customerInfoDetailComponentModalIconContainer
												}
											>
												<Image
													style={styles.correctIconStyle}
													source={require('../../../assets/icons/ic_correct.png')}
												/>
											</View>
										)}
									</View>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => handleAlertTextPress('Nokta sezonluk')}
									style={[
										styles.customerInfoDetailModalAlertText,
										selectedAlertText === 'Nokta sezonluk' &&
											styles.selectedAlertText,
									]}
								>
									<View style={styles.modalTextContainer}>
										<Text style={styles.customerInfoDetailModalText}>
											Nokta sezonluk
										</Text>
										{selectedAlertText === 'Nokta sezonluk' && (
											<View
												style={
													styles.customerInfoDetailComponentModalIconContainer
												}
											>
												<Image
													style={styles.correctIconStyle}
													source={require('../../../assets/icons/ic_correct.png')}
												/>
											</View>
										)}
									</View>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => handleAlertTextPress('Sayım yapılacak')}
									style={[
										styles.customerInfoDetailModalAlertText,
										selectedAlertText === 'Sayım yapılacak' &&
											styles.selectedAlertText,
									]}
								>
									<View style={styles.modalTextContainer}>
										<Text style={styles.customerInfoDetailModalText}>
											Sayım yapılacak
										</Text>
										{selectedAlertText === 'Sayım yapılacak' && (
											<View
												style={
													styles.customerInfoDetailComponentModalIconContainer
												}
											>
												<Image
													style={styles.correctIconStyle}
													source={require('../../../assets/icons/ic_correct.png')}
												/>
											</View>
										)}
									</View>
								</TouchableOpacity>
							</View>

							<View style={styles.customerInfoDetailModalButtonContainer}>
								<TouchableOpacity
									onPress={hideAlertDialog}
									style={[styles.alertButton, styles.cancelButton]}
								>
									<Text style={styles.alertButtonTextCancel}>İPTAL</Text>
								</TouchableOpacity>
								<View style={styles.verticalBorder} />
								<TouchableOpacity style={styles.alertButton}>
									<Text style={styles.alertButtonTextOk}>TAMAM</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	customerInfoDetailComponentContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.white,
		padding: distances.defaultDistance,
		margin: distances.defaultDistance,
		borderRadius: 10,
	},
	customerInfoDetailComponentlistContainer: {
		width: '100%',
	},
	customerInfoDetailComponentBorderarea: {
		borderColor: colors.borderColor,
		width: Dimensions.get('window').width - 80,
		justifyContent: 'center',
		alignItems: 'center',
	},
	customerInfoDetailComponentListItem: {
		borderBottomWidth: 1,
		backgroundColor: colors.backgroundColor,
		flexDirection: 'row',
		alignItems: 'center',
		padding: distances.defaultDistance / 1.5,
		borderRadius: 5,
		borderColor: colors.borderColor,
	},
	customerInfoDetailComponentHandleText: {
		flex: 1,
		fontSize: fonts.big,
	},
	customerInfoDetailComponentHandleIcon: {
		marginLeft: distances.defaultDistance,
		color: 'grey',
	},
	additionalTextContainer: {
		backgroundColor: colors.backgroundColor,
		paddingHorizontal: 20,
	},
	additionalItem: {
		backgroundColor: colors.backgroundColor,
		padding: distances.defaultDistance / 1.5,
		marginHorizontal: distances.defaultDistance,
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
	},
	additionalItemText: {
		color: colors.black,
		fontSize: fonts.big,
	},
	noBorder: {
		borderBottomWidth: 0,
	},
	customerInfoDetailComponentModalBackgrond: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	CustomerInfoDetailComponentmodalContainer: {
		backgroundColor: colors.white,
		borderRadius: 10,
		width: Dimensions.get('window').width - 80,
		alignItems: 'center',
		flex: 0.3,
	},
	customerInfoDetailComponentModalContainerTextArea: {
		flex: 1,
		marginTop: distances.defaultDistance,
		marginLeft: distances.defaultDistanceMinus * 4,
	},
	customerInfoDetailComponentModalIconContainer: {
		justifyContent: 'flex-end',
	},

	customerInfoDetailComponentModalContainerAlertMessageView: {
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
		width: Dimensions.get('window').width - 80,
		justifyContent: 'center',
		alignItems: 'center',
		padding: distances.defaultDistance,
	},
	customerInfoDetailComponentModalAlertMessage: {
		fontSize: fonts.big,
		fontWeight: 'bold',
	},
	customerInfoDetailModalText: {
		justifyContent: 'flex-start',
	},
	customerInfoDetailModalAlertText: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
		flex: 1,
	},

	customerInfoDetailModalButtonContainer: {
		flexDirection: 'row',
		borderTopWidth: 1,
		borderColor: colors.borderColor,
	},
	verticalBorder: {
		borderLeftWidth: 1,
		height: 40,
		borderColor: colors.borderColor,
	},
	alertButton: {
		flex: 1,
		backgroundColor: colors.white,
		padding: 10,
		borderRadius: 5,
		alignItems: 'center',
	},

	alertButtonTextCancel: {
		fontWeight: 'bold',
		color: colors.red,
	},
	alertButtonTextOk: {
		color: colors.lightblue,
		fontWeight: 'bold',
	},
	correctIconStyle: {
		width: 16,
		height: 12,
	},
	modalContainerTextAreaKey: {
		justifyContent: 'space-between',
	},
	modalTextContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default App;
