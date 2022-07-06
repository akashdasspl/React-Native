import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class ActivityReportingppa1 extends React.Component {
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

          <Image source={require ('../asset/images/Frame3.png')} />
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: '#292A3B',
              fontSize: 15,
              fontWeight: '700',

              margin: wp ('5'),
            }}
          >
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

            borderColor: '#E8E9F2',
          }}
        />
        <ScrollView>

          <View
            style={{
              borderWidth: wp ('.1'),

              marginLeft: wp ('5.33'),
              marginBottom: wp ('2'),
              marginRight: wp ('5.33'),
              marginTop: wp ('10'),

              borderColor: '#EDEEF3',

              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={styles.Image}
                source={require ('../asset/images/Frame3.png')}
              />
              <Text style={styles.text}>PPA</Text>
            </View>
            <View style={styles.rowView}>
              <TouchableOpacity style={styles.orangeView}>
                <Text style={styles.orange}>
                  View
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.greenView}>
                <Text style={styles.green}>
                  Accept
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.redView}>
                <Text style={styles.red}>
                  Reject
                </Text>

              </TouchableOpacity>

            </View>

          </View>
          <View style={styles.ViewStl}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={styles.Image}
                source={require ('../asset/images/Frame3.png')}
              />
              <Text style={styles.text}>PPA</Text>
            </View>
            <View style={styles.rowView}>
              <TouchableOpacity style={styles.orangeView}>
                <Text style={styles.orange}>
                  View
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.greenView}>
                <Text style={styles.green}>
                  Accept
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.redView}>
                <Text style={styles.red}>
                  Reject
                </Text>

              </TouchableOpacity>

            </View>

          </View>
          <View style={styles.ViewStl}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={styles.Image}
                source={require ('../asset/images/Frame3.png')}
              />
              <Text style={styles.text}>Lipid Summit</Text>
            </View>
            <View style={styles.rowView}>
              <TouchableOpacity style={styles.orangeView}>
                <Text style={styles.orange}>
                  View
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.greenView}>
                <Text style={styles.green}>
                  Accept
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.redView}>
                <Text style={styles.red}>
                  Reject
                </Text>

              </TouchableOpacity>

            </View>

          </View>
          <View style={styles.ViewStl}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={styles.Image}
                source={require ('../asset/images/Frame3.png')}
              />
              <Text style={styles.text}>PPN Workshop(pea)</Text>
            </View>
            <View style={styles.rowView}>
              <TouchableOpacity style={styles.orangeView}>
                <Text style={styles.orange}>
                  View
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.greenView}>
                <Text style={styles.green}>
                  Accept
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.redView}>
                <Text style={styles.red}>
                  Reject
                </Text>

              </TouchableOpacity>

            </View>

          </View>
          <View style={styles.ViewStl}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={styles.Image}
                source={require ('../asset/images/Frame3.png')}
              />
              <Text style={styles.text}>UNC Meetings</Text>
            </View>
            <View style={styles.rowView}>
              <TouchableOpacity style={styles.orangeView}>
                <Text style={styles.orange}>
                  View
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.redView}>

                <Text style={styles.red}>
                  Rejected
                </Text>

              </TouchableOpacity>

            </View>

          </View>
          <View style={styles.ViewStl}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={styles.Image}
                source={require ('../asset/images/Frame3.png')}
              />
              <Text style={styles.text}>Lipid Summit</Text>
            </View>
            <View style={styles.rowView}>
              <TouchableOpacity style={styles.orangeView}>
                <Text style={styles.orange}>
                  View
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.greenView}>
                <Text style={styles.green}>
                  Accepted
                </Text>

              </TouchableOpacity>

            </View>

          </View>
          <View style={styles.ViewStl}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                style={styles.Image}
                source={require ('../asset/images/Frame3.png')}
              />
              <Text style={styles.text}>PPA</Text>
            </View>
            <View style={styles.rowView}>
              <TouchableOpacity style={styles.orangeView}>
                <Text style={styles.orange}>
                  View
                </Text>

              </TouchableOpacity>
              <TouchableOpacity style={styles.greenView}>
                <Text style={styles.green}>
                  Accepted
                </Text>

              </TouchableOpacity>

            </View>

          </View>

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
    fontWeight: '700',
  },

  ViewStl: {
    borderWidth: wp ('.1'),

    marginLeft: wp ('5.33'),
    marginBottom: wp ('2'),
    marginRight: wp ('5.33'),
    marginTop: wp ('2'),

    borderColor: '#EDEEF3',

    borderRadius: 10,
  },

  green: {
    margin: wp ('1'),
    fontSize: 11,
    color: '#4EA47A',
  },
  orange: {
    margin: wp ('1'),
    fontSize: 11,
    color: '#EE6908',
  },
  red: {
    margin: wp ('1'),
    fontSize: 11,
    color: '#FD4848',
  },
  greenView: {
    width: '25%',
    alignItems: 'center',
    backgroundColor: '#E4F1EB',
    borderRadius: 3,
    marginLeft: wp ('5'),
  },
  orangeView: {
    width: '25%',
    alignItems: 'center',
    backgroundColor: '#FCE9DA',
    borderRadius: 3,
    marginLeft: wp ('9'),
  },
  redView: {
    width: '25%',
    alignItems: 'center',
    backgroundColor: '#FFD9D9',
    borderRadius: 3,
    marginLeft: wp ('5'),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp ('5'),

    width: '100%',
  },
  Image: {
    width: wp ('8'),
    height: wp ('8'),
    margin: wp ('2.6'),
  },
});
