import React, { Component } from 'react'
import { PropTypes } from 'react'
import { connect } from 'react-redux'
import {createStore} from 'redux'

 const fileReducer = function(state, action){
    if (action.type === 'newUser'){
        return state+1;
    } 
}

const store = createStore(fileReducer, 0);

store.subscribe(() => {
    console.log("store changed",store.getState());
})

store.dispatch({type: "newUser", payload: 1});

class InvoicePreview extends Component {
  static propTypes = {
    invoice: PropTypes.object
  }

  mapObject (object, callback) {
    return Object.keys(object).map(function (key) {
      return callback(key, object[key])
    })
  }


  render () {
    return (
     <div className='site-wrap'>
        <section className='section'>
          <div className='grid'>
            <div className='grid__col--3'>
              <h4>Invoice</h4>
              <strong>{invoice.number}</strong>
            </div>

            <div className='grid__col--3'>
              <h4>Client</h4>
              <strong>{invoice.client}</strong>
            </div>

            <div className='grid__col--3'>
              <h4>Project</h4>
              <strong>{invoice.projectName}</strong>
            </div>

            <div className='grid__col--3 text-right'>
              <h4>Date</h4>
              <strong>{invoice.date}</strong>
            </div>
          </div>
        </section>

        <hr/>

        <section className='section' style={{minHeight: '220px'}}>
        {this.mapObject(invoice.items, function (key, value) {
          return (
            <div className='grid item' key={key}>
              <div className='grid__col--8'>
                <strong>{invoice.items[key].name || 'Item'}</strong>
                <p>{invoice.items[key].description || 'Description'}</p>
              </div>
              <div className='grid__col--4 text-right'>
                <strong><Money amount={invoice.items[key].price}/></strong>
              </div>
            </div>
            )
        })}
        </section>

        <hr/>

        <section className='section'>
          <div className='grid grid--middle'>
            <div className='grid__col--grow'>
              <h4>Subtotal</h4>
              <strong><Money amount={subTotal()}/></strong>
            </div>

            {tpsDisplay}
            {tvqDisplay}

            {amountReceived}

            <div className='grid__col--grow text-right'>
              <h4>Balance Due</h4>
              <strong className='text-accent'><Money amount={invoice.balance || total()}/></strong>
            </div>
          </div>
        </section>

        <hr/>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    invoice: state.invoice
  }
}

export default connect(mapStateToProps)(InvoicePreview)