import styled from "styled-components";

export const CrmCardContainer = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 14px 10px 10px 10px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.12);
`;

export const CrmCardHeader = styled.div`
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CrmCardContent = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  gap: 16px;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
  justify-content: space-between;
`;

export const Contacts = styled.div`
  display: block;

  :nth-child(1) {
    margin-right: 10px;
  }

  @media (min-width: 960px) and (max-width: 1190px), (min-width: 600px) and (max-width: 690px), (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    :nth-child(1) {
      margin-right: 0;
    }
  }
`;

export const VendorLogo = styled.img`
  min-width: 34px;
  width: 34px;
  min-height: 34px;
  height: 34px;
`;

export const VendorFallback = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 34px;
  width: 34px;
  min-height: 34px;
  height: 34px;
  border-radius: 10px;
  background: #b3e3ff;
`;

export const VendorFallbackLogo = styled.span`
  min-width: 24px;
  min-height: 24px;
  width: 24px;
  height: 24px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='40' height='41' fill='none'%3e%3cpath fill='%23fff' d='M24.444 12.722h2.223v3.89h-2.223v-3.89Z'/%3e%3cpath fill='%23fff' d='M31.667 13.278v11.111c0 .306-.25.556-.556.556H20a.557.557 0 0 1-.556-.556V13.278c0-.306.25-.556.556-.556h3.333v4.445c0 .305.25.555.556.555h3.333c.306 0 .556-.25.556-.555v-4.445h3.333c.306 0 .556.25.556.556ZM17.778 25.5H20v3.889h-2.222V25.5Z'/%3e%3cpath fill='%23fff' d='M25 26.056v11.11c0 .306-.25.556-.556.556h-11.11a.557.557 0 0 1-.556-.555V26.056c0-.306.25-.556.555-.556h3.334v4.444c0 .306.25.556.555.556h3.333c.306 0 .556-.25.556-.556V25.5h3.333c.306 0 .556.25.556.556Zm6.111-.556h2.222v3.889h-2.222V25.5Z'/%3e%3cpath fill='%23fff' d='M38.333 26.056v11.11c0 .306-.25.556-.555.556H26.667a.557.557 0 0 1-.556-.555V26.056c0-.306.25-.556.556-.556H30v4.444c0 .306.25.556.555.556h3.334c.305 0 .555-.25.555-.556V25.5h3.334c.305 0 .555.25.555.556Z'/%3e%3cpath fill='%23fff' d='M38.061 13.356 20.283 2.8a.547.547 0 0 0-.566 0L1.939 13.356a.554.554 0 1 0 .567.955l1.383-.822v23.678c0 .305.25.555.555.555h5c.306 0 .556-.25.556-.555V19.389h8.333v-6.111c0-.917.75-1.667 1.667-1.667h11.11c.917 0 1.667.75 1.667 1.667v11.667h3.333V13.489l1.383.822a.551.551 0 0 0 .761-.194.554.554 0 0 0-.194-.761ZM22.778 9.389h-5.556a.557.557 0 0 1-.555-.556c0-.305.25-.555.555-.555h5.556c.305 0 .555.25.555.555 0 .306-.25.556-.555.556Z'/%3e%3c/svg%3e");
`;

export const VendorName = styled.span`
  color: #000;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.875rem;
`;

export const Label = styled.span`
  color: #1565d8;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.875rem;
`;

export const Value = styled(Label)`
  color: #4e5969;
`;

export const RegularText = styled.span`
  color: #4e5969;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.875rem;
  letter-spacing: 0.00438rem;
`;
