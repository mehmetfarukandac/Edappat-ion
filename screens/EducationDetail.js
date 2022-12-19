import React from "react";
import { useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { Wrap } from "@react-native-material/core"; 
import DetailsCard from "../components/DetailsCard";


function EducationDetail({ route, navigation }) {

    const { ders } = route?.params;

    useEffect(() => {
        navigation.setOptions({ title: ders?.title })
    }, []);

    return (
        <ScrollView>
            <Wrap>
                {
                    ders?.data?.length > 1 ?
                        (ders?.data?.map((ders, index) => (
                            <DetailsCard
                                navigation={navigation}
                                ders={ders}
                                index={index}
                            />
                        ))) : (
                            <Text>Okay</Text>
                        )
                }
            </Wrap>
        </ScrollView>
    );
}
export default EducationDetail