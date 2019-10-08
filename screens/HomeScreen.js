import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { MonoText } from "../components/StyledText";
import { Card, Header } from "react-native-elements";
import TabBarIcon from "../components/TabBarIcon";
import { DrawerActions } from "react-navigation";

function MenuButton() {
  return (
    <View>
      <TabBarIcon
        name={"md-menu"}
        onPress={() =>
          this.props.navigation.dispatch(DrawerActions.toggleDrawer())
        }
      />
    </View>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{
          text: "NBA test App",
          style: { color: "#fff", fontWeight: "bold", fontSize: 20 }
        }}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          >
            <MonoText>NBA Test App</MonoText>
          </View>
        </View>

        <View>
          <ScrollView horizontal={true}>
            <Card>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginBottom: 10
                }}
              >
                this is a test card
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ flex: 1 }}
                  source={require("../assets/images/bull.png")}
                />
                <Text
                  style={{
                    flex: 1,
                    textAlignVertical: "center",
                    fontWeight: "bold"
                  }}
                >
                  Vs.
                </Text>
                <Image
                  style={{ flex: 1 }}
                  source={require("../assets/images/hornet.png")}
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                  borderTopColor: "#eff0f1",
                  borderTopWidth: 1
                }}
              ></View>
              <Text
                style={{
                  paddingTop: 10,
                  marginBottom: 5,
                  textAlign: "center",
                  fontSize: 25
                }}
              >
                watch | score
              </Text>
            </Card>
            <Card>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginBottom: 10
                }}
              >
                this is a test card
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ flex: 1 }}
                  source={require("../assets/images/bull.png")}
                />
                <Text
                  style={{
                    flex: 1,
                    textAlignVertical: "center",
                    fontWeight: "bold"
                  }}
                >
                  Vs.
                </Text>
                <Image
                  style={{ flex: 1 }}
                  source={require("../assets/images/hornet.png")}
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                  borderTopColor: "#eff0f1",
                  borderTopWidth: 1
                }}
              ></View>
              <Text
                style={{
                  paddingTop: 10,
                  marginBottom: 5,
                  textAlign: "center",
                  fontSize: 25
                }}
              >
                watch | score
              </Text>
            </Card>
            <Card>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginBottom: 10
                }}
              >
                this is a test card
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ flex: 1 }}
                  source={require("../assets/images/bull.png")}
                />
                <Text
                  style={{
                    flex: 1,
                    textAlignVertical: "center",
                    fontWeight: "bold"
                  }}
                >
                  Vs.
                </Text>
                <Image
                  style={{ flex: 1 }}
                  source={require("../assets/images/hornet.png")}
                />
              </View>
              <View
                style={{
                  marginTop: 10,
                  borderTopColor: "#eff0f1",
                  borderTopWidth: 1
                }}
              ></View>
              <Text
                style={{
                  paddingTop: 10,
                  marginBottom: 5,
                  textAlign: "center",
                  fontSize: 25
                }}
              >
                watch | score
              </Text>
            </Card>
          </ScrollView>
        </View>

        <View style={styles.container}>
          <Card style={styles.cardItem}>
            <Text style={{ fontSize: 25, alignSelf: "center", margin: 10 }}>
              <Image
                style={{ margin: 10, height: 50, width: 50 }}
                source={require("../assets/images/logo.png")}
              />
            </Text>
            <Text style={{ fontSize: 25, alignSelf: "center" }}>X</Text>
            <Text style={{ fontSize: 25, alignSelf: "center", margin: 10 }}>
              <Image
                style={{ margin: 10, height: 50, width: 50 }}
                source={require("../assets/images/logo.png")}
              />
            </Text>
          </Card>
          <Card style={styles.cardItem}>
            <Text style={{ fontSize: 25, alignSelf: "center", margin: 10 }}>
              <Image
                style={{ margin: 10, height: 50, width: 50 }}
                source={require("../assets/images/logo.png")}
              />
            </Text>
            <Text style={{ fontSize: 25, alignSelf: "center" }}>Vs.</Text>
            <Text style={{ fontSize: 25, alignSelf: "center", margin: 10 }}>
              <Image
                style={{ margin: 10, height: 50, width: 50 }}
                source={require("../assets/images/logo.png")}
              />
            </Text>
          </Card>
          <Card style={styles.cardItem}>
            <Text style={{ fontSize: 25, alignSelf: "center", margin: 10 }}>
              <Image
                style={{ margin: 10, height: 50, width: 50 }}
                source={require("../assets/images/logo.png")}
              />
            </Text>
            <Text style={{ fontSize: 25, alignSelf: "center" }}>X</Text>
            <Text style={{ fontSize: 25, alignSelf: "center", margin: 10 }}>
              <Image
                style={{ margin: 10, height: 50, width: 50 }}
                source={require("../assets/images/logo.png")}
              />
            </Text>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  scrollItem: {
    margin: 10
  },
  cardItem: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#000000",
    margin: 15,
    height: 250,
    width: 300
  }
});
