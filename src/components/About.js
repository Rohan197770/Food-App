import { useContext, useState } from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      {/* <h1>Welcome to about component/page</h1> */}
      <User name={"Rohan Anand"} />
      {/* <UserClass name={"Rohan Anand From Class"} location={"Bhopal"}/> */}
      <h1 className="text-lg font-semibold">LoggedInUser:{loggedInUser}</h1>
    </div>
  );
};
export default About;
