import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';
import { colors, fontWeight, fontfamily, fontsize } from '../../Constants'
import RoadstarCard from './Components/RoadstarCard';
import DragonCard from './Components/DragonCard';


const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
      <ScrollView>
        <ImageBackground source={require('../../Assets/Photos/Home.jpg')} style={styles.image}>
          <Image source={require('../../Assets/Photos/logo.png')} style={styles.logo} />
          <View style={styles.card}>
            <Text style={styles.quotes}>I regard SpaceX as one of the many vandals of Space.</Text>
            <Text style={styles.author}>- Elon Musk</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CompanyProfile')}>
              <LinearGradient colors={['#0071e8', '#0071e8']} style={styles.GObuttonbox}>
                <Text style={styles.GObutton}>Explore </Text>
              </LinearGradient>
            </TouchableOpacity>
            <Image source={require('../../Assets/Photos/ELM.png')} style={styles.elm} />
          </View>
        </ImageBackground>
        <View style={styles.box}>
          <Text style={styles.Explore}>Explore</Text>
          <View style={styles.boxView}>
            <TouchableOpacity style={styles.box2} onPress={() => navigation.navigate('Rocketnames')}>
              <Image source={require('../../Assets/Photos/rocket.png')} style={styles.rocket} />
              <Text style={styles.rockettext}>rocket</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box2} onPress={() => navigation.navigate('CrewPage')}>
              <Image source={require('../../Assets/Photos/crew.png')} style={styles.rocket} />
              <Text style={styles.rockettext}>crew</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box2} onPress={() => navigation.navigate('LaunchPadPage')}>
              <Image source={require('../../Assets/Photos/LaunchPad.png')} style={styles.rocket} />
              <Text style={styles.rockettext}>LaunchPad</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.Explore}>Latest News</Text>
          <View style={styles.boxView2}>
            <RoadstarCard />
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.dargon}>Dragon</Text>
          <View style={styles.boxView2}>
            <DragonCard />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
    paddingBottom: 70,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  heading: {
    color: colors.HeadingProfileTitles,
    fontSize: fontsize.heading,
    fontWeight: fontWeight.bold,
    fontFamily: fontfamily.fontRegular,
    marginTop: 20,
    marginLeft: 20,
  },
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  card: {
    width: '100%',
    height: 174,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
  },
  quotes: {
    color: colors.HeadingProfileTitles,
    fontSize: fontsize.heading,
    fontWeight: fontWeight.medium,
    fontFamily: fontfamily.fontRegular2,
    marginTop: 20,
    marginLeft: 20,
    lineHeight: 30,
  },
  author: {
    color: colors.HeadingProfileTitles,
    fontSize: fontsize.heading,
    fontWeight: fontWeight.medium,
    fontFamily: fontfamily.fontRegular2,
    marginTop: 20,
    marginLeft: 20,
  },
  elm: {
    width: 150,
    height: 140,
    resizeMode: 'contain',
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    bottom: -20,
    zIndex: -1,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 20,
  },
  GObuttonbox: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  GObutton: {
    color: colors.HeadingProfileTitles,
    fontSize: fontsize.heading,
    fontWeight: fontWeight.medium,
    fontFamily: fontfamily.fontRegular2,
  },
  box: {
    justifyContent: 'center',
    marginTop: 20,
  },
  boxView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  Explore: {
    color: colors.HeadingProfileTitles,
    fontSize: fontsize.heading,
    fontWeight: fontWeight.bold,
    fontFamily: fontfamily.fontRegular,
    marginLeft: 20,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: colors.HeadingProfileTitles,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rocket: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  rockettext: {
    color: colors.backgroundcolor,
    fontSize: fontsize.paragraph,
    fontWeight: fontWeight.bold,
    fontFamily: fontfamily.fontRegular,
  },
  boxView2: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  dargon: {
    color: colors.HeadingProfileTitles,
    fontSize: fontsize.heading,
    fontWeight: fontWeight.bold,
    fontFamily: fontfamily.fontRegular,
    marginLeft: 20,
    marginTop: 20,
  },

})