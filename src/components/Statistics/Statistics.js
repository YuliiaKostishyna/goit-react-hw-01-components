const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
            {title ? <h2 className="title">{title}</h2>:null}
  

  <ul className="stat-list">
    {stats.map((data) => {
      return  (<li className="item" key = {data.id}>
        <span className="label">{data.label}</span>
        <span className="percentage">{data.percentage}</span>
      </li>)
    })}
    
  </ul>
</section>
    )
}
export default Statistics;