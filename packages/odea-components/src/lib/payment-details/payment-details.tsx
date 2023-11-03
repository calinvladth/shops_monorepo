import Style from './payment-details.styled'
import {useState} from "react";
import {Button} from "../button/button";

const OPTIONS = {
  ONLINE: 'online',
  DELIVERY: 'delivery'
}

export function PaymentDetails() {
  const [active, setActive] = useState('')
  return <Style.Container>
    <RowOption text="Online payment - Credit or Debit card"
               onClick={() => setActive(OPTIONS.ONLINE)}
               active={active === OPTIONS.ONLINE}/>

    <RowOption text="Payment on delivery"
               onClick={() => setActive(OPTIONS.DELIVERY)}
               active={active === OPTIONS.DELIVERY}/>

    {
      active && <div>
        <Button buttonType="success" onClick={() => alert('Send data')}>Submit</Button>
      </div>
    }
  </Style.Container>
}

function RowOption({text, onClick, active}: { text: string, onClick: () => void, active: boolean }) {
  return <Style.Row active={active} onClick={onClick}>
    <Style.Text active={active}>{text}</Style.Text>
  </Style.Row>
}


