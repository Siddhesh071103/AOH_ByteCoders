import { Image, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Pressable, Dimensions, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL, colorTheme } from '../../constant'
import ArticleCard from '../../components/ArticleCard'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import LocationModal from '../../components/Modal/LocationModal'
import FilterModal from '../../components/Modal/FilterModal'
import NotificationModal from '../../components/Modal/NotificationModal'
import Carousel from '../../components/Carousel'
import Category from '../../components/Modal/CategoryModal'
import TopDoctorModal from '../../components/Modal/TopDoctorModal'
import TopHospitalModal from '../../components/Modal/TopHospitalModal'
import AddYourTakModal from '../../components/Modal/AddTaskModal'
import SeeAllTaskModal from '../../components/Modal/SeeAllTaskModal'
import JournalModal from '../../components/Modal/JournalModal'
import { sendSmsData } from '../../components/SendSMS'
import { PastRideData } from '../../assets/data/CardData'
import YoutubeModal from '../../components/Modal/YoutubeModal'
import BlogScreenModal from '../../components/Modal/BlogScreenModal'
import StartJourneyModal from '../../components/Modal/StartJourneyModal'
import UnderLine from '../../components/UnderLine'
import JoinRideModal from '../../components/Modal/JoinRideModal'
import DoctorCard from '../../components/DoctorCard'
import DoctorCompletedCard from '../../components/DoctorCompletedCard'
import CarCard from '../../components/CarCard'
import LottieView from 'lottie-react-native'
import QrScanModal from '../../components/Modal/QrScanModal'
import { journeyServices } from '../../services/Journey'

const data = [
  {
    Ride: "Ride to Borivali(West)",
    car: "Inova",
    lotteasset: require('../../assets/json/ecolottie/caranim3.json')
  },
  {
    Ride: "Ride to Sakinaka(West)",
    car: "Inova",
    lotteasset: require('../../assets/json/ecolottie/caranim2.json')
  },
  {
    Ride: "Ride to Andheri (West)",
    car: "Inova",
    lotteasset: require('../../assets/json/ecolottie/carani.json')
  },
];

const SMSDATA = [
  {
    phone: '9082222597',
    msg: "Hello there is medical pls contact me immediatlely"
  },
  {
    phone: '9869852633',
    msg: "Hello there is medical pls contact me immediatlely"
  },
]

function generateOTP() {
  // Generate a random 4-digit number
  const otp = Math.floor(1000 + Math.random() * 9000);
  return otp.toString(); // Convert the number to a string
}
function handleOtp() {
  const otp = generateOTP()
  console.log(otp);
}


function SendSOS(params) {
  sendSmsData(SMSDATA)

}

const SCORE_POINTER = 0

export default function Home({ navigation }) {

  const [userData, setuserData] = useState({})
  const [userDataLoading, setuserDataLoading] = useState(false)

  const [search, setSearch] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  const [filterModal, setFilterModal] = useState(false)
  const [notificationModal, setNotificationModal] = useState(false)
  const [categoryModalVisible, setcategoryModalVisible] = useState(false);
  const [topDoctorModal, setTopDoctorModal] = useState(false);
  const [topHosPitalModal, setTopHospitalModal] = useState(false);
  const [AddTaskModal, setAddTaskModal] = useState(false);
  const [supportiveContent, setSupportiveContent] = useState(false);
  const [seeAllTask, setSeeAllTask] = useState(false);
  const [journalModal, setjournalModalModal] = useState(false);
  const [startJourneyModal, setStartJourneyModal] = useState(false)
  const [joinRideModal, setJoinRideModal] = useState(false)
  const [blogScreenModal, setBlogScreenModal] = useState(false)
  const [qrScanModal, setQrScanModal] = useState(false)
  const [ModalData, setBlogModalData] = useState({
    title: '',
    desc: '',
    img: ''
  })


  useEffect(() => {
    setuserDataLoading(true)
    journeyServices.GetUserData().then(res => {
      console.log(res.data);
      setuserData(res.data)
      setuserDataLoading(false)
    })

  }, [])

  const SMSDATA = [
    {
      phone: '9869852633',
      msg: "HELP ME !!! There is Some Emergency Please Contact Urgently !!!"
    },
  ]

  function handleSOS() {
    sendSmsData(SMSDATA)
  }

  return (
    <View style={styles.container}>

      {/* here satrt sos  */}
      {/* <Pressable
        onPress={() => {
          SendSOS()
        }}
        style={styles.fixedComponent}>
        <View style={{ alignItems: 'center', height: 55, justifyContent: 'center' }}>
          <Text style={[styles.boldText, { color: 'white' }]}>SOS</Text>
        </View>
      </Pressable> */}
      {/* end sos  */}

      <Pressable
        onPress={() => {
          // SendSOS()
        }}
        style={styles.fixedComponent}>
        <View style={[styles.iconContainer, { borderRadius: 50 }]}>
          <TouchableOpacity onPress={() => { handleSOS() }}>
            <Image source={require('../../assets/img/sos2.jpg')} style={{ resizeMode: 'cover', width: 100, height: 100 }} borderRadius={50} />
          </TouchableOpacity>
        </View>
      </Pressable>
      <ScrollView contentContainerStyle={styles.subcontainer}>
        <>
          {modalVisible
            ?
            <LocationModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            : null
          }
          {notificationModal
            ?
            <NotificationModal modalVisible={notificationModal} setModalVisible={setNotificationModal} />
            : null
          }
          {
            filterModal
              ?
              <FilterModal modalVisible={filterModal} setModalVisible={setFilterModal} />
              : null
          }
          {
            categoryModalVisible
              ?
              <Category modalVisible={categoryModalVisible} setModalVisible={setcategoryModalVisible} />
              : null
          }
          {
            topDoctorModal
              ?
              <TopDoctorModal modalVisible={topDoctorModal} setModalVisible={setTopDoctorModal} />
              : null
          }
          {
            topHosPitalModal
              ?
              <TopHospitalModal modalVisible={topHosPitalModal} setModalVisible={setTopHospitalModal} />
              : null
          }
          {
            AddTaskModal
              ?
              <AddYourTakModal modalVisible={AddTaskModal} setModalVisible={setAddTaskModal} />
              : null
          }
          {
            seeAllTask
              ?
              <SeeAllTaskModal modalVisible={seeAllTask} setModalVisible={setSeeAllTask} />
              : null
          }
          {
            journalModal
              ?
              <JournalModal modalVisible={journalModal} setModalVisible={setjournalModalModal} />
              : null
          }
          {
            supportiveContent
              ?
              <YoutubeModal modalVisible={supportiveContent} setModalVisible={setSupportiveContent} />
              : null
          }
          {
            blogScreenModal
              ?
              <BlogScreenModal modalVisible={blogScreenModal} setModalVisible={setBlogScreenModal} ModalData={ModalData} />
              : null
          }
          {
            startJourneyModal
              ?
              <StartJourneyModal modalVisible={startJourneyModal} setModalVisible={setStartJourneyModal} />
              : null
          }
          {
            joinRideModal
              ?
              <JoinRideModal modalVisible={joinRideModal} setModalVisible={setJoinRideModal} />
              : null
          }
          {
            qrScanModal
              ?
              <QrScanModal modalVisible={qrScanModal} setModalVisible={setQrScanModal} />
              : null
          }
        </>
        <View style={{ backgroundColor: '#407EC2', height: 70, width: '100%', marginTop: 0, marginBottom: 15, flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1.3, padding: 10, flexDirection: "row", alignItems: 'center', gap: 10, paddingLeft: 20 }}>
            <View style={{ justifyContent: 'center', }}>
              <FontAwesome name="user-circle-o" size={40} color="#fff" />
            </View>
            {userDataLoading ? <ActivityIndicator size={'large'} color={'white'} /> :
              <View style={{ justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>{userData.name}</Text>
                <Text style={{ color: '#fff' }}>{userData.email}</Text>
              </View>
            }
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <AntDesign name="qrcode" size={28} color="#ffff" onPress={() => setQrScanModal(true)} />
            <MaterialIcons name="notifications-active" color="#fff" size={28} onPress={() => setNotificationModal(true)} />
            <EvilIcons name="question" size={30} color="#fff" />
          </View>
        </View>

        <View style={{ width: '90%', marginBottom: 10, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={styles.textInput}>
            <MaterialIcons name="search" color={colorTheme.primaryColor} size={25} />
            <TextInput
              placeholder='Search'
              onChangeText={(text) => setSearch(text)}
              value={search}
              style={{ height: 48, width: "92%" }}
            />
          </View>
          <Pressable
            style={{ width: 45, height: 45, backgroundColor: colorTheme.primaryColor, justifyContent: "center", alignItems: "center", borderRadius: 10 }}
            onPress={() => { setFilterModal(true) }}
          >
            <FontAwesome name="sliders" color="white" size={25} />
          </Pressable>
        </View>

        {/* youtube webview  */}
        {/* <View style={{ width: '90%', marginTop: 10, height: 600 }}>
          <WebView
            originWhitelist={['*']}
            source={{
              html: `
              <iframe width="560" height="315" src="https://www.youtube.com/embed/DbRXv5TXMEE?si=xbMISuEvM17MXKaP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              `,
            }}
            style={{ flex: 1 }}
            onError={(error) => console.error('WebView error:', error)}
          />
        </View> */}
        {/* here start 4 buttom cord  */}
        <View style={{ backgroundColor: '#fff', height: 120, width: '90%', borderRadius: 10, elevation: 10, padding: 10, }}>
          {/* <Text style={{ fontWeight: '600', color: 'black', paddingBottom: 12, fontSize: 16 }}></Text> */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', display: 'flex', flex: 1, alignItems: 'center' }}>
            <View style={{ flex: 1, borderRadius: 10 }}>
              <TouchableOpacity
                style={{ borderColor: '#d3d2d6', borderWidth: 1, height: 50, width: 50, alignSelf: 'center', margin: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => setJoinRideModal(true)}
              >
                <Ionicons name="car-sport-sharp" size={40} color='#407CE2' />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', fontSize: 12 }} >Join Ride</Text>
            </View>
            <View style={{ flex: 1, borderRadius: 10 }}>
              <TouchableOpacity style={{ borderColor: '#d3d2d6', borderWidth: 1, height: 50, width: 50, alignSelf: 'center', margin: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => setStartJourneyModal(true)}
              >
                <FontAwesome5 name='walking' size={38} color="#407CE2" />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', fontSize: 12 }}>Start Journey</Text>
            </View>
            <View style={{ flex: 1, borderRadius: 10 }}>
              <TouchableOpacity
                onPress={() => { navigation.navigate('Location') }}
                style={{ borderColor: '#d3d2d6', borderWidth: 1, height: 50, width: 50, alignSelf: 'center', margin: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <MaterialIcons name="location-pin" size={40} color="#407CE2" />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', fontSize: 12 }}>Maps</Text>
            </View>
            <View style={{ flex: 1, borderRadius: 10 }}>
              <TouchableOpacity
                onPress={() => { navigation.navigate('Appointment') }}
                style={{ borderColor: '#d3d2d6', borderWidth: 1, height: 50, width: 50, alignSelf: 'center', margin: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <MaterialIcons name="history" size={40} color="#407CE2" />
              </TouchableOpacity>
              <Text style={{ textAlign: 'center', fontSize: 12 }}>History</Text>
            </View>
          </View>
        </View>
        {/* end here  */}

        {/* dashboard start here  */}
        <View style={{ width: '90%', backgroundColor: 'white', elevation: 4, padding: 10, marginBottom: 10, borderRadius: 10, borderTopEndRadius: 50, marginTop: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 40, backgroundColor: colorTheme.borderColor, width: 2, marginRight: 10 }} />
                <View>
                  <Text style={[styles.boldText]}>TotalTravelling</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <MaterialIcons name="directions-car-filled" color={colorTheme.primaryColor} size={25} style={{}} />
                    <Text>45 <Text>km</Text></Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <View style={{ height: 40, backgroundColor: colorTheme.borderColor, width: 2, marginRight: 10 }} />
                <View>
                  <Text style={[styles.boldText]}>TotalPooling</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <MaterialIcons name="directions-car-filled" color={colorTheme.primaryColor} size={25} style={{}} />
                    <Text>45 km</Text>
                  </View>
                </View>
              </View>
            </View>
            {/* <View style={{ marginRight: 0, width: 100, height: 100, alignItems: 'center', justifyContent: 'center', borderWidth: 5, borderRadius: 50, borderRightColor: 'green',borderLeftColor:colorTheme.borderColor,borderTopColor:'green',borderBottomColor:'green' }}>
              <Text style={[styles.boldText]}>Carbon FootPrint</Text>
              <Text>Reduced</Text>
            </View> */}
            <View>
              <LottieView
                source={require('../../assets/json/ecolottie/green.json')}
                autoPlay
                loop
                style={{ width: 125, height: 125 }}
              />
              <View style={{}}>
                <Text style={[styles.boldText, {}]}>Carbon FootPrint</Text>
                <Text style={[styles.smallText, { color: 'green' }]}>144g/km</Text>
              </View>
            </View>
          </View>
          <UnderLine color={colorTheme.borderColor} thickness={2} marginTop={10} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
            <View>
              <Text style={[styles.boldText]}>Total Rides</Text>
              <UnderLine color={colorTheme.borderColor} thickness={2} marginTop={10} />
              <Text>27 Rides</Text>
            </View>
            <View>
              <Text style={[styles.boldText]}>TotalPooling</Text>
              <UnderLine color={colorTheme.borderColor} thickness={2} marginTop={10} />
              <Text>27 Rides</Text>
            </View>
            <View>
              <Text style={[styles.boldText]}>Total</Text>
              <UnderLine color={colorTheme.borderColor} thickness={2} marginTop={10} />
              <Text>54 Rides</Text>
            </View>
          </View>
        </View>



        <View style={{ width: '90%', flexDirection: "row", justifyContent: 'space-between', marginTop: 20 }}>
          <Text style={[styles.grayText, { marginBottom: 8, color: 'black' }]}>Frequently Travelled Routes</Text>
          <Text
            onPress={() => { setTopDoctorModal(true) }}
            style={[{ color: colorTheme.primaryColor, fontSize: 15 }]}>See All Rides</Text>
        </View>
        <Carousel data={data} autoPlay>
          <CarCard isNavigate />
        </Carousel>

        <View style={{ width: '90%', flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={[styles.grayText, { color: 'black' }]}>Past Rides History</Text>
        </View>
        {PastRideData.map((data, index) => (
          <View key={index} style={{ width: '90%' }}>
            <DoctorCompletedCard isButtonRequired={false} item={data} />
          </View>
        ))}

      </ScrollView >
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: colorTheme.appBackGroundColor
  },
  subcontainer: {
    alignItems: 'center',
    // marginTop: 10,÷

  },
  textInput: {
    width: "80%",
    height: 48,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 7,
    borderWidth: 1,
    borderColor: colorTheme.borderColor,
    flexDirection: "row",
    // justifyContent:"center",
    alignItems: "center"
  },
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
  post: {
    width: '90%',
    marginBottom: 3,
    // backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  card: {
    width: "90%",
    height: 112,
    backgroundColor: 'white',
    borderRadius: 10
  },
  image: {
    width: '40%',
    height: '100%',
    marginRight: 5
  },
  fixedComponent: {
    position: 'absolute',
    bottom: 30,
    width: 80,
    height: 80,
    // backgroundColor: colorTheme.primaryColor,
    zIndex: 20,
    right: 30,
    borderRadius: 50, // half of width and height to make it circular
    opacity: 2,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  iconContainer: {
    width: 60, // Adjust the width and height of the icon container as needed
    height: 60,
    borderRadius: 30, // half of width and height to make it circular
    justifyContent: 'center',
    alignItems: 'center',
  },

})