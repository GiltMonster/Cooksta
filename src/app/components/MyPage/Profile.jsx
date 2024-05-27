import { View, Text, Image } from 'react-native';
import { profileStyles } from "../../style/profile";

export default function Profile() {
    return (
        <View style={profileStyles.container}>
            <Image src="https://www.w3schools.com/w3images/avatar5.png" alt="Avatar" style={profileStyles.img} />

            <View style={profileStyles.textContainer}>
                <Text style={profileStyles.textTitle}>Lucas S.</Text>
                <Text style={profileStyles.text}>A conta oficial do maior critico culinário de São Paulo!!</Text>
            </View>

            <View style={profileStyles.textContainer}>
                <Text style={profileStyles.textTitle}>Profile</Text>
                <Text style={profileStyles.text}>122</Text>
            </View>

        </View>
    );
}