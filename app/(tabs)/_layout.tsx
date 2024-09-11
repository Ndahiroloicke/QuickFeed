import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="apple"
        options={{
          title: 'Apple',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'logo-apple' : 'logo-apple'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bussiness"
        options={{
          title: 'Bussiness',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'bag' : 'bag-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cars"
        options={{
          title: 'Cars',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'car' : 'car-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Tech"
        options={{
          title: 'Tech',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'laptop' : 'laptop-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
