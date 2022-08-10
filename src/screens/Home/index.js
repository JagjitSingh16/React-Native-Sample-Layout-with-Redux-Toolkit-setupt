import {StyleSheet, View} from 'react-native';
import React from 'react';
import Heading from '../../components/common/Heading';

const Home = () => {
  return (
    <View>
      <Heading
        color="black"
        fontSize={20}
        backgroundColor="red"
        text="Using Custom Text"
        textAlign="center"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
