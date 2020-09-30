import React from "react";
import { Text, View } from "react-native";

import styles from "./styles";
import { PieChart } from "react-native-svg-charts";

const CardGraphics = () => {
  const randomColor = () =>
    ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(
      0,
      7
    );

  const data = [
    {
      id: 0,
      value: 720,
      description: "Alimentação",
      color: randomColor(),
    },
    {
      id: 1,
      value: 310,
      description: "Carro",
      color: randomColor(),
    },
    {
      id: 2,
      value: 250,
      description: "Investimento",
      color: randomColor(),
    },
    {
      id: 3,
      value: 321,
      description: "Outros",
      color: randomColor(),
    },
    {
      id: 4,
      value: 121,
      description: "Bebidas",
      color: randomColor(),
    },
  ];

  const pieData = data.map((item, index) => ({
    value: item.value,
    svg: {
      fill: item.color,
    },
    key: `pie-${index}`,
  }));

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: "gray" }}>
        Despesa por categorias
      </Text>

      <View style={styles.cards}>
        <View style={styles.graphic}>
          <PieChart style={{ height: 150 }} data={pieData} />
        </View>
        <View style={styles.data}>
          {data.map((item, index) => (
            <View style={styles.dataValues} key={`${index}`}>
              <View style={[styles.circle, { backgroundColor: item.color }]} />
              <Text style={{ flex: 1, marginLeft: 10 }}>
                {item.description}
              </Text>
              <Text style={{}}>{`R$ ${item.value}`}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default CardGraphics;
