import { Search } from "lucide-react-native";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (text: string) => void;
}) {


  return (
    <View style={styles.wrapper}>
        <View style={styles.container}>
        <Search size={18} color="#666" style={{ marginRight: 8 }} />
        <TextInput
            style={styles.input}
            placeholder="Search members..."
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#aaa"
            value={value}
            clearButtonMode="while-editing"
            onChangeText={onChange}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff", 
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1, 
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
