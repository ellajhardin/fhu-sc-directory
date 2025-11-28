/*import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="auth"
        options={{
          title: "Auth",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}*/

import { useAuth } from "@/hooks/AuthContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabsLayout() {
  const { user } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null, // hide the tab
        }}
      />
      
      {/* PUBLIC EVENTS */}
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calendar" color={color} />
          ),
        }}
      />

      {/* ONLY SHOW MEMBERS TAB IF LOGGED IN */}
      {user ? (
        <Tabs.Screen
          name="members"
          options={{
            title: "Members",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="users" color={color} />
            ),
          }}
        />
      ) : (
        <Tabs.Screen
          name="members"
          options={{
            href: null, // hide tab when logged out
          }}
        />
      )}

      {/* ONLY SHOW PROFILE WHEN LOGGED IN */}
      {user ? (
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          }}
        />
      ) : (
        <Tabs.Screen
          name="profile"
          options={{
            href: null, // hide tab when logged out
          }}
        />
      )}

      {/* SHOW AUTH ONLY WHEN LOGGED OUT */}
      {!user ? (
        <Tabs.Screen
          name="auth"
          options={{
            title: "Login",
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="sign-in" color={color} />
            ),
          }}
        />
      ) : (
        <Tabs.Screen
          name="auth"
          options={{
            href: null,
          }}
        />
      )}
    </Tabs>
  );
}
