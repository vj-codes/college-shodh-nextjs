"use client"

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
function ContactUs() {

  const emailAddress = "coneixementindia@gmail.com";
  const emailStyle = {
    color: "blue",
  };

  const contactForm = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = async(data, event) => {
    event.preventDefault();
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        contactForm.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );
      // console.log("Form Data: ", data);
      // console.log('SUCCESS!', result.text);
      reset();
    } catch (error) {
    //   alert("Sorry for the inconvenience. Please email abc@email.com for your query.")
      console.log('FAILED...', error);
    }
  };

  return (
    <>
      <div>
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg text-justify">
                  At the same time, the fact that we are wholly owned and
                  totally independent from manufacturer and other group control
                  gives you confidence that we will only recommend what is right
                  for you.
                </p>

                <div className="mt-8">

                  <p className="mt-2 not-italic text-orange-600 text-left flex items-center pl-40">
                    <MdEmail className="text-orange-400 size-5 mr-1" />{" "}
                    info@collegeshodh.in
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-gray-200 p-8 shadow-lg lg:col-span-3 lg:p-12">
                <h1 className="text-2xl font-bold pb-4">Get in Touch</h1>
                <form ref={contactForm} action="#" className="space-y-4" onSubmit={handleSubmit(sendEmail)}>
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className={`w-full rounded-lg border-gray-200 p-3 text-sm ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      placeholder="Name"
                      type="text"
                      id="name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className={`w-full rounded-lg border-gray-200 p-3 text-sm ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        placeholder="Email address"
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className={`w-full rounded-lg border-gray-200 p-3 text-sm ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Phone number must be 10 digits",
                          },
                        })}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone.message}</p>
                      )}
                  </div>
                </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className={`w-full rounded-lg border-gray-200 p-3 text-sm ${
                        errors.message ? "border-red-500" : ""
                      }`}
                      placeholder="Message"
                      rows="8"
                      id="message"
                      {...register("message", { required: "Message is required" })}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-orange-600 px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;