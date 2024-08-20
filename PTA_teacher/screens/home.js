import React , {useState, useEffect} from "react";

import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Dimensions,
    StatusBar,
    ScrollView
} from "react-native";

import ListComp from "../comp/listComp";
import Icon from 'react-native-vector-icons/FontAwesome';






const Home = ({navigation}) => {
      
    const [menu, setMenu] = useState(false)
    const [clas, setClas] = useState([
        {grade :"grade 9A",
        id : 1}, 
       {grade :  "grade 9B",
        id : 2 },
        {grade : "grade 11A",
        id : 3
        },{ grade : "grade 12",
        id: 4
        }])
      

    function nav(){
        navigation.navigate("Learner")
        console.log("navigate")
    }


    return (
        <SafeAreaView>
            <StatusBar 
            backgroundColor={"rgba(51,255,85,0.5)"}
            />

            <View style={styl.heaCon}>
               
                <Text style={styl.heaTxt}>
                    class
                </Text>
                <Icon
                name="bars" 
                size={30}  
                style={{alignSelf: 'flex-start',
                     paddingLeft : 4,
                    color: "black"}}
                onPress={()=> {

                    if(menu){
                        setMenu(false)
                    } else {
                    setMenu(true)
                    }
                    console.log("manu pressed")
                }} > </Icon>
            </View>

            <View style={{}}>
            {   menu &&
            <View style={{position : "absolute", 
                    backgroundColor : "green",
                    height : Dimensions.get("screen").height,
                    width :Dimensions.get("screen"). width - 200,
                    zIndex: 1
                    }}>
                <Text> ops</Text>
               
              
             
                </View>
           }
            </View>
         
           
             
         
           <ScrollView>
            <View>
            

         
                
             {
                clas.map((item) => {
                    return(
                        <View style={{}}>
                            <ListComp 
                            txt={item.grade} 
                            txtStyle={{color : "black", 
                                fontSize : 20,
                                paddingLeft : 5
                            }} 
                           onClick={nav}
                            avg={"avg"}
                            conStyle={styl.list}/>
                            
                        </View>
                    )
                })
             }

           </View>

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
        width : Dimensions.get("screen").width - 3,
        borderColor : "grey",
        borderWidth: 2,
        height: 50, 
        margin : 2,
        borderRadius : 8


    }

})


export default Home;