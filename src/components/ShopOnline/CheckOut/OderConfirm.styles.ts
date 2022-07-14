import { styled } from '@mui/material/styles';

export const OderConfirmSt = styled('div')`
  padding: 24px 16px;
  margin-top: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  color: #212228;

  border: 1px solid #f46e09;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px;
`;
export const ConfirmOderItemWrap = styled('div')`
  width: 100%;
  padding: 6px 0;
  display: inline-flex;
  justify-content: space-between;

  span {
    display: block;
    font-size: 14px;
  }
`;

export const ConfirmRequirest = styled('span')`
  display: block;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-style: italic;
`;

export const ConfirmTextst = styled('span')`
  display: block;
  margin: 0;
  padding: 0;
  font-size: 14px;
  text-align: center;
`;

export const ConfirmDeliveryInfo = styled('div')`
  margin-top: 30px;
  margin-right: auto;
  width: fit-content;
`;
export const ConfirmDeliveryText = styled('span')`
  display: block;
  margin: 0;
  padding: 0;
  font-size: 14px;
`;
export const ConfirmDeliveryTime = styled(ConfirmDeliveryText)`
  color: red;
  font-weight: bold;
`;

export const ConfirmDeliverySectionHeader = styled('h5')`
  margin: 16px 0;
`;
