import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Person } from "./types";

export default function Card({ person }: { person: Person }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: person.imageURL }} style={styles.image} />
      <Text style={styles.name}>{person.firstName} {person.lastName}</Text>
      <Text style={styles.classification}>{person.classification}</Text>
      <Text style={styles.classification}>{person.relationshipStatus}</Text>
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 20, // circular
    marginBottom: 12,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 5,
    textAlign: "center",
  },
  classification: {
    fontSize: 15,
    textAlign: "center",
  },
});