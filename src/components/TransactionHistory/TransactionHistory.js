const TransactionHistory = ({items}) => {

    return (
<table class="transaction-history">
          <thead>
            <tr> 
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
          {items.map((tabl) => {
     return (<tr key = {tabl.id}> 
             <td>Invoice{tabl.type}</td>
             <td>125{tabl.amount}</td>
             <td>USD{tabl.currency}</td>
           </tr>)
           })}
            </tbody>
        </table>
    )  
}
export default TransactionHistory;