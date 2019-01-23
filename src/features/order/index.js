import React from 'react'

import fetchApi from '../../modules/fetch-api'

class Order extends React.Component {
  state = {
    order: null
  }

  componentDidMount() {
    fetchApi("get", `https://student-example-api.herokuapp.com/v1/orders/${this.props.id}`)
      .then(json => {
        this.setState({
          order: json
        })
      })
  }

  renderOrder() {
    const { name, email, order_items } = this.state.order

    return <div>
      <h3>Order info</h3>
      <div>Name: {name}</div>
      <div>Email: {email}</div>

      <h4>Items</h4>
      <ul>
        {
          order_items && order_items.map(item => {
            const { product, qty, product: { name, image, price } } = item
            return <li>
              <img src={image} width={32} />
              {name}
              ({qty} @ ${price} = ${parseFloat(qty) * parseFloat(price)})
            </li>
          })
        }
      </ul>
    </div>
  }

  render() {
    const { order } = this.state
    return <div>
      {
        order ? this.renderOrder() : "Loading...."
      }
    </div>
  }
}

export default Order


// import React from 'react'
// import fetchApi from '../../modules/fetch-api'

// class Order extends React.Component {
//   state = {
//     order: null
//   }

//   //Below i am fetching order info based off the unique id of each order, json the data and setting it to state
//   componentDidMount() {
//     fetchApi('get', `https://student-example-api.herokuapp.com/v1/orders${this.props.id}`)
//       .then(json => {
//         this.setState({
//           order: json
//         })
//       })
//   }

//   renderOrder() { // destructure the following params we will be pulling from our order API
//     const { name, email, order_items } = this.state.order
//     return <div>
//       <h3>Order Summary</h3>
//       <div>Name: { name } </div>
//       <div> Email: { email }</div>
//       <h4>Items</h4>
//       <ul>
//         {
//           order_items && order_items.map( item => {
//             const { product, qty, product: { name, image, price } } = item
//             return <li>
//               <img src={ image } width={32} />
//               { name }
//               ({qty} @ ${price} = ${parseFloat(qty) * parseFloat(price)})
//             </li>
//           })
//         }
//       </ul>
//     </div>
//   }

//   render() {
//     const{ order } = this.state //destructure order key from this.state
//     return <div>
//       {
//         order ? this.renderOrder() : "Loading..."
//       }
//     </div>
//   }
// }

// export default Order