import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { TouchableOpacity, Image } from "react-native";
import styled from "styled-components"
import colors from '../../../colors';

const View = styled.View`
`;
const Text = styled.Text`
`;
const Container = styled.View`
  padding-vertical: 10px;
`;
const ClubInfoWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 15px;
`;
const ClubEmblemWrap = styled.View`
  flex-direction: row;
  width: 260px;
  height: 50px;
`;
const LabelWrap = styled.View`
  padding-left: 10px;
  width: 200px;
`;
const LabelText = styled.Text`
  font-size: 10px;
  color: ${props =>
    props.homeAwayColor ? props.homeAwayColor : props.theme.yellow};
`;
const ClubNameText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const AttendWrap = styled.View`
  align-items: center;
  justify-content: center;
`;
const AttendBtn = styled.View`
  width: 80px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.blueColor};
`;
const BtnText = styled.Text`
  color: ${(props) => props.theme.white};
  align-items: center;
`;
const EntryWrap = styled.View`
  flex-direction: row;
  padding-top: 5px;
  padding-horizontal: 15px;
`;
const EntryText = styled.Text`
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;

export default class FeedMatchBoxItem extends React.Component {

  render() {
    const {
      askMatchOnPress,
      matchDetailsOnPress,
      matchClubEmblem,
      homeAway,
      homeAwayColor,
      clubName,
      entryBtnOnPress,
      entryNavigationOnPress,
      entry,
      entryAvatar
    } = this.props;
    return (
      <Container>

        <ClubInfoWrap>
          <TouchableOpacity onPress={askMatchOnPress}>
            <ClubEmblemWrap>
              <View>
                <TouchableOpacity onPress={matchDetailsOnPress}>
                  <Image
                    source={matchClubEmblem}
                    style={{ width: 45,  height: 45, borderRadius: 100 }}
                  />
                </TouchableOpacity>
              </View>

              <LabelWrap>
                <LabelText homeAwayColor={homeAwayColor}>{homeAway}</LabelText>
                <ClubNameText numberOfLines={1}>{clubName}</ClubNameText>
              </LabelWrap>
            </ClubEmblemWrap>
          </TouchableOpacity>

          <AttendWrap>
            <TouchableOpacity onPress={entryBtnOnPress}>
              <AttendBtn>
                <BtnText>참석</BtnText>
              </AttendBtn>
            </TouchableOpacity>
          </AttendWrap>
        </ClubInfoWrap>

        <TouchableOpacity onPress={entryNavigationOnPress}>
          <EntryWrap>
            <EntryText><Text>{entry}</Text> Entry</EntryText>
            <View style={{ paddingRight: 3 }}>
              <Image
                source={entryAvatar}
                style={{ width: 25, height: 25, borderRadius: 100 }}
              />
            </View>
            <View style={{ paddingRight: 3 }}>
              <Image
                source={entryAvatar}
                style={{ width: 25, height: 25, borderRadius: 100 }}
              />
            </View>
          </EntryWrap>
        </TouchableOpacity>
      </Container>
    );
  }
}

FeedMatchBoxItem.propTypes = {
  onPress: PropTypes.func,
  clubDetailOnPress: PropTypes.func,
  profileImg: PropTypes.number,
  homeAway: PropTypes.string.isRequired,
  homeAwayColor: PropTypes.string,
  clubName: PropTypes.string,
  entryNavigationOnPress: PropTypes.func,
  entry: PropTypes.string,
};
