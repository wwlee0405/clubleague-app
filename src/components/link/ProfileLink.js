import React from "react";
import styled from "styled-components";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "../../../styles";
import { useNavigation } from '@react-navigation/native';

const Container = styled.TouchableOpacity``;

export default function ProfileLink {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate("Profile")}>
      <TouchableOpacity
        title="profile"
      >
        <Feather name="user" size={25} style={{ paddingRight: 10, color: styles.sacramento }} />
      </TouchableOpacity>
    </Container>
  )
}
