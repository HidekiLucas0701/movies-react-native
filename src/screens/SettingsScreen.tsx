import { View, Text, StyleSheet } from "react-native"

export default function SettingsScreen(){
    return(
        <View>
            <Text style={styles.container}>Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})