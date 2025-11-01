import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Person } from "@/components/types";
import ProfileDetailCard from "@/components/ProfileDetailCard";

export default function ProfileDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    fetch(`https://your-server.com/people/${id}.json`)
      .then((res) => res.json())
      .then(setPerson)
      .catch(console.error);
  }, [id]);

  if (!person) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <ProfileDetailCard person={person} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
