import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Dashboard from '../dashboard/Dashboard';

const RoutinesRoute = () => <Text>Routines</Text>;

const MealsRoute = () => <Text>Meals</Text>;

const ProfileRoute = () => <Text>Profile</Text>;

const PageNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    {
      key: 'dashboard',
      title: 'Dashboard',
      icon: 'album',
    },
    { key: 'routines', title: 'Routines', icon: 'album' },
    { key: 'meals', title: 'Meals', icon: 'history' },
    { key: 'profile', title: 'Profile', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: Dashboard,
    routines: RoutinesRoute,
    meals: MealsRoute,
    profile: ProfileRoute,
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default PageNavigation;
