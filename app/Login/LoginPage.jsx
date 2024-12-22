import { View,ScrollView,TextInput,SafeAreaView,Text ,Button,Pressable,Image, Alert} from "react-native";
import axios from 'axios'
// import Icons from 'react-native-vector-icons'
import { useState } from "react";
import style2 from './Loginpagestyle'
import CVELogo from '../.././assets/images/CVE.jpg'
import Icons from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from "expo-router";
export default function (){
  const navigation =useNavigation()
  const[Values,setValues]=useState({
    Email:'',
    Password:''
  })
  const changer=(inputName,inputValues)=>{
    setValues({...Values, [inputName]:inputValues})
    // console.log(Values)
  }
  const handlesubmit=()=>{
    const inputData={
      email:Values.Email,
      password:Values.Password
    }
    // console.log(inputData)
    axios.post('http://192.168.94.85:7000/api/v1/users/Login',inputData).then((res)=>{
      console.log(res.data)
      if(res.data.status=='succes'){
        Alert.alert('Login succesfull')
        // navigation.navigate('Profile')
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
  const [secureTextEntry,setSecureTextEntry]=useState(false)
  // const[Hidebtn,setHidebtn]=useState('show')
  const[iconname,setIconName]=useState('eye')
  const changehandler=(inputName,inputValue)=>{
    setValues({...value,[inputName]:inputValue})
    console.log(inputValue)
  }
  const handleshowhide=()=>{
    setIconName('eye-slash')
    if(iconname==='eye-slash'){
      setSecureTextEntry(secureTextEntry)
    }
 
    
  }
  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#f5f5f5'}}>
    <View style={style2.container}>
<ScrollView style={{flex:1}} keyboardShouldPersistTaps={"always"}>
  <View style={style2.imgbx}>
    <Image  style={style2.img} source={CVELogo}/>
  </View>
<View style={style2.innercon}>
<Text style={style2.label}>Email:</Text>
<View style={style2.inputVeiw}>
<TextInput  style={style2.input} value={Values.Email} placeholder="Email"  onChangeText={(text)=>{
  changer('Email',text)
}}/> 
</View>

 <Text style={style2.label}>Password:</Text>
 <View style={style2.inputVeiw}>
 <TextInput  style={style2.input} value={Values.Password} placeholder="Password" secureTextEntry={secureTextEntry}  onChangeText={(text)=>{   changer('Password',text)
}}/>
 <Pressable onPress={handleshowhide}><View style={style2.Iconbx}><Icons name={iconname} size={20}/></View></Pressable>
 
 </View>


 <Pressable onPress={handlesubmit}><View style={style2.btn}><Text style={style2.btnTxT}>Login</Text></View></Pressable> 
</View>

</ScrollView>
    </View>
    </SafeAreaView>
  )
}