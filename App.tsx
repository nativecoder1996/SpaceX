import { StyleSheet, Text, View ,StatusBar} from 'react-native'
import React from 'react'
import { colors, fontsize, fontWeight, } from './SRC/Constants/DesignConstants'
import { NavigationContainer } from '@react-navigation/native'
import { StackNav } from './SRC/Navigation/Routes/StackNav'
const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.TabColor} barStyle="light-content" />
        <StackNav />
      </View>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  
  },
})