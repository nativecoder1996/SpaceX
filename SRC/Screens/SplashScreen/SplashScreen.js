import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../Constants'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../Assets/Photos/SplashScreen.jpg')} style={{ width: '100%', height: '100%' }}>
                <Image source={require('../../Assets/Photos/logo.png')} style={styles.logo} />
                <View style={styles.button}>
                    <TouchableOpacity style={styles.buttoncontainer} onPress={() => { navigation.navigate('TabNavigation') }}>
                        <Animatable.View
                            animation={'pulse'}
                            easing="ease-in-out"
                            iterationCount={'infinite'}
                            style={styles.GObuttonbox}>
                            <Text style={styles.GObutton}>GO</Text>
                        </Animatable.View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 400,
        height: 200,
        resizeMode: 'contain',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        bottom: 20,
    },
    buttoncontainer: {
        alignItems: 'center',
        bottom: 20,
        marginBottom: 20,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderTopWidth: 4,
        borderRadius: 100,
        borderColor: '#0071e8',
        width: 80,
        height: 80,
    },
    GObuttonbox: {
        backgroundColor: colors.TabColor,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 2,
    },
    GObutton: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})