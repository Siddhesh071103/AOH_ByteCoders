import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { blackText, blueText, color, colorTheme, grayText } from '../../constant'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DoctorCompletedCard from '../../components/DoctorCompletedCard'
import { PastRideData } from '../../assets/data/CardData'

const days = ["Mon", "Tue", "Wed", "Th", "Fr", "Sat", "Sun"]
export default function Appointment() {
  const date = new Date().getDate()
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subContainer}>
        {PastRideData.map((data, index) => (
          <View key={index} style={{ width: '100%' }}>
            <DoctorCompletedCard isButtonRequired={true} item={data}  />
          </View>
        ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTheme.appBackGroundColor
  },
  subContainer: {
    width: "90%",
    height: "auto",
    alignSelf: "center",
    // backgroundColor:"red"
  },
  bigText: {
    fontSize: blackText.fontSize,
    color: blackText.color,
    fontWeight: blackText.fontWeight
  },
  smallText: {
    fontSize: grayText.fontSize,
    color: grayText.color,
    fontWeight: grayText.fontWeight
  },
  blueText: {
    fontSize: blueText.fontSize,
    color: blueText.color,
    fontWeight: blueText.fontWeight
  },
})