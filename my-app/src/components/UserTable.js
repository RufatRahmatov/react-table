import React from 'react';
import './UserTable.scss';

const UserTable = ({ users, deleteUser, handleFileChange }) => {
    return (
        <div className="user-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Function</th>
                        <th>Review</th>
                        <th>Email</th>
                        <th>Employed</th>
                        <th>Profile Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.function}</td>
                            <td>{user.review}</td>
                            <td>{user.email}</td>
                            <td>{user.employed}</td>
                            <td className="file-input-cell">
                                {/* <input className="choose-file" type="file" onChange={(e) => handleFileChange(e, user.id)} /> */}
                                {user.profilePic && <img src={URL.createObjectURL(user.profilePic)} alt="Profile" width="50" height="50" />}
                                <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
