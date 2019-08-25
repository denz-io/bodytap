import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { View, Text, ScrollView } from 'react-native-tailwind'

const Home = () => {
  return (
    <View className="container" > 
        <ScrollView
            className="bg-white"
        >
            <View className="flex-1 items-center justify-center bg-grey-darkest">
              <Text>
                Create new exercise routine?
              </Text>
            </View>
        </ScrollView>
    </View>
  );
}

export default Home;
