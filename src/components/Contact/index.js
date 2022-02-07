import React from "react";

export default function Contact() {
  return (
    <div>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-8 is-variable ">
              <div className="column is-two-thirds has-text-left">
                <h1 className="title is-1 contact__title">Contact Me!</h1>
                <p className="is-size-4 contact__subtitle">
                  Send me an email, I will get back to you...Soonish
                </p>
              </div>
              <div className="column is-one-third has-text-left">
                <form
                  action="https://formsubmit.co/dnsarce21@gmail.com"
                  method="POST"
                  className="contact__form"
                >
                  <div className="field">
                    <label htmlFor="" className="contact__label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="contact__input"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="" className="contact__label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="contact__input"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="" className="contact__label">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="_subject"
                      className="contact__input"
                      required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="" className="contact__label">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id=""
                      cols="0"
                      rows="7"
                      className="contact__input"
                      required
                    ></textarea>
                  </div>
                  <div className="control">
                    <button type="submit" className="button contact__button">
                      Send Message
                      <i className="uil uil-message button__icon"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
