function ProfileCard(props) {
  return (
    <div className="d-flex justify-content-center gap-3">
    <div className="card p-3 shadow" style={{ width: "18rem" }}>
      <h3>{props.name}</h3>
      <p>Role: {props.role}</p>
      <p>City: {props.city}</p>
      
    </div>
    <div className="card p-3 shadow" style={{ width: "18rem" }}>
      <h3>{props.name1}</h3>
      <p>Role: {props.role1}</p>
      <p>City: {props.city1}</p>
      
    </div>
    <div className="card p-3 shadow" style={{ width: "18rem" }}>
      <h3>{props.name2}</h3>
      <p>Role: {props.role2}</p>
      <p>City: {props.city2}</p>
      
    </div>
    </div>
  );
}

export default ProfileCard;