// import axios from "axios";
// import { useEffect } from "react";

function App() {
    // const callApi = async () => {
    //     axios.get("/api").then((res) => {
    //         console.log(res.data.test);
    //     });
    // };
    // useEffect(() => {
    //     callApi();
    // }, []);
    return (
        <form onSubmit={onSubmit}>
            <input type="text" required></input>
            <input type="submit"></input>
        </form>
    );
}

const onSubmit = (event) => {
    event.preventDefault();
    //var num = JSON.parse('{"searchNum":1234}');
    const num = { text: event.target[0].value };
    console.log(num);
    fetch("http://localhost:3001/text", {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(num),
    })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
        });
};

export default App;
