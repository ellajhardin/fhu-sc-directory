import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EventsPage() {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
      <Text style={styles.title}>Upcoming Events</Text>

      <View style={styles.event}>
        <Text style={styles.eventTitle}>Welcome Mixer</Text>
        <Text style={styles.eventDate}>Jan 15 • 7 PM</Text>
      </View>

      <View style={styles.event}>
        <Text style={styles.eventTitle}>Winter Retreat</Text>
        <Text style={styles.eventDate}>Jan 30 • 9 AM</Text>
      </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 20 },
  event: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  eventTitle: { fontSize: 18, fontWeight: "600" },
  eventDate: { fontSize: 14, color: "#555", marginTop: 4 },
});

