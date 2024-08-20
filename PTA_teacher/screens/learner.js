import React, {useState} from "react"
import { SafeAreaView,
    StatusBar, 
    StyleSheet,
    Dimensions,
    View,
    Text,
    ScrollView
 } from "react-native"
import ListComp from "../comp/listComp"
import Icon from 'react-native-vector-icons/FontAwesome';


const Learners = ({navigation}) => {

    const [cli, setCli] = useState()
    const [checks,setChecks] = useState(false)
    const [menu, setMenu] = useState(false)
    const [homeW, setHomeW] = useState(false)
   

    const [menuL, setMenuL] = useState([{
        id : 1,
        name : "homework",
        icon : "pencil",
        click : () => {
            console.log("clicked")
            setMenu(false)
            setHomeW(true)
        }
    },{
        id:2,
        name: "assignments",
        icon : "book",
        click : () => {
            console.log("clicked")
            setMenu(false)
        }
    }, {
        id : 3,
        name : "settings",
        icon :"gear",
        click : () => {
            console.log("clicked")
            setMenu(false)
        }
    }])

    const [lea, setLea] = useState([{
        name : "Fedo",
        avg : "avg"
    },{
        name : "name",
        avg : "avg"
    },{
        name : "name",
        avg : "avg"
    }, {
        name : "name",
        avg : "avg"
    }, {
        name : "name",
        avg : "avg"
    }, {
        name : "name",
        avg : "avg"
    }, {
        name : "name",
        avg : "avg"
    },{
        name : "name",
        avg : "avg"
    }, {
        name : "name",
        avg : "avg"
    },{
        name : "name",
        avg : "avg"
    },{
        name : "name",
        avg : "avg"
    },{
        name : "name",
        avg : "avg"
    },{
        name : "name",
        avg : "avg"
    },{
        name : "name",
        avg : "avg"
    },{
        name : "name",
        avg : "avg"
    },])

   function nav(item) {
    navigation.navigate("chat", {info : item})
   }

    return(
        <SafeAreaView>
            {/*top of the screen*/}
              <StatusBar 
            backgroundColor={"rgba(51,255,85,0.5)"}
            />


              <View style={styl.heaCon}>
                <Text style={styl.heaTxt}>
                    Learners
                </Text>
                { (!checks) &&
                <Icon
                name="bars" 
                size={30}  
                style={{alignSelf: 'flex-start', 
                    paddingLeft : 4,
                color : "black"}}
                onPress={()=> {

                    if(menu){
                        setMenu(false)
                    } else {
                    setMenu(true)
                    }
                    console.log("manu pressed")
                }} > </Icon>
            }

            {
                checks &&
<View style={{width : Dimensions.get("screen").width,
            flexDirection : "row",
}}>
<Icon
name="check" 
size={30}  
style={{alignSelf: 'flex-start', 
    paddingLeft : 4,
    color : "black"
}}
onPress={()=> {
    setChecks(false)
console.log("tick")
}} > </Icon>

<Icon
name="times" 
size={30}  
style={{alignSelf: 'flex-end', 
    paddingLeft : 4,
    marginLeft: "80%",
    color : "black"
}}
onPress={()=> {
    setChecks(false)
console.log("tick")
}} > </Icon>
</View>
                
            }
            </View>

                
            <View style={{position:"absolute",
                 bottom : Dimensions.get("screen").height /2,
                 width :Dimensions.get("screen").width,
                 alignItems: "center",
                 zIndex: 1}}>
                {
                    homeW && <View
                    style={{backgroundColor: "green",
                        width : Dimensions.get("screen").width/2 ,
                        borderWidth : 1,
                        borderRadius : 5,
                        alignItems : "center"
                    }}
                    >
                         <ListComp 
                         txt="check homework"
                         txtStyle={{color: "black",
                            fontSize : 20,
                            
                         }}
                     
                         onClick={()=>{
                            setChecks(true)
                            setHomeW(false)
                         }}/>
                         <ListComp txt="create homework"
                         txtStyle={{color: "black",
                            fontSize : 20
                         }} 
                         onClick={()=>{
                           
                            setHomeW(false)
                         }}/>
                         </View>
                }
            </View>
      {/*menu */}
            <View>
            {   menu &&
            <View style={{position : "absolute", 
                    backgroundColor : "green",
                    height : Dimensions.get("screen").height,
                    width :Dimensions.get("screen"). width - 200,
                    zIndex: 1
                    }}>
               {
                menuL.map((item)=>{
                 return (
                    <View style={{flexDirection: "row", 
                        borderBottomWidth : 1,
                        borderColor :"rgba(51,255,85,0.5)"
                    }}>
                       <Icon name={item.icon} 
                       size={30} 
                       style={{color:"black"}}/>
                     <ListComp txt={item.name} 
                    txtStyle={{color : "black", 
                        fontSize :25,
                        paddingLeft : 5,
                        paddingBottom : 2
                    }} 

                    onClick={item.click}
                    />
                    </View>
                )
                })

               }
             
                </View>

           }
           </View>
            <ScrollView style={{marginBottom : 35}}>
                
             {
                lea.map((item) => {
                    return(
                      
                            <ListComp 
                            
                            txt={item.name} 
                            txtStyle={{color : "black", 
                                fontSize : 20,
                                paddingLeft : 5,
                            }} 
                            check={checks}
                            avg={item.avg}
                          conStyle={styl.list}
                          onClick={() => {
                            nav(item)}}
                          checkCli={()=> {
                            console.log("check box")

                        }}
                        
                          />
                            
                    
                    )
                })
             }
           </ScrollView>
           
        </SafeAreaView>

    )
}

const styl = StyleSheet.create({
    heaCon : {
        width : Dimensions.get("screen").width,
       // flex: 1,
        //justifyContent: "center"
        alignItems: 'center',
        backgroundColor : "rgb(51,255,85)",
        

    },
    heaTxt : {
        color : "black",
        fontSize : 40,

    },
    list : {
        width : Dimensions.get("screen").width - 2,
        borderColor : "grey",
        borderWidth: 2,
        height: 50, 
        margin : 2,
        borderRadius : 8
        //flexDirection: 'row'


    }

})


export default Learners