import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import {
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
	TouchableOpacity,
	TextInput
} from "react-native";
import { Feather } from "@expo/vector-icons";
import useInput from "../../hooks/useInput";
import AuthButton from "../../components/AuthButton";
import { useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import colors from "../../../colors";

import SelectSportModal from "../../components/form/SelectSportModal";
import TextInputField from "../../components/form/TextInputField";

const CREATE_TEAM = gql`
	mutation createTeam(
		$teamName: String!
		$teamArea: String
		$teamInfo: String
	) {
		createTeam(teamName: $teamName, teamArea: $teamArea, teamInfo: $teamInfo)
	}
`;

const View = styled.View`
	justify-content: center;
	align-items: center;
	flex: 1;
	background-color: ${(props) => props.theme.clBackgroundColor};
`;

const Text = styled.Text`
	padding: 40px 60px;
	font-size: 15px;
	text-align: center;
`;

function NewClub({ navigation, route }) {

	const [clubName, setClub] = useState("");
	const [loading, setLoading] = React.useState(false);
	const [createClubMutation] = useMutation(CREATE_TEAM, {
		variables: {
			teamName: clubName
		},
	});
	const newClubSubmit = async () => {
		const clubName = clubName;
		if (clubName === "") {
			return Alert.alert("Please, I need your Club Name.");
		}
		try {
			setLoading(true);
			const {
				data: { createTeam },
			} = await createClubMutation();
			if (createTeam) {
				Alert.alert("Club created", "check!");
				navigation.navigate("Home");
				setClub(data);
			}
		} catch (e) {
			console.log(e);
		} finally {
			setLoading(false);
		}
	};

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
				<TouchableOpacity
					onPress={() => navigation.navigate('Home', { newClub: clubName })}
					title="Submit"
				>
          <Feather name="check" size={25} style={{ paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    }, [navigation, newClubSubmit]);
  });

  return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View>
				<SelectSportModal />

				<TextInput
					value={clubName}
					onChangeText={newClubSubmit}
					placeholder="Input Club Name"
					autoCapitalize="words"
					autoCorrect={false}
				/>

				<TextInputField
					placeholder="Input Club Area"
					autoCapitalize="words"
					autoCorrect={false}
				/>

				{/* <View style={styles.imgSectionWrap}>
				<TouchableOpacity onPress={() => alert("edit img")}>
					<View style={styles.imgSection}>
						<Feather
							name="camera"
							size={40}
							style={{ paddingBottom: 5, color: colors.grey03 }}
						/>
						<Text style={{ color: colors.grey03 }}>사진추가</Text>
					</View>
					<Image
						source={require("../../data/ImgTest/cccc.jpg")}
						style={styles.img}
					/>
				</TouchableOpacity>
			</View> */}



				<Text>You can change club name and picture after you create it.</Text>
			</View>
		</TouchableWithoutFeedback>
  );
}

export default NewClub;
