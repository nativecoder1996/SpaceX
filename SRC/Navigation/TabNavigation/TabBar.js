import { View, StyleSheet, Dimensions, Platform } from 'react-native'
import React from 'react'
import Tab from './Tab'
const { width } = Dimensions.get('screen')
import { colors } from '../../Constants'

const TabBar = ({ state, navigation }) => {
    const { routes } = state
    const [selected, setSelected] = React.useState('Home')
    const renderColor = currentTab => (currentTab === selected ? colors.HeadingProfileTitles : colors.HeadingProfileTitles)
    const renderColor1 = currentTab => (currentTab === selected ? colors.TabSelectedColor : null)
    const renderRadius = currentTab => (currentTab === selected ? 30 : 0)
    const handlePress = (activeTab, index) => {
        if (state.index !== index) {
            setSelected(activeTab)
            navigation.navigate(activeTab)
        }
    }

    return (
        <View style={styles.wrapper} >
            <View style={styles.container}>
                {routes.map((route, index) =>
                    <Tab tab={route}
                        icon={route.params.icon}
                        Handler={() => handlePress(route.name, route.key)}
                        color1={renderColor1(route.name)}
                        color={renderColor(route.name)}
                        radius={renderRadius(route.name)}
                        key={route.key}
                    />)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 5,
        width: width,
        padding: Platform.OS === 'ios' ? 10 : 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.TabColor,
        height: 60,
        width: '100%',
        borderRadius: 30,
        elevation: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3.84,
    }
})



export default TabBar