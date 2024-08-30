import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// Class Component starts here
// class About extends React.Component {
//   constructor(props){
//     super(props);
//     console.log("Parent Constructor");
//   }

//   componentDidMount(){
//     console.log("Parent Component Did Mount")
//   }

//   render(){
//     console.log("Parent Render");
//     return(
//       <div className="container">
//         <h2>About Class Component</h2>
//         <UserClass ddName1={"Black hot drink (Class)"} ddName2={"White cold drink (Class)"} />
//       </div>
//     )
//   }
// }
// Class Component ends here

const About = () => {
  console.log("About Us load");
 return (
  <div className="container mx-auto m-4">
    <h2 className="font-bold text-xl">About Functional Component</h2>
    <div className="grid gap-2 grid-cols-2">
      <div className="">
        <h4 className="font-bold">Functional Component - New Method</h4>
        {/* <User ddName1={"Black hot drink (Function)"} ddName2={"White cold drink (Function)"} /> */}
        <User />
      </div>
      <div className="">
        <h4 className="font-bold">Class Component - Old Method</h4>
        <UserClass ddName1={"UserClass.js file - "} />
      </div>
    </div>
  </div>
 )
}

export default About;