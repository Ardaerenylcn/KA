import { View, Text, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import colors from '../constants/colors';
import distances from '../constants/distances';
import fonts from '../constants/fonts';

const PriceListReportBodyComponent = ({
	productCode,
	productFullName,
	openPriceVatInc,
	openPriceVatExc,
	closePriceVatInc,
	closePriceVatExc,
	pera,
}) => {
	return (
		<View style={styles.SellerDistirbutorStockBody}>
			<View style={styles.SellerDistirbutorStockBodyProductArea}>
				<Text>{productCode}</Text>
				<Text style={styles.PriceListReportBodyComponentProductFullName}>
					{productFullName}
				</Text>
			</View>

			<View style={styles.PriceListReportBodyComponentDataArea}>
				<Text style={styles.PriceListReportBodySmallText}>
					{openPriceVatExc}
				</Text>
				<Text style={styles.PriceListReportBodySmallText}>
					{openPriceVatInc}
				</Text>
			</View>
			<View style={styles.PriceListReportBodyComponentDataArea}>
				<Text style={styles.PriceListReportBodySmallText}>
					{closePriceVatExc}
				</Text>
				<Text style={styles.PriceListReportBodySmallText}>
					{closePriceVatInc}
				</Text>
			</View>
			<View style={styles.PriceListReportBodyComponentDataArea}>
				<View style={styles.PeraTextArea}>
					<Text style={styles.peraTextAreaSmallText}>{pera}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	SellerDistirbutorStockBody: {
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
		flexDirection: 'row',
		margin: -4,
	},
	SellerDistirbutorStockBodyProductArea: {
		flex: 1,
		marginRight: 10,
		marginLeft: distances.defaultDistance,
		marginVertical: distances.quarterDistance,
	},
	sellerDistirbutorStockBodyStockArea: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: distances.halfDistance,
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
	PriceListReportBodyComponentProductFullName: {
		color: colors.grey,
		fontSize: 10,
	},
	PriceListReportBodyComponentDataArea: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	PriceListReportBodySmallText: {
		fontSize: 10,
		flex: 1,
	},
	PeraTextArea: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		alignContent: 'center',
	},
	peraTextAreaSmallText: {
		fontSize: 10,
	},
});

export default PriceListReportBodyComponent;
