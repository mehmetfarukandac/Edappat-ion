import * as React from 'react';
import { Box, Flex, Spacer } from "@react-native-material/core";
import { ScrollView } from 'react-native';
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';
function HomeScreen({ navigation }) {
    return (
        <Flex fill>
            <Box h={"auto"} style={{ backgroundColor: 'lightgreen' }} >
                <HomeHeader title="Mehmet Faruk ANDAC" />
            </Box>
            <Spacer h={"auto"}>
                <ListItem
                    title="My Account  (Soon)"
                    disabled
                    leading={<Icon name="account" color="red" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                />
                <ListItem
                    title="All Educations"
                    leading={<Icon name="school" color="green" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                    onPress={() => {
                        /* 1. Navigate to the Details route with params */
                        navigation.navigate('Education');
                    }}
                />
                <ListItem
                    title="My Educations (Soon)"
                    disabled
                    leading={<Icon name="school" color="red" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                />
                <ListItem
                    title="Favorites  (Soon)"
                    disabled
                    leading={<Icon name="heart" color="red" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                />
                <ListItem
                    title="Friends  (Soon)"
                    disabled
                    leading={<Icon name="rowing" color="red" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                />
                <ListItem
                    title="Settings  (Soon)"
                    disabled
                    leading={<Icon name="tune" color="red" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                />
                <ListItem
                    title="Log Out  (Soon)"
                    disabled
                    leading={<Icon name="logout" color="red" size={24} />}
                    trailing={props => <Icon name="chevron-right" {...props} />}
                />
            </Spacer>
            <Spacer />
            <Box h={"auto"} style={{ backgroundColor: 'lightblue' }} >
                <Footer />
            </Box>
        </Flex>
    );
}

export default HomeScreen