function ProfileCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center",
        width: "220px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        margin: "10px",
        backgroundColor: "#ffffff"
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />
      <h2>{props.name}</h2>
      <p>{props.role}</p>
      <p>{props.email}</p>
      <p>{props.location}</p>
      <button
        onClick = {() => window.open(props.contact, "_blank")}
        >view button</button>
    </div>
  );
}
 
export default ProfileCard;
