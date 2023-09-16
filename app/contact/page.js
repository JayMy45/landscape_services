'use client';

import React from 'react';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { serviceData } from "../data/serviceData";

export default function Contact() {


    // loading state for submit button
    const [loading, setLoading] = useState(false);


    // notify functions to display toast messages
    const notifySuccess = () => {
        toast.success('Email sent successfully');
    };

    const notifyError = () => {
        toast.error('Failed to send email');
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            message: event.target.message.value,
        };
        console.log(data);
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log('response worked');

            // reset form
            event.target.name.value = '';
            event.target.email.value = '';
            event.target.phone.value = '';
            event.target.message.value = '';

            // display toast message when email is sent successfully
            notifySuccess();
        }
        if (!response.ok) {
            setLoading(false);
            console.log('Error sending message');

            // display toast message when email fails to send
            notifyError();
        }
    }

    return (
        <>
            <section className="h-full md:px-10 md:pt-10">
                <form>
                    <div className="">
                        <div className="w-full border-b border-black dark:border-slate-100 mb-10 p-2">
                            <h2 className="uppercase font-bold text-2xl">Contact Us</h2>
                        </div>

                        <div className="grid grid-col-1 gap-7">
                            <div className="mx-auto">
                                <h2 className="text-xl dark:text-slate-100">Get in Touch</h2>
                            </div>
                            {/* Name */}
                            <div className="p-1 border  border-slate-800 dark:border-slate-100 rounded-sm w-11/12 md:w-2/4 mx-auto">
                                <input
                                    id='name'
                                    className="text-stone-100 p-3 w-full bg-transparent"
                                    type="text"
                                    minLength={2}
                                    maxLength={150}
                                    placeholder="Name"
                                    autoComplete="off"
                                />
                            </div>

                            {/* Phone */}
                            <div className="p-1 border  border-slate-800 dark:border-slate-100 rounded-sm w-11/12 md:w-2/4 mx-auto">
                                <input
                                    id='phone'
                                    className="text-stone-100 p-3 w-full bg-transparent"
                                    type="text"
                                    minLength={7}
                                    maxLength={15}
                                    placeholder="Phone"
                                />
                            </div>

                            {/* Email */}
                            <div className="p-1 border  border-slate-800 dark:border-slate-100 rounded-sm w-11/12 md:w-2/4 mx-auto">
                                <input
                                    id='email'
                                    className="text-stone-100 p-3 w-full bg-transparent"
                                    required
                                    type="email"
                                    minLength={5}
                                    maxLength={150}
                                    autoComplete="off"
                                    placeholder="Email"
                                />
                            </div>

                            {/* Message */}
                            <div className="p-1 mb-5 md:mb-0 border  border-slate-800 dark:border-slate-100 rounded-sm w-11/12 md:w-2/4 mx-auto">
                                <textarea
                                    id="message"
                                    className="text-stone-100 w-full p-3 bg-transparent"
                                    placeholder="Leave a message..."
                                    name="message"
                                    rows="4"
                                    minLength={10}
                                    maxLength={500}
                                />
                            </div>
                            <div className="mx-auto hidden md:block">
                                <h2>Add On Services</h2>
                            </div>
                            <section className="mx-auto pl-16 hidden md:block">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {serviceData.map(({ id, name }) => (
                                        name === "Mowing" || name === "Trimming"
                                            ? <div key={id} className=""> {/* Adding a key prop using the id */}
                                                <input type="checkbox" id={id} name={name} value={id} checked />
                                                <label htmlFor={id} className="text-xs ml-1" >{name}</label>
                                            </div>
                                            : <div key={id} className=""> {/* Adding a key prop using the id */}
                                                <input type="checkbox" id={id} name={name} value={id} />
                                                <label htmlFor={id} className="text-xs ml-1" >{name}</label>
                                            </div>
                                    ))}
                                </div>
                            </section>

                            <div className="flex justify-center mb-7 md:mt-7">
                                <button
                                    // disabled={loading}
                                    className="bg-slate-700 dark:bg-slate-500 rounded-lg py-2 px-7 shadow-2xl w-fit">
                                    <h2 className="uppercase text-slate-200 text-lg font-bold">Submit</h2>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section >
        </>
    )
}