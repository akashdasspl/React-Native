import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class  CheckQuestions extends React.Component {
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

          <Image source={require ('../asset/images/Frame6.png')} />
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: '#292A3B',
              fontSize: 15,
              fontWeight: '700',

              margin: wp ('5'),
            }}
          >
            Check Questions
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

        <TouchableOpacity>
          <View style={styles.ViewStl}>

            <Text style={styles.text}>
             Pharmaceutical Module 1
            </Text>
            <Image
              style={styles.Img2}
              source={require ('../asset/images/Vect.png')}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.ViewStl}>

            <Text style={styles.text}>
              Pharma test for MR
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
    borderBottomWidth: wp ('.1'),
    flexDirection: 'row',
    alignItems: 'center',

    borderColor: '#EDEEF3',

    borderRadius: 10,
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
