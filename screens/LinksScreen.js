import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import { View, Text, Image } from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  PricingCard
} from "react-native-elements";
import { Calendar } from "react-native-calendars";

export default function LinksScreen() {
  return (
      <ScrollView style={styles.container}>
        <Calendar
          // Collection of dates that have to be marked. Default = {}
          markedDates={{
            "2012-05-16": {
              selected: true,
              marked: true,
              selectedColor: "blue"
            },
            "2019-10-08": { marked: true },
            "2012-05-18": { marked: true, dotColor: "red", activeOpacity: 0 },
            "2012-05-19": { disabled: true, disableTouchEvent: true }
          }}
        />
        <PricingCard
          color="#4f9deb"
          title="Free"
          price="$0"
          info={[
            "Pricing card",
            "1 User",
            "Basic Support",
            "All Core Features"
          ]}
          button={{ title: "GET STARTED", icon: "flight-takeoff" }}
          renderDay={(day, item) => {
            return <View />;
          }}
          onDayPress={day => {
            console.log("day pressed");
          }}
        />
        <Card title="HELLO WORLD" image={require("../assets/images/logo.png")}>
          <Text style={{ marginBottom: 10 }}>
            test test test test test test test test test test test test test
            test test
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="VIEW NOW"
          />
        </Card>
        <Card title="HELLO WORLD" image={require("../assets/images/logo.png")}>
          <Text style={{ marginBottom: 10 }}>
            test test test test test test test test test test test test test
            test test
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0
            }}
            title="VIEW NOW"
          />
        </Card>
       
      </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: "Games"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
