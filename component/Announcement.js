import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Announcement = () => {
    const announcements = [
        { id: '1', title: '9951243 Meydan AVM İSTANBUL ÜMRANİYE ' },
        { id: '2', title: 'Duyuru 2' },
        { id: '4', title: 'Duyuru 3' },
        { id: '5', title: 'Duyuru 4' },
        { id: '6', title: 'Duyuru 5' },
        { id: '7', title: 'Duyuru 6' },
        { id: '8', title: 'Duyuru 7' },
        { id: '9', title: 'Duyuru 8' },
        { id: '10', title: 'Duyuru 9' },
    ];

    const renderAnnouncementItem = ({ item }) => {
        let titleFontSize = 16; 
        if (item.title.length > 30) {
            titleFontSize = 15;
            if(item.title.length>34){
                titleFontSize = 12;
            }
        }

        return (
            <View style={styles.announcementItem}>
                <View style={styles.textContainer}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.announcementTitle, { fontSize: titleFontSize }]}>{item.title}</Text>
                    <Text style={styles.additionalText}>Kredi limiti aşıldı.</Text>
                </View>
                <FontAwesome name="warning" size={26} color="red" style={styles.icon} />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Duyurular</Text>
                {announcements.map(item => (
                    <View key={item.id}>
                        {renderAnnouncementItem({ item })}
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        backgroundColor: '#f3f3f3',
        margin: 16,
        borderRadius: 8,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 7,
            height: 10,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black',
        marginBottom: 10,
    },
    announcementItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
    },
    textContainer: {
        flex: 1,
    },
    announcementTitle: {
        fontWeight: '400',
        color: 'black',
        maxWidth: '100%',
    },
    additionalText: {
        fontSize: 14,
        color: 'red',
    },
    icon: {
        marginLeft: 16,
    },
});

export default Announcement;
