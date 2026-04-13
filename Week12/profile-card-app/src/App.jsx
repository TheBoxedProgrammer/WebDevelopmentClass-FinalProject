import ProfileCard from "./components/profileCard";
 
function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Profile Card App</h1>
 
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        <ProfileCard
          name="John Doe"
          role="Frontend Developer"
          image="https://www.clipartmax.com/png/middle/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png"
          email="jDoe@placeholder.com"
          location = "City A, State A"
          contact = "http://google.com"
        />
 
        <ProfileCard
          name="Jane Smith"
          role="UI Designer"
          image="https://www.clipartmax.com/png/middle/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png"
          email= "jSmith@placeholder.com"
          location = "City B, State A"
          contact = "http://google.com"
        />
 
        <ProfileCard
          name="David Lee"
          role="Backend Developer"
          image="https://www.clipartmax.com/png/middle/277-2772093_user-female-skin-type-1-2-icon-avatar-100-x-100-pixel.png"
          email="dLee@placeholder.com"
          location = "City A, State B"
          contact = "http://google.com"
        />
      </div>
    </div>
  );
}
 
export default App;