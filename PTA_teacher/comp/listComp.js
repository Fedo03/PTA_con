import React from "react";
import { SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    
 } from "react-native";
 import CheckBox from "react-native-check-box"



const ListComp = (props) => {

    function check(clicked) {
        var color = "white"

        if(clicked) {
         color  = "rgba(51,255,85,0.5)"
        }
        const check = <View style={{ borderColor :"black", height: 30 , backgroundColor : color, width: 30 }} > </View>

        return check
    }


    return (
        <SafeAreaView>
            <TouchableOpacity onPress={props.onClick}>
                
            <View style={props.conStyle} >
          {  props.img && 
          <Image source={require("./th.jpg")} style={props.stlImg}/> 
          }

                <View style={{
                    flexDirection : "row", 
                    width : "100%"
                    }}>

                    <Text style={props.txtStyle}>
                    {props.txt}
                </Text>
                
                {props.check && <CheckBox 
                style={{alignSelf: 'flex-end' ,marginLeft : "80%", backgroundColor:props.cli}} 
                 onClick={props.checkCli}
                 value={true}
                 />}
                </View>
                <Text style={{float : "left"}}>
                    {props.avg}
                </Text>
           
            </View>

            </TouchableOpacity>
            
        </SafeAreaView>
    )
}

export default ListComp;