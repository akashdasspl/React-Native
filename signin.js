import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Font from 'expo-font';
import {COLORS} from '../asset/colors';
import ImagesPath from '../asset/images/ImagesPath';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class signin extends React.Component {
  constructor(props){
    super(props);
    this.state={
      forPassword:"signin",

    }
  }
  render () {
    return (
      
      <View
        style={{
          backgroundColor:COLORS.WHITE,
        

          flex: 1,
        }}
      ><StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {COLORS.WHITE} />

        <Image style={styles.conEdImg} source={ImagesPath.icConED} />
        {this.state.forPassword=="signin"?(<View><Text style={styles.regStl}>
          Sign In
        </Text>
        <Text style={styles.text}>
          E-mail
        </Text>
        <TextInput style={styles.textInput} />

        <Text style={styles.text}>
          Password
        </Text>
        <TextInput style={styles.textInput} />

        <View>
          <TouchableOpacity
            style={{
              right: wp ('5.33%'),
              position: 'absolute',
            }}
            onPress={()=>{this.setState ({forPassword:"ForgotPassword"})}}
          >
            <Text style={styles.for}>
              Forgot password?
            </Text>

          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Sign In
          </Text>
        </TouchableOpacity>
        <View>
          <View
            style={{
              alignSelf: 'center',
              marginTop: wp ('5.33'),
            }}
          >
            <Text style={styles.text}>
              Don’t have an account?
            </Text>

          </View>

        </View>
        <View>
          <TouchableOpacity
            style={{
              alignSelf: 'center',
            }}
            onPress={() => this.props.navigation.navigate('Registration')}
          >
            <Text style={styles.for}>
              Create New
            </Text>

          </TouchableOpacity>

        </View></View>):null}
        {this.state.forPassword=="ForgotPassword"? (<View>
            <Text style={styles.regStl}>
          ForgotPassword
        </Text>
        <Text style={styles.text}>
          E-mail
        </Text>
        <TextInput style={styles.textInput} />

         

        

        <TouchableOpacity style={styles.buttonStyle}
        onPress={()=>{this.setState({forPassword:"signin"})}}>
          <Text style={styles.buttonTextStyle}>
            Submit
          </Text>
        </TouchableOpacity>
         

        </View>):null}
        

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
    margin:wp('7'),

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
     fontSize:16,
    margin: wp ('2.4'),
    
  },
  for: {
    color: COLORS.DarkModerateBlue,
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
  },
});
