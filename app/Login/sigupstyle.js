import {StyleSheet} from 'react-native'
const signupstyle=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20,
        paddingHorizontal:10,
        backgroundColor:'#f5f5f5'
    },
    innercon:{
       backgroundColor:'white',
       padding:20,
      
       borderRadius:10,
       shadowColor:'black',
       
       shadowOffset:{
        width:0,
        height:2
       },
       shadowOpacity:0.25,
       shadowRadius:4,
       elevation:5
    },
    label:{
        fontSize:16,
        marginBottom:5,
        fontWeight:'bold'
    },
    input:{
  height:'90%',
  width:'85%',
  borderWidth:2,
  marginBottom:15,
 position:'relative',
 top:'20%',
  borderWidth:1,
  padding:10,
  borderRadius:5,
  borderColor:'transparent', 
  

},
btn:{
    width:300,
    height:40,
    backgroundColor:'skyblue',
    borderRadius:10,
    display:'flex',
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    marginTop:15
},
btnTxT:{
    fontSize:15,
    fontWeight:'bold',
    alignSelf:'center'
},
imgbx:{
    width:150,
    height:150,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:50,
    marginBottom:20
   

},
img:{
    width:'100%',
    height:'100%',
    borderRadius:50
},
inputVeiw:{
    width:'100%',
    height:50,
    display:'flex',
justifyContent:'center',
alignItems:'center',
    flexDirection:'row',
    borderWidth:2,
    borderColor:'#ddd',
    borderRadius:5
},
Iconbx:{
    width:20,


 alignSelf:'center',
 marginLeft:10
 
}
})
export default signupstyle