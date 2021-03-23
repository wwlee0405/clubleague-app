import React, { useState, useEffect } from "react";
import { SafeAreaView, FlatList, Alert } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../../components/Loader";
import SelectListItem from "../../components/items/SelectListItem";

const SeeMyTeam = gql`
	{
		seeMyTeam {
			id
			teamEmblem
			teamName
			teamArea
			teamInfo
		}
	}
`;

function SetMatchList({ navigation, route }) {

	const { loading, error, data } = useQuery(SeeMyTeam);
	console.log(loading, error, data);
	if (loading) {
		return <Loader />;
	}
	if (error) {
  	return Alert.alert("Error.");
	}

	const renderItem = ({ item }) => {

    return (
      <SelectListItem
        onPress={() => navigation.navigate('GameMatch')}
				avatar={item.teamEmblem}
				user={item.teamName}
				area={item.teamArea}
      />
    );
  };

  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: colors.clBackgroundColor }}>
			<FlatList
				data={data.seeMyTeam}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
			/>

    </SafeAreaView>
  );
}

export default SetMatchList;
