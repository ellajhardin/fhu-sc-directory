import { MemberRow } from "@/lib/appwrite";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileDetailCard({ person }: { person: MemberRow }) {

const profileImage =
    person.imageURL && person.imageURL.length > 0
      ? person.imageURL
      : `https://ui-avatars.com/api/?name=${person.firstName}+${person.lastName}&size=256&background=random`;

  return (
    <View style={styles.card}>
      <Image source={{ uri: profileImage }} style={styles.image} />

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
    width: 140,
    height: 140,
    borderRadius: 70,
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
