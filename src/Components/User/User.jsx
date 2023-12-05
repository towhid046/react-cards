import './User.css'
const User = (props) => {
  const {avater, name, bio } = props.user;
  return (
    <>
      <div className="single_card">
        <img src={avater} alt="" />
        <h2>Name: {name}</h2>
        <p>Bio: {bio}</p>
      </div>
    </>
  );
};

export default User;
