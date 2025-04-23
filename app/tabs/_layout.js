import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />       // Home tab
      <Tabs.Screen name="climbs" />      // Your climbs tab
    </Tabs>
  );
}