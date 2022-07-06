import React, {useState, Component} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const Dropdown = ({data = [], value = {}, onSelect = () => {},onSelect1 = () => {},onSelect2 = () => {},onSelect3 = () => {}, onSelect4 = () => {},onSelect5 = () => {},onSelect6 = () => {},onSelect7 = () => {}}) => {
  console.log ('selected value',!!value);
  const [showOption,setShowOption]= useState(false)
  const onSelectedItem =(val)=>{
      setShowOption(false)
       onSelect (val);
       onSelect1 (val);
onSelect2 (val);
onSelect3 (val);
onSelect4 (val);
onSelect5 (val);
onSelect6 (val);
onSelect7 (val);





  }

  return (
    <View
    style={{
       
      
    }}>
      <TouchableOpacity
      style={{
          flexDirection:"row",
          opacity:".001",
          
          
							
           
          
          marginTop:wp("2.4"),
    marginBottom:wp("2.4"),
    height:hp("5"),
    borderWidth:wp(".1"),
     borderColor:"#E8E9F2",
     borderRadius:wp("1"),
     paddingLeft:5,
  
      
    backgroundColor: "white",
    
    
    fontSize: 17,
          
      }}
      onPress={()=>setShowOption(!showOption)}>
        <Text
        style={{
          alignSelf:"center"
        }}
       >
          {!!value? value?.name:''}
        </Text>
        <Image
        style={{
          alignSelf:"center",
          right:12,
          position:"absolute",
          transform:[{rotate: showOption?'180deg':'0deg'}]
        }}
        
        source={require('../asset/images/Vecto.png')}>

        </Image>
      </TouchableOpacity>
      
     {showOption&& <View style={{
           
           margin:wp('1'),
           marginBottom:wp('3'),
         
        
          borderColor:"#000",
          
          
    
    borderWidth:wp(".1"),
     borderColor:"#E8E9F2",
     borderRadius:wp("1"),
    
   
     

   
  
          

        }}
      ><ScrollView>
       {data.map ((val, i) => {
        return (
          
        <TouchableOpacity
        key={String (i)}
        onPress={()=>onSelectedItem(val)}
        style={{
           
           
        
         
          borderColor:"#E8E9F2",
          borderBottomWidth:wp(".1"),
          marginLeft:wp('2.5'),
          marginRight: wp ('2.5'),
           marginTop:wp('2.5')

          
          

        }}
        >
         <Text style={{
           justifyContent:"center",
           margin:wp('1')
           
            
          
        
           
           
         }}>
              {val.name}
          </Text>

        </TouchableOpacity> 
        );
      })}
        
      </ScrollView>

     
      </View>}

    </View>
  );
};
const style = StyleSheet.create ({
  cont: {
    flex: 1,
   
  },
});

export default Dropdown;
