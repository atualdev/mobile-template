import React from "react";
import "@/styles/global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="options" options={{ title: "Options" }} />
      </Stack>
    </>
  );
}
