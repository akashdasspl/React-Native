import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class ScoreBoard extends React.Component {
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

          <Image source={require ('../asset/images/Frame.png')} />
          <Text style={styles.text}>
            Score Board
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
            
            borderColor: '#E8E9F2',
          }}
        />
        <ScrollView>
             <TouchableOpacity>
          <View style={{borderWidth: wp ('.1'),
    flexDirection: 'row',
    alignItems: 'center',

    borderColor: '#EDEEF3',
    marginTop: wp ('10'),
    marginLeft: wp ('5.33'),
    marginRight: wp ('5.33'),
    borderRadius: 10,}}>
           <Text style={styles.Text1}>
              1
            </Text>

            <Image
              style={styles.Img1}
              source={require ('../asset/images/Group.png')}
            />
            <Text style={styles.text}>
             Swapnil  Shah
            </Text>
             <Text style={styles.Img2}>
              98
            </Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity>
          <View style={styles.ViewStl}>
           <Text style={styles.Text1}>
              2
            </Text>

            <Image
              style={styles.Img1}
              source={require ('../asset/images/Group.png')}
            />
            <Text style={styles.text}>
             Guy Hawkins
            </Text>
             <Text style={styles.Img2}>
              92
            </Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity>
          <View style={styles.ViewStl}>
           <Text style={styles.Text1}>
              3
            </Text>

            <Image
              style={styles.Img1}
              source={require ('../asset/images/Group.png')}
            />
            <Text style={styles.text}>
             Devon Lane
            </Text>
             <Text style={styles.Img2}>
              88
            </Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity>
          <View style={styles.ViewStl}>
           <Text style={styles.Text1}>
              4
            </Text>

            <Image
              style={styles.Img1}
              source={require ('../asset/images/Group.png')}
            />
            <Text style={styles.text}>
             Jerome Bell
            </Text>
             <Text style={styles.Img2}>
              83
            </Text>
          </View>
        </TouchableOpacity>
         <TouchableOpacity>
          <View style={styles.ViewStl}>
           <Text style={styles.Text1}>
              5
            </Text>

            <Image
              style={styles.Img1}
              source={require ('../asset/images/Group.png')}
            />
            <Text style={styles.text}>
            Courtney Henry
            </Text>
             <Text style={styles.Img2}>
              80
            </Text>
          </View>
        </TouchableOpacity>
          
        </ScrollView>

         
          

         

         

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

    margin: wp ('3.5'),
  },

  ViewStl: {
    borderWidth: wp ('.1'),
    flexDirection: 'row',
    alignItems: 'center',

    borderColor: '#EDEEF3',
    marginTop: wp ('5.33'),
    marginLeft: wp ('5.33'),
    marginRight: wp ('5.33'),
    borderRadius: 10,
  },
  Img1: {
    marginLeft: wp ('2'),
    marginBottom: wp ('5'),
    marginTop: wp ('5'),
    width:wp ('12'),
    height:wp ('12'),
  },
  Img2: {
    margin: wp ('5.33'),

    right: 10,
    position: 'absolute',
  },
  Text1:{
       margin: wp ('5.33'),
  }
});
