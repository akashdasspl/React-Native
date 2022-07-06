import React from "react";
import{ View,Text,TextInput,Image } from "react-native";


export default class Page3 extends React.Component{
    render(){
        return(
            <View
            style={{
                backgroundColor:'#fff',
                flex:1,
                
            }}>
            <View
            style={{
                flexDirection:"row",
                backgroundColor:'#fff',
                padding:10


            }}> 
            <Image
                style={{
                    width:20,
                    height:20,
                    marginLeft:15,
                    marginRight:30,
                    alignSelf:"center"


                }}
                source={require('../assets/left-arrow.png')}
            />
            <Text
            style={{
                fontSize:20,
                alignSelf:"center",
                fontWeight:'bold'
            }}>
                ScreenTwo
            </Text>

            </View>
            <View
            style={{
                backgroundColor:'#071B34',
                padding:10
                
            }}>
            <Text style={{
                
                 marginBottom:30,
                 fontWeight:'bold',
                 fontSize:20,
                 
                 color:'#fff'
                 
             }}>Setting</Text>
             <View
             style={{
                 flexDirection:"row",
                 marginBottom:50
             }}>
             <Image
                 style={{
                     marginRight:20,
                     width:50,
                     height:50,
                     borderRadius:25
                 }}
                 source={require('../assets/icon.png')}
             />
             <View
             style={{
                 alignSelf:"center"
             }}>
                 <Text
                 style={{
                     color:'#C9D6DE',
                     fontSize:11

                 }}>
                     Hello
                 </Text>
                 <Text
                  style={{
                     color:'#fff',
                     fontSize:17,
                     marginTop:5,
                     fontWeight:'bold'
                 }}>
                     Lonnie Murphy
                 </Text>
             </View>
             
             <Image
             style={{
                 right:10,
                 position:"absolute",
                 width:30,
                 height:30,
                 borderRadius:30/2,
                 alignSelf:"center"
                 

             }}
             source={require('../assets/icon.png')}>

             </Image>


             </View>
 

            </View>
            <View
            style={{
                flexDirection:"row",
                borderBottomColor:'#EDEDED',
                borderBottomWidth:5,
                alignItems:"center",
                alignContent:"center",
                width:'100%',
                padding:20
                
                

            }}>

            <View
            style={{
                width:'33%',
                alignItems:"center"
                
                
                
            }}>
            <View
            style={{
                width:80,
                height:80,
                backgroundColor:'#FE0000',
                borderRadius:10,
                
                
            }}>
            <Image style={{
                width:25,
                height:25,
                alignSelf:"center"
            }}
            source={require('../assets/power-button-off.png')}
            >

            </Image>

            </View>
            
             <Text
             style={{
                 
                 marginTop:10,
                 fontWeight:'bold',
                 
             }}>
             Off Energy

                </Text>

            </View>
            
            <View
            style={{
                width:'33%',
                alignItems:"center"
            
                
                 
                
                
                
                
            }}>
            <View
            style={{
                width:80,
                height:80,
                backgroundColor:'#FE0000',
                borderRadius:10,
                alignSelf:"center",
                
                
                
            }}>
            <Image style={{
                width:25,
                height:25,
                alignSelf:"center"
            }}
            source={require('../assets/power-button-off.png')}
            >

            </Image>

            </View>
            
             <Text
             style={{
                 alignSelf:"center",
                 marginTop:10,
                 fontWeight:'bold',
                  
             }}>
             Left Home

                </Text>

            </View>
             
            <View
            style={{
                
                width:'33%',
                alignItems:"center"
                
                
            }}>
            <View
            style={{
                width:80,
                height:80,
                backgroundColor:'#FE0000',
                borderRadius:10

                
            }}>
            <Image style={{
                width:25,
                height:25,
                alignSelf:"center"
            }}
            source={require('../assets/power-button-off.png')}
            >

            </Image>

            </View>
            
             <Text
             style={{
                 alignSelf:"center",
                 marginTop:10,
                 fontWeight:'bold'
             }}>
             Came Home

                </Text>

            </View>
            
            
             
               
            </View>
            <View
            style={{
                borderBottomColor:'#EDEDED',
                borderBottomWidth:5
            }}>
                <View
                style={{
                    flexDirection:"row",
                    padding:18,
                    borderBottomColor:'#EDEDED',
                    borderBottomWidth:1
                    
                }}>
                    <Text
                    style={{
                        fontSize:16,
                        fontWeight:'bold'
                    }}>

                        My Home
                    </Text>
                    <Image
                    style={{
                        width:15,
                        height:15,
                        right:45,
                        position:"absolute",
                        alignSelf:"center"
                    }}
                    source={require('../assets/power-button-off.png')}>

                    </Image>
                </View>
                <View
                style={{
                    flexDirection:"row",
                    padding:18,
                    borderBottomColor:'#EDEDED',
                    borderBottomWidth:1
                    
                }}>
                    <Text
                     style={{
                        fontSize:16,
                        fontWeight:'bold'
                        
                    }}>

                        Messages
                    </Text>
                     <View
                     style={{
                         backgroundColor:'#FE0000',
                         borderRadius:20/2,
                         width:20,
                         height:20,
                         marginLeft:20,
                         alignSelf:"center"

                     }}>
                     <Text
                     style={{
                         alignSelf:"center",
                         fontSize:14,
                         color:'#fff'
                     }}>
                         3
                     </Text>

                     </View>
                    <Image
                    style={{
                        width:15,
                        height:15,
                        right:45,
                        position:"absolute",
                        alignSelf:"center"
                    }}
                    source={require('../assets/power-button-off.png')}>

                    </Image>
                </View>
                <View
                style={{
                    flexDirection:"row",
                    padding:18,
                    borderBottomColor:'#EDEDED',
                    borderBottomWidth:1
                    
                }}>
                    <Text
                     style={{
                        fontSize:16,
                        fontWeight:'bold'
                    }}>

                        Family Access
                    </Text>
                    <Image
                    style={{
                        width:15,
                        height:15,
                        right:45,
                        position:"absolute",
                        alignSelf:"center"
                    }}
                    source={require('../assets/power-button-off.png')}>

                    </Image>
                </View>
            </View>
            <View
                style={{
                    flexDirection:"row",
                    padding:18,
                    borderBottomColor:'#EDEDED',
                    borderBottomWidth:1
                    
                }}>
                    <Text
                     style={{
                        fontSize:16,
                        fontWeight:'bold'
                    }}>

                        Change Password
                    </Text>
                    <Image
                    style={{
                        width:15,
                        height:15,
                        right:45,
                        position:"absolute",
                        alignSelf:"center"

                    }}
                    source={require('../assets/power-button-off.png')}>

                    </Image>
                </View>
                <View
                style={{
                    flexDirection:"row",
                    padding:18,
                     
                    
                    
                }}>
                    <Text
                     style={{
                        fontSize:16,
                        fontWeight:'bold'
                    }}>

                        Support
                    </Text>
                    <Image
                    style={{
                        width:15,
                        height:15,
                        right:45,
                        position:"absolute",
                        alignSelf:"center"
                    }}
                    source={require('../assets/power-button-off.png')}>

                    </Image>
                </View>
            
            </View>
        )
    }
}