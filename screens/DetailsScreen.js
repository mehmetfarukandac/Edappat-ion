import React from "react";
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Wrap } from "@react-native-material/core"; 
import { Text } from "@react-native-material/core";
import DetailsCard from "../components/DetailsCard";

function DetailsScreen({ route, navigation }) {

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
              <>
                <Text variant="h4">Only Language Page has data.</Text>
                <Text variant="h4">Please visite there because it is an Example Page.</Text>
                <Text variant="h4">Other Pages will come soon</Text>
              </>
            )
        }
      </Wrap>
    </ScrollView>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>{ders?.title}</Text>
    //   {
    //     ders?.data?.map(deneme=>(
    //       <Text>{deneme?.name}</Text>
    //     ))
    //   }
    //   {/* <Button
    //     title="Go to Details... again"
    //     onPress={() => navigation.push('Details')}
    //   /> */}
    //   {/* <Button
    //     title="Go to Home"
    //     onPress={() => navigation.navigate('Home')}
    //     style={{ alignSelf: "center", marginTop: 40 }} /> */}
    //   {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
    //   {/* <Button title="Go back" onPress={() => navigation.goBack()} />
    //   <Button
    //     title="Go back to first screen in stack"
    //     onPress={() => navigation.popToTop()}
    //   /> */}
    // </View>
  );
}
export default DetailsScreen