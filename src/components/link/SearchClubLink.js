import React from "react";
import styled from "styled-components";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "../../../styles"
import { withNavigation } from "react-navigation";

const Container = styled.TouchableOpacity``;

export default withNavigation(({ navigation }) => (
  <Container onPress={() => navigation.navigate("SearchClub")}>
    <TouchableOpacity
      title="searchClub"
    >
      <Feather name="search" size={25} style={{ paddingRight: 20, color: styles.sacramento }} />
    </TouchableOpacity>
  </Container>
));
