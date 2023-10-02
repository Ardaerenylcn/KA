import { ScrollView } from 'react-native';
import React from 'react';
import SellerDistributorAndProductStockHeader from '../component/SellerDistributorStockComponents/SellerDistributorAndProductStockHeader';
import ProductStockBody from '../component/ProductStockComponent/ProductStockBody';

const ProductStockPage = () => {
	return (
		<>
			<ScrollView>
				<SellerDistributorAndProductStockHeader
					product={'EFES PİLSEN TVA 50 CL KUTU'}
				/>
				<ProductStockBody
					productCode={'20032'}
					distirbutor={'ESENLER-DIST.-İST-HALİÇ'}
					stock={1200}
					gelKan={12345}
				/>
				<ProductStockBody
					productCode={'20032'}
					distirbutor={'ESENLER-DIST.-İST-HALİÇ'}
					stock={1200}
					gelKan={12345}
				/>
				<ProductStockBody
					productCode={'20032'}
					distirbutor={'ESENLER-DIST.-İST-HALİÇ'}
					stock={1200}
					gelKan={12345}
				/>
				<ProductStockBody
					productCode={'20032'}
					distirbutor={'ESENLER-DIST.-İST-HALİÇ'}
					stock={1200}
					gelKan={12345}
				/>
			</ScrollView>
		</>
	);
};

export default ProductStockPage;
