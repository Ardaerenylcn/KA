import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomerInfoRow from '../component/CustomerInfo/CustomerInfoRow';
import CustomerInfoTiltle from '../component/CustomerInfo/CustomerInfoTiltle';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomerInfoDetailPage from './CustomerInfoDetailPage';
import colors from '../constants/colors';
import CustomerInfoHead from '../component/CustomerInfo/customerInfoHead';

function CustomerInfoPage({ navigation }) {
	return (
		<SafeAreaView style={styles.SafeAreaView}>
			<CustomerInfoHead
				customerInfoStoreCode="280025"
				customerInfoStoreName="GALLERİA MMM MİGROS"
				customerInfoStoreFullName="MİGROS TİCARET A.Ş"
				navigation={navigation}
				customerInfoStoreIsFalse=""
			/>

			<ScrollView>
				<View style={styles.header}>
					<CustomerInfoTiltle generalTitle="Genel Bilgiler" />
					<CustomerInfoRow title="Mağza kodu" desc="344024800" />
					<CustomerInfoRow title="İşyeri no." desc="304" />
					<CustomerInfoRow title="Transit / Depo" desc="Transit" />
					<CustomerInfoRow
						title="Teslimat Adresi "
						desc="SAHİL YOLU GALLERİA AVM ATAKÖY"
					/>
					<CustomerInfoRow title="Teslimat ili" desc="İstanbul" />
					<CustomerInfoRow title="Teslimat ilçesi" desc="BAKIRKÖY" />
					<CustomerInfoRow title="Posta Kodu" desc="34142" />
					<CustomerInfoRow title="Ruhsat adresi" desc="BAKIRKÖY" />
					<CustomerInfoRow title="Ruhsat No." desc="34042096PI" />
					<CustomerInfoRow title="Telefon No." desc="2126614491" />

					<CustomerInfoTiltle generalTitle="Müşteri Özelliği" />
					<CustomerInfoRow title="Müşteri Grubu" desc="Migros" />
					<CustomerInfoRow title="Müşteri Alt Grubu" desc="MMM Migros" />
					<CustomerInfoRow title="Satış ofisi" desc="İstanbul Haliç Md." />
					<CustomerInfoRow
						title="KA Merkez Müdürü"
						desc="Ulusal Zincir Mağzalar Satış Müdürü"
						descriptionName="ÖZGÜR ZÜMRÜT"
					/>
					<CustomerInfoRow
						title="KA Saha Müdürü"
						desc=" İst-Haliç Ulusal Zincir Mağzalar"
						descriptionName="ONUR KAYADELEN"
					/>
					<CustomerInfoRow
						title="KA Yönteicisi"
						desc=" İst-Haliç Ulusal Zincir Mağzalar S"
						descriptionName="SABRİ ERMAN AKTAN"
					/>

					<CustomerInfoRow title="Müşteri Özel Bölge" desc=" MARMARA BÖLGESİ" />
					<CustomerInfoRow title="Alan Direktörlüğü" desc="Marmara-Avrupa" />
					<CustomerInfoRow
						title="Nielsen Araştırma Bölgesi"
						desc="İstanbul Avrupa"
					/>

					<CustomerInfoTiltle generalTitle="Organizasyon" />
					<CustomerInfoRow title="Sevk Bilgisi" desc="B&D Dağıtımlı" />
					<CustomerInfoRow title="Veri" desc="ESENLER-DIST.-İST-HALİÇ" />

					<CustomerInfoRow
						title="Taşıcı Bayi Deposu"
						desc="ESENLER-DIST.-İST-HALİÇ"
					/>
					<CustomerInfoRow title="KA Hiyerarşi 1 " desc="Retail" />

					<CustomerInfoRow title="KA Hiyerarşi 2" desc="Retail Ulusal" />
					<CustomerInfoRow title="Müşteri Durumu " desc="Aktif" />
					<CustomerInfoRow title="Fatura Kesilmeme Nedeni" desc="" />

					<CustomerInfoTiltle generalTitle="Ek veriler" />
					<CustomerInfoRow title="Konum Grubu" desc="Alışveriş merkezi" />
					<CustomerInfoRow
						title="Dağıtım Günleri"
						desc="Pazartesi, Salı, Çarşamba, Perşembe, Cuma, Cumartesi, Pazar,"
					/>
					<CustomerInfoRow title="Toplam M²" desc=">2500M²" />
					<CustomerInfoRow title="Reyon M²" desc=" " />
					<CustomerInfoRow title="Çalışma Dönemi" desc="Standart Çalışma" />
				</View>
				<View style={styles.CustomerInfoPageScrollView}></View>
			</ScrollView>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const Stack = createNativeStackNavigator();

function CustomerInfoPageNavigate() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Müşteri Bilgileri"
				component={CustomerInfoPage}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Müşteri İşlemleri"
				options={{ headerBackTitle: 'Geri', headerShown: false }}
				component={CustomerInfoDetailPage}
			/>
		</Stack.Navigator>
	);
}

export default CustomerInfoPageNavigate;

const styles = StyleSheet.create({
	SafeAreaView: {
		flex: 1,
		backgroundColor: colors.white,
	},
	CustomerInfoPageScrollView: {
		borderBottomWidth: 0.7,
	},
});
