import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const url = "https://reqres.in/api/users?page=2";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.data) {
          const listItem = response.data.data;
          const listItemArray = listItem.map((something) => {
            return something;
          });
          setData(listItemArray);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1 className="logo">
        <span>REQRES</span>.in
      </h1>
      <button className="create-user-btn">Create User</button>
      {data.map((item) => {
        return (
          <div className="container">
            <img className="avatar" src={item.avatar} />
            <div className="info">
              <h2>
                {item.first_name} {item.last_name}
              </h2>
              <p>Algorithm Developer at NASA</p>
              <small>{item.email}</small>
            </div>
            <div class="icon">
              <i class="fa-solid fa-pen-to-square"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        );
      })}
      <footer className="footer">
        &copy; Zed's {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
