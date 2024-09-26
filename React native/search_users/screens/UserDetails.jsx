import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";
import styles from "../styles";
import { Image } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDetails = () => {
  const route = useRoute();
  const { user } = route.params;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/" + user.id)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((error) => console.warn("Error fetching data: ", error));
  }, []);

  return (
    <View style={styles.detailsContainer}>
      <Image
        source={{ uri: details.thumbnailUrl }}
        style={{ resizeMode: "cover", width: 150, height: 150 }}
      />
      <View>
        <Text>Name: {user.name}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Phone: {user.phone}</Text>
      </View>
    </View>
  );
};

export default UserDetails;
