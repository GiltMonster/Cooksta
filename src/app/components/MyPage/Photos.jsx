import { View, Image, FlatList, Text } from "react-native";
import { profileStyles } from "../../style/profile";

const photos = [
    {
        id: 1,
        src: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/250',
            'https://via.placeholder.com/350'
        ]
    },
    {
        id: 2,
        src: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/250',
            'https://via.placeholder.com/350'
        ]
    },
    {
        id: 3,
        src: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/250',
            'https://via.placeholder.com/350'
        ]
    },
    {
        id: 4,
        src: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/250',
            'https://via.placeholder.com/350'
        ]
    },
    {
        id: 5,
        src: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/250',
            'https://via.placeholder.com/350'
        ]
    },
    {
        id: 6,
        src: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/250',
            'https://via.placeholder.com/350'
        ]
    },
    {
        id: 7,
        src: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/250',
            'https://via.placeholder.com/350'
        ]
    },
    {
        id: 8,
        src: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/250',
            'https://via.placeholder.com/350'
        ]
    },
    {
        id: 9,
        src: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/250',
            'https://via.placeholder.com/350'
        ]
    },
    {
        id: 10,
        src: [
            'https://via.placeholder.com/150',
            'https://via.placeholder.com/250',
            'https://via.placeholder.com/350'
        ]
    },

];



function Photo({ item }) {
    return (
        <View style={profileStyles.photoGrid}>
            {item.src.map((src, index) => (
                <Image key={index} source={{ uri: src }} style={profileStyles.photoGrid.img} />
            ))}
        </View>
    );
}

export default function Photos() {
    return (
        <FlatList
            style={profileStyles.photoGridContainer}
            data={photos}
            renderItem={(item) => <Photo item={item.item} />}
            keyExtractor={item => item.id}
        />
    );
}