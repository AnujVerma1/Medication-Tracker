import { Stack } from "expo-router";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function RootLayout() {
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {}
    );

    const responseSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {});

    return () => {
      subscription.remove();
      responseSubscription.remove();
    };
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="login" />
      <Stack.Screen
        name="action-modal"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
