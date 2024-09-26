import { View, Text, TextInput, FlatList } from "react-native";
import styles from "../styles";
import { useEffect, useState } from "react";
import axios from "axios";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import routes from "../utils/routes";

const Home = ({ navigation }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setAllUsers(res.data);
        setFilteredUsers(res.data);
      })
      .catch((error) => console.warn("Error fetching data: ", error));
  }, []);

  const handleSearch = (txt) => {
    const searchedUser = allUsers.filter((user) =>
      user.name.toLowerCase().includes(txt.toLowerCase())
    );
    setFilteredUsers(searchedUser);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Users List</Text>
      <TextInput
        style={styles.search}
        placeholder="Search users..."
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text>{item.name}</Text>
            <Icon
              name="account"
              size={24}
              onPress={() =>
                navigation.navigate(routes.userDetails, { user: item })
              }
            />
          </View>
        )}
        ListEmptyComponent={<Text>No users found</Text>}
      />
    </View>
  );
};

export default Home;
