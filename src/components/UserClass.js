import React from "react";

//Class based Component
class UserClass extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        login: "Default"
      },
    };
    console.log(this.props.ddName1 + "Child Constructor");
  }
async componentDidMount(){
  // API called
  const data = await fetch("https://api.github.com/users/mak-more");
  const json = await data.json();

  this.setState({
    userInfo:json,
  })

  console.log(json);
  console.log(this.props.ddName1 + "Child Component Did Mount")
}

componentDidUpdate(){
  console.log(this.props.ddName1 + "Child Component Did Update")
}

componentWillUnmount(){
  console.log(this.props.ddName1 + "Child Component Will Unmount")
}

  render () {
    const {ddName1, ddName2} = this.props;
    const {count} = this.state;
    const {name, login, url} = this.state.userInfo;
    // debugger;
    console.log(this.props.ddName1 + "Child Render");
    
    return (
      <div className="user-card">
        <dl>
          <dt>
          <button onClick={() => {
            this.setState({
              count: this.state.count + 1,
            })
          }}>Counter</button>

          </dt>
          <dd>{count}</dd>
        </dl>
        <dl>
          <dt>Name</dt>
          <dd>{name}</dd>
        </dl>
        <dl>
          <dt>Login</dt>
          <dd>{login}</dd>
        </dl>
        <dl>
          <dt>URL</dt>
          <dd>{url}</dd>
        </dl>
      </div>
    )
  }
}

export default UserClass;