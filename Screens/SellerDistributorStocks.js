import {
	View,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
	Image,
} from 'react-native';
import React, { useRef } from 'react';
import SellerDistributorStockHeader from '../component/SellerDistributorStockComponents/SellerDistributorStockHeader';
import SellerDistirbutorStockBody from '../component/SellerDistributorStockComponents/SellerDistirbutorStockBody';
import colors from '../constants/colors';

const SellerDistributorStocks = () => {
	const scrollViewRef = useRef(null);

	const handlePress = () => {
		if (scrollViewRef.current) {
			scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
		}
	};

	return (
		<View>
			<TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
				<Image
					style={styles.tinyArrowLogo}
					source={require('../assets/icons/ic-arrow-up.png')}
				/>
			</TouchableOpacity>

			<ScrollView ref={scrollViewRef}>
				<>
					<SellerDistributorStockHeader product={'Efes Pilsen'} />
					<SellerDistirbutorStockBody
						productCode={'150003'}
						productFullName={'EFES PİLSEN KAS 50 CL'}
						type={'STEINIE RB'}
						stock={216}
						gelKan={180}
					/>
					<SellerDistirbutorStockBody
						productCode={'150008'}
						productFullName={'EFES PİLSEN KL 33 CL NRB'}
						stock={84}
						gelKan={123}
					/>
					<SellerDistirbutorStockBody
						productCode={'150021'}
						productFullName={'EFES PİLSEN TVA 50 CL'}
						type={'KTU'}
						stock={1.657}
						gelKan={2.215}
					/>
					<SellerDistirbutorStockBody
						productCode={'151400'}
						productFullName={'EFES PİLSEN TVA 50 CL'}
						type={'KTU 6*4 MP'}
						stock={647}
						gelKan={0}
					/>
					<SellerDistirbutorStockBody
						productCode={'151514'}
						productFullName={'EFES PİLSEN TVA 33 CL'}
						type={'SLEEK'}
						stock={2}
						gelKan={216}
					/>
					<SellerDistirbutorStockBody
						productCode={'151830'}
						productFullName={'EFES PİLSEN KL 30 CL'}
						type={'STEINIE NRB*24'}
						stock={226}
						gelKan={0}
					/>
					<SellerDistirbutorStockBody
						productCode={'151899'}
						productFullName={'EFES PiLSEN KAS 50 CL RB'}
						type={'YENi SiSE.'}
						stock={404}
						gelKan={393}
					/>
					<SellerDistirbutorStockBody
						productCode={'151962'}
						productFullName={'EFES PİLSEN TVA 50 CL KTU 4*6 MP 2021'}
						stock={214}
						gelKan={0}
					/>

					<SellerDistirbutorStockBody
						productCode={'151712'}
						productFullName={"EFES RED ALE KOLi 33 CL TY 12'Li"}
						stock={0}
						gelKan={18}
					/>
					<SellerDistirbutorStockBody
						productCode={'151898'}
						productFullName={"EFES RED ALE KOLi 33 CL TY 12'Li"}
						stock={0}
						gelKan={18}
					/>
					<SellerDistirbutorStockBody
						productCode={'151898'}
						productFullName={'EFES PiLSEN TVA 50 CL RB 6*4 MP YENiSiSE'}
						stock={0}
						gelKan={90}
					/>
					<SellerDistirbutorStockBody
						productCode={'152101'}
						productFullName={'EFES PiLSEN FIÇI 50 L Miller Genuine Draft'}
						stock={0}
						gelKan={55}
					/>
					<SellerDistributorStockHeader product={'Miller Genuine Draft'} />
					<SellerDistirbutorStockBody
						productCode={'150137'}
						productFullName={'MGD KL 33 CL NRB'}
						stock={46}
						gelKan={11}
					/>
					<SellerDistirbutorStockBody
						productCode={'150138'}
						productFullName={'MGD KL 33 CL NRB 4*6 MP'}
						stock={3}
						gelKan={0}
					/>
					<SellerDistirbutorStockBody
						productCode={'150204'}
						productFullName={'MGD TVA 50 CL KTU'}
						stock={17}
						gelKan={26}
					/>
					<SellerDistirbutorStockBody
						productCode={'151420'}
						productFullName={"MGD KL 50 CL NRB Beck's"}
						stock={123}
						gelKan={114}
					/>
					<SellerDistirbutorStockBody
						productCode={'150284'}
						productFullName={'BECKS KL 33 CL NRB'}
						stock={30}
						gelKan={21}
					/>
					<SellerDistirbutorStockBody
						productCode={'150292'}
						productFullName={'BECKS TVA 50 CL KTU'}
						stock={60}
						gelKan={69}
					/>
					<SellerDistirbutorStockBody
						productCode={'151384'}
						productFullName={'BECKS KL 50 CL NRB'}
						stock={148}
						gelKan={209}
					/>
					<SellerDistirbutorStockBody
						productCode={'151905'}
						productFullName={'BECKS KL 50 CL NRB 4*4'}
						stock={166}
						gelKan={0}
					/>
				</>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	floatingButton: {
		position: 'absolute',
		borderRadius: 28,
		bottom: 16,
		right: 16,
		width: 52,
		height: 52,
		backgroundColor: colors.efesblue,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 3,
		flex: 1,
		zIndex: 1,
	},
	tinyArrowLogo: {
		width: 28,
		height: 28,
	},
});
export default SellerDistributorStocks;
