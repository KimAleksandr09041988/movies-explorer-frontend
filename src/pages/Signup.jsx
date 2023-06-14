import Header from "../components/Header/Header";
import Register from "../components/Register/Register";

const Signup = ({handleRegistration}) => {
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
