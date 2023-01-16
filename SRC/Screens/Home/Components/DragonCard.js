import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient';
import { colors, fontWeight, fontfamily, fontsize } from '../../../Constants'
import { DragonData } from '../../../Api'



const DragonCard = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await DragonData();
        setData(response);
        setLoading(false);
    }
    console.log(data)
    const Card = (props) => {
        return (
            <View style={styles.card}>
                <TouchableOpacity onPress={props.onPress}>
                <LinearGradient colors={['#348f4112', '#348f4130', '#000000']} style={styles.LinearGradient} zIndex={1} >
                    <ImageBackground source={{ uri: props.images }} style={{ width: '100%', height: '100%' }} />
                        <View style={styles.TextBox}>
                            <Text style={styles.Text}>{props.name}</Text>
                            <Text numberOfLines={2} style={styles.Text1}>{props.description}</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

        )
    }
    return (
        < >
            {loading ? (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color={colors.Textcolor} />
                </View>
            ) : (
                <ScrollView style={styles.scroll}>
                    {data.map((item, i) => (
                        <TouchableOpacity  key={i} onPress={() => navigation.navigate('DragonPage', { item })}>
                        <Card
                            key={i}
                            name={item.name}
                            description={item.description}
                            images={item.flickr_images[0]}
                            onPress={() => navigation.navigate('DragonPage', { item })}
                        />
                         </TouchableOpacity>
                    ))}
                </ScrollView>
            )}
        </>
    )
}

export default DragonCard

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 200,
        backgroundColor: colors.ViewInterviewBG,
        borderWidth: 1,
        borderColor: colors.IconStroke,
        borderRadius: 10,
        marginHorizontal: 10,
        overflow: 'hidden',
        marginVertical: 10,
    },
    TextBox: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        paddingHorizontal: 10,
    },
    Text: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.heading,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
    },
    Text1: {
        width: '80%',
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.paragraph,
        fontFamily: fontfamily.fontRegular,
        fontWeight: fontWeight.bold,
        marginTop: 10,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scroll: {
        width: '100%',
        height: '100%',
        marginLeft: 20,
    },
    LinearGradient: {
        width: '100%',
        borderRadius: 10,
    },



})