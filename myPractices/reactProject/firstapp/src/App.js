
import './App.css';

function App({hm}) {
  console.log(hm);
  let stl = {
    color:"red",
    fontSize:"50px",
  }
  return (
    <div className="App" style={stl}>
      <h2>Helloo WOrlds</h2>
    </div>
  );
}

export default App;
