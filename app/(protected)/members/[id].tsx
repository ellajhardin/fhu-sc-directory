import ProfileDetailCard from "@/components/ProfileDetailCard";
import {
  APPWRITE_CONFIG,
  createAppWriteService,
  MemberRow
} from "@/lib/appwrite";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();

  const appwrite = useMemo(
    () => createAppWriteService(APPWRITE_CONFIG),
    []
  );

  const [person, setPerson] = useState<MemberRow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadPerson = async () => {
      try {
        const data = await appwrite.getMemberById(id);
        setPerson(data);

        if (data) {
        navigation.setOptions({ title: `${data.firstName} ${data.lastName}` });
      }
      
      } catch (error) {
        console.error("Error loading member:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPerson();
  }, [id]);

  if (loading)
    return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  if (!person)
    return (
      <View style={styles.container}>
        <Text>Member not found.</Text>
      </View>
    );

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <ArrowLeft size={28} />
      </TouchableOpacity>

      <ProfileDetailCard person={person} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    marginBottom: 12,
    padding: 8,
  },
});
