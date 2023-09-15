import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function AddItemForm({ item, setItem, handleSubmit }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '300px', padding: '30px', border: '1px solid #ccc', borderRadius: '10px' }}>
                <h2 style={{ textAlign: 'center' }}>Add New Item</h2>
                {Object.keys(item).map((key) => (
                    <label key={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                        <input
                            type="text"
                            name={key}
                            value={item[key]}
                            onChange={(e) => setItem({ ...item, [key]: e.target.value })}
                            style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
                        />
                    </label>
                ))}
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
}

export default AddItemForm;
