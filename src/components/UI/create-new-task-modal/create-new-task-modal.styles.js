import styled from "styled-components";

export const CraeteNewTaskModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 780px;
  max-width: 95vh;
  padding: 30px;
  padding-right: calc(30px - 0.45rem);
  //align-items: center;
  gap: 30px;
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.h2`
  color: #000;
  text-align: center;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.875rem;
`;

export const SubHeading = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
`;

export const StickDivider = styled.span`
  width: 88px;
  height: 4px;
  border-radius: 2px;
  background: #00a3ff;
`;

export const InfoTextNormal = styled.p`
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
`;

export const InfoTextBig = styled.span`
  font-family: Titillium Web;
  font-size: 1rem;
  font-weight: 600;
  line-height: 20px;
`;

export const SupportingTextGrey = styled.p`
  font-family: Titillium Web;
  color: #c4c4c4;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
`;

export const ActionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #1565d8;
  height: 100%;
`;

export const InputLabel = styled.label`
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.005em;
  text-align: left;
`;

export const BrowseFilesLogo = styled.span`
  min-width: 22px;
  min-height: 22px;
  width: 22px;
  height: 22px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='23' fill='none'%3e%3cpath fill='%2300A3FF' d='m21.935 9.571-.006-.023-3.287-8.353a1.131 1.131 0 0 0-1.078-.797H4.239c-.498 0-.94.331-1.08.809L.084 9.475l-.009.02-.005.024c-.039.143-.05.29-.03.433a2.256 2.256 0 0 0-.006.14v10.72a1.784 1.784 0 0 0 1.782 1.782h18.375c.981 0 1.78-.8 1.784-1.782v-10.72c0-.037 0-.075-.003-.108.012-.143 0-.28-.038-.413Zm-8.666-1.26-.009.46c-.024 1.316-.932 2.2-2.259 2.2-.647 0-1.204-.207-1.605-.603-.402-.395-.621-.946-.633-1.597l-.009-.46h-6.03l2.33-5.663h11.695l2.394 5.664h-5.874Zm-10.987 2.25h4.609c.712 1.673 2.226 2.66 4.113 2.66.987 0 1.904-.275 2.646-.796a4.33 4.33 0 0 0 1.485-1.864h4.585v9.783H2.282V10.56Z'/%3e%3c/svg%3e");
`;
