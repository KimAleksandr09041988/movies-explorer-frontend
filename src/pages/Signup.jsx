import Header from "../components/Header/Header";
import Register from "../components/Register/Register";
import { registration } from "../utils/Auth";


const Signup = () => {

  const handleRegistration = async(email, password, name) => {
    try {
      await registration(email, password, name);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Header />
    <main className="main">
      <Register handleRegistration={handleRegistration} />
    </main>
    </>
  )
}

export default Signup;
