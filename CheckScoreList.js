import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class CheckScoreList extends React.Component {
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
        <Text style={styles.text}>
          Test Result
        </Text>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>
            Total Questions
          </Text>
          <Text style={styles.nameInf}>
            5
          </Text>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>
            correct Answers
          </Text>
          <Text style={styles.nameInf}>
            4
          </Text>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>
            Wrong Answer
          </Text>
          <Text style={styles.nameInf}>
          1
          </Text>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>
            Total Time Taken
          </Text>
          <Text style={styles.nameInf}>
            30 min
          </Text>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>
            Name
          </Text>
          <Text style={styles.nameInf}>
            Swapnil
          </Text>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>
            Region / Area
          </Text>
          <Text style={styles.nameInf}>
            Rajasthan
          </Text>
        </View>
        <View style={styles.nameView}>
          <Text style={styles.nameText}>
            Reporting AM
          </Text>
          <Text style={styles.nameInf}>
            Chinmay
          </Text>
        </View>
         
        

      </View>
    );
  }
}
const styles = StyleSheet.create ({
  text: {
    fontFamily: 'PoppinsBold',
    color: '#292A3B',
    fontSize: 15,
    fontWeight: '600',

    margin: wp ('5'),
  },
  nameView: {
    flexDirection: 'row',
    marginTop:wp('1')
  },
  nameText: {
    fontFamily: 'Poppins-Regular',
    color: '#292A3B',
    fontWeight: '600',

    marginLeft: wp ('5.3'),
    marginRight: wp ('5.3'),
    margin: wp ('.5'),
  },
  nameInf: {
    fontFamily: 'Poppins-Regular',
    right: wp ('0'),
    fontWeight: '600',

    marginLeft: wp ('5.3'),
    marginRight: wp ('5.3'),
    position: 'absolute',
    margin: wp ('.5'),
     
    color: '#292A3B',
    fontSize: 15,
    fontWeight: '700',

    
  },
  ViewStl: {
    borderWidth: wp ('.1'),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp ('5.33'),
    marginLeft: wp ('5.33'),
    marginRight: wp ('5.33'),
    borderColor: '#EDEEF3',
  },
  Img1: {
    marginLeft: wp ('5.33'),
    marginBottom: wp ('5.33'),
    marginTop: wp ('5.33'),
  },
  Img2: {
    margin: wp ('5.33'),

    right: 10,
    position: 'absolute',
  },
});
