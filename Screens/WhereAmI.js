import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

import WhereAmIScrollAreaInputComponent from '../component/WhereAmIComponents/WhereAmIScrollAreaInputComponent';
import WhereAmIScrolViewComponent from '../component/WhereAmIComponents/WhereAmIScrolViewComponent';

const WhereAmI = () => {
	return (
		<>
			<WhereAmIScrollAreaInputComponent
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
