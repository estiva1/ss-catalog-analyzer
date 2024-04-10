import React, { useState } from "react";
import { Box, Divider, Stack } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

//import type { RuleGroupType } from 'react-querybuilder';
import { QueryBuilder } from "react-querybuilder";
import { fields } from "./fields";
import "react-querybuilder/dist/query-builder.scss";

import CustomModal from "../modal/custom-modal.component";

import { ChooseVendorsModalContainer, Heading, StickDivider, StyledButton } from "./choose-vendors-modal.styles.js";
import "./choose-vendors-modal.styles.scss";
import { QueryBuilderAntD } from "@react-querybuilder/antd";

const initialQuery = { combinator: "and", rules: [] };

const ChooseVendorsModal = ({ open, onClose, data }) => {
  const [query, setQuery] = useState(initialQuery);

  return (
    <CustomModal open={open} onClose={onClose} cornerPlacement>
      <ChooseVendorsModalContainer>
        <Stack spacing="20px" alignItems="center">
          <Heading>Filter view Builder</Heading>
          <StickDivider />
        </Stack>

        <Stack spacing="16px" width="100%">
          <QueryBuilderAntD>
            <QueryBuilder fields={fields} query={query} onQueryChange={setQuery} />
          </QueryBuilderAntD>
        </Stack>

        <Stack direction="row" gap="16px" justifyContent="end">
          <StyledButton variant="text" size="large" onClick={onClose}>
            Cancel
          </StyledButton>
          <StyledButton
            variant="contained"
            size="large"
            endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: "1.125rem !important" }} />}
          >
            Create New Filter View
          </StyledButton>
        </Stack>
      </ChooseVendorsModalContainer>
    </CustomModal>
  );
};

export default ChooseVendorsModal;
