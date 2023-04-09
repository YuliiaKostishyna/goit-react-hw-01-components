import './TransactionHistory.css'
import PropTypes from "prop-types"; 
const TransactionHistory = ({items} ) => {

    return (
<table className="transaction-history">
          <thead>
            <tr> 
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
          {items.map((tabl, index) => {
     return (<tr key = {tabl.id} style={{backgroundColor: index %2 === 1 || '#f0f0f0'}}> 
             <td>Invoice{tabl.type}</td>
             <td>125{tabl.amount}</td>
             <td>USD{tabl.currency}</td>
           </tr>)
           })}
            </tbody>
        </table>
    )  
}
TransactionHistory.propTypes = {
  
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, type:PropTypes.string.isRequired, amount: PropTypes.string.isRequired, currency: PropTypes.string.isRequired}))
}
export default TransactionHistory;