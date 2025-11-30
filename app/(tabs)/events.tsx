import { useAuth } from "@/hooks/AuthContext";
import { APPWRITE_CONFIG, createAppWriteService, EventRow } from "@/lib/appwrite";
import { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EventsPage() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);
  const { member } = useAuth();

  const appwriteService = useMemo(() => createAppWriteService(APPWRITE_CONFIG), []);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await appwriteService.getEvents();
      setEvents(data);
      setLoading(false);
    };

    loadEvents();
  }, [appwriteService]);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>All Events</Text>

        {events.map((event) => (
          <View key={event.$id} style={styles.event}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDate}>
              {event.date}
              {event.time ? ` • ${event.time}` : ""}
            </Text>
          </View>
        ))}
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
