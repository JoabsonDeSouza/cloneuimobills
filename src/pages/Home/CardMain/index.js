import React, { useState } from "react";
import { Text, View } from "react-native";

import {
  Entypo,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import styles from "./styles";

const CardMain = () => {
  const [showValues, setShowValues] = useState(false);

  const handleShowValues = () => {
    setShowValues(!showValues);
  };

  return (
    <View style={styles.cardMain}>
      <View style={styles.dataIcons}>
        <FontAwesome5 name="user-circle" size={32} color="#828486" />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Setembro</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#828486" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5
            name="bell"
            size={22}
            color="#828486"
            style={{ paddingRight: 20 }}
          />
          <Entypo name="dots-three-vertical" size={22} color="#828486" />
        </View>
      </View>
      <View style={styles.dataBalance}>
        <Text>Saldo em conta</Text>
        <Text style={{ fontSize: 30, marginBottom: 10 }}>
          {showValues ? `R$6.360,56` : "   "}
        </Text>
        <Entypo
          onPress={handleShowValues}
          name={showValues ? "eye" : "eye-with-line"}
          size={22}
          color="#828486"
        />
      </View>
      <View style={styles.dataValues}>
        <View
          style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
        >
          <MaterialCommunityIcons
            name="arrow-up-circle"
            size={40}
            color="#197A0A"
            style={{ marginRight: 5 }}
          />
          <View>
            <Text>Receitas</Text>
            <Text style={{ fontSize: 23, marginBottom: 10, color: "#197A0A" }}>
              {showValues ? `R$1.360,56` : "   "}
            </Text>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
        >
          <MaterialCommunityIcons
            name="arrow-down-circle"
            size={40}
            color="#DD111C"
            style={{ marginRight: 5 }}
          />
          <View>
            <Text>Despesas</Text>
            <Text style={{ fontSize: 23, marginBottom: 10, color: "#DD111C" }}>
              {showValues ? `R$3.360,56` : "   "}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardMain;
