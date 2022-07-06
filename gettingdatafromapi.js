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



 
export default class gettingdata extends React.Component {
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
  async getUser(){
    try{
     fetch ('https://api.publicapis.org/entries')
  .then (response => response.json ())
  .then (response => {console.log ('Fetch API Response', response);

    this.setState ({
      
      Array: response.entries,
    });
  });

    } catch (error) {
      console.log(error);
    } 
    }
  

  async postUser() {
    try {

       const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408',
    },
   
   body: JSON.stringify ({
      email: this.state.email,
      name: this.state.name1,
      gender: this.state.gender ,
      status: this.state.status1,
    }),
  };

  fetch ('https://gorest.co.in/public/v1/users', requestOptions)
    .then (response =>  response.json ())
    .then (json => {
      console.log ('Fetch API Response', json.data);
      this.setState ({
  meta: json.data,
});

    
      
    })
    } catch (error) {
      console.log(error);
    } 
  }

  add(e){
    this.setState({e:"heloo"})
  }
  onButtonPress = () => {
  this.setState ({
    email1: this.state.email
  });
};


  componentDidMount() {
    
    this.getUser();
  }

 
  render () {
    return (
      <View
        style={{
          backgroundColor: COLORS.WHITE,

          flex: 1,
        }}
      ><StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {COLORS.WHITE} />
       

            
                
                 
          <Button title="POST: Create User" onPress={() =>{ this.postUser()
          this.setState({email1:this.state.email})} } />
          <TextInput style={styles.textInput}
            onChangeText={(text)=>{
              this.setState({email:text})
            }} />
            
            
         
<Text>{this.state.email1}</Text>
 <Button title="Get: Get UserList" onPress={this.onButtonPress
 
 } />
 <View style={styles.pickerbox}>
              <Picker
                placeholder={{
                        label: 'Select a sport...',
                        value: null,
                    }}
                onValueChange={value => {
                  this.setState ({SelectedValue: value});
                }}
                style={{
                  viewContainer:{
                    

                  },inputIOS:{
                    color:"#000"
                    
                  },
                  
                  inputAndroid: {
                    color:"#000",
                    textAlign:"center",
                    
                  
                    
                    
                  },
                }}
               
                items={this.state.Array}
              />

            </View>
            <Text>
              {this.state.email}
            </Text>
            <FlatList
						style={{
							marginTop: hp('2%')
						}}
						data={this.state.Array}
						renderItem={({ item, index }) => {
							return (
								<View
									style={{
										justifyContent: 'center',
										width: wp('92%'),
										alignSelf: 'center'
									}}
								>
									<Text
										style={{
											color: '#000',
											fontSize: 20,
											marginLeft: wp('2%'),
											
										}}
									>
										{item.API}
                    
									</Text>
                  
									<View
										style={{
											backgroundColor: '#000',
											marginLeft: wp('1%'),
											marginRight: wp('7%'),
											marginTop: hp('1.6%'),
											marginBottom: hp('1.6%'),

											marginRight: 10,
											height: 0.5
										}}
									/>
								</View>
							);
						}}
                        
					/>
                    
                

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
