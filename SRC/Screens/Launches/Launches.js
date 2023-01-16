import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fontWeight, fontfamily, fontsize } from '../../Constants'
import { useNavigation } from '@react-navigation/native';
import { LaunchData ,LatestLaunchData,PastLaunchData} from '../../Api'
import LaunchesCard from './Components/LaunchesCard';

const Launches = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [latestLaunch, setLatestLaunch] = useState([]);
  const [pastLaunch, setPastLaunch] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();

  }, [])
  const fetchData = async () => {
    const response = await LaunchData();
    const response1 = await LatestLaunchData();
    const response2 = await PastLaunchData();
    setData(response);
    setLatestLaunch(response1);
    setPastLaunch(response2);
    setLoading(false);
  }
  
  const count = data?.filter((item) => item.success === true).length;
  const reflight = data?.filter((item) => item.cores[0].reused === true).length;
  const Data = data.slice(0, 5);
  const PastLaunch = pastLaunch.slice(7, 15);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
      <ScrollView style={styles.scroll}>
        <ImageBackground source={require('../../Assets/Photos/Launches.jpg')} style={styles.Image}>
          <View style={styles.UpcomingLaunches}>
            <Text style={styles.UpcomingLaunchesText}>Upcoming Launches</Text>
            <Text style={styles.UpcomingLaunchesText1}>StarLink Mission</Text>
            <TouchableOpacity style={styles.UpcomingLaunchesButton}>
              <Text style={styles.UpcomingLaunchesButtonText}>Watch</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.launchesDetails}>
          <View style={styles.TotalLaunches}>
            <Text style={styles.TotalLaunchesNumber}>{data.length}</Text>
            <Text style={styles.TotalLaunchesText}>Total Launches</Text>
          </View>
          <View style={styles.TotalLaunches}>
            <Text style={styles.TotalLaunchesNumber}>{count}</Text>
            <Text style={styles.TotalLaunchesText}>Total Landings</Text>
          </View>
          <View style={styles.TotalLaunches}>
            <Text style={styles.TotalLaunchesNumber}>{reflight}</Text>
            <Text style={styles.TotalLaunchesText}>Total Reflights</Text>
          </View>
        </View>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={colors.Textcolor} />
          </View>
        ) : (
          <>
          <View style={styles.LaunchesCardHeading}>
          <View style={styles.headingbox}>
            <Text style={styles.LaunchesCardHeadingText}>Latest Launches</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('LaunchPage' , {data})}>
            <Text style={styles.seeall}>See All</Text>
            </TouchableOpacity>
            </View>
            <ScrollView style={styles.LaunchesCard} horizontal>
              {Data?.map((item, index) => (
                <TouchableOpacity  key={index} style={styles.LaunchesCard} onPress={()=>navigation.navigate('LaunchDetails' , {item})}>
                  <LaunchesCard
                    key={index}
                    heading={item.name}
                    describe={item.details}
                    image={'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    width={193}
                    onPress={() => navigation.navigate('LaunchDetails', { data })}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={styles.LaunchesCardHeading}>
            <View style={styles.headingbox}>
            <Text style={styles.LaunchesCardHeadingText}>Upcoming Launches</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('LaunchPage' , {data})}>
            <Text style={styles.seeall}>See All</Text>
            </TouchableOpacity>
            </View>
            <ScrollView style={styles.LaunchesCard} horizontal>
              <TouchableOpacity style={styles.LaunchesCard} onPress={()=>navigation.navigate('LaunchDetails' , {item : latestLaunch})}>
              <LaunchesCard
                heading={latestLaunch.name}
                describe={latestLaunch.details}
                image={'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                width={193}
                onPress={() => navigation.navigate('LaunchDetails', { data })}
              />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={styles.LaunchesCardHeading}>
          <View style={styles.headingbox}>
            <Text style={styles.LaunchesCardHeadingText}>Past Launches</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('LaunchPage' , {data})}>
            <Text style={styles.seeall}>See All</Text>
            </TouchableOpacity>
            </View>
            <ScrollView style={styles.LaunchesCard} horizontal>
             {PastLaunch?.map((item, index) => (
                <TouchableOpacity key={index} style={styles.LaunchesCard} onPress={()=>navigation.navigate('LaunchDetails' , {item})}>
                  <LaunchesCard
                    key={index}
                    heading={item.name}
                    describe={item.details}
                    image={'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    width={193}
                    onPress={() => navigation.navigate('LaunchDetails', { data })}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          </>
        )}
      </ScrollView>
    </View>

  )
}

export default Launches

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingBottom: 70
  },
  scroll: {
    flex: 1
  },
  Image: {
    width: '100%',
    height: 600,
    justifyContent: 'center',
    alignItems: 'center'
  },
  UpcomingLaunches: {
    width: '100%',
    height: 200,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  UpcomingLaunchesText: {
    color: colors.HeadingProfileTitles,
    fontSize: fontsize.heading,
    fontWeight: fontWeight.medium,
    fontFamily: fontfamily.fontRegular,
  },
  UpcomingLaunchesText1: {
    color: colors.HeadingProfileTitles,
    fontSize: fontsize.bigheading,
    fontWeight: fontWeight.bold,
    fontFamily: fontfamily.fontRegular,
    marginTop: 10
  },
  UpcomingLaunchesButton: {
    width: 100,
    height: 40,
    backgroundColor: colors.TabColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20
  },
  UpcomingLaunchesButtonText: {
    color: colors.HeadingProfileTitles,
    fontSize: fontsize.paragraph,
    fontWeight: fontWeight.medium,
    fontFamily: fontfamily.fontRegular,
  },
  launchesDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#000'
  },
  TotalLaunches: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TotalLaunchesText: {
    color: colors.HeadingProfileTitles,
    fontSize: fontsize.paragraph,
    fontWeight: fontWeight.bold,
    fontFamily: fontfamily.fontRegular,
  },
  TotalLaunchesNumber: {
    color: colors.TabColor,
    fontSize: fontsize.bigheading,
    fontWeight: fontWeight.medium,
    fontFamily: fontfamily.fontRegular2,
  },
  LaunchesCard: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'row',
    marginLeft: 2.5,
 
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  LaunchesCardHeading: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 10,
  },
  LaunchesCardHeadingText: {
    color: colors.HeadingProfileTitles,
    fontSize: fontsize.heading,
    fontWeight: fontWeight.bold,
    fontFamily: fontfamily.fontRegular,
    marginLeft: 10,
    marginBottom: 20
  },
  seeall:{
    color: colors.TabColor,
    fontSize: fontsize.paragraph,
    fontWeight: fontWeight.bold,
    fontFamily: fontfamily.fontRegular,
    marginRight: 20,
    marginBottom: 20
  },
  headingbox:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
})