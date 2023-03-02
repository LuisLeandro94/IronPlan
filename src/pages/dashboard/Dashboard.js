import { MaterialCommunityIcons } from '@expo/vector-icons';

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  BottomNavigation,
  Text,
  useTheme,
  withTheme,
} from 'react-native-paper';

const Dashboard = (props) => {
  const [exerciseLogs, setExerciseLogs] = useState([]);

  const { colors } = props.theme;

  return (
    <View
      style={{
        backgroundColor: colors.bg,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withTheme(Dashboard);
