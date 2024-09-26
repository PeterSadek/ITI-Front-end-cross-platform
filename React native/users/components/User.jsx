import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles";
export default function User({ text, avatar }) {
  return (
    <View style={styles.userContainer}>
      <View style={styles.avatar}>
        <Image style={styles.avatarImage} source={avatar} resizeMode="cover" />
      </View>
      <Text style={styles.txt}>{text}</Text>
    </View>
  );
}
