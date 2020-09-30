import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

import styles from "./styles";

import CardMain from "./CardMain";
import CardCards from "./CardCards";
import CardGraphics from "./CardGraphics";
import CardPlans from "./CardPlans";
import CardEducation from "./CardEducation";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <CardMain />
        <CardCards />
        <CardGraphics />
        <CardPlans />
        <CardEducation />
      </ScrollView>
    </SafeAreaView>
  );
}
