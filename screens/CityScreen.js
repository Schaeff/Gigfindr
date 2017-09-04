import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet
} from 'react-native';
import GigsList from '../components/GigsList'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'mediumseagreen',
    color: 'white',
    fontSize: 16,
    height: 50,
    lineHeight: 50,
    marginBottom: 12,
    marginHorizontal: 16,
    textAlign: 'center'
  },
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  spacer: {
    flex: 1
  }
});

const CityScreen = (props) => {
  const { navigation, city } = props;
  const { goBack } = navigation;
  const { params } = navigation.state;
  const { id } = params;

  return (
    <ScrollView style={styles.container}>
      <GigsList id={id} city={city[id]} navigation={navigation} /> 
    </ScrollView>
  );
};

CityScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'City'
  };
};

const mapStateToProps = state => ({
  city: state.db.city
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CityScreen);