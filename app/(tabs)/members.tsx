import Card from "@/components/Card";
import { APPWRITE_CONFIG, createAppWriteService, MemberRow } from "@/lib/appwrite";
import { Link } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [people, setPeople] = useState<MemberRow[]>([]);
  const [loading, setLoading] = useState(true);

  const appWriteService = useMemo(
    () => createAppWriteService(APPWRITE_CONFIG),
    []
  );

  const loadPeople = useCallback(async () => {
    try {
      // Load members from the "xbx" club (you can change this to fetch all clubs)
      const data = await appWriteService.getMembers("xbx");
      setPeople(data || []);
    } catch (error) {
      console.error("Error loading people:", error);
    } finally {
      setLoading(false);
    }
  }, [appWriteService]);

  useEffect(() => {
    loadPeople();
  }, [loadPeople]);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <SafeAreaView>
      <Text style={styles.title}>Directory</Text>
    <ScrollView>
      <View style={{ padding: 16 }}>
        {people.map((person) => (
          <Link
            key={person.$id}
            href={`/(protected)/members/${person.$id}`}
            asChild
          >
            <Card person={person} />
          </Link>
        ))}
        
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    padding: 10
  }
});
