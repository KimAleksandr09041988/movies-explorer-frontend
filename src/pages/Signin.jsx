import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import { login } from "../utils/Auth";

const Signin = ({handleLogin, errorLogin}) => {

  return (
    <>
    <Header />
    <main className="main">
      <Login
        handleLogin={handleLogin}
        errorLogin={errorLogin}
      />
    </main>
    </>
  )
}

export default Signin;
