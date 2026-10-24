const Card = ({ user }) => {
  const { name, age, role, location, bio, img, skills = [], stats = [] } = user;

  return (
    <div className="card">
      <img src={img} alt={name} loading="lazy" />

      <h1>
        {name}
        {age && <span className="age">, {age}</span>}
      </h1>
      <span className="role">{role}</span>
      <span className="location">{location}</span>

      <p>{bio}</p>

      {skills.length > 0 && (
        <ul className="tags">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      )}

      {stats.length > 0 && (
        <dl className="stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dd>{stat.value}</dd>
              <dt>{stat.label}</dt>
            </div>
          ))}
        </dl>
      )}

      <button>View Profile</button>
    </div>
  );
};

export default Card;