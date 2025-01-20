export default function PlanetStats({ stats }) {
    return (
      <div className="stats">
        {stats.map((stat, index) => (
          <div className="stat__div" key={index}>
            <h4 className="planet__stat-title">{stat.title}</h4>
            <h3 className="planet__stat-value">{stat.value}</h3>
          </div>
        ))}
      </div>
    );
  }