"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import SnackbarComponent from "@/components/Toast";
import Seo from "@/components/SEO";
import { seoData } from "@/data/SeoData";

const emailAddress = "coneixementindia@gmail.com";
const emailStyle = { color: "blue" };

const ContactUs = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const contactForm = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = async (data, event) => {
    event.preventDefault();
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        contactForm.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      );
      setSnackbar({
        open: true,
        message: "Your message was sent successfully.",
        severity: "success",
      });
      reset();
    } catch (error) {
      console.error("FAILED...", error);
      setSnackbar({
        open: true,
        message: "Message not sent. Please try again later.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () =>
    setSnackbar((prev) => ({ ...prev, open: false }));

  const InputField = ({
    label,
    id,
    type,
    placeholder,
    error,
    registerOptions,
  }) => (
    <div>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        className={`w-full rounded-lg border-gray-200 p-3 text-sm ${error ? "border-red-500" : ""}`}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, registerOptions)}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );

  return (
    <>
      <Seo page={"contact"} customData={seoData.contact} />
      <SnackbarComponent
        message={snackbar.message}
        severity={snackbar.severity}
        open={snackbar.open}
        onClose={handleCloseSnackbar}
      />
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
                    <MdEmail className="text-orange-400 size-5 mr-1" />
                    {emailAddress}
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-gray-200 p-8 shadow-lg lg:col-span-3 lg:p-12">
                <h1 className="text-2xl font-bold pb-4">Get in Touch</h1>
                <form
                  ref={contactForm}
                  className="space-y-4"
                  onSubmit={handleSubmit(sendEmail)}
                >
                  <InputField
                    label="Name"
                    id="name"
                    type="text"
                    placeholder="Name"
                    error={errors.name}
                    registerOptions={{ required: "Name is required" }}
                  />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <InputField
                      label="Email"
                      id="email"
                      type="email"
                      placeholder="Email address"
                      error={errors.email}
                      registerOptions={{
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      }}
                    />
                    <InputField
                      label="Phone"
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      error={errors.phone}
                      registerOptions={{
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Phone number must be 10 digits",
                        },
                      }}
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className={`w-full rounded-lg border-gray-200 p-3 text-sm ${errors.message ? "border-red-500" : ""}`}
                      id="message"
                      placeholder="Message"
                      rows="8"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm">
                        {errors.message.message}
                      </p>
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
};

export default ContactUs;
