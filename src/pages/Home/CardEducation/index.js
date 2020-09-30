import React from "react";
import { Text, View, Image, FlatList } from "react-native";

import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

const CardEducation = () => {
  const data = [
    {
      id: 0,
      text: "Como reduzir as despesas e cortar os gastos",
      image:
        "https://respostas.sebrae.com.br/wp-content/uploads/2020/05/Ideias-de-Neg%C3%B3cios-para-Ganhar-Dinheiro-em-Casa-em-Tempos-de-Coronav%C3%ADrus-660x330.jpg",
    },
    {
      id: 1,
      text: "Como reduzir as despesas e cortar os gastos",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnAbez_ILCmFC4lYRQqmbMAGg9pXDAi4kvpQ&usqp=CAU",
    },
    {
      id: 2,
      text: "Como reduzir as despesas e cortar os gastos",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYF-sjVfE1mhDa2Lv_BTVG6s0C_SOotCMh5A&usqp=CAU",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: "gray" }}>Mobills Educação</Text>

      <FlatList
        data={data}
        keyExtractor={(item, index) => `${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.cards}>
              <Image style={styles.image} source={{ uri: item.image }} />

              <View style={styles.containerTexts}>
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  {item.text}
                </Text>
                <View style={styles.texts}>
                  <Text
                    style={{ color: "#1C8BEB", marginRight: 20, fontSize: 15 }}
                  >
                    MAIS ARTIGOS
                  </Text>
                  <Text style={{ color: "#1C8BEB", fontSize: 15 }}>
                    LEIA MAIS
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CardEducation;
