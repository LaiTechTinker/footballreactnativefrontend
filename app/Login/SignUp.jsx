import { Text, View ,TextInput,StyleSheet,SafeAreaView,StatusBar,Image,Pressable,
    ScrollView,KeyboardAvoidingView
  } from "react-native";
  import Icons from 'react-native-vector-icons/FontAwesome'
  import { useEffect, useState } from "react";
  import axios from 'axios'
  
import style from './sigupstyle'
import logo from '../../assets/images/CVE.jpg'

 const Signup=()=> {
    const[value,setValues]=useState({
        Firstname:'',
        LastName:'',
        Email:'',
        password:'',
        confirmpassword:''
      })
      const [secureTextEntry,setSecureTextEntry]=useState(true)
      // const[Hidebtn,setHidebtn]=useState('show')
      const[iconname,setIconName]=useState('eye-slash')
      const changehandler=(inputName,inputValue)=>{
        setValues({...value,[inputName]:inputValue})
        // console.log(inputValue)
      }
      const handleshowhide=()=>{
        setSecureTextEntry(!secureTextEntry)
        setIconName('eye')
        
      }
     const handlesubmit=()=>{
      const userdata={
        Firstname:value.Firstname,
        Lastname:value.LastName,
        email:value.Email,
        password:value.password,
        confirmPassword:value.confirmpassword
      }
      console.log(userdata)
      axios.post('http://192.168.94.85:7000/api/v1/users/signup',userdata).then((res)=>{
        console.log(res.data)
      }).catch(e=>console.log(e));
     }
  return (
  
    <SafeAreaView style={{flex:1,backgroundColor:'#f5f5f5'}}>
        <View style={style.container}>
        < ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>

        <View style={style.imgbx}>
    <Image  style={style.img} source={logo}/>
  </View>
  <View style={style.innercon}>
  <Text style={style.label}>FirstName:</Text>
  <View style={style.inputVeiw}>
      <TextInput style={style.input} placeholder="FirstName" value={value.Firstname} onChangeText={(text)=>{
        changehandler('Firstname',text)
      }} />
      </View>
      <Text style={style.label}>LastName:</Text>
      <View style={style.inputVeiw}>
      <TextInput style={style.input} placeholder="LastName" value={value.LastName} onChangeText={(text)=>{
        changehandler('LastName',text)
      }} />
      </View>

       <Text style={style.label}>Email:</Text>
       <View style={style.inputVeiw}>
       <TextInput style={style.input} placeholder="Email" value={value.Email} onChangeText={(text)=>{
        changehandler('Email',text)
      }} />
       </View>
        
   <Text style={style.label}>Password:</Text>
   <View style={style.inputVeiw}>
   <TextInput style={style.input} placeholder="Password" value={value.password} secureTextEntry={secureTextEntry} onChangeText={(text)=>{
        changehandler('password',text)
      }}/>
     <Pressable onPress={handleshowhide}><View style={style.Iconbx}><Icons name={iconname} size={20}/></View></Pressable> 
   </View>
 
       <Text style={style.label}>ConfirmPassword:</Text>
       <View style={style.inputVeiw}>
       <TextInput style={style.input} placeholder="ConfirmPassword" value={value.confirmpassword} onChangeText={(text)=>{
        changehandler('confirmpassword',text)
      }} />
        <Pressable onPress={handleshowhide}><View style={style.Iconbx}><Icons name={iconname} size={20}/></View></Pressable>
       </View>
 
      <Pressable onPress={handlesubmit}><View style={style.btn}><Text style={style.btnTxT}>Create Account</Text></View></Pressable>
      </View>
     </ScrollView>
</View>
</SafeAreaView>
     
  );
}
export default Signup



