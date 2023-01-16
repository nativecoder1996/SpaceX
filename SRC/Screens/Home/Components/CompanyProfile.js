import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors, fontWeight, fontsize, fontfamily } from '../../../Constants'
import { CompanyData } from '../../../Api'
import { SvgXml } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'

const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const CompanyProfile = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const response = await CompanyData();
    setData(response);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
      <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
        <SvgXml xml={leftArrow} width={20} height={16} />
        <Text style={styles.heading}>Company Profile</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scroll}>
        <Text style={styles.text}>Name: {data.name}</Text>
        <Text style={styles.text}>CEO: {data.ceo}</Text>
        <Text style={styles.text}>COO: {data.coo}</Text>
        <Text style={styles.text}>CTO: {data.cto}</Text>
        <Text style={styles.text}>CTO Propulsion: {data.cto_propulsion}</Text>
        <Text style={styles.text}>Employees: {data.employees}</Text>
        <Text style={styles.text}>Founded: {data.founded}</Text>
        <Text style={styles.text}>Founder: {data.founder}</Text>
        {/* <Text style={styles.text}>Headquarters: {data.headquarters.address}, {data.headquarters.city}, {data.headquarters.state}</Text> */}
        <Text style={styles.text}>Launch Sites: {data.launch_sites}</Text>
        <Text style={styles.text}>Summary: {data.summary}</Text>
        <Text style={styles.text}>Valuation: {data.valuation}</Text>
        {/* <Text style={styles.text}>Links: {data.links.website}</Text> */}
        {/* <Text style={styles.text}>Links: {data.links.flickr}</Text> */}
        {/* <Text style={styles.text}>Links: {data.links.twitter}</Text> */}
        {/* <Text style={styles.text}>Links: {data.links.elon_twitter}</Text> */}
      </ScrollView>
    </View>
  )
}

export default CompanyProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  heading: {
    fontSize: fontsize.heading,
    fontWeight: fontWeight.bold,
    color: colors.HeadingProfileTitles,
    fontFamily: fontfamily.bold,
    marginLeft: 20,
  },
  text: {
    fontSize: fontsize.text,
    fontWeight: fontWeight.regular,
    color: colors.PostTitleQuestion,
    fontFamily: fontfamily.regular,
    marginBottom: 10,
  },
  text1: {
    fontSize: fontsize.text,
    fontWeight: fontWeight.regular,
    color: colors.TabColor,
    fontFamily: fontfamily.regular,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

})