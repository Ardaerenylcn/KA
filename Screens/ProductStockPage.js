import { ScrollView } from 'react-native';
import React from 'react';
import ProductStockHead from '../component/ProductStockComponent/ProdcutStockHead';
import ProductStockBody from '../component/ProductStockComponent/ProductStockBody';

const ProductStockPage = () => {
	return (
		<>
			<ScrollView>
				<ProductStockHead product={'EFES PİLSEN TVA 50 CL KUTU'} />
				<ProductStockBody
					productCode={'20032'}
					distirbutor={'ESENLER-DIST.-İST-HALİÇ'}
					stock={1.529}
					gelKan={3000}
				/>
				<ProductStockBody
					productCode={'20174'}
					distirbutor={'BAYRAMPAŞA DİST.-İST HALİÇ'}
					stock={1.657}
					gelKan={2.215}
				/>
				<ProductStockBody
					productCode={'20039'}
					distirbutor={'FATİH-DIST.-İST-HALİÇ'}
					stock={242}
					gelKan={1.312}
				/>
				<ProductStockBody
					productCode={'20224'}
					distirbutor={'SİLİVRİ-DIST'}
					stock={1200}
					gelKan={1.289}
				/>
			</ScrollView>
		</>
	);
};

export default ProductStockPage;
