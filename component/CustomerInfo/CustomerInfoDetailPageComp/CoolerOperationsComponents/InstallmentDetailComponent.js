import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../../../../constants/colors';
import InstallmentButton from '../../../buttons/InstallmentButton';
import UrunListesiFotografButton from '../../../buttons/UrunListesiFotografButton';
import distances from '../../../../constants/distances';
import fonts from '../../../../constants/fonts';

const InstallmentDetailComponent = ({ code, description }) => {
	return (
		<View style={styles.installmentBodyContainer}>
			<View style={styles.installmentBodyViews}>
				<View style={styles.installmentBodyViewsText}>
					<Text style={styles.installmentBodyViewsTextCodeAndDesc}>{code}</Text>
					<Text style={styles.installmentBodyViewsTextCodeAndDesc}>
						{description}
					</Text>
				</View>

				<View style={styles.installmentBodyContainerButtonArea}>
					<InstallmentButton />
					<UrunListesiFotografButton />
				</View>
			</View>
		</View>
	);
};

export default InstallmentDetailComponent;

const styles = StyleSheet.create({
	installmentBodyViewsTextCodeAndDesc: {
		fontSize: fonts.small,
		marginVertical: distances.quarterDistance / 4,
	},
	installmentBodyContainer: {
		flex: 1,
	},
	installmentBodyViews: {
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
	},
	installmentBodyContainerButtonArea: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: distances.defaultDistance,
		marginBottom: distances.defaultDistance / 4,
	},
	installmentBodyViewsText: {
		marginHorizontal: distances.defaultDistance,
	},
});
