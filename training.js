import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class training extends React.Component {
  render () {
    return (
      <View
        style={{
          backgroundColor: '#fff',

          flex: 1,
        }}
      >
         <View
      style={{
        flexDirection:"row",
        alignItems:"center"
      }}>
      <TouchableOpacity
        style={{
            
            
              margin:wp("5.33"),
 
              
           
          }}>
        <Image
          
          source={require ('../asset/images/Vector.png')}>

        </Image>
       

        </TouchableOpacity>
        
      <Image
          
          source={require ('../asset/images/Frame.png')}
        />
         <Text style={styles.text}>
            Trainings
        </Text>
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
       marginTop:wp('2'),
       marginBottom:wp ('5'),
        borderColor:"#E8E9F2"}}></View>
        
        <TouchableOpacity>
          <View style={styles.ViewStl}>

            <Image
              style={styles.Img1}
              source={require ('../asset/images/Frame5.png')}
            />
            <Text style={styles.text}>
              Training Material Modules
            </Text>
            <Image
              style={styles.Img2}
              source={require ('../asset/images/Vect.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.ViewStl}>

            <Image
              style={styles.Img1}
              source={require ('../asset/images/Frame6.png')}
            />
            <Text style={styles.text}>
              Check Questions
            </Text>
            <Image
              style={styles.Img2}
              source={require ('../asset/images/Vect.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.ViewStl}>

            <Image
              style={styles.Img1}
              source={require ('../asset/images/Frame7.png')}
            />
            <Text style={styles.text}>
              Check Reports / Find Reward
            </Text>
            <Image
              style={styles.Img2}
              source={require ('../asset/images/Vect.png')}
            />
          </View>
        </TouchableOpacity>
         <TouchableOpacity>
          <View style={styles.ViewStl}>

            <Image
              style={styles.Img1}
              source={require ('../asset/images/Frame8.png')}
            />
            <Text style={styles.text}>
              Check Score List
            </Text>
            <Image
              style={styles.Img2}
              source={require ('../asset/images/Vect.png')}
            />
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create ({
  text: {
    fontFamily: 'Poppins-Regular',
    color: '#292A3B',
    fontSize: 15,
    fontWeight: '600',

    margin: wp ('5'),
  },
  
  
  ViewStl: {
    borderWidth: wp ('.1'),
    flexDirection: 'row',
    alignItems: 'center',
     
    borderColor: '#EDEEF3',
    margin:wp("5.33"),
    borderRadius:10
  },
  Img1: {
    marginLeft: wp ('4'),
    marginBottom: wp ('4'),
    marginTop: wp ('4'),
  },
  Img2: {
    margin: wp ('5.33'),

    right: 10,
    position: 'absolute',
  },
});
