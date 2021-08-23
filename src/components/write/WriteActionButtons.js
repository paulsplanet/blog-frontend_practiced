import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const WriteActionButtonsBlock = styled.div`

`;

const StyledButton = styled(Button)`

`;

const WriteActionButtons = ({ onCancel, onPublish }) => {
    return (
        <WriteActionButtonsBlock>
            <StyledButton cyan onClick={onPublish}>Submit this Post</StyledButton>
            <StyledButton onClick={onCancel}>Cancel</StyledButton>
        </WriteActionButtonsBlock>
    )
};

export default WriteActionButtons;