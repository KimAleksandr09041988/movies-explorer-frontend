import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import { login } from "../utils/Auth";

const Signin = () => {
  const handleLogin = async(email, password) => {
    try {
      await login(email, password);
    } catch (error) {
      console.log(error)
    }
  }

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
