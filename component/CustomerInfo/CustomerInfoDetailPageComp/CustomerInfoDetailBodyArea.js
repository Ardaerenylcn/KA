import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../constants/colors';
import distances from '../../../constants/distances';
import fonts from '../../../constants/fonts';

const App = () => {
	const data = [
		{ text: 'Ziyaret Listesi', icon: 'angle-right' },
		{ text: 'Soğutucu Envanteri', icon: 'angle-right' },
		{ text: 'Soğutucu Ekipman Sayımı', icon: 'angle-right' },
		{ text: 'Soğutucu İşlemleri', icon: 'angle-right' },
	];

	const additionalTexts = {
		'Soğutucu İşlemleri': ['Arıza Bildirimi', 'Kurulum', 'Sökme'],
	};

	const [isExpanded, setIsExpanded] = useState(false);

	const handleItemPress = item => {
		if (item.text === 'Soğutucu İşlemleri') {
			setIsExpanded(!isExpanded);
		}
	};

	const viewWidth = Dimensions.get('window').width;

	return (
		<View style={styles.container}>
			<ScrollView style={styles.listContainer}>
				{data.map((item, index) => (
					<TouchableOpacity
						key={index}
						style={[
							styles.listItem,
							item.text === 'Soğutucu İşlemleri' ? styles.noBorder : null,
						]}
						onPress={() => handleItemPress(item)}
					>
						<Text style={styles.text}>{item.text}</Text>
						<Icon
							name={item.icon}
							size={20}
							color="black"
							style={styles.icon}
						/>
					</TouchableOpacity>
				))}
			</ScrollView>
			{isExpanded && (
				<View
					style={[
						styles.additionalTextContainer,
						styles.listContainer,
						{ width: viewWidth },
					]}
				>
					{additionalTexts['Soğutucu İşlemleri'].map((text, index) => (
						<TouchableOpacity key={index} style={styles.additionalItem}>
							<Text style={styles.additionalItemText}>{text}</Text>
						</TouchableOpacity>
					))}
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		padding: distances.defaultDistance,
		margin: distances.defaultDistance,
		borderRadius: 10,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
	},
	listContainer: {
		width: '100%',
	},
	listItem: {
		borderBottomWidth: 1,
		backgroundColor: colors.backgroundColor,
		borderColor: colors.borderColor,
		flexDirection: 'row',
		alignItems: 'center',
		padding: distances.defaultDistance / 1.5,
		borderRadius: 5,
	},
	text: {
		flex: 1,
		fontSize: fonts.big,
	},
	icon: {
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
		color: 'black',
		fontSize: fonts.big,
	},
	noBorder: {
		borderBottomWidth: 0,
	},
});

export default App;
