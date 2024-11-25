import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { name, email, message } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/alisher17/google_sheets/VZykiBmdCCVrZKaP?tabId=Sheet-one",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setData({ ...data, name: "", email: "", message: "" });
    } catch (err) {
      console.error(Error);
    }
  };

  return (
    <div className="form">
      <form className="card shadow-lg mt-5  p-5 form" onSubmit={handleSubmit}>
        <h3 className="text-center mb-5">Feedback form</h3>
        <div form-group>
          <label htmlFor="naem">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            autoComplete="off"
            value={email}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            rows="5"
            className="form-control"
            value={message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="submit"
            className="btn btn-primary"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default App;
