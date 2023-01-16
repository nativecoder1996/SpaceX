import { StyleSheet, Text, View, Image, ImageBackground, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { colors, fontWeight, fontfamily, fontsize } from '../../../Constants'
import { crewDetails } from '../../../Api'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'


const CrewCard = () => {
    const navigation = useNavigation()
    const [crew, setCrew] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const response = await crewDetails()
        setInterval(() => {
            setCrew(response)
            setLoading(false)
        }, 1000);

    }
    const Card = (props) => {
        return (
            <TouchableOpacity style={styles.card} onPress={props.onPress}>
                <LinearGradient colors={['#348f4112', '#348f4130', '#000000']} style={styles.LinearGradient} zIndex={1} >
                    <FastImage
                        style={{ width: '100%', height: '100%', borderRadius: 10, zIndex: -1 }}
                        source={{
                            uri: props.image,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                    <View style={styles.textBox}>
                        <Text style={styles.text}>{props.name}</Text>
                        <Text style={styles.text}>{props.agency}</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={{ height: '100%', justifyContent: 'center' }}>
                    <ActivityIndicator size='large' color={colors.IconStroke} />
                </View>
            ) : (
                <View>
                    <FlatList
                        data={crew}
                        renderItem={({ item }) => <Card
                            name={item.name}
                            agency={item.agency}
                            image={item.image}
                            onPress={() => navigation.navigate('CrewDetails', { item: item })}
                        />}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        initialNumToRender={4}
                    />
                </View>
            )}
        </View>
    )
}

export default CrewCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 70,
    },
    card: {
        width: '45%',
        height: 200,
        backgroundColor: colors.ViewInterviewBG,
        borderWidth: 1,
        borderColor: colors.IconStroke,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    textBox: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        paddingHorizontal: 10,
    },
    text: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.bold
    },


})