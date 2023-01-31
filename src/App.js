import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
function App() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        setusers(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div className="body">
        {users.map((el) => (
          <Card className="box" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {el.username}
              </Card.Subtitle>
              <Card.Text>{el.company.name}</Card.Text>
              <Card.Link
                style={{ textDecoration: "none", color: "white" }}
                href="#"
              >
                {el.website}
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
