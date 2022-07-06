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
  Image,
} from 'react-native';
import {RadioButton} from 'react-native-paper';

const Questionaire = () => {
  const [checked, setChecked] = useState (1);
  const [check, setCheck] = useState (1);

  const [val1, setVal1] = useState (0);
  const [q1op1, setQ1Op1] = useState ('op1');
  const [q1op2, setQ1Op2] = useState ('op2');
  const [q1op3, setQ1Op3] = useState ('op3');
  const [q1op4, setQ1Op4] = useState ('op4');

   const [borderColor, setBorderColor] = useState ('');

  const [ans1, setAns1] = useState ('op3');

  const [val2, setVal2] = useState (0);
  const [q2op1, setQ2Op1] = useState ('op1');
  const [q2op2, setQ2Op2] = useState ('op2');
  const [q2op3, setQ2Op3] = useState ('op3');
  const [q2op4, setQ2Op4] = useState ('op4');

  const [ans2, setAns2] = useState ('op3');

  const answer1 = () => {
    if ((check == 1) & (q1op1 == ans1)) {
      setVal1 (1);
    } else if ((check == 2) & (q1op2 == ans1)) {
      setVal1 (1);
    } else if ((check == 3) & (q1op3 == ans1)) {
      setVal1 (1);
    } else if ((check == 4) & (q1op4 == ans1)) {
      setVal1 (1);
    } else {
      setVal1 (0);
    }
  };
 
      
  
  const answer2 = () => {
    if ((check == 5) & (q2op1 == ans2)) {
      setVal2 (1);
    } else if ((check == 6) & (q2op2 == ans2)) {
      setVal2 (1);
    } else if ((check == 7) & (q2op3 == ans2)) {
      setVal2 (1);
    } else if ((check == 8) & (q2op4 == ans2)) {
      setVal2 (1);
    } else {
      setVal2 (0);
    }
  };
  const next = () => {
    setChecked (checked + 1);
    if (checked > 2) {
      setChecked (2);
    }
  };
  const back = () => {
    setChecked (checked - 1);
    if (checked < 1) {
      setChecked (1);
    }
  };

  return (
    <View>
     <View
      style={{
        flexDirection:"row",
        alignItems:"center"
      }}>
      <TouchableOpacity
        style={{
            
            
              margin:wp("5.33"),
 
              
           
          }}>
        <Image
          
          source={require ('../asset/images/Vector.png')}>

        </Image>
       

        </TouchableOpacity>
        
     
         <Text>
            Questionaire
        </Text>
        <TouchableOpacity
        style={{
            
            
              margin:wp("5.33"),

              right:0,
              position:"absolute"
           
          }}>
        <Image
          
          source={require ('../asset/images/source.png')}>

        </Image>

        </TouchableOpacity>

        

      </View>
      <View
      style={{borderWidth:wp(".1"),
       marginTop:wp('2'),
       marginBottom:wp ('5'),
        borderColor:"#E8E9F2"}}></View>
     

      {checked == 1
        ? <View>
        

            <Text>Questions {checked}of 5</Text>
            <Text>q1</Text>
        
            
            <TouchableOpacity
             onPress={()=>{setCheck(1)
             {
  if (check == 1) {
    setBorderColor ('#2D3481');
  } else {
    setBorderColor ('#000');
  }
}

             }

             }style={{
                  borderColor:borderColor,
                   borderWidth:1,

             }}
              >
            
             <View
              style={{
                flexDirection: 'row',
                borderColor:borderColor,
                borderWidth:1,
                alignItems:"center",
                margin:wp("5.33")
              }}
            >
              <RadioButton
                style={{
                  width: wp ('8%'),
                }}
                status={check === 1 ? 'checked' : 'unchecked'}
                onPress={() => setCheck (1)}
              />
              <Text>
                {q1op1}
              </Text>
            </View>

            </TouchableOpacity>
           
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <RadioButton
                style={{
                  width: wp ('8%'),
                }}
                value="1"
                status={check === 2 ? 'checked' : 'unchecked'}
                onPress={() => setCheck (2)}
              />
              <Text>
                {q1op2}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <RadioButton
                style={{
                  width: wp ('8%'),
                }}
                value="1"
                status={check === 3 ? 'checked' : 'unchecked'}
                onPress={() => setCheck (3)}
              />
              <Text>
                {q1op3}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <RadioButton
                style={{
                  width: wp ('8%'),
                }}
                value="1"
                status={check === 4 ? 'checked' : 'unchecked'}
                onPress={() => setCheck (4)}
              />
              <Text>
                {q1op4}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                marginTop: 50,
              }}
              onPress={() => {
                answer1 ();
                next ();
              }}
            >

              <Text>
                next
              </Text>
            </TouchableOpacity>

          </View>
        : checked == 2
            ? <View>
                <Text>{checked}/10</Text>
                <Text>q2</Text>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <RadioButton
                    style={{
                      width: wp ('8%'),
                    }}
                    status={check === 5 ? 'checked' : 'unchecked'}
                    onPress={() => setCheck (5)}
                  />
                  <Text>
                    {q2op1}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <RadioButton
                    style={{
                      width: wp ('8%'),
                    }}
                    value="1"
                    status={check === 6 ? 'checked' : 'unchecked'}
                    onPress={() => setCheck (6)}
                  />
                  <Text>
                    {q2op2}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <RadioButton
                    style={{
                      width: wp ('8%'),
                    }}
                    value="1"
                    status={check === 7 ? 'checked' : 'unchecked'}
                    onPress={() => setCheck (7)}
                  />
                  <Text>
                    {q2op3}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <RadioButton
                    style={{
                      width: wp ('8%'),
                    }}
                    value="1"
                    status={check === 8 ? 'checked' : 'unchecked'}
                    onPress={() => setCheck (8)}
                  />
                  <Text>
                    {q2op4}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    alignSelf: 'center',
                    marginTop: 50,
                  }}
                  onPress={() => {
                    answer2 ();
                    next ();
                  }}
                >

                  <Text>
                    next
                  </Text>
                </TouchableOpacity>

              </View>
            : <View>
                <Text>your score is: {val1}</Text>

              </View>}

      <TouchableOpacity
        style={{
          marginTop: 50,
        }}
        onPress={() => {
          back ();
        }}
      >
        <Text>
          back
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default Questionaire ;
