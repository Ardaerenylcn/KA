import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import WhereAmIScrolViewComponent from '../component/WhereAmIComponents/WhereAmIScrolViewComponent';
import PlaceHolder from '../component/Placeholder/PlaceHolder';

const WhereAmI = () => {
	return (
		<>
			<PlaceHolder
				placeholder={'Malzeme ara...'}
				StoreCode={'289623'}
				StoreFullname={'BUYAKA AVM İSTANBUL MM MİGROS'}
			/>

			<ScrollView>
				<WhereAmIScrolViewComponent
					StoreCode={'289623'}
					StoreFullname={'BUYAKA AVM İSTANBUL MM MİGROS'}
				/>
				<WhereAmIScrolViewComponent
					StoreCode={'291948'}
					StoreFullname={'5M MEYDAN İSTANBUL AVM'}
				/>
				<WhereAmIScrolViewComponent
					StoreCode={'289623'}
					StoreFullname={'BUYAKA AVM İSTANBUL MM MİGROS'}
				/>
				<WhereAmIScrolViewComponent
					StoreCode={'293849'}
					StoreFullname={'BUYAKA AVM İSTANBUL MM MİGROS'}
				/>
				<WhereAmIScrolViewComponent
					StoreCode={'289623'}
					StoreFullname={'BUYAKA AVM İSTANBUL MM MİGROS'}
				/>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({});

export default WhereAmI;
