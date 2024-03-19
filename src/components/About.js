import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>Welcome to about component/page</h1>
      <User name={"Rohan Anand(From function"}/>
      <UserClass name={"Rohan Anand From Class"} location={"Bhopal"}/>
    </div>
  );
};
export default About;
