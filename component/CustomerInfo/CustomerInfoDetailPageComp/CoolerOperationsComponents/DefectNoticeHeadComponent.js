import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import colors from '../../../../constants/colors';
import distances from '../../../../constants/distances';
import styleVariables from '../../../../Styles/styleVariables';

const DefectNoticeHeadComponent = ({ storeCode, storeFullName }) => {
	return (
		<View
			style={[
				styles.defectNoticeHeadComponentMainContainer,
				styleVariables.shadow,
			]}
		>
			<View style={styles.defectNoticeHeadContainer}>
				<View style={styles.defectNoticeHeadTextArea}>
					<Text>{storeCode}</Text>
					<Text style={styles.defectNoticeHeadComponentStoreName}>
						{storeFullName}
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	defectNoticeHeadComponentMainContainer: {
		flex: 1,
	},
	defectNoticeHeadContainer: {
		flex: 0.1,
		justifyContent: 'center',
		marginHorizontal: distances.defaultDistance,
		backgroundColor: colors.white,
		padding: distances.defaultDistance,
		margin: distances.defaultDistance,
		borderRadius: 10,
	},
	defectNoticeHeadTextArea: {
		marginHorizontal: distances.defaultDistance,
	},
	defectNoticeHeadComponentStoreName: {
		color: colors.grey,
	},
});

export default DefectNoticeHeadComponent;
