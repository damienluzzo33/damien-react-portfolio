import React, { useState } from 'react';

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export default function Contact() {
	const [ userEmail, setUserEmail ] = useState('');
	const [ userName, setUserName ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState('');

	const handleInputChange = (event) => {
		// Getting the value and name of the input which triggered the change
		const inputType = event.target.name;
		const inputValue = event.target.value;

		// Based on the input type, we set the state of either email, username, and password
		if (inputType === 'userEmail') {
			setUserEmail(inputValue);
		} else if (inputType === 'userName') {
			setUserName(inputValue);
		} else if (inputType === 'message') {
			setMessage(inputValue);
		}
	};

    const onBlurFunction = (event) => {
        event.preventDefault();

        if (!validateEmail(userEmail)) {
			setErrorMessage('Email is invalid');
			return;
		}

		if (!userName) {
			setErrorMessage(`You need to include your name!`);
			return;
		}

		if (!message) {
			setErrorMessage("You can't leave your message blank!");
            return;
		}
    }



	const handleFormSubmit = (event) => {
		event.preventDefault();

		if (!validateEmail(userEmail)) {
			setErrorMessage('Email is invalid');
			return;
		}

		if (!userName) {
			setErrorMessage(`You need to include your name!`);
			return;
		}

		if (!message) {
			setErrorMessage("You can't leave your message blank!");
            return;
		}

		setUserName('');
		setUserEmail('');
		setMessage('');
		setErrorMessage('');
	};

	return (
		<section id="contact" className="contact">
			<h2 className="contact-title">Contact</h2>
			<form id="contactForm" onSubmit={handleFormSubmit}>
				<div>
					<label>Email </label>
					<input
						value={userEmail}
						name="userEmail"
						onChange={handleInputChange}
						type="email"
						placeholder="Email"
                        onBlur={onBlurFunction}
					/>
				</div>
				<div>
					<label>Name </label>
					<input
						value={userName}
						name="userName"
						onChange={handleInputChange}
						type="text"
						placeholder="Name"
                        onBlur={onBlurFunction}
					/>
				</div>
				<div>
					<label>Message </label>
					<textarea
						value={message}
						name="message"
						onChange={handleInputChange}
						placeholder="Type your message here..."
                        onBlur={onBlurFunction}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
			{errorMessage && (
				<div>
					<p className="errorText">{errorMessage}</p>
				</div>
			)}
			<address className="contact-links">
				<a href="mailto:damienluzzo33@gmail.com" target="_blank" rel="noreferrer">
					Email
				</a>
				<a href="./assets/images/Damien Luzzo Full-Stack Developer Resume.pdf" target="_blank" rel="noreferrer">
					Resume
				</a>
				<a href="https://github.com/damienluzzo33" target="_blank" rel="noreferrer">
					GitHub
				</a>
				<a href="https://www.linkedin.com/in/damienluzzo/" target="_blank" rel="noreferrer">
					LinkedIn
				</a>
				<a href="https://twitter.com/DamienLuzzo" target="_blank" rel="noreferrer">
					Twitter
				</a>
			</address>
		</section>
	);
}
