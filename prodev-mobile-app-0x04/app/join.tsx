import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_mainstyle";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function JoinScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.navGroup}>
          <Ionicons name="arrow-back" size={25} onPress={() => navigation.goBack()} />
          <Image source={require('@/assets/images/logo.png')} />
        </View>

        <Text style={styles.largeText}>Create your</Text>
        <Text style={styles.largeText}>Account</Text>
        <Text style={styles.smallText}>
          Fill in the details below to join Skill Academy.
        </Text>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.placeholderText}>Full Name</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Enter full name"
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.inputField}
              placeholder="Enter email"
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.placeholderText}>Password</Text>
            <View style={styles.passwordGroup}>
              <TextInput
                secureTextEntry
                style={{ flex: 1 }}
                placeholder="Enter password"
              />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={st
