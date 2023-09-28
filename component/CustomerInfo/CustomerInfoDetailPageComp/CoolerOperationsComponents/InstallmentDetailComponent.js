import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../../../constants/colors';
import KurulumButton from '../../../buttons/InstallmentButton';
import UrunListesiFotografButton from '../../../buttons/UrunListesiFotografButton';
import distances from '../../../../constants/distances';
import fonts from '../../../../constants/fonts';

const InstallmentDetailComponent = ({ code, description }) => {
	return (
		<View style={styles.KurulumBodyContainer}>
			<View style={styles.KurulumBodyViews}>
				<View style={styles.KurulumBodyViewsText}>
					<Text style={styles.KurulumBodyViewsTextCodeAndDesc}>{code}</Text>
					<Text style={styles.KurulumBodyViewsTextCodeAndDesc}>
						{description}
					</Text>
				</View>

				<View style={styles.KurulumBodyContainerButtonArea}>
					<KurulumButton />
					<UrunListesiFotografButton />
				</View>
			</View>
		</View>
	);
};

export default InstallmentDetailComponent;

const styles = StyleSheet.create({
	KurulumBodyViewsTextCodeAndDesc: {
		fontSize: fonts.small,
		marginVertical: distances.quarterDistance / 4,
	},
	KurulumBodyContainer: {
		flex: 1,
	},
	KurulumBodyViews: {
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
	},
	KurulumBodyContainerButtonArea: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: distances.defaultDistance,
		marginBottom: distances.defaultDistance / 4,
	},
	KurulumBodyViewsText: {
		marginHorizontal: distances.defaultDistance,
	},
});