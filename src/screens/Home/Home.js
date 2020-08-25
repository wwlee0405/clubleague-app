import React, { useState } from "react";
import {
	ScrollView,
	RefreshControl,
	Text,
	StyleSheet,
	View,
	TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../../../colors";
import ClubTeams from "../../components/contents/ClubTeams";
import { gql } from "apollo-boost";
import Loader from "../../components/Loader";
import { useQuery } from "react-apollo-hooks";
import ScheduleCard from "../../components/contents/ScheduleCard";

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
export default ({ navigation }) => {
	const [refreshing, setRefreshing] = useState(false);
	const { loading, data, refetch } = useQuery(SeeMyTeam);
	const refresh = async () => {
		try {
			setRefreshing(true);
			await refetch();
		} catch (e) {
			console.log(e);
		} finally {
			setRefreshing(false);
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.clubContainer}>
				<View style={styles.clubContainerTopWrap}>
					<Text style={styles.clubContainerText}>Club</Text>
					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("NewClub")}
							style={styles.clubContainerLeftButton}
						>
							<Feather
								name="plus-circle"
								style={styles.clubContainerRightButtonIcon}
							/>
							<Text style={styles.clubContainerText}>New Club</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.clubContainerBottomWrap}>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={styles.clubsWrap}
						refreshControl={
							<RefreshControl refreshing={refreshing} onRefresh={refresh} />
						}
					>
						{loading ? (
							<Loader />
						) : (
							data &&
							data.seeMyTeam &&
							data.seeMyTeam.map((seeMyTeam, index) => (
								<ClubTeams
									key={index}
									id={seeMyTeam.id}
									avatar={seeMyTeam.teamEmblem}
									teamName={seeMyTeam.teamName}
									onPress={() =>
										navigation.navigate("Details", {
											screen: "DetailsHome",
											params: { teamId: seeMyTeam.id }
										})
									}
								/>
							))
						)}
					</ScrollView>
				</View>
			</View>

			<View style={styles.scheduleContainer}>
				<Text style={styles.scheduleContainerText}>My Schedule</Text>
				<ScrollView
					horizontal={false}
					showsVerticalScrollIndicator={false}
					style={styles.gameScheduleWrap}
				>
					<ScheduleCard
						avatar={require('../../data/ImgTest/1ars.jpg')}
	          teamName="FC_Arsenal"
	          sport="Soccer"
						date="Jul 20"
						time="10:00"
						area="Buenos Aires"
						teamGame="4"
	          onPress={() => navigation.navigate('FeedDetails')}
	          detailsOnPress={() => navigation.navigate('Profile')}
	        />
					<ScheduleCard
						avatar={require('../../data/ImgTest/aaaa.jpg')}
	          teamName="FC_Namgang"
	          sport="Futsal"
						date="Jul 25"
						time="22:00"
						area="Seoul"
						teamGame="4"
	          onPress={() => navigation.navigate('FeedDetails')}
	          detailsOnPress={() => navigation.navigate('Profile')}
	        />
					<ScheduleCard
						avatar={require('../../data/ImgTest/bbbb.jpg')}
	          teamName="Cicagobulls"
	          sport="Basketball"
						date="Aug 2"
						time="09:00"
						area="Cicago"
						teamGame="4"
	          onPress={() => navigation.navigate('FeedDetails')}
	          detailsOnPress={() => navigation.navigate('Profile')}
	        />
					<ScheduleCard
						avatar={require('../../data/ImgTest/2bar.jpg')}
	          teamName="FC_Barcelona"
	          sport="Soccer"
						date="Aug 10"
						time="15:00"
						area="Barcelona"
						teamGame="4"
	          onPress={() => navigation.navigate('FeedDetails')}
	          detailsOnPress={() => navigation.navigate('Profile')}
	        />

				</ScrollView>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.clBackgroundColor,
	},
	clubContainer: {
		margin: 7,
		paddingVertical: 5,
		backgroundColor: colors.white,
		borderRadius: 15,
	},
	clubContainerTopWrap: {
		height: 35,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 7,
	},
	clubContainerText: {
		fontWeight: "bold",
		fontSize: 18,
	},
	clubContainerLeftButton: {
		flexDirection: "row",
		alignItems: "center",
	},
	clubContainerRightButtonIcon: {
		fontSize: 18,
	},
	clubContainerBottomWrap: {
		height: 120,
	},
	clubsWrap: {
		alignItems: "center",
		paddingStart: 5,
		paddingEnd: 5,
	},
	scheduleContainer: {
		flex: 1,
		backgroundColor: colors.clBackgroundColor,
	},
	scheduleContainerText: {
		fontWeight: "bold",
		fontSize: 18,
		paddingLeft: 14,
		paddingVertical: 12,
	},
	gameScheduleWrap: {
		paddingHorizontal: 7,
	},
});
