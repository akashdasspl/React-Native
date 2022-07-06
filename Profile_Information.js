import React from 'react';
import {View, Text, Image,StyleSheet,TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImagesPath from '../asset/images/ImagesPath';

export default class Profile_Information extends React.Component {
  render () {
    return (
      <View
        style={{
            backgroundColor:"#fff",
           
          flex: 1,
        }}
      >
      <View
      style={{
        flexDirection:"row"
      }}>
      <Image
          style={{
              width:wp("20"),
              height:wp("10"),
              marginLeft:wp("5.33"),
              marginTop:wp("2.6")
           
          }}
          source={ImagesPath.icConED}
        />
        <TouchableOpacity
        style={{
            
            
              margin:wp("5.33"),

              right:0,
              position:"absolute"
           
          }}>
        <Image
          
          source={require ('../asset/images/source.png')}>

        </Image>

        </TouchableOpacity>

        

      </View>
 <View
      style={{borderWidth:wp(".1"),
       marginTop:wp('5'),
        borderColor:"#E8E9F2"}}></View>
        <Text
        style={styles.text}>
          Profile Information
        </Text>
        <View
        style={styles.nameView}>
          <Text
          style={styles.nameText}>
            Name
          </Text>
          <Text
          style={styles.nameInf}>
            Swapnil Harkanth
          </Text>
        </View>
         <View
        style={styles.nameView}>
          <Text
          style={styles.nameText}>
            Name
          </Text>
          <Text
          style={styles.nameInf}>
            Swapnil Harkanth
          </Text>
        </View>
         <View
        style={styles.nameView}>
          <Text
          style={styles.nameText}>
            Name
          </Text>
          <Text
          style={styles.nameInf}>
            Swapnil Harkanth
          </Text>
        </View>
         <View
        style={styles.nameView}>
          <Text
          style={styles.nameText}>
            Name
          </Text>
          <Text
          style={styles.nameInf}>
            Swapnil Harkanth
          </Text>
        </View>
        <View
      style={{borderWidth:wp(".1"),
       marginTop:wp('5'),
        borderColor:"#E8E9F2"}}></View>
         <TouchableOpacity>
           <View
      style={styles.ViewStl}>
        
          <Image
           style={styles.Img1}
          
          source={require("../asset/images/Frame.png")}>

          </Image>
          <Text
          style={styles.text}>
            Trainings
          </Text>
          <Image
          style={styles.Img2}
          source={require("../asset/images/Vect.png")}>

          </Image>
        </View>
         </TouchableOpacity>

         <TouchableOpacity>
           <View
      style={styles.ViewStl}>
        
          <Image
           style={styles.Img1}
          
          source={require("../asset/images/Frame.png")}>

          </Image>
          <Text
          style={styles.text}>
            Trainings
          </Text>
          <Image
          style={styles.Img2}
          source={require("../asset/images/Vect.png")}>

          </Image>
        </View>
         </TouchableOpacity>


         <TouchableOpacity>
           <View
      style={styles.ViewStl}>
        
          <Image
           style={styles.Img1}
          
          source={require("../asset/images/Frame.png")}>

          </Image>
          <Text
          style={styles.text}>
            Trainings
          </Text>
          <Image
          style={styles.Img2}
          source={require("../asset/images/Vect.png")}>

          </Image>
        </View>
         </TouchableOpacity>
          
        

      </View>
    );
  }
}const styles = StyleSheet.create({
  text:{
     fontFamily:"PoppinsBold",
    color:"#606278",
    fontSize:15,
    fontWeight:"600",
 
margin:wp("5") },
nameView:{
  flexDirection:"row",
   

},
nameText:{
   
  fontFamily:"Poppins-Regular",
    color:"#606278",
    fontWeight:"600",
     
  marginLeft:wp("5.3"),
     marginRight:wp("5.3"),
     margin:wp(".5")

},
nameInf: {
  fontFamily:"Poppins-Regular",
    right:wp("0"),
    fontWeight:"600",
     
  marginLeft:wp("5.3"),
     marginRight:wp("5.3"),
     position:"absolute",
     margin:wp(".5")


},ViewStl:{
  borderWidth:wp(".1"),
      flexDirection:"row",
      alignItems:"center",
       marginTop:wp('5.33'),
       marginLeft:wp("5.33"),
       marginRight:wp("5.33"),
        borderColor:"#EDEEF3"
},
Img1:{
            
            
              marginLeft:wp("5.33"),
              marginBottom:wp("5.33"),
              marginTop:wp("5.33"),

              
              
           
          },
          Img2:{
            
            
              margin:wp("5.33"),

              right:10,
              position:"absolute"
           
          }

  
})
