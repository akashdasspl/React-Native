import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar,
  FlatList,
  Button
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RadioButton} from 'react-native-paper';

import ImagesPath from '../asset/images/ImagesPath';
import Picker from 'react-native-picker-select';
import COLOR, {COLORS} from '../asset/colors';

  
let data = [
  {label: 'Football', value: 'football'},
  {label: 'Baseball', value: 'baseball'},
  {label: 'Hockey', value: 'hockey'},
];



 
export default class t1 extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      Manager: 'RegionManager',
      SelectedValue: '',
      textInput: '',
      data:[],
      name1:"akash",
      email:"akasjh@gmail.com",
      email1:"",
      gender:"male",
      status1:"active",
      meta:[],
      Array:[]
    };
  }
  
    
      
  
 

 
  render () {
    return (
      <View
        style={{
          backgroundColor: COLORS.WHITE,

          flex: 1,
        }}
      ><StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {COLORS.WHITE} />
       

            
                
          
        
            
            
         
<Text>{this.state.email1}</Text>
 <Button title="Get: Get UserList" onPress={this.onButtonPress
 
 } />
  
                    
                

              </View>
            
          
    );
  }
}
const styles = StyleSheet.create ({
  text: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.Darkgrayishblue,
    fontWeight: '600',
    marginLeft: wp ('5.33'),
    marginTop: wp ('5.33'),
  },
  managerText: {
    fontFamily: 'Poppins-Regular',
    color: COLORS.Darkgrayishblue,
    fontWeight: '500',
    fontSize: 12,
  },

  textInput: {
    marginLeft: wp ('5.33'),
    marginRight: wp ('5.33'),
    height: hp ('5'),
    borderWidth: wp ('.1'),
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
  },
  buttonTextStyle: {
    color: COLORS.WHITE,

    fontWeight: '500',
    margin: wp ('2.4'),
    fontFamily: 'PoppinsBold',
    fontSize: 16,
  },
  pickerbox: {
    margin: wp ('5.33'),
    borderWidth: wp ('.1'),
    borderColor: COLORS.BLACK,
    height: hp ('5'),
    justifyContent: 'center',
    borderRadius: wp ('1'),
    borderColor: COLORS.Lightgrayishblue,
    backgroundColor:"#fff",
    
    
  },
  regStl: {
    fontSize: 20,
    fontFamily: 'PoppinsBold',
    alignSelf: 'center',

    color: COLORS.DarkModerateBlue,
  },
  RowStl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: wp ('3.5'),
    marginRight: wp ('5.33'),
  },
  rdoStl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
