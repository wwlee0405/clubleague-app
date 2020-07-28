import * as React from "react";
import { StyleSheet, Text, Button, ScrollView } from "react-native";
import colors from "../../../colors";
import { gql } from "apollo-boost";
import Loader from "../../components/Loader";
import { useQuery } from "react-apollo-hooks";
import ClubHome from "../../components/contents/ClubHome";
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
export default ({ route, navigation }) => {
	const { loading, data } = useQuery(SeeTeam, {
		variables: { id: route.params.teamId },
	});
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
						avatar={data.seeTeam.avatar}
						teamName={data.seeTeam.teamName}
						onPress={() => navigation.navigate("Details")}
					/>
				)
			)}
			<Text>Team Schedule</Text>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.clBackgroundColor,
	},
});
