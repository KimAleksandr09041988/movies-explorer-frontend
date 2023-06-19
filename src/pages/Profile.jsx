import Header from '../components/Header/Header';
import ProfileAccount from '../components/ProfileAccount/ProfileAccount';

const Profile = ({width, loggedIn, setCurrentUser}) => {

  return(
    <>
      <Header  width={width} loggedIn={loggedIn} />
      <main className='main'>
        <h1 className='main__title'>Профайл</h1>
        <ProfileAccount setCurrentUser={setCurrentUser} />
      </main>
    </>
  )
}

export default Profile
