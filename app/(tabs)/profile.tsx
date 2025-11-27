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
      <Text style={styles.title}>My Profile</Text>

      <Text>Name: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>
      <Text>Club: {member?.club}</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 12
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: "600",
  },
  logoutButton: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "#E53935",
    borderRadius: 10,
  },
  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
