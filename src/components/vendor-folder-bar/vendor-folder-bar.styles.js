import styled from "styled-components";

export const VendorFolderBarFrame = styled.div`
  position: relative;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  background: #f8fafb;
`;

export const VendorFolderBarContainer = styled.div`
  display: flex;
  padding: 16px;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 1;
  border-radius: 8px;
  border: 1px solid #00a3ff;
  background: #fff;
  box-shadow: 4px 4px 25px 0px rgba(111, 213, 246, 0.25);
  //overflow-x: hidden;
`;

export const VendorFolderBarThumbnail = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 1px;
  left: 32px;
  padding: 2px 8px;
  width: 131px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid ${({ $option }) => ($option === "Wholesale" ? "#1565D8" : "#009C34")};
  background-color: ${({ $option }) => ($option === "Wholesale" ? "#E8F0FB" : "#E5F5EB")};
`;

export const ThumbnailText = styled.span`
  //font-family: Titillium Web;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 0.75rem;
  letter-spacing: 0.02rem;
  text-align: center;
  color: ${({ $option }) => ($option === "Wholesale" ? "#1565D8" : "#009C34")};
`;
