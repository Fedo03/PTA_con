import React from "react"
import {
    SafeAreaView,
    Touchable,
    TouchableOpacity,
    View
} from "react-native"


const Button = ({props}) => {
    return (
        <TouchableOpacity onPress={props.onClick}>
<View   style={props.stl}>
    <Text >
          {props.txt}
    </Text>
              
</View>
        </TouchableOpacity>
      
    )
}

export default Button