import React from 'react';
import styled from 'styled-components';

const ContactPageWrapper = styled.div`
    background-image: linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%);

    & > h1 {
        text-align: center;
        margin: 0;
        padding: 20px;
    }
`

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;

    & > input, textarea {
        margin: 10px auto;
        width: 50vw;
        height: 3vh;
        border: 0;
        border-radius: 5px;
    }

    & > textarea {
        height: 10vh;
        resize: vertical;
    }

    & > button {
        border-radius: 7px;
        height: 3vh;
        width: 10vh;
        align-self: center;
        margin-top: 10px;
        margin-bottom: 80px;
    }

    & > button:hover {
    background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
    }
`

const ContactPage = () => {
    return (
        <ContactPageWrapper id="contact">
            <h1>Contact</h1>
            <FormWrapper action="https://formspree.io/mgumban@cybermgumban.com" method="POST">
                <input placeholder="Your Name..." name="name" required/>
                <input type="email" placeholder="Your Email..." name="name" required/>
                <input placeholder="Subject..." name="name" required/>
                <textarea placeholder="Message..." name="name" required/>
                <button>Submit</button>
            </FormWrapper>
        </ContactPageWrapper>
    )
}

export default ContactPage;