import { MemberRow } from "@/lib/appwrite";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Card({ person }: { person: MemberRow }) {
  // If you add a profile picture field later, put it here
  const placeholderImage =
    "https://ui-avatars.com/api/?name=" +
    `${person.firstName}+${person.lastName}&background=random`;

  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: placeholderImage }} style={styles.image} />

      <Text style={styles.name}>
        {person.firstName} {person.lastName}
      </Text>

      {person.classification && (
        <Text style={styles.subtext}>{person.classification}</Text>
      )}

      {person.relationshipStatus && (
        <Text style={styles.subtext}>{person.relationshipStatus}</Text>
      )}

      {person.officer && (
        <Text style={styles.officer}>Officer: {person.officer}</Text>
      )}
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
    alignItems: "center",
    gap: 6,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subtext: {
    fontSize: 14,
    opacity: 0.8,
  },
  officer: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 4,
  },
});
