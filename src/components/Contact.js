import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4">Contact us</h1>
      <form>
        <input type="text" className="border border-black p-2 m-2" placeholder="Name"/>
        <input type="text" className="border border-black p-2 m-2" placeholder="Feedback"/>
        <button className="bg-green-100 p-2 m-2 rounded-lg">Submit</button>

      </form>
    </div>
  );
};

export default Contact;
