import { MemberRow } from "@/lib/appwrite";
import { useRouter } from "expo-router";
import { GraduationCap, Heart, Lectern } from "lucide-react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Card({ person }: { person: MemberRow }) {

  const router = useRouter();

  return (
    <TouchableOpacity style={styles.card}
      onPress={() => router.push(`/(protected)/members/${person.$id}`)}>
      <Image source={{ uri: person.imageURL || "https://randomuser.me/api/portraits/women/34.jpg" }} style={styles.image} />

    <View style={styles.infoWrapper}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          {person.firstName} {person.lastName}
        </Text>

        {person.classification && (
          <View style={styles.row}>
            <GraduationCap size={18} />
            <Text style={styles.subtext}>{person.classification}</Text>
          </View>
        )}

        {person.relationshipStatus && (
          <View style={styles.row}>
            <Heart size={17} />
            <Text style={styles.subtext}>{person.relationshipStatus}</Text>
          </View>
        )}

        {person.officer && (
          <View style={styles.row}>
            <Lectern size={17} />
            <Text style={styles.officer}>Officer: {person.officer}</Text>
          </View>
        )}

      </View>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "center",
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
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  infoWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    paddingBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
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
