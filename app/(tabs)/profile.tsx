import { useAuth } from "@/hooks/AuthContext";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfilePage() {
  const { user, member, logout } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.replace("/auth"); // send them back to login
  }

  return (
    <View style={styles.container}>

      <View style={styles.infoBlock}>
        <Text style={styles.title}>My Profile</Text>

        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user?.name}</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user?.email}</Text>

        <Text style={styles.label}>Club</Text>
        <Text style={styles.value}>{member?.club}</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 20,
  },

  infoBlock: {
    marginTop: 40,
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: "600",
    textAlign: "center",
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 15,
  },

  value: {
    fontSize: 20,
    marginTop: 4,
  },

  logoutButton: {
    marginTop: "auto", 
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#E53935",
    borderRadius: 10,
    alignSelf: "center",
  },

  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
