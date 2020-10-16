import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';


const ViewAchievements = () => <Text>Achievements</Text>;

const GraphAchievements = () => <Text>Graph</Text>;

const Profile = () => <Text>Profile</Text>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Achievements', title: 'Achievements', icon: 'queue-music' },
    { key: 'Graph', title: 'Graph', icon: 'album' },
    { key: 'Profile', title: 'Profile', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Achievements: ViewAchievements,
    Graph: GraphAchievements,
    Profile: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;