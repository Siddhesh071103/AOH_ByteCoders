import { Image, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { color, colorTheme } from '../constant'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'

export default function CarCard({isNavigate,  isButtonRequired,item }) {
 const navigation= useNavigation()
  return (
    <Pressable 
    onPress={()=>{isNavigate?navigation.navigate('DoctorDetail',{ tripfrom: 'Sakinaka',tripTo:'Andheri' }):null}}
    style={styles.card}>
      <View style={{ flexDirection: 'row', margin: 15 }}>
        <View style={{ marginRight: 12 }}>
          <View style={{ marginBottom: 8 }}>
            <Text style={styles.boldText}>{item.Ride}</Text>
            <Text style={styles.smallText}>{item.car}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="star" size={20} color={'#EF802F'} style={{ marginRight: 10, marginTop: 6 }} />
            <View>
              <Text style={[styles.grayText, { fontSize: 12 }]}>Rating</Text>
              <Text style={[styles.smallText]}>4.7 out of 5</Text>
            </View>
          </View>
        </View>
        <LottieView
        source={item.lotteasset}
        autoPlay
        loop
        style={{width:100,height:100}}
      />
      </View>
      <View style={styles.subCard}>
        <View style={{ flexDirection: "row" }}>
          <Icon name="calendar" color={colorTheme.primaryColor} size={20} style={{ marginRight: 5 }} />
          <Text style={styles.smallText}>Monday, Dec 23</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcon name="clock-time-four-outline" color={colorTheme.primaryColor} size={20} style={{ marginRight: 5 }} />
          <Text style={styles.smallText}>12:00-13:00</Text>
        </View>
      </View>
      {isButtonRequired ?
        <View style={[styles.subCard, { backgroundColor: 'white' }]}>
          <TouchableOpacity
            style={{ backgroundColor: colorTheme.primaryColor, width: 120, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: colorTheme.borderColor }}
          // onPress={() => { setIsReshedule(true) }}
          onPress={() => { navigation.navigate('RescheduledAppointment') }}
          >
            <Text style={{ color: "white" }}>Reschedule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "white", width: 120, height: 40, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: colorTheme.borderColor }}
            onPress={() => { navigation.navigate('CancelBooking') }}
          >
            <Text style={{ color: "black" }}>Cancel</Text>
          </TouchableOpacity>
        </View>
        : null}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  grayText: {
    fontSize: 17,
    fontWeight: '700',
    color: "gray"
  },
  boldText: {
    fontSize: 17,
    fontWeight: '700',
    color: "black"
  },
  smallText: {
    fontSize: 12,
    fontWeight: '500',
    color: "black"
  },
  card: {
    backgroundColor: colorTheme.appBackGroundColor,
    height: "auto",
    borderRadius: 10,
    elevation: 5
  },
  image: {
    width: '40%',
    height: '100%',
    borderRadius:30
  },
  subCard: {
    margin: 15,
    height: 50,
    backgroundColor: "#deecfa",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 30
  }
})