import React from "react";
import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function WelcomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-50">
      <Text className="text-2xl font-bold text-blue-900">Bem-vindo!</Text>

      <Link href="/options" className="mt-3">
        <Text className="text-blue-500 font-semibold">Ir para Opções</Text>
      </Link>
    </View>
  );
}
