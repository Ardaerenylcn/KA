import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import distances from '../constants/distances';
import fonts from '../constants/fonts';
import { color } from 'react-native-elements/dist/helpers';

const PriceListReportHeadComponent = ({ product }) => {
	return (
		<View style={styles.SellerDistributorStockHeaderContainer}>
			<View style={styles.SellerDistributorStockHeaderContainerTextArea}>
				<View style={styles.SellerDistributorStockHeaderContainerTextAreaLeft}>
					<Text style={styles.SellerDistributorStockHeaderTextStyleLeftSide}>
						{product}
					</Text>
				</View>

				<View style={styles.PriceListReportHeaderTextStyleRight}>
					<View style={styles.PriceListReportHeaderTitleTextArea}>
						<View styles={styles.PriceListReportHeaderTitleTextAreaTextOpen}>
							<Text style={styles.PriceListReportHeaderTitleTextAreaNormalText}>
								AÇIK
							</Text>
						</View>
						<View style={styles.PriceListReportHeaderTitleTextAreaText}>
							<Text
								style={styles.PriceListReportHeaderTitleTextAreaEvenSmallerText}
							>
								KDV Hariç
							</Text>
							<Text
								style={styles.PriceListReportHeaderTitleTextAreaEvenSmallerText}
							>
								Dahil
							</Text>
						</View>
					</View>
					<View style={styles.PriceListReportHeaderTitleTextArea}>
						<View styles={styles.PriceListReportHeaderTitleTextAreaTextOpen}>
							<Text style={styles.PriceListReportHeaderTitleTextAreaNormalText}>
								KAPALI
							</Text>
						</View>
						<View style={styles.PriceListReportHeaderTitleTextAreaText}>
							<Text
								style={styles.PriceListReportHeaderTitleTextAreaEvenSmallerText}
							>
								KDV Hariç
							</Text>
							<Text
								style={styles.PriceListReportHeaderTitleTextAreaEvenSmallerText}
							>
								Dahil
							</Text>
						</View>
					</View>

					<View style={styles.PriceListReportHeaderTitleTextArea}>
						<View styles={styles.PriceListReportHeaderTitleTextAreaTextOpen}>
							<Text style={styles.PriceListReportHeaderTitleTextAreaNormalText}>
								PERA.
							</Text>
						</View>
						<View style={styles.PriceListReportHeaderTitleTextAreaText}>
							<Text
								style={styles.PriceListReportHeaderTitleTextAreaEvenSmallerText}
							></Text>
							<Text style={styles.DefaultTextType}>Dahil</Text>
						</View>
					</View>
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
		flex: 0.1,
		justifyContent: 'flex-end',
		flexDirection: 'row',
		marginRight: distances.defaultDistance,
	},
	SellerDistributorStockHeaderContainerTextAreaLeft: {
		justifyContent: 'center',
		flex: 0.3,
		marginLeft: distances.defaultDistance,
	},

	SellerDistributorStockHeaderTextStyle: {
		color: colors.white,
		fontWeight: 'bold',
		marginLeft: distances.defaultDistance,
	},
	SellerDistributorStockHeaderTextStyleLeftSide: {
		color: colors.white,
		fontWeight: 'bold',
		marginVertical: distances.quarterDistance / 2,
		fontSize: fonts.small,
	},
	kdvTitle: {
		flexDirection: 'row',
	},
	smallTitle: {
		fontSize: fonts.small,
		fontWeight: 'bold',
		color: colors.white,
		marginLeft: 10,
	},
	PriceListReportHeaderTextStyleRight: {
		flex: 1,
		flexDirection: 'row',
	},
	PriceListReportHeaderTitleTextArea: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: distances.quarterDistance / 2,
	},

	PriceListReportHeaderTitleTextAreaTextOpen: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	PriceListReportHeaderTitleTextAreaText: {
		flexDirection: 'row',
	},
	PriceListReportHeaderTitleTextAreaEvenSmallerText: {
		fontSize: fonts.evenSmaller,
		marginHorizontal: distances.quarterDistance / 2,
		color: colors.white,
		fontWeight: 'bold',
	},
	PriceListReportHeaderTitleTextAreaNormalText: {
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 12,
	},
	DefaultTextType: {
		color: colors.white,
		fontSize: 12,
		fontWeight: 'bold',
	},
});

export default PriceListReportHeadComponent;
