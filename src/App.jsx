import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [openModel, setOpenModel] = useState(false);
  const [postData, setPostData] = useState({
    fName: "hehe",
    lName: "Working",
    email: "Working",
  });

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

  const handlePostData = (postData) => {
    axios.post(url, postData).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      {openModel ? (
        <Modal closeModal={setOpenModel} onSubmit={handlePostData} />
      ) : (
        <div className="App">
          <h1 className="logo">
            <span>REQRES</span>.in
          </h1>
          <button
            className="create-user-btn"
            onClick={() => setOpenModel(true)}
          >
            Create User
          </button>
          <h1 className="mainHeading">List of Software Engineers at NASA</h1>
          {data.map((item) => {
            return (
              <div className="container">
                <img className="avatar" src={item.avatar} />
                <div className="info">
                  <h2>
                    {item.first_name} {item.last_name}
                  </h2>
                  <p>Software Engineer at NASA</p>
                  <small>{item.email}</small>
                </div>
                <div className="icon">
                  <i className="listIcons fa-solid fa-pen-to-square"></i>
                  <i className="listIcons fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            );
          })}
          <footer className="footer">
            &copy; Zed's {new Date().getFullYear()}
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
