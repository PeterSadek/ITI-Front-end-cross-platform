import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SectionList, Text, View } from "react-native";
import styles from "./styles";
import User from "./components/User";

export default function App() {
  const sections = [
    {
      id: "0",
      title: "A",
      data: [
        {
          id: "0",
          text: "User 1",
          avatar: require("./assets/avatars/boy.png"),
        },
        {
          id: "1",
          text: "User 2",
          avatar: require("./assets/avatars/boy2.png"),
        },
        {
          id: "2",
          text: "User 3",
          avatar: require("./assets/avatars/gamer.png"),
        },
      ],
    },
    {
      id: "1",
      title: "B",
      data: [
        {
          id: "3",
          text: "User 1",
          avatar: require("./assets/avatars/girl.png"),
        },
        {
          id: "4",
          text: "User 2",
          avatar: require("./assets/avatars/man.png"),
        },
      ],
    },
    {
      id: "1",
      title: "C",
      data: [
        {
          id: "3",
          text: "User 1",
          avatar: require("./assets/avatars/man2.png"),
        },
      ],
    },
    {
      id: "1",
      title: "D",
      data: [
        {
          id: "3",
          text: "User 1",
          avatar: require("./assets/avatars/woman.png"),
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections}
        renderItem={({ item }) => (
          <User text={item.text} avatar={item.avatar} />
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.txt}>{section.title}</Text>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
