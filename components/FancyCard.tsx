import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.HeadingText}>Trending Places</Text>
      <View style={[styles.card , styles.cardElevated]}>
        <Image 
        source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ'

        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>pink city jaipur</Text>
            <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aliquam.</Text>
            <Text style={styles.cardFooter}>12 minutes away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    HeadingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8,
      textAlign: 'center',


    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,

    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        }
        
    },
    cardImage: {
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6 ,
        borderTopRightRadius: 6,


    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 6,
    },
    cardLabel: {
        fontSize: 16,
        marginBottom: 4,

    },
    cardDescription: {
         fontSize: 14,
         marginBottom: 12,
         flexShrink: 1,
         marginTop: 6,
    },
    cardFooter: {
         fontSize:11,
    }
})