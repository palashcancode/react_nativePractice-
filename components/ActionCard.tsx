import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
            What's new in javascript 21 - ES12
        </Text>
        </View>
        <Image 
        source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={4}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus quam minima nihil mollitia aspernatur corrupti non quo magnam nesciunt?       
             </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
            onPress={() => openWebsite('https://hashnode.com/')}
            >
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => openWebsite('https://instagram.com/')}
            >
                <Text>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 8,
        
    },
    card: {
        width: 350,
        height: 340,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,

    },
    elevatedCard: {
       backgroundColor: '#E07C24',
       elevation: 3,
       shadowOffset: {
        width: 1,
        height: 1,
    },
       shadowColor: '#333',
       shadowOpacity: 0.4,

    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#111',
        fontSize: 15,
        fontWeight: '600', 

    },
    cardImage:{
        height: 100,
    },
    bodyContainer:{
       padding: 10,

    },
    footerContainer: {
        padding: 9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 6,
        
    }
})