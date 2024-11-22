import { useEffect, useState } from "react";

// const User = (props) => {
const User = ({ddName1, ddName2}) => { // Alternate for "props"
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState([]);

  useEffect (() => {
    // API called
    fetchData();
  // }, [count]);
  }, []);

  useEffect (() => {
    const timer = setInterval(() => {
      console.log("Set Interval");
    }, 1000);
    console.log("User useEffect");
    return () => {
      clearInterval(timer);
      console.log("User useEffect Return");
    };
  }, []);
  
  console.log("User Render");

  const fetchData = async () => {
    const data = await fetch ("https://api.github.com/users/mak-more");
    const json = await data.json();

    setUserInfo(json);
  };

  return (
    <div className="user-card">
    <dl>
        <dt>
          <button onClick={()=>{
            setCount(count + 1);
          }}>Counter</button>
        </dt>
        <dd>{count}</dd>
      </dl>
      <dl>
        <dt>Name</dt>
        <dd>{userInfo.name}</dd>
      </dl>
      <dl>
        <dt>Login</dt>
        <dd>{userInfo.login}</dd>
      </dl>
      <dl>
        <dt>URL</dt>
        <dd>{userInfo.url}</dd>
      </dl>
    </div>
  )
}

export default User;