import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
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

export default class Registration extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      Manager: 'RegionManager',
      SelectedValue: '',
      textInput:''
    };

  }
  

  render () {
    return (
      <View
        style={{
          backgroundColor: COLORS.WHITE,
         

          flex: 1,
        }}
      >
        <View style={styles.rdoStl}>

          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('signin')}>
            <Image style={{margin: wp ('5.33')}} source={ImagesPath.icVector} />

          </TouchableOpacity>

          <Text style={styles.regStl}>
            Registration
          </Text>

        </View>
        <View
          style={{
            borderWidth: wp ('.1'),

            borderColor: COLORS.Lightgrayishblue,
          }}
        />

        <Text
          style={{
            fontSize: 14,
            color: COLORS.Verydarkgrayishblue,

            margin: wp ('5.33'),
            marginTop: wp ('5.33'),
            fontFamily: 'PoppinsSemiBold',
            fontWeight: '600',
          }}
        >
          Select Your Designation
        </Text>

        <View style={styles.RowStl}>
          <View style={styles.rdoStl}>
            <RadioButton
              color={COLORS.DarkModerateBlue}
              value="first"
              status={
                this.state.Manager == 'RegionManager' ? 'checked' : 'unchecked'
              }
              onPress={() => this.setState ({Manager: 'RegionManager'})}
            />
            <View>
              <Text style={styles.managerText}>
                Regional

              </Text>
              <Text style={styles.managerText}>

                Manager

              </Text>

            </View>

          </View>
          <View style={styles.rdoStl}>
            <RadioButton
              color={COLORS.DarkModerateBlue}
              value="2"
              status={
                this.state.Manager == 'AreaManager' ? 'checked' : 'unchecked'
              }
              onPress={() => this.setState ({Manager: 'AreaManager'})}
            />
            <View>
              <Text style={styles.managerText}>
                Area

              </Text>
              <Text style={styles.managerText}>

                Manager

              </Text>

            </View>

          </View>
          <View style={styles.rdoStl}>
            <RadioButton
              color={COLORS.DarkModerateBlue}
              value="third"
              status={
                this.state.Manager == 'MedicalRepresentative'
                  ? 'checked'
                  : 'unchecked'
              }
              onPress={() => this.setState ({Manager: 'MedicalRepresentative'})}
            />
            <View>
              <Text style={styles.managerText}>
                Medical

              </Text>
              <Text style={styles.managerText}>

                Representative

              </Text>

            </View>

          </View>

        </View>
        <View
          style={{
            borderWidth: wp ('.1'),
            marginTop: wp ('5'),
            borderColor: COLORS.Lightgrayishblue,
          }}
        />
        <ScrollView>
         {this.state.Manager == 'RegionManager' || 
         this.state.Manager == 'AreaManager' ||
            this.state.Manager == 'MedicalRepresentative'
            ?

          <View>
            <Text style={styles.text}>
              First Name
            </Text>
            <TextInput style={styles.textInput}
            onChangeText={(text)=>{
              this.setState({textInput:text})
            }} />
            <Text style={styles.text}>
              Last Name{this.state.textInput}
            </Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.text}>
              E-mail
            </Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.text}>
              Mobile
            </Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.text}>
              Password
            </Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.text}>
              Select Region
            </Text>
            <View style={styles.pickerbox}>
              <Picker
                placeholder={''}
                onValueChange={value => {
                  this.setState ({SelectedValue: value});
                }}
                style={{
                  inputAndroid: {
                    color:COLORS.BLACK,
                  },
                }}
                items={data}
              />

            </View>

          </View>: null}
          {this.state.Manager == 'AreaManager' ||
            this.state.Manager == 'MedicalRepresentative'
            ? <View>

                <Text style={styles.text}>
                  Select Region Manager
                </Text>
                 <View style={styles.pickerbox}>
              <Picker
                placeholder={''}
                onValueChange={value => {
                  this.setState ({SelectedValue: value});
                }}
                style={{
                  inputAndroid: {
                    color:COLORS.BLACK,
                  },
                }}
                items={data}
              />

            </View>

                <Text style={styles.text}>
                  Select Area
                </Text>
                 <View style={styles.pickerbox}>
              <Picker
                placeholder={''}
                onValueChange={value => {
                  this.setState ({SelectedValue: value});
                }}
                style={{
                  inputAndroid: {
                    color:COLORS.BLACK,
                  },
                }}
                items={data}
              />

            </View>

              </View>
            : null}{this.state.Manager == 'MedicalRepresentative'
            ? <View>
                <View>

                  <Text style={styles.text}>
                    Select area Manager
                  </Text>
                   <View style={styles.pickerbox}>
              <Picker
                placeholder={''}
                onValueChange={value => {
                  this.setState ({SelectedValue: value});
                }}
                style={{
                  inputAndroid: {
                    color:COLORS.BLACK,
                  },
                }}
                items={data}
              />

            </View>

                  <View />

                </View>

              </View>
            : <View />}
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>
              Submit
            </Text>
          </TouchableOpacity>
          

        </ScrollView>

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
     fontSize:16,
  },
  pickerbox: {
    margin: wp ('5.33'),
    borderWidth: wp ('.1'),
    borderColor: COLORS.BLACK,
    height: hp ('5'),
    justifyContent: 'center',
    borderRadius: wp ('1'),
    borderColor: COLORS.Lightgrayishblue,
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
