import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Image, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import styled from "styled-components"
import colors from "../../../colors";

import SetSportBox from "../form/SetSportBox";

import FeedDateLocationSection from "../items/FeedDateLocationSection";
import FeedMatchBoxItem from "../items/FeedMatchBoxItem";
import Reply from "./Reply";
import FeedMatchTest from "../items/FeedMatchTest";

const View = styled.View`
`;
const Text = styled.Text`
`;
const ProfileWrap = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px 15px;
`;
const ProfileImgBtn = styled.View`
  padding-right: 10px;
`;
const ProfileTextWrap = styled.View`
  justify-content: center;
`;
const ProfileUserNameText = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;
const ProfileUserAreaText = styled.Text`
  font-size: 13px;
`;
const BodyTextWrap = styled.Text`
  padding-top: 10px;
  padding-horizontal: 15px;
`;
const ReplyWrap = styled.View`
  background-color: ${(props) => props.theme.whiteSmoke};
`;

const FeedPost = ({
    onPress,
    username,
    area,
    bodyImg,
    bodyText,
    askMatchOnPress,
    matchDetailsOnPress,
    entryNavigationOnPress,
    hits
  }) => {
  return (
    <View>
      {/*Profile info*/}
      <ProfileWrap>
        <TouchableOpacity onPress={onPress}>
          <ProfileImgBtn>
            <Image
              source={require('../../data/ImgTest/dddd.jpg')}
              style={{ width: 50, height: 50, borderRadius: 100 }}
            />
          </ProfileImgBtn>
        </TouchableOpacity>
        <ProfileTextWrap>
          <ProfileUserNameText>{username}</ProfileUserNameText>
          <ProfileUserAreaText>{area}</ProfileUserAreaText>
        </ProfileTextWrap>
      </ProfileWrap>
      {/*Content*/}
      <View>
        <Image
          style={{ flex: 1, height: 180, width: null }}
          source={require('../../data/ImgTest/bbbb.jpg')}
        />
        <BodyTextWrap>
          <Text>{bodyText}</Text>
        </BodyTextWrap>
      </View>

      <View>
        <FeedDateLocationSection
          icon="clock"
          topText="Dec 29, 2019, SUN"
          bottomText="PM 02:00 - PM 06:00"
        />
        <FeedDateLocationSection
          icon="map-pin"
          topText="양키스타디움"
          bottomText="1 E 161 St, The Bronx, NY 10451 USA"
        />
      </View>
      {/*Match section*/}
      <View style={{ backgroundColor: colors.grey01 }}>
        <FeedMatchBoxItem
          askMatchOnPress={askMatchOnPress}
          matchDetailsOnPress={matchDetailsOnPress}
          matchClubEmblem={require('../../data/ImgTest/2bar.jpg')}
          homeAway="Home"
          homeAwayColor={colors.darkGreyColor}
          clubName="F.C. Barcelona"
          entry="20"
          entryBtnOnPress={() => alert("엔트리등록")}
          entryNavigationOnPress={entryNavigationOnPress}
          entryAvatar={require('../../data/ImgTest/ffff.jpg')}
        />
        <FeedMatchBoxItem askMatchOnPress={askMatchOnPress} matchDetailsOnPress={matchDetailsOnPress} matchClubEmblem={require('../../data/ImgTest/1ars.jpg')} homeAway="Away" clubName="Arsenal" entry="16" entryAvatar={require('../../data/ImgTest/ffff.jpg')} entryBtnOnPress={() => alert("엔트리등록")} entryNavigationOnPress={entryNavigationOnPress} />
        <FeedMatchTest askMatchOnPress={askMatchOnPress} matchDetailsOnPress={matchDetailsOnPress} matchClubEmblem={require('../../data/ImgTest/ffff.jpg')} homeAway="Away" entry="" entryBtnOnPress={() => alert("엔트리등록")} entryNavigationOnPress={entryNavigationOnPress} />
      </View>
      {/*Bottom*/}
      <View style={{ flex: 1, paddingTop: 10, paddingLeft: 15 }}>
        <Text style={{ fontSize: 12 }}><Text>{hits}</Text>  Hits</Text>
        <Text note style={{ color: 'grey', fontSize: 12 }}>PM 5 : 20, Jan 15, 2019</Text>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingLeft: 15 }}>
        <TouchableOpacity onPress={() => alert("reply")}>
          <Feather name="message-circle" size={30} style={{ paddingRight: 15 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("share")}>
          <Feather name="share-2" size={30} />
        </TouchableOpacity>
      </View>
      <ReplyWrap>
        <Reply
          avatar={require('../../data/ImgTest/cccc.jpg')}
          username="son"
          onPress={onPress}
        />
      </ReplyWrap>
    </View>
  );
};

export default FeedPost;
