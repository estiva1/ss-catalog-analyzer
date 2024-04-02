import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";

export const StyledAutocomplete = styled(Autocomplete)`
  .MuiAutocomplete-inputRoot {
    color: ${({ $colorPrimary }) => $colorPrimary};
    font-family: Titillium Web;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 0.875rem;
    flex: 1;

    > fieldset {
      border-color: rgba(0, 0, 0, 0);
    }
  }

  .MuiFormControl-root {
    height: 100%;
  }

  .MuiFormLabel-root {
    color: #78909c;
    font-family: Titillium Web;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 0.875rem;
    padding-top: 1px;
  }
  .MuiAutocomplete-clearIndicator {
    color: #1565d8;
  }
  .MuiAutocomplete-popupIndicator {
    color: #1565d8;
  }
`;

export const PrimaryText = styled.span`
  color: ${({ $colorPrimary }) => $colorPrimary};
  background-color: ${({ $colorSecondary }) => $colorSecondary};
  border: 1px solid ${({ $colorPrimary }) => $colorPrimary};
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.875rem;
  text-transform: capitalize;
  padding: 6px 8px;
  width: 100%;
  text-align: center;
  margin: 0;
`;

export const ListItem = styled.li`
  width: 100%;
  //border-bottom: 1px solid #eef1f5;
`;
