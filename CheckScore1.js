import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import conEd from './conEd';
const Tab = createMaterialTopTabNavigator ();

export default class CheckScore1 extends React.Component {
  render () {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
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

          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: '#292A3B',
              fontSize: 15,
              fontWeight: '700',

              margin: wp ('5'),
            }}
          >
            Check Score
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

        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#292A3B',
            inactiveTintColor: '#606278',
          }}
          style={{
            marginTop: hp ('2%'),
          }}
          screenOptions={{
            tabBarStyle: {backgroundColor: '#fff'},
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '600',
              fontFamily: 'Poppins-Regular',
              fontStyle: 'normal',
            },

            tabBarIndicatorStyle: {
              backgroundColor: '#2D3481',
            },
          }}
        >
          <Tab.Screen
            name="Check for AM"
            component={
              class Check extends React.Component {
                render () {
                  return (
                    <View
                      style={{
                        backgroundColor: '#fff',
                        flex: 1,
                      }}
                    >
                      <Text style={styles.text}>
                        Test Module list Given By Area Manager
                      </Text>
                      <View
                        style={{
                          borderWidth: wp ('.1'),
                          marginLeft: wp ('5.33'),
                          marginRight: wp ('5.33'),

                          borderColor: '#E8E9F2',
                        }}
                      />

                      <TouchableOpacity>
                        <View style={styles.ViewStl}>

                          <Text style={styles.text}>
                            Test for both AM and MR
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
            }
            options={{}}
          />
          <Tab.Screen
            name="Check for SE"
            component={
              class Check2 extends React.Component {
                render () {
                  return (
                    <View
                      style={{
                        backgroundColor: '#fff',
                        flex: 1,
                      }}
                    >
                      <Text style={styles.text}>
                        Test Module list Given By Sales Executive
                      </Text>
                      <View
                        style={{
                          borderWidth: wp ('.1'),
                          marginLeft: wp ('5.33'),
                          marginRight: wp ('5.33'),

                          borderColor: '#E8E9F2',
                        }}
                      />

                       
                      <View
                        style={{
                          borderWidth: wp ('.1'),
                          marginLeft: wp ('5.33'),
                          marginRight: wp ('5.33'),

                          borderColor: '#E8E9F2',
                        }}
                      />

                      <TouchableOpacity>
                        <View style={styles.ViewStl}>

                          <Text style={styles.text}>
                            Test for Both AM and MR
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
            }
            options={{}}
          />

        </Tab.Navigator>

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
