import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import { EvilIcons } from "@expo/vector-icons";

const cardImage =
  "https://cdn.iconscout.com/icon/free/png-512/mastercard-25-675722.png";

const CardCards = () => {
  const handleShowClosed = () => {
    alert("Faturas fechadas");
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: "gray" }}>Cartões de credito</Text>

      <View style={styles.cards}>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttonOpen}
            onPress={() => alert("Faturas abertas")}
          >
            <Text style={{ color: "white" }}>Faturas abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonClose}
            onPress={handleShowClosed}
          >
            <Text>Faturas fechadas</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.values}>
          <Image source={{ uri: cardImage }} style={styles.image} />
          <View style={styles.valuesTexts}>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>ITAU</Text>
              <Text style={{ color: "lightgray" }}>
                {` - Fatura fecha em 29 out, 2020`}
              </Text>
            </View>
            <Text style={{ color: "#DD111C", marginTop: 5 }}>R$ 139,99</Text>
          </View>
          <EvilIcons name="plus" size={35} color="#209587" />
        </View>
        <View style={styles.separator} />
        <View style={styles.total}>
          <Text style={{ fontSize: 20 }}>TOTAL</Text>
          <Text style={{ fontSize: 20 }}>R$ 139,99</Text>
        </View>
      </View>
    </View>
  );
};

export default CardCards;
