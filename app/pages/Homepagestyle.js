import {StyleSheet} from 'react-native';
const Homestyle=StyleSheet.create({
    container:{
        flex:1,
     
        backgroundColor:'#f5f5f5',
        borderWidth:2,
        borderColor:'black'
    },
    topside:{
        height:80,
        width:'100%',
        backgroundColor:'blue',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
       
    },
    topsideText:{
        fontWeight:800,
        fontSize:18,
        color:'white'
    },
    SecondBx:{
        width:'100%',
        height:60,
        backgroundColor:'blue',
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        justifyContent:'center',
        // borderWidth:2,
        // borderColor:'black',
      
        paddingBottom:10
    },
    datedata:{
        color:'white'
    },
    datebx:{
width:90,
height:50,
// borderWidth:2,
// borderColor:'black'
    },
    latestVid:{
        fontSize:15,
        fontWeight:'900',
        textAlign:'center'
      
    },
    Videobx:{
        width:'100%',
        height:150,
      
       
        display:'flex',
        flexDirection:'row',
       gap:20,
       alignItems:'center',
     
    },
    videochild:{
 width:150,
 height:130,



display:'flex',
flexDirection:'column',

    },
    smallvidbx:{
 width:"100%",
 height:100,
 borderwidth:2,
 display:'flex',
 alignItems:'center',
 justifyContent:'center',

    },
    smallvidimg:{
 width:"100%",
 height:'100%',
 borderRadius:5
    },

    Compettiton:{
        fontSize:17,
        fontWeight:'500', 
        textAlign:'center'
    },
    compbx:{
        backgroundColor:'white',
        padding:20,
       width:'90%',
       display:'flex',
       flexDirection:'column',
       gap:15,
        borderRadius:10,
        shadowColor:'black',
      
        alignSelf:'center',
        shadowOffset:{
         width:0,
         height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
     },
    subcompbx:{
        backgroundColor:'white',
        padding:20,
       width:'99%',
       display:'flex',
       flexDirection:'column',
       gap:15,
        borderRadius:10,
        shadowColor:'black',
      
        alignSelf:'center',
        shadowOffset:{
         width:0,
         height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    },
    innersubbx:{
        width:'100%',
        height:50,
        borderColor:'blue',
        borderwidth:2,
      
      backgroundColor:'#FAF9F6',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15

    },
    ballogo:{
        width:50,
        height:50,
      
      
       
    
    },
    scorebx:{
        width:50,
        height:50,
        display:'flex',
       
        justifyContent:"center",
      
    borderRadius:5,
       backgroundColor:'#ffff',
   
    
    },
    logbx:{
        width:'100%',
        height:'100%',
        borderRadius:2

    },
    scoretxt:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})
export default Homestyle