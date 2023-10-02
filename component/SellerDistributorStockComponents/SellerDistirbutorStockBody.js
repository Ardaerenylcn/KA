import { View, Text, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import colors from '../../constants/colors';
import distances from '../../constants/distances';

const SellerDistirbutorStockBody = ({
	productCode,
	productFullName,
	type,
	stock,
	gelKan,
}) => {
	return (
		<View style={styles.SellerDistirbutorStockBody}>
			<View style={styles.SellerDistirbutorStockBodyProductArea}>
				<Text>{productCode}</Text>
				<Text>{productFullName}</Text>
				<Text>{type}</Text>
			</View>
			<View style={styles.sellerDistirbutorStockBodyStockArea}>
				<View style={styles.sellerDistirbutorStockBodyStockAreaKaStock}>
					<Text>{stock}</Text>
				</View>
				<View style={styles.sellerDistirbutorStockBodyStockAreaGelKan}>
					<Text>{gelKan}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	SellerDistirbutorStockBody: {
		flex: 1,
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
		flexDirection: 'row',
	},
	SellerDistirbutorStockBodyProductArea: {
		flex: 1,
		marginHorizontal: distances.defaultDistance,
		marginVertical: distances.quarterDistance,
	},
	sellerDistirbutorStockBodyStockArea: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop:distances.halfDistance
	},
	sellerDistirbutorStockBodyStockAreaKaStock: {
		flex: 1,
		alignItems: 'flex-end',
	},
	sellerDistirbutorStockBodyStockAreaGelKan: {
		flex: 1,
		alignItems: 'flex-end',
		marginRight: distances.defaultDistance,
	},
});

export default SellerDistirbutorStockBody;
