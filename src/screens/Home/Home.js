import React, { useState } from "react";
import {
	ScrollView,
	RefreshControl,
	TouchableOpacity,
	StatusBar
} from "react-native";
import styled from "styled-components"
import { Feather } from "@expo/vector-icons";
import colors from "../../../colors";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import Loader from "../../components/Loader";
import ClubTeams from "../../components/contents/ClubTeams";
import ScheduleCard from "../../components/contents/ScheduleCard";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.clBackgroundColor};
`;
const ClubContainer = styled.View`
  margin: 7px;
  background-color: ${(props) => props.theme.white};
	padding-vertical: 5px;
	border-radius: 15px;
`;
const Touchable = styled.TouchableOpacity``;
const ClubContainerTopWrap = styled.View`
  height: 35px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-horizontal: 7px;
`;
const ClubContainerTopText = styled.Text`
  font-weight: bold;
	font-size: 18px;
`;
const ClubContainerTopButton = styled.View`
  flex-direction: row;
	align-items: center;
`;
const ClubContainerBottomWrap = styled.View`
  height: 120px;
`;
const ScheduleContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.clBackgroundColor};
`;
const ScheduleContainerText = styled.Text`
  font-weight: bold;
	font-size: 18px;
	padding-left: 14px;
	padding-vertical: 12px;
`;

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
		<Container>
			<StatusBar backgroundColor={colors.white} barStyle="dark-content" />
			{/*Club Channel*/}
			<ClubContainer>
				<ClubContainerTopWrap>
					<ClubContainerTopText>Club</ClubContainerTopText>
					<Touchable onPress={() => navigation.navigate("NewClub")}>
						<ClubContainerTopButton>
							<Feather name="plus-circle" size={18} />
							<ClubContainerTopText>New Club</ClubContainerTopText>
						</ClubContainerTopButton>
					</Touchable>
				</ClubContainerTopWrap>
				<ClubContainerBottomWrap>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						contentContainerStyle={{ alignItems: "center", paddingStart: 5, paddingEnd: 5 }}
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
									emblem={seeMyTeam.teamEmblem}
									clubName={seeMyTeam.teamName}
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
				</ClubContainerBottomWrap>
			</ClubContainer>
			{/*My Schedule*/}
			<ScheduleContainer>
				<ScheduleContainerText>My Schedule</ScheduleContainerText>
				<ScrollView
					horizontal={false}
					showsVerticalScrollIndicator={false}
					style={{ paddingHorizontal: 7 }}
				>
					<ScheduleCard
						emblem={require('../../data/ImgTest/1ars.jpg')}
	          clubName="FC_Arsenal"
	          sport="Soccer"
						date="Jul 20"
						time="10:00"
						matchArea="Buenos Aires"
						clubGame="4"
	          onPress={() => navigation.navigate('FeedDetails')}
	          detailsOnPress={() => navigation.navigate('Profile')}
	        />
					<ScheduleCard
						emblem={require('../../data/ImgTest/aaaa.jpg')}
	          clubName="FC_Namgang"
	          sport="Futsal"
						date="Jul 25"
						time="22:00"
						matchArea="Seoul"
						clubGame="4"
	          onPress={() => navigation.navigate('FeedDetails')}
	          detailsOnPress={() => navigation.navigate('Profile')}
	        />
					<ScheduleCard
						emblem={require('../../data/ImgTest/bbbb.jpg')}
	          clubName="Cicagobulls"
	          sport="Basketball"
						date="Aug 2"
						time="09:00"
						matchArea="Cicago"
						clubGame="4"
	          onPress={() => navigation.navigate('FeedDetails')}
	          detailsOnPress={() => navigation.navigate('Profile')}
	        />
					<ScheduleCard
						emblem={require('../../data/ImgTest/2bar.jpg')}
	          clubName="FC_Barcelona"
	          sport="Soccer"
						date="Aug 10"
						time="15:00"
						matchArea="Barcelona"
						clubGame="4"
	          onPress={() => navigation.navigate('FeedDetails')}
	          detailsOnPress={() => navigation.navigate('Profile')}
	        />
				</ScrollView>
			</ScheduleContainer>
		</Container>
	);
};
