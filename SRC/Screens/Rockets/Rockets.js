import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, ScrollView, TouchableOpacity, Platform, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fontWeight, fontsize, fontfamily } from '../../Constants'
import { RocketData } from '../../Api'
import { useNavigation } from '@react-navigation/native';
import RocketCard from './components/RocketCard';



const Rockets = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const response = await RocketData();
    setData(response);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
      <View style={styles.header}>
        <Text style={styles.heading}>Rockets</Text>
      </View>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.Textcolor} />
        </View>
      ) : (
        <ScrollView style={styles.scroll}>
          {data.map((item, i) => (
            <TouchableOpacity key={i} onPress={() => navigation.navigate('RocketDetails', { item })}>
              <RocketCard
                key={i}
                heading={item.name}
                company={item.company}
                country={item.country}
                image={item.flickr_images[1]}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  )
}

export default Rockets

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
    paddingBottom: 70,
  },
  header: {
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  heading: {
    fontSize: fontsize.heading,
    color: colors.HeadingProfileTitles,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular,
  },
  description: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  descriptionText: {
    fontSize: fontsize.subheading,
    color: colors.PostDescriptionAnswer,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular,
    marginLeft: 10,
    lineHeight: 22,

  },
  text: {
    fontSize: fontsize.subheading,
    color: colors.HeadingProfileTitles,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular1,
    marginLeft: 10,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Text: {
    color: colors.PostDescriptionAnswer,
    fontSize: 20,
    margin: 10,
  },
  card: {
    width: '90%',
    height: 'auto',
    backgroundColor: colors.CardBackground,
    borderColor: colors.IconStroke,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
})