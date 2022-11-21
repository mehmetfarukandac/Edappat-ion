import React from "react";
import { AppBar, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const HomeHeader = ({ title }) => {
    return (
        <AppBar
            title={title}
            subtitle={"Author"}
            centerTitle={true}
            style={{ backgroundColor: "#AC3A41" }}
            leading={props => (
                <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
            )}
            trailing={props => (
                <IconButton
                    icon={props => <Icon name="dots-vertical" {...props} />}
                    {...props}
                />
            )}
        />
    )
};

export default HomeHeader;