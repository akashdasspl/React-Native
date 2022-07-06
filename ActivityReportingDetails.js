import React, {useState, Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function ActivityReportingDetails () {
  const [date, setDate] = useState (new Date ());
  const [mode, setMode] = useState ('date');
  const [show, setShow] = useState (false);
  const [text, setText] = useState ('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow (Platform.OS === 'ios');
    setDate (currentDate);
    let tempDate = new Date (currentDate);
    let fDate =
      tempDate.getDate () +
      '/' +
      (tempDate.getMonth () + 1) +
      '/' +
      tempDate.getFullYear ();
    setText (fDate);

    console.log (fDate);
  };
  const showMode = currentMode => {
    setShow (true);
    setMode (currentMode);
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style={{
            margin: wp ('5.33'),
          }}
        >
          <Image source={require ('../asset/images/Vector.png')} />

        </TouchableOpacity>

        <Image source={require ('../asset/images/Frame3.png')} />
        <Text style={styles.text}>
          Activity Reporting
        </Text>
        <TouchableOpacity
          style={{
            margin: wp ('5.33'),

            right: 0,
            position: 'absolute',
          }}
        >
          <Image source={require ('../asset/images/source.png')} />

        </TouchableOpacity>

      </View>
      <View
        style={{
          borderWidth: wp ('.1'),
          marginTop: wp ('2'),
          marginBottom: wp ('5'),
          borderColor: '#E8E9F2',
        }}
      />
      <ScrollView>
        <Text style={styles.nameText}>
          Sales Executive’s Name
        </Text>
        <TextInput style={styles.textInput} />
      
        <Text style={styles.nameText}>
          Activity Name
        </Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.nameText}>
          Brand Name
        </Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.nameText}>
          Doctor’s Name
        </Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.nameText}>
          Hospitals Name
        </Text>
        <TextInput style={styles.textInput} />
        <Text style={styles.nameText}>
          Date
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: wp ('.1'),
            marginLeft: wp ('5.33'),
            marginRight: wp ('5.33'),

            alignItems: 'center',
            borderRadius: wp ('2'),
            borderColor: '#E8E9F2',
          }}
        >
          <Text
            style={{
              margin: wp ('3.5'),
            }}
          >
            {text}
          </Text>
          <TouchableOpacity
            style={{
              right: 1,
              position: 'absolute',
            }}
            onPress={() => showMode ('date')}
          >

            <Image
              style={{margin: wp ('3')}}
              source={require ('../asset/images/Frame2.png')}
            />

          </TouchableOpacity>

          {show &&
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              onChange={onChange}
            />}

        </View>
        <Text style={styles.nameText}>
          Remark
        </Text>
        <TextInput style={styles.textInput} />
        
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>
            Submit
          </Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
}
const styles = StyleSheet.create ({
   text: {
    fontFamily: 'Poppins-Regular',
    color: '#292A3B',
    fontSize: 15,
    fontWeight: '600',

    margin: wp ('3.5'),
  },
  nameText: {
    fontFamily: 'Poppins-Regular',
    color: '#606278',
    fontWeight: '600',

    marginLeft: wp ('5.3'),

    marginTop: wp ('3'),
  },
  textInput: {
    marginLeft: wp ('5.33'),

    marginRight: wp ('5.33'),
    height: hp ('6'),
    borderWidth: wp ('.1'),
    borderColor: '#E8E9F2',
    borderRadius: wp ('1'),
    paddingLeft: 5,

    backgroundColor: 'white',

    fontSize: 17,
  },
  buttonStyle: {
    backgroundColor: '#2D3481',
    alignItems: 'center',
    marginTop: wp ('20'),
    borderRadius: wp ('2.5'),
    margin: wp ('5.3'),
  },
  buttonTextStyle: {
    color: '#fff',
    fontFamily: 'PoppinsBold',
    fontWeight: '500',
    margin: wp ('2.4'),
    fontSize: 18,
  },
});
