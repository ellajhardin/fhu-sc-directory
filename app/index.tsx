import Card from "@/components/Card";
import { Person } from "@/components/types";
import { getPeople } from "@/services/appwriteService";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const loadPeople = async () => {
    try {
      const data = await getPeople(); // wait for Appwrite to return the JSON
      setPeople(data);                // update state with the people array
    } catch (error) {
      console.error("Error loading people:", error);
    } finally {
      setLoading(false);          
    }
  };

  loadPeople(); // call the async function
}, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <SafeAreaView>
      <Text style={styles.title}>XBX DIRECTORY</Text>
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
