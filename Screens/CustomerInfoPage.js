import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomerInfoRow from "../component/CustomerInfo/CustomerInfoRow"
import CustomerInfoTiltle from "../component/CustomerInfo/CustomerInfoTiltle"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CustomerInfoDetailPage from './CustomerInfoDetailPage';

function CustomerInfoPage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Button style={styles.CustomerInfoDetailPageNavigateButton} title="Müşteri işlemleri" onPress={() => navigation.navigate('Müşteri İşlemleri')} />

      <ScrollView>
        <View style={styles.header}>
          <CustomerInfoTiltle generalTitle="Genel Bilgiler" />
          <CustomerInfoRow title="Mağza kodu" desc="10" />
          <CustomerInfoRow title="İşyeri no." desc="10" />
          <CustomerInfoRow title="Transit / Depo" desc="Transit" />
          <CustomerInfoRow title="Teslimat Adresi " desc="Street:  Alsancak        
                                           City:Konak State/province/area: Izmir 
                                            Phone number  232 4637682
                                            Country calling code   
                                            +90 1234567
                                            Country  Turkey"/>
          <CustomerInfoRow title="Teslimat ili" desc="İzmir" />
          <CustomerInfoRow title="Teslimat ilçesi" desc="Alsancak" />
          <CustomerInfoRow title="Posta Kodu" desc="35000" />
          <CustomerInfoRow title="Ruhsat adresi" desc="Alsancak 009253" />
          <CustomerInfoRow title="Ruhsat No." desc="0000" />
          <CustomerInfoRow title="Telefon No." desc="0000" />

          <CustomerInfoTiltle generalTitle="Müşteri Özelliği" />
          <CustomerInfoRow title="Müşteri Grubu" desc="Migros" />
          <CustomerInfoRow title="Müşteri Alt Grubu" desc="MMM Migros" />
          <CustomerInfoRow title="Satış ofisi" desc="İstanbul" />
          <CustomerInfoRow title="KA Merkez Müdürü" desc="Ulusal Zincir Mağzalar Özgür Zümrüt" />
          <CustomerInfoRow title="KA Saha Müdürü" desc=" İst-Haliç Ulusal Zincir Mağzalar ONUR KAYADELEN" />

          <CustomerInfoTiltle generalTitle="Organizasyon" />
          <CustomerInfoRow title="Telefon No." desc="00003" />
          <CustomerInfoRow title="Telefon No." desc="00003" />
          <CustomerInfoRow title="Telefon No." desc="00003" />
          <CustomerInfoRow title="Telefon No." desc="00003" />
          <CustomerInfoTiltle generalTitle="Ek veriler" />
          <CustomerInfoRow title="Telefon No." desc="00003" />
          <CustomerInfoRow title="Telefon No." desc="00003" />
          <CustomerInfoRow title="Telefon No." desc="00003" />
          <CustomerInfoRow title="Telefon No." desc="00003" />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function CustomerInfoPageNavigate() {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Müşteri bilgilgileri" component={CustomerInfoPage} />
      <Stack.Screen name='Müşteri İşlemleri' component={CustomerInfoDetailPage} />
    </Stack.Navigator>
  );
}

export default CustomerInfoPageNavigate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  SafeAreaView: {
    flex: 1,
  },
  CustomerInfoPageNextButton: {

  },
  CustomerInfoDetailPageNavigateButton: {
    backgroundColor: "red"
  }
});
