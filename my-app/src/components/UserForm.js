import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.scss';

const UserForm = ({ addUser }) => {
    const [newUser, setNewUser] = useState({
        id: Date.now(),
        name: '',
        function: '',
        review: '',
        email: '',
        employed: '',
        profilePic: null,
    });
    const navigate = useNavigate();

    const handleNewFileChange = (event) => {
        const file = event.target.files[0];
        setNewUser({ ...newUser, profilePic: file });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser(newUser);
        navigate('/user-table');
    };

    return (
        <div className="user-form">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={newUser.name} onChange={handleInputChange} required />
                <input type="text" name="function" placeholder="Function" value={newUser.function} onChange={handleInputChange} required />
                <input type="text" name="review" placeholder="Review" value={newUser.review} onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="Email" value={newUser.email} onChange={handleInputChange} required />
                <input type="date" name="employed" placeholder="Employed Date" value={newUser.employed} onChange={handleInputChange} required />
                <input classname="choose-file" type="file" onChange={handleNewFileChange} required />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default UserForm;
