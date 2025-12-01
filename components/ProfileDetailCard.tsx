import { MemberRow } from "@/lib/appwrite";
import { GraduationCap, Heart, Lectern, Mail, Phone } from "lucide-react-native";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileDetailCard({ person }: { person: MemberRow }) {

  const handlePhonePress = (phone?: string) => {
  if (!phone) return;
  Linking.openURL(`tel:${phone}`).catch(err =>
    console.error("Failed to open phone app:", err)
  );
};

  const handleEmailPress = (email?: string) => {
  if (!email) return;
  Linking.openURL(`mailto:${email}`).catch(err =>
    console.error("Failed to open email app:", err)
  );
};

  return (
    <View style={styles.card}>

      <Text style={styles.name}>
        {person.firstName} {person.lastName}
      </Text>

      <Image source={{ uri: person.imageURL || "https://randomuser.me/api/portraits/women/34.jpg" }} style={styles.image}/>
      {/*<Image source={{ uri: person.imageURL }} style={styles.image} />*/}

      <View style={styles.info}>


        {person.classification && (
          <View style={styles.row}>
            <GraduationCap size={20} />
            <Text style={styles.field}>{person.classification}</Text>
          </View>
        )}

        {person.relationshipStatus && (
          <View style={styles.row}>
            <Heart size={20} />
            <Text style={styles.field}>{person.relationshipStatus}</Text>
          </View>
        )}

        {person.officer && (
          <View style={styles.row}>
            <Lectern size={20} />
            <Text style={styles.field}>Officer: {person.officer}</Text>
          </View>
        )}

        {person.phone && (
          <TouchableOpacity style={styles.row} onPress={() => handlePhonePress(person.phone)}>
            <Phone size={20} />
            <Text style={[styles.field, styles.link]}>{person.phone}</Text>
          </TouchableOpacity>
        )}

        {person.email && (
          <TouchableOpacity style={styles.row} onPress={() => handleEmailPress(person.email)}>
            <Mail size={20} />
            <Text style={[styles.field, styles.link]}>{person.email}</Text>
          </TouchableOpacity>
        )}


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 2,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 20,
  },
  name: {
    fontSize: 36,
    fontWeight: "bold",
  },
  field: {
    fontSize: 20,
    marginBottom: 6,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginBottom: 10,
  },
  info: {
    width: "100%",
    gap: 40,
    alignItems: "flex-start",
    marginTop: 30,
  },
  link: {
    textDecorationLine: "underline",
  },
});
