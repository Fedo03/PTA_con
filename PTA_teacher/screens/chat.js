import React, {useEffect, 
    useState,
 useRef} from "react";
import { Dimensions,
     KeyboardAvoidingView, 
     SafeAreaView ,
     ScrollView,
     Text,
     TextInput,
     View,
     TouchableWithoutFeedback,
     Keyboard,
     KeyboardEvent,
     NativeModules,
     Animated
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import useKeyboardHeight from "react-native-use-keyboard-height";
import { useRoute } from "@react-navigation/native"
import ListComp from "../comp/listComp";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import Txt from "../comp/txtBubble";

const Chat =  ({navigation}) => {

    const route = useRoute();
    const keyboardHeight = useKeyboardHeight()
     const [keyB, setKeyb] = useState(keyboardHeight)
     const [side, setSide] = useState("flex-start")
     const [learner , setLearner] = useState({
        name : "name",
        avg : "avg"
    })

   

 const [chats, setChat] = useState([
        {
            sender: "you",
            message: "Hey Sarah, are you coming to the meeting today?",
            timestamp: "2024-08-18 09:00 AM"
        },
        {
            sender: "Sarah",
            message: "Hi John, yes, I’ll be there. What time is it again?",
            timestamp: "2024-08-18 09:02 AM"
        },
        {
            sender: "you",
            message: "It's at 10:30 AM in the main conference room.",
            timestamp: "2024-08-18 09:05 AM"
        },
        {
            sender: "Sarah",
            message: "Got it! Do you need anything from me for the meeting?",
            timestamp: "2024-08-18 09:07 AM"
        },
        {
            sender: "you",
            message: "Just the quarterly report you’ve been working on.",
            timestamp: "2024-08-18 09:10 AM"
        },
        {
            sender: "Sarah",
            message: "I’ll bring it with me. I’ve also added some projections for next quarter.",
            timestamp: "2024-08-18 09:12 AM"
        },
        {
            sender: "you",
            message: "That sounds great! Thanks for doing that.",
            timestamp: "2024-08-18 09:15 AM"
        },
        {
            sender: "Sarah",
            message: "No problem. Have you heard back from the client about their feedback?",
            timestamp: "2024-08-18 09:18 AM"
        },
        {
            sender: "you",
            message: "Not yet, they said they'd get back to us by the end of the week.",
            timestamp: "2024-08-18 09:20 AM"
        },
        {
            sender: "Sarah",
            message: "Okay, hopefully, it's positive. We put a lot of work into that proposal.",
            timestamp: "2024-08-18 09:23 AM"
        },
        {
            sender: "you",
            message: "I agree. Fingers crossed!",
            timestamp: "2024-08-18 09:25 AM"
        },
        {
            sender: "Sarah",
            message: "By the way, are we still on for lunch after the meeting?",
            timestamp: "2024-08-18 09:27 AM"
        },
        {
            sender: "you",
            message: "Yes, definitely! Let’s go to that new Italian place nearby.",
            timestamp: "2024-08-18 09:30 AM"
        },
        {
            sender: "Sarah",
            message: "Sounds good to me! I’ll see you at the meeting then.",
            timestamp: "2024-08-18 09:32 AM"
        },
        {
            sender: "you",
            message: "See you there!",
            timestamp: "2024-08-18 09:33 AM"
        } ,
        {
            sender: "Sarah",
            message: "No problem. Have you heard back from the client about their feedback?",
            timestamp: "2024-08-18 09:18 AM"
        },
        {
            sender: "you",
            message: "Not yet, they said they'd get back to us by the end of the week.",
            timestamp: "2024-08-18 09:20 AM"
        },
        {
            sender: "Sarah",
            message: "Okay, hopefully, it's positive. We put a lot of work into that proposal.",
            timestamp: "2024-08-18 09:23 AM"
        },
        {
            sender: "you",
            message: "I agree. Fingers crossed!",
            timestamp: "2024-08-18 09:25 AM"
        },
        {
            sender: "Sarah",
            message: "By the way, are we still on for lunch after the meeting?",
            timestamp: "2024-08-18 09:27 AM"
        },
        {
            sender: "you",
            message: "Yes, definitely! Let’s go to that new Italian place nearby.",
            timestamp: "2024-08-18 09:30 AM"
        },
        {
            sender: "Sarah",
            message: "Sounds good to me! I’ll see you at the meeting then.",
            timestamp: "2024-08-18 09:32 AM"
        },
        {
            sender: "you",
            message: "See you there!",
            timestamp: "2024-08-18 09:33 AM"
        } ,,
        {
            sender: "Sarah",
            message: "No problem. Have you heard back from the client about their feedback?",
            timestamp: "2024-08-18 09:18 AM"
        },
        {
            sender: "you",
            message: "Not yet, they said they'd get back to us by the end of the week.",
            timestamp: "2024-08-18 09:20 AM"
        },
        {
            sender: "Sarah",
            message: "Okay, hopefully, it's positive. We put a lot of work into that proposal.",
            timestamp: "2024-08-18 09:23 AM"
        },
        {
            sender: "you",
            message: "I agree. Fingers crossed!",
            timestamp: "2024-08-18 09:25 AM"
        },
        {
            sender: "Sarah",
            message: "By the way, are we still on for lunch after the meeting?",
            timestamp: "2024-08-18 09:27 AM"
        },
        {
            sender: "you",
            message: "Yes, definitely! Let’s go to that new Italian place nearby.",
            timestamp: "2024-08-18 09:30 AM"
        },
        {
            sender: "Sarah",
            message: "Sounds good to me! I’ll see you at the meeting then.",
            timestamp: "2024-08-18 09:32 AM"
        },
        {
            sender: "you",
            message: "See you there!",
            timestamp: "2024-08-18 09:33 AM"
        } 
    ])


    const refs = useRef();
       
     
    useEffect( () => {
        setLearner(route.params?.info)
        console.log(learner)
}, [learner])
         useEffect(()=>{
     setKeyb(keyboardHeight)
 console.log(keyB)
         },[keyboardHeight])
         console.log(learner)

    return (





        <SafeAreaView >
           <View style={{
            width : Dimensions.get("screen").width,
            backgroundColor : "green",
           }} > 
            <ListComp
            conStyle={{
                 flexDirection: "row",
                height : 50
                }}
           img={true}
           stlImg={{width:"10%",
            height : "80%",
            borderRadius : 20,
            marginTop : 5,
            marginLseft : 5
           }}
           txt={learner.name}
           txtStyle={{
               color : "black",
               margin : 11,
               fontSize : 20
           }
           }
 
          />
        </View> 
        <View style={{height: Dimensions.get("screen").height - 100, 
            top : 0,
           
            }}>

       <ScrollView style={{
        width : Dimensions.get("screen").width - 10,
        marginLeft : 5,
        marginBottom : keyB + 65
       }}
       
       ref={refs}
       onContentSizeChange={()=> 
          refs.current.scrollToEnd({animated : true})
       }
       >
        {
            chats.map((item) => {
             
            if(item.sender == "you"){
            
             return (
                    <Txt 
                    txt={item.message}
                    conStl={{
                        alignSelf : "flex-end",
                        backgroundColor: "blue",
                        width: "50%",
                        margin: 6,
                        borderRadius: 3
                        
                    
                    }} 
                    txtStl={{
                        color : "black"
                    }}
                    time={item.timestamp}
                    
                    />
                )
            } else {
                

                return (
                    <Txt 
                    txt={item.message}
                    conStl={{
                        alignSelf : "flex-start",
                        backgroundColor: "green",
                        width: "50%",
                        margin: 6,
                        borderRadius: 3
                    }} 
                    txtStl={{
                        color : "black"
                    }}
                    time={item.timestamp}
                    />
                )

            }
            })
        }
       
       </ScrollView>



       
        
            <View style={{flexDirection: "row",
                position : "absolute", 
                bottom : keyB,
                
                }}
                >
      
                  
          <TextInput style={{color : "black", 
            borderColor : "rgba(51,255,85)",
            borderWidth : 1,
            borderRadius : 8,
            width:"89%",
            marginLeft: 5,
            backgroundColor : "white"
             }}
             multiline={true} 
             ref={input => {
                this.textInput = input
             }}
             placeholder="type..."
             placeholderTextColor={"rgba(60,255,95,0.3)"}
             
           
             >
            </TextInput>
            <Icon 
            onPress={()=>{
                console.log("send")
                this.textInput.clear();
               
            }}
            name="play" 
            size={40}
            style={{
                color : "green",
                marginLeft : 5,
                marginTop: 5
            }}></Icon>
         
          
           
            </View>
            
            </View>
        </SafeAreaView>

    )
}

export default Chat