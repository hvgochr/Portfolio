import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

emailjs.init(USER_ID);

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .max(25, 'Name must be at most 25 characters long')
    .nonempty('Name is required'),
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(500, 'Message must be at most 500 characters long')
    .nonempty('Message is required'),
});

const LoadingButton = () => (
  <button className="button button--flex button--loading" id="contact__button" disabled>
    <svg className="button__icon" viewBox="0 0 1024 1024">
      <circle cx="512" cy="512" r="256" stroke="#fff" strokeWidth="32" fill="none" />
      <path
        className="button__icon-path"
        fill="#fff"
        d="M512 128a384 384 0 1 0 384 384A384 384 0 0 0 512 128zm0 640a256 256 0 1 1 256-256 256 256 0 0 1-256 256z"
      />
    </svg>
    <span className="button__text">Loading</span>
  </button>
);

const SuccessButton = () => (
  <button className="button button--flex button--success" id="contact__button" disabled>
    <svg className="button__icon" viewBox="0 0 1024 1024">
      <path
        className="button__icon-path"
        fill="#fff"
        d="M512 128a384 384 0 1 0 384 384A384 384 0 0 0 512 128zm192.5 256.5L448 633.8l-128.5-128.5-64.3 64.3L448 762.4l320.8-320.8-64.3-64.3z"
      />
    </svg>
    <span className="button__text">Sent</span>
  </button>
);

const ErrorButton = () => (
  <button className="button button--flex button--error" id="contact__button" disabled>
    <svg className="button__icon" viewBox="0 0 1024 1024">
      <path
        className="button__icon-path"
        fill="#fff"
        d="M512 128a384 384 0 1 0 384 384A384 384 0 0 0 512 128zm192.5 256.5L448 633.8l-128.5-128.5-64.3 64.3L448 762.4l320.8-320.8-64.3-64.3z"
      />
      <path
        className="button__icon-path"
        fill="#fff"
        d="M448 320l128.5 128.5-128.5 128.5 45.3 45.3L622.2 448 512 337.8 402.8 448l28.5 28.5z"
      />
    </svg>
    <span className="button__text">Error</span>
  </button>
);

const Contact = () => {
  const [buttonState, setButtonState] = useState('idle');

  const {
    register, 
    handleSubmit, 
    formState: {errors},
  } = useForm({resolver: zodResolver(contactSchema)});

  const onSubmit = (data) => {
    setButtonState('loading');
    setTimeout(() => {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, data)
      .then((result) => {
        setButtonState('success');
        console.log(result.text);
      }, (error) => {
        setButtonState('error');
        console.log(error.text);
      });
    }, 2000);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setButtonState('idle');
    }, 60000);
    return () => clearTimeout(timeoutId);
  }, [buttonState]);

  let buttonComponent;
  switch (buttonState) {
    case 'loading':
      buttonComponent = <LoadingButton/>;
      break;
    case 'success':
      buttonComponent = <SuccessButton/>;
      break;
    case 'error':
      buttonComponent = <ErrorButton/>;
      break;
    default:
      buttonComponent = (
        <button type="submit" id="contact__button" className="button button--flex">
          <svg className="button__icon" viewBox="0 0 24 24">
            <path
              className="button__icon-path"
              fill="#fff"
              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L9,13.6L6.7,11.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3,3c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l10-10C20.1,5.3,20.1,4.7,19.7,4.3z"
            />
          </svg>
          <span className="button__text">Send</span>
        </button>
      );
  }

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                charrade.hugo@gmail.com
              </span>

              <a
                href="mailto:charrade.hugo@gmail.com"
                className="contact__button" target="_blank" rel="noreferrer"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-twitter contact__card-icon"></i>

              <h3 className="contact__card-title">Twitter</h3>
              <span className="contact__card-data">@Hugochr__</span>

              <a
                href="https://twitter.com/messages/compose?recipient_id=2617038066"
                className="contact__button" target="_blank" rel="noreferrer"
              >
                DM me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me !</h3>
          <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Enter your name"
                {...register('name')}
              />
              {errors.name && (
                <div className="contact__form-error">{errors.name.message}</div>
              )}
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">E-mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                {...register('email')}
              />
              {errors.email && (
                <div className="contact__form-error">{errors.email.message}</div>
              )}
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Content</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter your query/request here"
                {...register('message')}
              ></textarea>
              {errors.message && (
                <div className="contact__form-error">{errors.message.message}</div>
              )}
            </div>
            {buttonComponent}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;