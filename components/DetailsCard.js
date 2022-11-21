import React from "react";
import { Surface, Text, Box, Button } from "@react-native-material/core";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    logo: {
        width: 66,
        height: 58,
    },
});



const DetailsCard = ({ ders, index, navigation }) => {
    return (
        <Box key={index} m={4} p={4} w={185}>
            <Surface
                elevation={16}
                category="medium"
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 180,
                    height: 180,
                }}
            >
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: ders?.url,
                    }}
                />
                <Text>{ders?.title}</Text>
                <Button
                    title="See more"
                    variant="outlined"
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        navigation.navigate('Content',
                            {
                                ders: ders
                            }
                        );
                    }}
                    style={{ alignSelf: "center", marginTop: 15 }} />
            </Surface>
        </Box>
    )
}

export default DetailsCard;