import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Student Portal</h1>
      <h2>Login Page</h2>
      <form className="login-form">
        <input type="text" placeholder="Enter Student ID" required />
        <input type="password" placeholder="Enter Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
