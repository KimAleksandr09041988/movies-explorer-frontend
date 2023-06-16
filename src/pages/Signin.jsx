import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import { login } from "../utils/Auth";

const Signin = ({handleLogin}) => {

  return (
    <>
    <Header />
    <main className="main">
      <Login handleLogin={handleLogin} />
    </main>
    </>
  )
}

export default Signin;
