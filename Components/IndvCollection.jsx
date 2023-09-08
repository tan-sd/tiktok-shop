import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import Videos from "./Videos";

export default function IndvCollection(props, {navigation}) {
    const route = useRoute();
    var collectionName

    if (route.params) {
        collectionName = route.params.collectionName;
    } else {
        collectionName = props.collectionName
    }
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        to_return = Math.floor(Math.random() * (max - min)) + min
        return to_return;
    }

    numOfVideos = getRandomInt(5, 40)

    return (
        <View style={styles.container}>
            <View style={styles.collectionTopBar}>
                <View style={styles.leftIcons}>
                    <Feather name="chevron-left" size={35} color="black" />
                </View>
                <View style={styles.rightIcons}>
                    <Feather name="more-horizontal" size={35} color="black" />
                </View>
            </View>
            <View style={styles.collectionInfo}>
                <Text style={styles.collectionName}>{collectionName}</Text>
                <Feather name="lock" size={25} color="black" style={styles.lockIcon} />
            </View>
            <View style={styles.video}>
                <Text>{numOfVideos} Videos</Text>
            </View>
            <View style={styles.buttonsContainer}>
                {/* button 1 */}
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => {
                    }}>
                    <Text style={styles.buttonText1}>
                        <Feather name="settings" size={20} color="black" style={styles.settingsIcon} />
                        Manage Videos
                    </Text>
                </TouchableOpacity>
                {/* button2 */}
                <TouchableOpacity
                style={styles.button2}
                onPress={() => {
                    props.navigation.navigate("GlobePage");
                }}>
                    <Text style={styles.buttonText2}>
                        <Feather name="map" size={20} color="white" style={styles.settingsIcon} />
                        View in Maps
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabContent}>
                <ScrollView style={styles.tabContentScroll}>
                    <Videos numberOfVids={numOfVideos} navigation={navigation} />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
    collectionTopBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        width: "100%",
        marginTop: 50,
        height: 50,
        paddingHorizontal: 20,
    },
    collectionInfo: {
        flexDirection: 'row',
        marginTop: 25,
    },
    collectionName: {
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        marginRight: 5,
        marginLeft: 30,
    },
    leftIcons: {
        flexDirection: 'row',
        marginLeft: -3,
        marginTop: 10,
        // alignItems: 'center',
    },
    rightIcons: {
        flexDirection: 'row',
        marginTop: 10,
        // alignItems: 'center',
    },
    settingsIcon: {
        marginRight: 5,
    },
    video:{
        marginLeft: 30,
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        marginTop: 10,
    },
    button1: {
        backgroundColor: "#eaeaea",
        padding: 10,
        borderRadius: 5,
        fontWeight: "bold",
    },
    button2:{
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#FE2C55",
        marginLeft: 10,
    },
    buttonText1:{
        fontWeight: "bold",
    },
    buttonText2:{
        color: "white",
        fontWeight: "bold",
    },
    tabContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 10,
    },
    tabContentScroll: {
        width: "100%",
    },
});