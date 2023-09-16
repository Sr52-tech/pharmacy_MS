import React, { useState } from 'react';

function AccountPage() {
    const [user, setUser] = useState({
        name: '',
        email: '',
    });

    const handleInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div>
            <h1>Account Page</h1>
            <form>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleInputChange}
                    />
                </label>
                <br/>
                <br/>
                <label>
                    Email 
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                    />
                </label>
            </form>
        </div>
    );
}

export default AccountPage;
