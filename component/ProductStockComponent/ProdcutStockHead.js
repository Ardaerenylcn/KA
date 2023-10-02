import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../constants/colors';
import distances from '../../constants/distances';

const ProductStockHead = ({ product }) => {
	return (
		<View style={styles.SellerDistributorStockHeaderContainer}>
			<View style={styles.SellerDistributorStockHeaderContainerTextArea}>
				<View style={styles.SellerDistributorStockHeaderContainerTextAreaLeft}>
					<Text style={styles.SellerDistributorStockHeaderTextStyleLeftSide}>
						{product}
					</Text>
				</View>
				<View style={styles.SellerDistributorStockHeaderContainerTextAreaRight}>
					<Text style={styles.SellerDistributorStockHeaderTextStyle}>
						KA Stok
					</Text>
					<Text style={styles.SellerDistributorStockHeaderTextStyle}>
						GEL.KAN.
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	SellerDistributorStockHeaderContainer: {
		flex: 1,
		backgroundColor: colors.efesblue,
	},
	SellerDistributorStockHeaderContainerTextArea: {
		flexDirection: 'row',
	},
	SellerDistributorStockHeaderContainerTextAreaRight: {
		flex: 1,
		justifyContent: 'flex-end',
		flexDirection: 'row',
		marginRight: distances.defaultDistance,
	},
	SellerDistributorStockHeaderContainerTextAreaLeft: {
		marginLeft: distances.defaultDistance,
		flex: 1,
	},

	SellerDistributorStockHeaderTextStyle: {
		color: colors.white,
		fontWeight: 'bold',
		marginLeft: distances.defaultDistance,
		marginVertical: distances.quarterDistance / 2,
	},
	SellerDistributorStockHeaderTextStyleLeftSide: {
		color: colors.white,
		fontWeight: 'bold',
		marginVertical: distances.quarterDistance / 2,
	},
});

export default ProductStockHead;
