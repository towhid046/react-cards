import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = [
        {id: 1, name: 'Rizwan', avater: 'https://i.ibb.co/tbCBnF3/img-avatar.png', bio: 'I am Rizwan and I am a software engineer.'},
        {id: 2, name: 'Rakib', avater: 'https://i.ibb.co/tbCBnF3/img-avatar.png', bio: 'I am Rakib and I am a software engineer.'},
        {id: 3, name: 'Rkzeebon', avater: 'https://i.ibb.co/tbCBnF3/img-avatar.png', bio: 'I am Rkzeebon and I am a software engineer.'},
        {id: 4, name: 'Hazzaz', avater: 'https://i.ibb.co/tbCBnF3/img-avatar.png', bio: 'I am Hazzaz and I am a software engineer.'},
        {id: 5, name: 'Shihab Ali', avater: 'https://i.ibb.co/tbCBnF3/img-avatar.png', bio: 'I am Shihab Ali and I am a software engineer.'},
        {id: 5, name: 'Din Islam', avater: 'https://i.ibb.co/tbCBnF3/img-avatar.png', bio: 'I am Din Islam and I am a software engineer.'},
        {id: 6, name: 'Shihab Ali', avater: 'https://i.ibb.co/tbCBnF3/img-avatar.png', bio: 'I am Shihab Ali and I am a software engineer.'},
        {id: 7, name: 'Rashedul Islam', avater: 'https://i.ibb.co/tbCBnF3/img-avatar.png', bio: 'I am Rashedul Islam and I am a software engineer.'}, 
        {id: 7, name: 'Yeasin Arafat', avater: 'https://i.ibb.co/tbCBnF3/img-avatar.png', bio: 'My name is Yeasin Arafat'}
      ];
      
    return (
        <>  
            <h1 className="cards_heading">User information (Task no:2)</h1>
            <div className="users_cards">
                {
                    users.map(user => <User user = {user} />)
                }
            </div>
        </>
    )
}

export default Users;