import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ClimbDetails = () => {
    const {climbID} = useLocalSearchParams();

  return (
    <View>
      <Text>ClimbDetails</Text>
    </View>
  )
}

export default ClimbDetails

const styles = StyleSheet.create({})