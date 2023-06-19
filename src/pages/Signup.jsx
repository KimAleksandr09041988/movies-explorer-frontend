import Header from "../components/Header/Header";
import Register from "../components/Register/Register";
import { registration } from "../utils/Auth";
import { useState } from "react";


const Signup = () => {
  const [errorApi, setErrorApi] = useState('');

  const handleRegistration = async(email, password, name) => {
    try {
      await registration(email, password, name);
    } catch (error) {
      const data = JSON.stringify(error).replace(/["{:}]/g, '').replace('message', '');
      setErrorApi(data)
    }
  }

  return (
    <>
    <Header />
    <main className="main">
      <Register handleRegistration={handleRegistration} errorApi={errorApi} />
    </main>
    </>
  )
}

export default Signup;
