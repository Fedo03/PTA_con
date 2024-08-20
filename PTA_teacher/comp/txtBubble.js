import React from "react";
import { SafeAreaView,
    View,
    Text
 } 
from "react-native";

const Txt = (props) => {
    return (
        <SafeAreaView>
           <View style={props.conStl}>
            <Text style={props.txtStl}>
                   {props.txt}
            </Text>
            <Text style={{color: "grey",
                fontSize : 12
            }}>
            {props.time}
            </Text>
            </View> 

        </SafeAreaView>
    )
}

export default Txt;