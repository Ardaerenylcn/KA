import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
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
		<View style={styles.priceListReportBody}>
			<View style={styles.priceListReportProductArea}>
				<Text>{productCode}</Text>
				<Text style={styles.priceListReportBodyComponentProductFullName}>
					{productFullName}
				</Text>
			</View>

			<View style={styles.priceListReportBodyComponentDataArea}>
				<Text style={styles.priceListReportBodySmallText}>
					{openPriceVatExc}
				</Text>
				<Text style={styles.priceListReportBodySmallText}>
					{openPriceVatInc}
				</Text>
			</View>
			<View style={styles.priceListReportBodyComponentDataArea}>
				<Text style={styles.priceListReportBodySmallText}>
					{closePriceVatExc}
				</Text>
				<Text style={styles.priceListReportBodySmallText}>
					{closePriceVatInc}
				</Text>
			</View>
			<View style={styles.priceListReportBodyComponentDataArea}>
				<View style={styles.peraTextArea}>
					<Text style={styles.peraTextAreaSmallText}>{pera}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	priceListReportBody: {
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
		flexDirection: 'row',
		margin: -4,
	},
	priceListReportProductArea: {
		flex: 1,
		marginRight: 10,
		marginLeft: distances.defaultDistance,
		marginVertical: distances.quarterDistance,
	},
	priceListReportBodyComponentProductFullName: {
		color: colors.grey,
		fontSize: 10,
	},
	priceListReportBodyComponentDataArea: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	priceListReportBodySmallText: {
		fontSize: 10,
		flex: 1,
	},
	peraTextArea: {
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
