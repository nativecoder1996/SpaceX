import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SvgXml } from 'react-native-svg'
import { colors, fontsize, fontWeight, fontfamily } from '../../../Constants'
import RocketCard from '../../Rockets/components/RocketCard'
import { useNavigation } from '@react-navigation/native'
import { LaunchPadData } from '../../../Api'


const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const LaunchPadPage = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await LaunchPadData();
    setData(response);
    setLoading(false);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
      <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
        <SvgXml xml={leftArrow} width={20} height={16} />
        <Text style={styles.heading}>LaunchPads</Text>
      </TouchableOpacity>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.Textcolor} />
        </View>
      ) : (
        <ScrollView style={styles.scroll}>
          {data.map((item, i) => (
            <TouchableOpacity key={i} onPress={() => navigation.navigate('LaunchPadDetails', { item })}>
              <RocketCard
                key={i}
                heading={item.name}
                company={item.region}
                country={item.locality}
                image={item.images.large[0]}
                onPress={() => navigation.navigate('LaunchPadDetails', { item })}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  )
}


export default LaunchPadPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
    paddingBottom: 70,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  heading: {
    fontSize: fontsize.heading,
    fontFamily: fontfamily.fontRegular2,
    color: colors.HeadingProfileTitles,
    fontWeight: fontWeight.medium,
    marginLeft: 20,
  },
})