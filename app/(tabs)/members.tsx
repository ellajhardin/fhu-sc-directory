import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import {
  APPWRITE_CONFIG,
  createAppWriteService,
  MemberRow,
} from "@/lib/appwrite";
import { Link } from "expo-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [people, setPeople] = useState<MemberRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  const filteredMembers = people?.filter((m) => {
    const full = `${m.firstName} ${m.lastName}`.toLowerCase();
    return full.includes(search.toLowerCase());
  });

  return (
    <SafeAreaView>
      <Text style={styles.title}>Directory</Text>

      <SearchBar value={search} onChange={setSearch} />


      <FlatList
        data={filteredMembers}
        keyExtractor={(m) => m.$id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }}
        renderItem={({ item }) => (
          <Link
            href={`/(protected)/members/${item.$id}`}
            asChild
          >
            <View>
              <Card person={item} />
            </View>
          </Link>
        )}
      />

      {/*<ScrollView>
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
      </ScrollView>*/}


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fafafa" 
  },
  
  title: {
    fontSize: 30,
    textAlign: "center",
    padding: 10,
  },
});
