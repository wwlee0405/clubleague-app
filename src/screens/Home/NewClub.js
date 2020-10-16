import React, { useState } from "react";
import styled from "styled-components";
import {
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import useInput from "../../hooks/useInput";
import AuthButton from "../../components/AuthButton";
import { useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import colors from "../../../colors";
import SetSportInput from "../../components/form/SetSportInput";
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
`;

export default ({ navigation }) => {
	const clubNameInput = useInput("");
	const [loading, setLoading] = useState(false);
	const [createClubMutation] = useMutation(CREATE_TEAM, {
		variables: {
			teamName: clubNameInput.value,
		},
	});
	const newClubSubmit = async () => {
		const { value: clubName } = clubNameInput;
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
			}
		} catch (e) {
			console.log(e);
		} finally {
			setLoading(false);
		}
	};
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View>
				<SetSportInput />

				<TextInputField
					{...clubNameInput}
					placeholder="Input Club Name"
					autoCapitalize="words"
					autoCorrect={false}
				/>

				<TextInputField
					placeholder="Input Club Hometown"
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

				<AuthButton
					loading={loading}
					onPress={newClubSubmit}
					loading={false}
					text="Submit"
				/>

				<Text>You can change club name and picture after you create it.</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};
