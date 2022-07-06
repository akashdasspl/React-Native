import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Font from 'expo-font';
import {COLORS} from '../asset/colors';
import ImagesPath from '../asset/images/ImagesPath';

export default class ForgotPassword extends React.Component {
  render () {
    return (
      <View
        style={{
          color: COLORS.WHITE,

          flex: 1,
        }}
      >

        <Image style={styles.conEdImg} source={ImagesPath.icConED} />
        <Text style={styles.regStl}>
          ForgotPassword
        </Text>
        <Text style={styles.text}>
          E-mail
        </Text>
        <TextInput style={styles.textInput} />

         

        

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Submit
          </Text>
        </TouchableOpacity>
         

      </View>
    );
  }
}
const styles = StyleSheet.create ({
  conEdImg: {
    alignSelf: 'center',
    marginTop: wp ('20'),
    width: wp ('70.4%'),
    height: hp ('14.5%'),
    margin: hp ('3.7%'),
  },
  regStl: {
    fontSize: 30,
    fontFamily: 'PoppinsBold',
    alignSelf: 'center',
    margin: wp ('7'),

    color: COLORS.DarkModerateBlue,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.Darkgrayishblue,
    fontWeight: '600',
    marginLeft: wp ('5.33'),
    marginTop: wp ('5.33'),
  },
  textInput: {
    marginLeft: wp ('5.33'),
    marginRight: wp ('5.33'),
    height: hp ('5'),
    borderWidth: 1,
    borderColor: COLORS.Lightgrayishblue,
    borderRadius: wp ('1'),
    paddingLeft: 5,

    fontSize: 17,
  },
  buttonStyle: {
    backgroundColor: COLORS.DarkModerateBlue,
    alignItems: 'center',
    margin: wp ('5.33'),
    borderRadius: wp ('2.5'),
    marginTop: wp ('20'),
  },
  buttonTextStyle: {
    color: COLORS.WHITE,
    fontFamily: 'PoppinsBold',
    fontSize: 16,
    margin: wp ('2.4'),
  },
   
});
