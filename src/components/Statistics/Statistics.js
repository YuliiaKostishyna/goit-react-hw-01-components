import './Statistics.css'
import PropTypes from "prop-types"; 
const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
            {title ? <h2 className="title">{title}</h2>:null}
  

  <ul className="stat-list">
    {stats.map((data) => {
      return  (<li className="item" key = {data.id} style={{ backgroundColor: getRandomColor() }}>
        <span className="label">{data.label}</span>
        <span className="percentage">{data.percentage}</span>
      </li>)
    })}
    
  </ul>
</section>
    )
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
Statistics.propTypes = {
  title:PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, label:PropTypes.string.isRequired, percentage: PropTypes.number.isRequired}))
}
export default Statistics;