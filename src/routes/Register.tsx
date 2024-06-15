import React from 'react'

export default function Register() {
    return (
        <section className='reg-page'>
            <h1>
                <span className='accent-color'>Miku</span> Notes
            </h1>
            <p >Your notes and to-do lists, always at hand.<br></br>
                Simple, fast, <span className='accent-color'>clean.</span></p>
            <form action="">
                <div className="reg-form-container">
                    <div>
                        <i className="fa-solid fa-user"></i>
                        <input type="email" placeholder="Email" name='email' id="email" required />
                    </div>
                    <div>
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Enter Password" name="psw" id="psw" required />
                    </div>
                    <div>
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
                    </div>
                    <button type="submit" className="registerbtn">Sign up</button>
                </div>
            </form>
        </section>
    )
}
