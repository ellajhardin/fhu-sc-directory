import { useAuth } from "@/hooks/AuthContext";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfilePage() {
  const { user, member, logout } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.replace("/auth");
  }

  return (
    <View style={styles.container}>

      <View style={styles.infoBlock}>
        <Text style={styles.title}>My Profile</Text>
 
          <View style={styles.wrapper}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{user?.name}</Text>
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{user?.email}</Text>
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.label}>Club</Text>
            <Text style={styles.value}>{member?.club}</Text>
          </View>
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
    justifyContent: "center",
    gap: 30,
  },

  title: {
    fontSize: 60,
    marginBottom: 20,
    marginTop: 10,
    fontWeight: "600",
    textAlign: "center",
  },

  label: {
    fontSize: 28,
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
    marginBottom: 70
  },

  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  wrapper: {
  }
});
