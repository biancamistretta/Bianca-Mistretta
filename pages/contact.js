import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add form submission logic here (e.g., sending data to a backend)
    };

    return (
        <div className="page">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
