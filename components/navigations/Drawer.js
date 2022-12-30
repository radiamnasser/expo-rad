import React from "react";
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Blog from "../../views/Blog";
import Meteo from "../../views/Meteo";
import Contact from "../../views/Contact"
import { SafeAreaView, View, Image, Dimensions } from "react-native";
import Bottom from "./Bottom";
import About from "../../views/About";




const MyDrawer = createDrawerNavigator();
winHeight = Dimensions.get("window").height;

export default class Drawer extends React.Component {

    render() {

        return (

            <MyDrawer.Navigator

                drawerContent={(props) => {
                    return (

                        <SafeAreaView>

                            <View
                                style={{
                                    height: winHeight / 3,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    overflow: 'hidden',
                                    marginTop: winHeight / 15,
                                    marginBottom: winHeight / 20
                                }}
                            >

                                <Image
                                    source={require("../../assets/lavande.jpeg")}
                                    style={{
                                        height: '100%',
                                        resizeMode: 'contain',
                                    }}
                                />
                            </View>
                            <DrawerItemList {...props} />

                        </SafeAreaView>
                    );
                }}
            >

                <MyDrawer.Screen
                    name="Blog"
                    children={() => <Blog />}
                />
                <MyDrawer.Screen
                    name="Contact"
                    children={() => <Contact />}
                />

                <MyDrawer.Screen
                    name="Meteo"
                    children={() => <Meteo search='SEARCH' />}
                />

                <MyDrawer.Screen
                    name="Bottom"
                    children={() => <Bottom />}
                />
                <MyDrawer.Screen
                    name="About"
                    children={() => <About />}
                />

            </MyDrawer.Navigator>

        );

    }

}