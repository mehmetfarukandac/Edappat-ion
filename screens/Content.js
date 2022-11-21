import React from "react";
import { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import { Wrap } from "@react-native-material/core"; 
import LanguageCard from "../components/LanguageCard";


const styles = StyleSheet.create({
    tinyLogo: {
        width: 400,
        height: 50
    }
});


function Content({ route, navigation }) {

    const { ders } = route?.params;

    useEffect(() => {
        navigation.setOptions({ title: ders?.title })
    }, []);

    return (
        <ScrollView>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: ders?.url,
                }}
            />
            <Wrap>
                {
                    ders?.words?.map((words, index) => (
                        <LanguageCard
                            navigation={navigation}
                            ders={ders}
                            words={words}
                            index={index}
                        />
                    ))
                }
            </Wrap>
        </ScrollView>
    );
}
export default Content