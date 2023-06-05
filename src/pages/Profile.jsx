import Header from '../components/Header/Header';
import ProfileAccount from '../components/ProfileAccount/ProfileAccount';

const Profile = () => {
  return(
    <>
      <Header />
      <main>
        <h1 className='main__title'>Профайл</h1>
        <ProfileAccount />
      </main>
    </>
  )
}

export default Profile
