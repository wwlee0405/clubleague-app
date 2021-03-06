import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import constants from "../../../constants";
import colors from "../../../colors";

const Container = styled.View`
	margin-bottom: 10px;
`;

const TextInput = styled.TextInput`
	width: ${constants.width / 1.7}px;
	padding: 10px;
	background-color: ${(props) => props.theme.clBackgroundColor};
	text-align: center;
	font-size: 20px;
`;

const TextInputField = ({
	placeholder,
	value,
	keyboardType = "default",
	autoCapitalize = "none",
	returnKeyType = "done",
	onChange,
	onSubmitEditing = () => null,
	autoCorrect = true,
}) => (
	<Container>
		<TextInput
			onChangeText={onChange}
			keyboardType={keyboardType}
			returnKeyType={returnKeyType}
			placeholder={placeholder}
			autoCapitalize={autoCapitalize}
			onSubmitEditing={onSubmitEditing}
			autoCorrect={autoCorrect}
			value={value}
		/>
	</Container>
);

TextInputField.propTypes = {
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	keyboardType: PropTypes.oneOf([
		"default",
		"number-pad",
		"decimal-pad",
		"numeric",
		"email-address",
		"phone-pad",
	]),
	autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
	onChange: PropTypes.func.isRequired,
	returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
	onSubmitEditing: PropTypes.func,
	autoCorrect: PropTypes.bool,
};

export default TextInputField;
