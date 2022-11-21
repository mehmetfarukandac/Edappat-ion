import React from "react";
import { Surface, Text, Box, Button } from "@react-native-material/core";
import { Image, StyleSheet } from "react-native";



// title: "Turkish",
// url: "https://www.olkando.com/wp-content/uploads/2016/09/cropped-tc-bayrak-1.png",
// words: [
//     {
//         key: "able",
//         value: "yapabilen"
//     },

const LanguageCard = ({ words, index, navigation }) => {
    return (
        <Box key={index} m={4} p={4}>
            <Surface
                elevation={16}
                category="medium"
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 375,
                    height: 70,
                }}
            >
                <Text>{words?.key} : {words?.value}</Text>
            </Surface>
        </Box>
    )
}

export default LanguageCard;