import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'


export default function Login() {
  return (
    <View style={{alignItems:"center"}}>
      <Image source={require('./../../../assets/images/apploginback.png')} 
      style={styles.loginImage}
      />

      <View style={styles.subContainer}>
        <Text style={{fontSize:22, color:Colors.WHITE, textAlign:"center"}}>Discover the
            <Text style={{fontWeight:"bold"}}> Possibilities of a Healthier Life </Text> 
            with us!
            </Text>

            <Text style={{fontSize:15, color:Colors.WHITE, textAlign:'center', marginTop:20}}>
            Your Trusted Partner for Booking Tests, Doctor Appointments, and Medications
            </Text>

            <TouchableOpacity style={styles.button} onPress={()=>console.log("Botton Clicked")}>
                <Text style={{textAlign:"center", fontSize:17, color:Colors.PRIMARY}}>Lets Get Started!</Text>
            </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage:{
        width:360,
        height:550,
        marginTop:90,
        borderWidth:4,
        borderColor:"grey",
        borderRadius:15
    },
    
    subContainer:{
        width:'100%',
        backgroundColor:Colors.PRIMARY,
        height:"70%",
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        marginTop:-81,
        padding:25
    },

    button:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:99,
        marginTop:40
    }
})