import { useAuth } from "@/hooks/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { user, loading } = useAuth();

  if (loading) return null;  // or spinner

  if (!user) {
    return <Redirect href="/(tabs)/auth" />;
  }

  return <Stack />;
}