import React from "react";
import {
  View,
  Text,
  Image,
  
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export default class conEd extends React.Component{
    
    render(){
        return(
            <View
            style={{justifyContent:"center",
            flex:1}}>
           
            <Image
            style={{
                alignSelf:"center",
                justifyContent:"center",
                width:wp("87%"),
                height:hp("18%")

                
                

            }}
            source={require("../asset/images/coned.png")}>

            </Image>
             

            </View>
        )
    }
    
}