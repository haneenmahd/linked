import { PayPalLinkContainer } from "./PayPalLink.styles";
import { PayPalLinkProps } from "./PayPalLink.types";

export function PayPalLink(props: PayPalLinkProps) {
  return (
    <PayPalLinkContainer href={`https://paypal.com/paypalme/${props.payPalUserName}`}>
      {(props.text && props.text) || "Fund me"}
    </PayPalLinkContainer>
  );
}
