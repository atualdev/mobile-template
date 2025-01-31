import React from "react";
import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function WelcomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-50">
      <Text className="text-2xl font-bold text-blue-900">Bem-vindo!</Text>

      <Link href="/options">
        <TouchableOpacity className="mt-6 bg-blue-500 px-6 py-2 rounded-lg">
          <Text className="text-white font-semibold">Ir para Opções</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
