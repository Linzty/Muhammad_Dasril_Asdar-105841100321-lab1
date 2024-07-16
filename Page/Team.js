import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const Team = () => {
  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/fonts/Metropolis-Bold.otf'),
    'Metropolis-Medium': require('../assets/fonts/Metropolis-Medium.otf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Font not found!</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'orange' }}>
      <Text style={ styles.title }>
        McLaren F1 Team
      </Text>
      <View style={styles.line}></View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Metropolis-Medium', marginBottom: 20 }}>
          The McLaren Formula 1 team is a British motor racing team based in Woking, Surrey, England.
          McLaren is best known as a Formula 1 constructor, the second oldest active team and one of the
          most successful teams in F1 history.
        </Text>

        <View style={{ borderRadius: 10, overflow: 'hidden', marginBottom: 20 }}>
          <Image
            source={require('../assets/car.jpg')}
            style={{ width: '100%', height: 200 }}
          />
        </View>

        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', fontFamily: 'Metropolis-Bold', marginBottom: 10 }}>
          Drivers
        </Text>
        {renderDriverCard('driver1', 'Lando Norris #4', 'First Driver')}
        {renderDriverCard('driver2', 'Oscar Piastri #81', 'Second Driver')}

        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', fontFamily: 'Metropolis-Bold', marginBottom: 10 }}>
          Achievements
        </Text>
        {renderAchievementItem('8 Constructors\' Championships')}
        {renderAchievementItem('12 Drivers\' Championships')}
        {renderAchievementItem('Race victories: 184')}
        {renderAchievementItem('Podiums: 512')}
        {renderAchievementItem('2023: 3rd place in Constructors\' Championship')}
        {renderAchievementItem('2022: 4th place in Constructors\' Championship')}
      </ScrollView>
    </View>
  );
};

const imageMapping = {
  driver1: require('../assets/drivers/driver1.jpg'),
  driver2: require('../assets/drivers/driver2.jpg'),
};

const renderDriverCard = (imageKey, name, position) => (
  <View style={{ flexDirection: 'row', backgroundColor: 'black', borderRadius: 10, marginBottom: 20, padding: 16, alignItems: 'center' }}>
    <Image source={imageMapping[imageKey]} style={{ width: 80, height: 80, borderRadius: 40 }} />
    <View style={{ marginLeft: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', fontFamily: 'Metropolis-Bold' }}>
        {name}
      </Text>
      <Text style={{ fontSize: 16, color: 'white', fontFamily: 'Metropolis-Medium' }}>
        {position}
      </Text>
    </View>
  </View>
);

const renderAchievementItem = (achievement) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
    <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Metropolis-Medium', }}>
      • {achievement}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Metropolis-Bold',
    marginBottom: 10,
    marginTop: 50,
    textAlign: 'center',
  },
  line: {
    width: '80%',
    height: 2,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
   

export default Team;
