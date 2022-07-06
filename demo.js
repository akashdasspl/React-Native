import React from 'react';
import {View, Button,Text,TextInput} from 'react-native';

import {showAlert, closeAlert,CustomisableAlert} from 'react-native-customisable-alert';

export default class OtherScreen extends React.Component {
   render() {
        return (
            <View style={{ flex: 1 }}>
                <Button
                title='hello'
                    onPress={() => {
                        showAlert({
                            customAlert: (
                                <View>
                                    <Text>Could you tell us your name?</Text>
                                    <TextInput />
                                    <View>
                                        <Button
                                            title="Cancel"
                                            onPress={() => closeAlert()}
                                        />
                                        <Button
                                            title="Send"
                                            onPress={() => {}}
                                        />
                                    </View>
                                </View>
                            )
                        });
                    }}
                />
                <CustomisableAlert
						dismissable
						titleStyle={{
							fontSize: 18,
							fontWeight: 'bold'
						}}
						btnLabelStyle={{
							color: 'white',
							paddingHorizontal: 10,
							textAlign: 'center'
						}}
					/>
            </View>
        );
    }
}
