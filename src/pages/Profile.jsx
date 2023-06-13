import Header from '../components/Header/Header';
import ProfileAccount from '../components/ProfileAccount/ProfileAccount';

const Profile = ({width}) => {
  return(
    <>
      <Header  width={width} />
      <main className='main'>
        <h1 className='main__title'>Профайл</h1>
        <ProfileAccount />
      </main>
    </>
  )
}

export default Profile
