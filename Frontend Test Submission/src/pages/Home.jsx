import { useState } from "react";

function Home() {
  let [data, setData] = useState("");
  let [display, setDisplay] = useState("");
  let handleDisplay = () => {
    setDisplay(data);
    setData("");
  };
  return (
    <main>
      <div className="hero">
        <h2>Welcome to Url Shortener</h2>
        <p>Here you can short your Url.</p>
      </div>
      <div className="url">
        <h2>Enter the url</h2>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button onClick={handleDisplay}>Change</button>
        <h4>{display}</h4>
      </div>
    </main>
  );
}
export default Home;
