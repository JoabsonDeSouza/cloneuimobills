import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

const CardPlans = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: "gray" }}>Planejamento Mensal</Text>

      <View style={styles.cards}>
        <FontAwesome
          name="list-alt"
          size={45}
          color="black"
          style={{ marginBottom: 20 }}
        />
        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 10 }}>
          Ops! Voce nao tem um planejamento definido para esse mes
        </Text>
        <Text style={{ color: "#828486", marginBottom: 20 }}>
          Melhore seu controle financeiro agora!
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "white" }}>DEFINIR MEU PLANEJAMENTO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardPlans;
