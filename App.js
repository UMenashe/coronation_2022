import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native';
import { useEffect ,useState} from 'react';
import Clock from './Clock';
import img from './assets/instagramlogo.jpg';
import img2 from './assets/youtube_social.png';
import imgbg from './assets/backgroundG.jpeg';
import imgw from './assets/whatsapp_icon.png';

export default function App() {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
  
    let interval;
  
    const startTimer = () => {
      const countDownDate = new Date("March 6, 2022 16:00:00").getTime();
  
      interval = setInterval(() => {
        const now = new Date().getTime();
  
        const distance = countDownDate - now;
  
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);
  
        if (distance < 0) {
          clearInterval(interval);
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      });
    };
  
    useEffect(() => {
      startTimer();
    });

  return (
    <View style={styles.container}>
      <ImageBackground source={imgbg} blurRadius={9} resizeMode="cover" style={styles.image}>
      <View style={{marginVertical:20,alignItems:'center'}}>
        <View style={{borderWidth:2,borderColor:"#ffbe0b",backgroundColor:"#fff",width:"100%",shadowRadius:20,
    shadowColor:"#00000030",
    shadowOpacity:0.9,
    paddingBottom:10,}}>
        <Text style={{fontSize:30,fontWeight:"bold",margin:15,textAlign:"center",fontFamily:"Arial",color:"#000"}}>⭐ הכתרה תשפ"ב ⭐</Text>
        </View>
        <Text style={{fontSize:18,margin:15}}>הספירה לאחור החלה!</Text>
        <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      <View style={{marginTop:30}}>
        <Text style={{fontSize:18,textAlign:"center",margin:20}}>מחזור י"א מזמין אתכם להכתרה תשפ"ב שתתקיים בתאריך:</Text>
        <Text style={{fontSize:18,textAlign:"center",fontWeight:"bold",margin:10}}>ג' באדר ב' | 6.3 למניינם</Text>
        <Text style={{fontSize:18,textAlign:"center",fontWeight:"bold",margin:10}}>כולם מוזמנים!</Text>
        </View>
      </View>
      <View style={{marginVertical:20,alignItems:'center'}}>

      <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={(e)=> {window.open("https://wa.me/?text=%D7%94%D7%9B%D7%AA%D7%A8%D7%94%20%D7%A9%D7%9E%D7%99%D7%A0%D7%99%D7%AA%D7%A9%D7%A4%22%D7%91%2C%20%D7%94%D7%A1%D7%A4%D7%99%D7%A8%D7%94%20%D7%9C%D7%90%D7%97%D7%95%D7%A8%20%D7%94%D7%97%D7%9C%D7%94%21%0Ahttps%3A%2F%2Fcoronation2022.netlify.app%2F", "_blank");}}> 
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
        <img width="25" height="25" src={imgw}></img>
        <Text style={{color:"#fff",fontWeight:"bold"}}>שתפו עם חברים</Text>
        </View>
        </TouchableOpacity>

        <Text style={{fontSize:18}}>עקבו אחרינו</Text>
        <View style={styles.socialShare}>
         <a style={{backgroundColor:"#25D36",marginInline:15,color:"#fff"}} target="_blank" href='https://instagram.com/shminit_tzvia_katif' >
         <img width="35" height="35" src={img}></img> 
         </a>
         <a style={{backgroundColor:"#25D36",marginRight:15,color:"#fff"}} target="_blank" href='https://youtube.com/channel/UCjYuosIDryUdGyl6QIuXJCw'>
         <img width="35" height="35" src={img2}></img> 
         </a>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"space-between"
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  socialShare:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingVertical:7,
    paddingHorizontal:5,
    marginVertical:13,
    marginHorizontal:7,
    backgroundColor:"#00000030",
    borderRadius:25,
  },btn:{
    width:"43%",
    height:40,
    backgroundColor:'#0466c8',
    borderRadius:50,
    textAlign:"center",
    marginBottom:50,
    justifyContent:"center",
   }
});
