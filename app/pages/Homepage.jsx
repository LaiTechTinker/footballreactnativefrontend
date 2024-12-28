import { View,Text,ScrollView,SafeAreaView,
    StatusBar,FlatList,
    Button,Image
 } from "react-native";
 import { useEffect,useState } from "react";
 import axios from "axios";
import Logo from '../../assets/images/CVE.jpg'
import style1 from '../pages/Homepagestyle'
import vidfolder from '../components/Videfolder'
const HomePage=()=>{
    const [dateData, setDateData] = useState([]);
    const VideoData=vidfolder
  
    const[competitions,SetCompetitons]=useState('No competiton available')
    const generateDateData = () => {
        const today = new Date();
        const dates = [];
        for (let i = 0; i < 7; i++) { // Generate data for the next 7 days
          const currentDate = new Date(today);
          currentDate.setDate(today.getDate() + i);
    
          dates.push({
            date: currentDate.toLocaleDateString('en-US',{day:'2-digit',month:'short'}), // Format as YYYY-MM-DD
            day: currentDate.toLocaleDateString('en-US', { weekday: 'short' }), // Get full day name
          });
        //   console.log(currentDate)
        }
        setDateData(dates);
        // console.log(dateData)
      }; 
      
      useEffect(() => {
        generateDateData();
    
      }, []);
      // this is the commponent for rendering the data data
      const RenderItem = ({item}) => (
        <View key={item.date} style={style1.datebx}>
                <Text style={style1.datedata}>{item.day}</Text>
                <Text style={style1.datedata}>{item.date}</Text>
               
                </View>
      );

      const VideoRender=({item})=>{
        return(
          <View style={style1.videochild}> 
          <View style={style1.smallvidbx}><Image source={item.Url} style={style1.smallvidimg}/></View>
          <Text>{item.Title}</Text>
          </View>
          
         
        )
      }
      const Rendermatches=({item})=>{
 return(
  <View style={style1.subcompbx}>
         <View style={style1.innersubbx}>
          <View style={style1.ballogo}>
          <Image source={item.Logo} style={style1.logbx}/>
          </View>
          <View style={style1.scorebx}>
          <Text style={style1.scoretxt}>{item.Text}</Text>
          </View>
         </View>
         <View style={style1.innersubbx}>
         <View style={style1.ballogo}>
          <Image source={item.Logo} style={style1.logbx}/>
         </View>
         <View style={style1.scorebx}>
          <Text style={style1.scoretxt}>{item.Text}</Text>
         </View>
         </View>
          </View>
 )
      }
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'blue'}}>
          <StatusBar backgroundColor='blue'/>
        <View style={style1.container}>
          <ScrollView style={{flex:1}}>
          
             <View style={style1.topside} >
                <Text style={style1.topsideText}>CIVIL LIONS</Text>
            </View>
            
            
             <View style={style1.SecondBx}>
              <FlatList data={dateData} renderItem={RenderItem}  horizontal showsHorizontalScrollIndicator={false}/>
       
            </View>
             <Text style={style1.latestVid}>LATEST VIDEO</Text>
         <View style={style1.Videobx}>
        <FlatList data={VideoData} renderItem={VideoRender} horizontal showsHorizontalScrollIndicator={false}/>
         </View>
         <Text style={style1.Compettiton}>All Competitions</Text>   
         <View style={style1.compbx}>
         <ScrollView style={{flex:1}}> 
         
       
          { VideoData.map((item)=>{
            return(
              <View style={style1.subcompbx}>
         <View style={style1.innersubbx}>
          <View style={style1.ballogo}>
          <Image source={item.Logo} style={style1.logbx}/>
          </View>
          <View style={style1.scorebx}>
          <Text style={style1.scoretxt}>{item.Text}</Text>
          </View>
         </View>
         <View style={style1.innersubbx}>
         <View style={style1.ballogo}>
          <Image source={item.Logo} style={style1.logbx}/>
         </View>
         <View style={style1.scorebx}>
          <Text style={style1.scoretxt}>{item.Text}</Text>
         </View>
         </View>
          </View> 
            )
          })}
        </ScrollView> 
       {/* <FlatList data={VideoData} renderItem={Rendermatches}/> */}

         </View>
         
{/* <View style={style1.compbx}></View> */}
{/* <Button title="Press me" onPress={axiosfetching}/> */}
</ScrollView>
        </View>
        
        </SafeAreaView>
    )
}
export default HomePage