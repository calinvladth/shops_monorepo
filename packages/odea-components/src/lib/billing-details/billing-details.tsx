import Style from './billing-details.styled';
import {Input} from "../input/input";
import {Button} from "../button/button";
import {FormEvent, useState} from "react";

export function BillingDetails() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
    zip: ''
  });

  const formError = {
    firstName: form.firstName.length === 0,
    lastName: form.lastName.length === 0,
    email: !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email),
    phone: !/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/.test(form.phone),
    city: form.city.length === 0,
    address: form.address.length === 0,
    zip: form.zip.length === 0
  };

  const [formReadOnly, setFormReadOnly] = useState(false);


  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formReadOnly) {
      setFormReadOnly(false)
    } else {
      setFormSubmitted(true);

      // console.log(formError)

      for (const value of Object.values(formError)) {
        if (value) {
          return
        }
      }

      setFormReadOnly(true);
      console.log(form)
    }
  }

  return <Style.Form onSubmit={handleSubmit}>
    <Style.Row>
      <Input value={form.firstName}
             onChange={(e) => setForm({...form, firstName: e.target.value})}
             label="First Name"
             labelError="First name is required"
             error={formError.firstName && formSubmitted}
      />
      <Input value={form.lastName}
             onChange={(e) => setForm({...form, lastName: e.target.value})}
             label="Last Name"
             labelError="Last name is required"
             error={formError.lastName && formSubmitted}
      />
    </Style.Row>
    <Input value={form.email}
           onChange={(e) => setForm({...form, email: e.target.value})}
           label="Email Address"
           labelError="A valid email address is required"
           error={formError.email && formSubmitted}
    />
    <Input value={form.phone}
           onChange={(e) => setForm({...form, phone: e.target.value})}
           label="Phone"
           labelError="A valid phone number is required"
           error={formError.phone && formSubmitted}
    />
    <Input value={form.city}
           onChange={(e) => setForm({...form, city: e.target.value})}
           label="City"
           labelError="City is required"
           error={formError.city && formSubmitted}
    />
    <Input value={form.address}
           onChange={(e) => setForm({...form, address: e.target.value})}
           label="Address" textarea
           labelError="Address is required"
           error={formError.address && formSubmitted}
    />
    <Input value={form.zip}
           onChange={(e) => setForm({...form, zip: e.target.value})}
           label="Zip"
           labelError="Zip is required"
           error={formError.zip && formSubmitted}
    />
    <Style.Row>
      {
        formReadOnly ?
          <Button buttonType="edit">Edit</Button>
          :
          <Button buttonType="success">Save Address</Button>
      }
    </Style.Row>
  </Style.Form>
}
