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
  Button,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RadioButton} from 'react-native-paper';

import ImagesPath from '../asset/images/ImagesPath';
import Picker from 'react-native-picker-select';
import COLOR, {COLORS} from '../asset/colors';

let data = [
  {label: 'Football', value: 'football'},
  {label: 'Baseball', value: 'baseball'},
  {label: 'Hockey', value: 'hockey'},
];

export default class weather extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
     API_key:"62796d858cbba3bdc73ca4eea5b93cb8",
     API:"https://api.openweathermap.org/data/2.5/weather?q=London&appid=62796d858cbba3bdc73ca4eea5b93cb8",
     weatherData:null,
     loaded:true,
     Array:[],
     cityname:[]
    };
  }
  async fetchWeatherData () {
    try {
      fetch (this.state.API)
        .then (response => response.json ())
        .then (response => {
          console.log ('Fetch API Response', response);

          this.setState ({
  Array: response.main,
  cityname:response

});


          
        });
    } catch (error) {
      console.log (error);
    }
  }

   
  componentDidMount () {
    this.fetchWeatherData();
  }

  render () {
    return (
        <View style={{
            marginTop:100
        }}>
        <Text>
            {this.state.cityname.name}
        </Text>
         <Text>
            {this.state.Array.temp}
        </Text>


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
    backgroundColor: '#fff',
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
