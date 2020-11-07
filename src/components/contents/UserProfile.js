import React from "react";
import { StyleSheet, Button, ScrollView, Image, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from '../../../colors';

const View = styled.View`
`;
const Text = styled.Text`
`;
const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.clBackgroundColor};
`;
const ProfileContainer = styled.View`
  padding-top: 10px;
`;
const ProfileWrap = styled.View`
  flex-direction: row;
`;
const ProfileImgBtn = styled.View`
  padding-right: 10px;
`;
const AvatarWrap = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 30px;
`;
const ProfileTextWrap = styled.View`
  flex: 1;
  padding-top: 10px;
  padding-left: 20px;
`;
const NameTag = styled.Text`
  font-size: 10px;
  color: ${(props) => props.theme.darkGreyColor};
`;
const Property = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.blackColor};
`;
const EditProfileBtn = styled.View`
  margin-top: 20px;
  margin-horizontal: 25px;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-width: 1px;
  border-color: ${(props) => props.theme.emerald};
  background-color: ${(props) => props.theme.clBackgroundColor};
  border-radius: 8px;
`;
const EditProfileBtnText = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.emerald};
`;

const UserProfile = ({
  avatar,
  username,
  fullName,
  area,
  position,
  clubName,
  onPress
}) =>(
  <Container>
    <ScrollView
      horizontal={false}
      showsVerticalScrollIndicator={false}
    >
      {/*Profile section*/}
      <ProfileContainer>
        <ProfileWrap>
          <AvatarWrap>
            <TouchableOpacity onPress={() => null}>
              <Image
                source={{ uri: avatar }}
                style={{ width: 150, height: 150, borderRadius: 100 }}
              />
            </TouchableOpacity>
          </AvatarWrap>
          <ProfileTextWrap>
            <View>
              <NameTag>Username</NameTag>
              <Property>{username}</Property>
            </View>
            <View>
              <NameTag>Name</NameTag>
              <Property>{fullName}</Property>
            </View>
            <View>
              <NameTag>Area</NameTag>
              <Property>{area}</Property>
            </View>
            <View>
              <NameTag>Position</NameTag>
              <Property>{position}</Property>
            </View>
            <View>
              <NameTag>Mainclub</NameTag>
              <Property>{clubName}</Property>
            </View>
          </ProfileTextWrap>
        </ProfileWrap>

        <TouchableOpacity onPress={onPress}>
          <EditProfileBtn>
            <EditProfileBtnText>Edit Profile</EditProfileBtnText>
          </EditProfileBtn>
        </TouchableOpacity>
      </ProfileContainer>

      {/*Joined club*/}
      <View style={{ flex: 1 }}>
        <Text style={{ marginVertical: 12, paddingLeft: 14, fontSize: 18, fontWeight: 'bold' }}>Joined Club</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => alert("move ClubDetails")}
            >
              <View style={{ alignItems: 'center', backgroundColor: "white", borderRadius: 10, padding: 10, margin: 5 }}>
                <Image
                  source={require('../../data/ImgTest/1ars.jpg')}
                  style={{ width: 90, height: 90, borderRadius: 100, margin: 5 }}
                />
                <Text style={{ width: 85, overflow: 'hidden' }} numberOfLines={1}>arsenal</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => alert("move ClubDetails")}
            >
              <View style={{ alignItems: 'center', backgroundColor: "white", borderRadius: 15, padding: 10, margin: 5 }}>
                <Image
                  source={require('../../data/ImgTest/2bar.jpg')}
                  style={{ width: 90, height: 90, borderRadius: 100, margin: 5 }}
                />
                <Text style={{ width: 85, overflow: 'hidden' }} numberOfLines={1}>fcBarcelona</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => alert("move ClubDetails")}
            >
              <View style={{ alignItems: 'center', backgroundColor: "white", borderRadius: 15, padding: 10, margin: 5 }}>
                <Image
                  source={require('../../data/ImgTest/2bar.jpg')}
                  style={{ width: 90, height: 90, borderRadius: 100, margin: 5 }}
                />
                <Text style={{ width: 85, overflow: 'hidden' }} numberOfLines={1}>fcBarcelonafnafabjfba</Text>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    </ScrollView>
  </Container>
);

UserProfile.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
};
export default UserProfile;
