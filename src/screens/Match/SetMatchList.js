import React, { useState, useEffect } from "react";
import { View, FlatList, ScrollView, TouchableOpacity,Button, Text, TextInput, Alert, ActivityIndicator  } from "react-native";
import { Feather } from '@expo/vector-icons';
import colors from '../../../colors';
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

import SelectListItem from "../../components/items/SelectListItem";
import clubplayers from "../../data/clubplayers";


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

const LIMIT = 11;

function SetMatchList({ navigation, route }) {

	const [data, setData] = useState([]);
  const [offset, setOffset] = useQuery(SeeMyTeam);
  const [loading, setLoading] = useState(false);

	const getData = () => {
    setLoading(true);
    fetch(SeeMyTeam)
      .then((res) => res.json())
      .then((res) => setData(data.concat(res.slice(offset, offset + LIMIT))))
      .then(() => {
        setOffset(offset + LIMIT);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        Alert.alert("Error");
      });
  };

  useEffect(() => {
    getData();
  }, []);


  const [postText, setPostText] = React.useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('GameMatch', { post: postText })} title="Submit">
          <Feather name="check" size={25} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    }, [navigation, setPostText]);
  });

  return (
    <View style={{ flex: 1, backgroundColor: colors.clBackgroundColor }}>
      <FlatList
        data={SeeMyTeam}
        renderItem={({item}) =>
          <SelectListItem
            onPress={() => navigation.navigate('GameMatch')}
            avatar={item.teamEmblem}
            user={item.teamName}
            area={item.teamArea}
          />
        }
        keyExtractor={(item) => String(item.id)}

      />
    </View>
  );
}

export default SetMatchList;
