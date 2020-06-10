import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import colors from "../../../colors";
import SearchBar from "../../components/form/SearchBar";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  static navigationOptions = ({ navigation, route }) => ({
    headerTitle: () => (
      <SearchBar
        value={route.params?.term ?? ''}
        onChange={route.params?.onChange ?? (() => null)}
        onSubmit={route.params?.onSubmit ?? (() => null)}
      />
    )
  });
  constructor(props) {
    super(props);
    const { navigation } = props;
    this.state = {
      term: "",
      shouldFetch: false
    };
    navigation.setParams({
      term: this.state.term,
      onChange: this.onChange,
      onSubmit: this.onSubmit
    });
  }
  onChange = text => {
    const { navigation } = this.props;
    this.setState({ term: text, shouldFetch: false });
    navigation.setParams({
      term: text
    });
  };
  onSubmit = () => {
    this.setState({ shouldFetch: true });
  };

  render() {
    const { navigation } = this.props;
    const { term, shouldFetch } = this.state;
    return <SearchPresenter term={term} shouldFetch={shouldFetch} />;
  }
}



const styles = StyleSheet.create({
  inputSection: {
    fontSize: 15,
    backgroundColor: colors.whiteSmoke,
    borderRadius: 5,
    paddingLeft: 10,
    width: 300,
  },
  container: {
    flex: 1,
    backgroundColor: colors.clBackgroundColor,
  },
});
