import React from 'react'
import { Field, reduxForm } from 'redux-form'

function CheckoutForm (props) {
  const { handleSubmit } = props//part of redux-form library

  return <div>
    <form onSubmit= { handleSubmit }>
      <div>
        <label htmlFor="order[name]">Your name:</label> <br />
        <Field name="order[name]" component="input" type="text" />
      </div>

      <div>
        <label htmlFor="order[email]">Email:</label> <br />
        <Field name="order[email]" component="input" type="email" />
      </div>

      <div>
        <button type="submit">submit order</button>
      </div>
    </form>
  </div>
}

CheckoutForm = reduxForm({ //redux hire-order/helper function component
  form: 'checkout'
})(CheckoutForm)

export default CheckoutForm