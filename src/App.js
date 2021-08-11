import "bootstrap/dist/css/bootstrap.min.css";
import LogInForm from "./components/LogInForm/LogInForm";
import AuthLayout from "./Layout/AuthLayout/AuthLayout";
import "./App.scss";
const img =
  "https://images.unsplash.com/photo-1628326036318-9af1614d6584?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80";
function App() {
  return (
    <div className="App">
      <AuthLayout img={img}>
        <LogInForm></LogInForm>
      </AuthLayout>
    </div>
  );
}

export default App;
