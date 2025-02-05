import React, { useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Button } from "kpt-ui";
import { Link } from "expo-router";

export const App = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          
        >
          <View>
            <Text>
              Welcome Household
            </Text>
          </View>
          <View>
            <Link href="/testPage">Go to test page</Link>
            <Button />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
