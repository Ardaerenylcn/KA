import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import distances from '../constants/distances';
import fonts from '../constants/fonts';

const PriceListReportHeadComponent = ({ product }) => {
	return (
		<View style={styles.priceListReportHeadComponentContainer}>
			<View style={styles.priceListReportStockHeadContainerTextArea}>
				<View style={styles.priceListReportHeadComponentTextAreaLeft}>
					<Text style={styles.priceListReportHeadTextStyleLeftSide}>
						{product}
					</Text>
				</View>

				<View style={styles.priceListReportHeaderTextStyleRight}>
					<View style={styles.priceListReportHeaderTitleTextArea}>
						<View style={styles.priceListReportHeaderTitleTextAreaTextOpen}>
							<Text style={styles.priceListReportHeaderTitleTextAreaNormalText}>
								AÇIK
							</Text>
						</View>
						<View style={styles.priceListReportHeaderTitleTextAreaText}>
							<Text
								style={styles.priceListReportHeaderTitleTextAreaEvenSmallerText}
							>
								KDV Hariç
							</Text>
							<Text
								style={styles.priceListReportHeaderTitleTextAreaEvenSmallerText}
							>
								Dahil
							</Text>
						</View>
					</View>
					<View style={styles.priceListReportHeaderTitleTextArea}>
						<View style={styles.priceListReportHeaderTitleTextAreaTextOpen}>
							<Text style={styles.priceListReportHeaderTitleTextAreaNormalText}>
								KAPALI
							</Text>
						</View>
						<View style={styles.priceListReportHeaderTitleTextAreaText}>
							<Text
								style={styles.priceListReportHeaderTitleTextAreaEvenSmallerText}
							>
								KDV Hariç
							</Text>
							<Text
								style={styles.priceListReportHeaderTitleTextAreaEvenSmallerText}
							>
								Dahil
							</Text>
						</View>
					</View>

					<View style={styles.priceListReportHeaderTitleTextArea}>
						<View style={styles.priceListReportHeaderTitleTextAreaTextOpen}>
							<Text style={styles.priceListReportHeaderTitleTextAreaNormalText}>
								PERA.
							</Text>
						</View>
						<View style={styles.priceListReportHeaderTitleTextAreaText}>
							<Text
								style={styles.priceListReportHeaderTitleTextAreaEvenSmallerText}
							></Text>
							<Text style={styles.defaultTextType}>Dahil</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	priceListReportHeadComponentContainer: {
		flex: 1,
		backgroundColor: colors.efesblue,
	},
	priceListReportStockHeadContainerTextArea: {
		flexDirection: 'row',
	},
	priceListReportHeadComponentTextAreaLeft: {
		justifyContent: 'center',
		flex: 0.3,
		marginLeft: distances.defaultDistance,
	},

	sellerDistributorStockHeaderTextStyle: {
		color: colors.white,
		fontWeight: 'bold',
		marginLeft: distances.defaultDistance,
	},
	priceListReportHeadTextStyleLeftSide: {
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
	priceListReportHeaderTextStyleRight: {
		flex: 1,
		flexDirection: 'row',
	},
	priceListReportHeaderTitleTextArea: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: distances.quarterDistance / 2,
	},

	priceListReportHeaderTitleTextAreaTextOpen: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	priceListReportHeaderTitleTextAreaText: {
		flexDirection: 'row',
	},
	priceListReportHeaderTitleTextAreaEvenSmallerText: {
		fontSize: fonts.evenSmaller,
		marginHorizontal: distances.quarterDistance / 2,
		color: colors.white,
		fontWeight: 'bold',
	},
	priceListReportHeaderTitleTextAreaNormalText: {
		color: colors.white,
		fontWeight: 'bold',
		fontSize: 12,
	},
	defaultTextType: {
		color: colors.white,
		fontSize: 12,
		fontWeight: 'bold',
	},
});

export default PriceListReportHeadComponent;
