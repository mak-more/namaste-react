import { useEffect, useState } from "react";

// const User = (props) => {
const User = ({ddName1, ddName2}) => { // Alternate for "props"
  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState([]);

  useEffect (() => {
    // API called
    fetchData();
  }, [count]);

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
    </div>
  )
}

export default User;