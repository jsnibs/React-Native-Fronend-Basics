import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> {props.headerText} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  header: {
    fontSize: 20,
  },
});

export default Header;
