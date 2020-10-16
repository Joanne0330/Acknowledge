import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text, FAB, List } from 'react-native-paper';

import BottomNav from "../components/BottomNav"
import Header from '../components/Header'
import Firebase from '../../config/Firebase'

// Access state in Redux
import { useSelector, useDispatch } from 'react-redux'
import { addachievement, deleteachievement} from '../redux/achievements/achievements.actions'

function ViewAchievements({ navigation }) {
  const achievements = useSelector(state => state.achievements)
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()
  const addAchievement = achievement => dispatch(addachievement(achievement))
  const deleteAchievement = id => dispatch(deleteachievement(id))



  console.log(achievements)
  return (
    <>
      <Header titleText='Access' />

      <View style={styles.container}>
        {achievements.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}> You have not saved any Achievements yet!</Text>
          </View>
        ) : (
          <FlatList
            data={achievements}
            renderItem={({ item }) => (
              <List.Item
                title={item.achievement.achievementTitle}
                description = {[item.achievement.selectedA.join(),",", item.achievement.selectedB.join()]}
                descriptionNumberOfLines={2}
                titleStyle={styles.listTitle}
                onPress={() => deleteAchievement(item.id)}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
        <FAB
          style={styles.fabGraph}
          small
          icon='chart-bar'
          label='View Graph'
          onPress={() =>
            navigation.navigate('GraphAchievements')
        }
        />
        <FAB
          style={styles.fabAdd}
          small
          icon='plus'
          label='Add Achievement'
          onPress={() =>
            navigation.navigate('AddAchievement', {
              addAchievement
          })
        }
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  title: {
    fontSize: 20
  },
  fabGraph: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 80
  },
  fabAdd: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10
  },
  listTitle: {
    fontSize: 20
  },
})

export default ViewAchievements
