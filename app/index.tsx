import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import Card from "@/components/Card";
import { Person } from "@/components/types";

export default function HomeScreen() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://your-server.com/people.json")
      .then((res) => res.json())
      .then((data) => setPeople(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <ScrollView>
      <View style={{ padding: 16 }}>
        {people.map((person) => (
          <Link
            key={person.id}
            href={{ pathname: "/profile/[id]", params: { id: person.id } }}
            asChild
          >
            <Card person={person} />
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}
