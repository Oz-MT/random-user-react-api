import axios from "axios";
import { useState, useEffect } from "react";
import "./App.scss";
import Card from "./components/Card";
const url = "https://randomuser.me/api/";

const App = () => {
  const [user, setUser] = useState("");
  const users = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    users()
  }, [])
  return (
    <div className="container">
      <div>
        {user && <Card user={user} />}
      </div>
      <button className="card-button" onClick={users} >Random User</button>
    </div>
  );
};

export default App;
