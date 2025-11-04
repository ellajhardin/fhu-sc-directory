import { StyleSheet, Text, View } from "react-native";
import { Person } from "./types";

export default function ProfileDetailCard({ person }: { person: Person }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{person.firstName}</Text>
      <Text style={styles.name}>{person.lastName}</Text>
      <Text>{person.classification}</Text>
      <Text>{person.relationshipStatus}</Text>
      {person.phone && <Text>📞 {person.phone}</Text>}
      {person.email && <Text>📧 {person.email}</Text>}
      {person.officer && <Text>🏛️ Officer: {person.officer}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
