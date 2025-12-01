import { useAuth } from "@/hooks/AuthContext";
import { APPWRITE_CONFIG, createAppWriteService, EventRow } from "@/lib/appwrite";
import { Dot } from "lucide-react-native";
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
    
    <View style={styles.header}>
      <Text style={styles.eventTitle}>{event.title}</Text>
      <Dot />
      <Text style={styles.eventTitle}>{event.club?.toUpperCase() || "UNKNOWN"}</Text>
    </View>

    {event.description ? (
      <Text style={styles.eventDescription}>{event.description}</Text>
    ) : null}

    <View style={styles.infoRow}>
      <View style={styles.infoPill}>
        <Text style={styles.infoText}>{event.date}</Text>
        {event.time && (
          <>
            <Dot size={12} color="#777" />
            <Text style={styles.infoText}>{event.time}</Text>
          </>
        )}
      </View>
    </View>

  </View>
))}

      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F4F4F5",
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 20,
  },

  event: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  eventTitle: {
    fontSize: 20,
    fontWeight: "700",
    flexShrink: 1,
    color: "#111",
  },

  clubPill: {
    backgroundColor: "#EEF2FF",
    color: "#4338CA",
    fontWeight: "700",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
  },

  eventDescription: {
    fontSize: 15,
    color: "#444",
    marginBottom: 15,
    lineHeight: 20,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  infoPill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#F3F4F6",
    borderRadius: 20,
    gap: 6,
  },

  infoText: {
    fontSize: 14,
    color: "#555",
    fontWeight: "600",
  },
});

