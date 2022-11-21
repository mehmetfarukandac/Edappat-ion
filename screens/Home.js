import * as React from 'react';
import { Box, Surface } from "@react-native-material/core";
import { ScrollView } from 'react-native';
import { ListItem } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
function HomeScreen({ navigation }) {
    return (
        <ScrollView>
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
        </ScrollView>
    );
}

export default HomeScreen