import React, { useState } from 'react';

function SignupForm() {

      const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        pharmacyName: '',
      });
    
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
      };
    
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <form onSubmit={handleSubmit} style={{ width: '300px', padding: '30px', border: '1px solid #ccc', borderRadius: '10px' }}>
            <h2 style={{ textAlign: 'center' }}>Pharmacy Store Signup</h2>
            <label>
              Name:
              <input type="text" name="name" value={form.name} onChange={handleChange} style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={form.email} onChange={handleChange} style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={form.password} onChange={handleChange} style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />
            </label>
            <button type="button" class="btn btn-primary btn-lg" style={{ width: '100%', padding: '10px' }}>button</button>
            <small>already registerd?</small><button type="button" class="btn btn-link">login</button>

          </form>
        </div>
  );
}

export default SignupForm;
