import { MemberRow } from "@/lib/appwrite";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileDetailCard({ person }: { person: MemberRow }) {

  return (
    <View style={styles.card}>
      <Image source={{ uri: person.imageURL }} style={styles.image} />

      <Text style={styles.name}>
        {person.firstName} {person.lastName}
      </Text>

      {person.classification && (
        <Text style={styles.field}>{person.classification}</Text>
      )}

      {person.relationshipStatus && (
        <Text style={styles.field}>{person.relationshipStatus}</Text>
      )}

      {person.officer && (
        <Text style={styles.field}>Officer: {person.officer}</Text>
      )}

      {person.phone && <Text style={styles.field}>{person.phone}</Text>}
      {person.email && <Text style={styles.field}>{person.email}</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
    marginBottom: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  field: {
    fontSize: 18,
    marginBottom: 6,
    textAlign: "center",
  },
});
