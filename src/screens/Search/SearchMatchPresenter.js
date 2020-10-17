//SearchClubPresenter.js 복사한 페이지임.

import React, { useState } from "react";
import { ScrollView, RefreshControl } from "react-native";
import PropTypes from "prop-types";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../../components/Loader";
import SearchClubCard from "../../components/contents/SearchClubCard";

export const SEARCH = gql`
  query search($term: String!) {
    searchTeam(term: $term) {
      id
      teamName
      teamArea
    }
  }
`;

const SearchMatchPresenter = ({ term, shouldFetch, onPress }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, refetch } = useQuery(SEARCH, {
    variables: {
      term
    },
    skip: !shouldFetch,
    fetchPolicy: "network-only"
  });
  console.log(data, loading);
  const onRefresh = async () => {
    try {
      setRefreshing(true);
      await refetch({ variables: { term } });
    } catch (e) {
    } finally {
      setRefreshing(false);
    }
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    >
      {loading ? (
        <Loader />
      ) : (
        data &&
        data.searchTeam &&
        data.searchTeam.map(post => <SearchClubCard onPress={onPress} key={post.id} {...post} />)
      )}
    </ScrollView>
  );
};

SearchMatchPresenter.propTypes = {
  term: PropTypes.string.isRequired,
  shouldFetch: PropTypes.bool.isRequired,
};

export default SearchMatchPresenter;
