import React from 'react';
import {View, Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';

const LogoScreen = () => {
    return(
    <View style={tw`flex justify-center items-center bg-blue-100 pt-20 items-stretch`}>
        <Text style={tw`items-center`}>
            Hello World!
        </Text>
        
    </View>
    );
}

export default LogoScreen;