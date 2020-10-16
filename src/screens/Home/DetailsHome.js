import * as React from "react";
import { useState } from "react";
import { StyleSheet, Text, Button, ScrollView } from "react-native";
import colors from "../../../colors";
import { gql } from "apollo-boost";
import Loader from "../../components/Loader";
import { useQuery } from "react-apollo-hooks";
import ClubHome from "../../components/contents/ClubHome";

import { useMutation } from "react-apollo-hooks";

const SeeTeam = gql`
	query seeTeam($id: String!) {
		seeTeam(id: $id) {
			id
			teamName
			teamArea
			teamInfo
		}
	}
`;

const JOIN_TEAM = gql`
	mutation joinTeam(
		$teamId: String!
	) {
		joinTeam(teamId: $teamId)
	}
`;
export default ({ route, navigation }) => {
	const { loading, data } = useQuery(SeeTeam, {
		variables: { id: route.params.teamId },
	});

	const [setLoading] = useState(false);
	const [joinTeamMutation] = useMutation(JOIN_TEAM);
	const joinTeamSubmit = async () => {
		try {
			setLoading(true);
			const {
				data: { joinTeam },
			} = await joinTeamMutation();
			if (joinTeam) {
				Alert.alert("Club joined", "check!");
				navigation.navigate("DetailsHome");
			}
		} catch (e) {
			console.log(e);
		} finally {
			setLoading(false);
		}
	};
	return (
		<ScrollView
			horizontal={false}
			showsVerticalScrollIndicator={false}
			style={styles.container}
		>
			{loading ? (
				<Loader />
			) : (
				data &&
				data.seeTeam && (
					<ClubHome
						key={data.seeTeam.id}
						emblem={data.seeTeam.emblem}
						clubName={data.seeTeam.teamName}
						onPress={() => navigation.navigate("Details")}
						joinOnPress={joinTeamSubmit}
					/>
				)
			)}
			<Text>Club Schedule</Text>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.clBackgroundColor,
	},
});
