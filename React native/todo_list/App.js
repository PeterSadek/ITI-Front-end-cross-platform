import { useState } from "react";
import { Platform, View } from "react-native";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button, Checkbox, Text, TextInput } from "react-native-paper";

export default function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [tasks, setTasks] = useState([
    { name: "Shopping", isChecked: false },
    { name: "Laundry", isChecked: false },
  ]);

  const handleTaskChange = (txt) => {
    if (txt.length === 0) {
      setError("This field is required.");
    } else if (txt.length < 3) {
      setError("You must enter at least 3 characters");
    } else {
      setError("");
    }
    setText(txt);
  };

  const handleTaskAdd = () => {
    if (text.length >= 3) {
      setTasks([...tasks, { name: text, isChecked: false }]);
      setText("");
    }
  };

  const handleTaskDelete = (task) => {
    const newTasks = tasks.filter((t) => t.name !== task.name);
    setTasks(newTasks);
  };

  const handleTaskDone = (task) => {
    const newTasks = tasks.map((t) =>
      t.name === task.name ? { ...t, isChecked: !t.isChecked } : t
    );
    setTasks(newTasks);
  };

  const completedTasks = tasks.filter((task) => task.isChecked).length;

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 30 : 0 }}>
      <View style={styles.header}>
        <Text variant="headlineLarge" style={{ color: "#E6D9A2" }}>
          My ToDo List
        </Text>
      </View>
      <View>
        <View style={styles.formInputs}>
          <TextInput
            label="Task"
            mode="outlined"
            placeholder="Enter your task"
            value={text}
            onChangeText={handleTaskChange}
            style={{ flex: 1 }}
          />
          <Button mode="contained" onPress={handleTaskAdd}>
            Add
          </Button>
        </View>
        <Text
          style={{ color: "red", marginLeft: 10, marginTop: -20 }}
          variant="labelSmall"
        >
          {error}
        </Text>
      </View>
      <View style={styles.container}>
        <Text variant="bodyLarge" style={{ textAlign: "center" }}>
          {completedTasks} of {tasks.length} Tasks Done
        </Text>
        {tasks.map((task) => (
          <View key={task.name} style={styles.taskContainer}>
            <Text
              style={{
                textDecorationLine: task.isChecked ? "line-through" : "",
              }}
            >
              {task.name}
            </Text>
            <Checkbox.Item
              label="Done"
              status={task.isChecked ? "checked" : "unchecked"}
              onPress={() => handleTaskDone(task)}
            />
            <Button
              buttonColor="#C7253E"
              mode="contained"
              onPress={() => handleTaskDelete(task)}
            >
              Delete
            </Button>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: "#8967B3",
    justifyContent: "center",
    alignItems: "center",
  },
  formInputs: {
    marginVertical: 10,
    flexDirection: "row",
    padding: 10,
    gap: 10,
  },
  container: {
    marginTop: 30,
    padding: 10,
    gap: 15,
  },
  taskContainer: {
    backgroundColor: "#E6D9A2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 10,
  },
});
