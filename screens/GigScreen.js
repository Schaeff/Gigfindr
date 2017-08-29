import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet
} from 'react-native';
import GigDetails from '../components/GigDetails'
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

const GigScreen = (props) => {
  const { navigation, gigs } = props;
  const { goBack } = navigation;
  const { params } = navigation.state;
  const { id } = params;

  console.log(id, gigs)

  return (
    <ScrollView style={styles.container}>
      <GigDetails id={id} gig={gigs[id]} /> 
    </ScrollView>
  );
};

GigScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Details'
  };
};

const mapStateToProps = state => ({
  gigs: state.gigs
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GigScreen);