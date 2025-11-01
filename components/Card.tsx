import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Person } from "./types";

export default function Card({ person }: { person: Person }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.name}>{person.name}</Text>
      <Text style={styles.year}>{person.year}</Text>
      <Text style={styles.year}>{person.relationshipStatus}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  year: {
    fontSize: 15,
  }
});
