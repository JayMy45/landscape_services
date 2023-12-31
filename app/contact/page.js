'use client';

import React, { useEffect } from 'react';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { serviceData } from "../data/serviceData";
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
    // resetCount state to reset checkbox state
    const [resetCount, setResetCount] = useState(0);

    // loading state for submit button
    const [loading, setLoading] = useState(false);

    // checkbox state to track which services are selected
    const [checkedOptions, setCheckedOptions] = useState(new Set())

    // set initial state of checkbox to include Mowing and Trimming
    useEffect(() => {
        const initialSet = new Set();
        // for each service, if name is Mowing or Trimming, add id to initialSet
        serviceData.forEach(({ id, name }) => {
            if (name === "Mowing" || name === "Trimming") {
                initialSet.add(id);
            }
        });

        setCheckedOptions(initialSet);
    }, [resetCount]);



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
            services: Array.from(checkedOptions),
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
            event.target.reset();
            setCheckedOptions(new Set());

            // After successful submission and form reset
            setResetCount(prevCount => prevCount + 1);

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
            <section id='contact' className="h-full p-2 pt-16 md:pb-5 md:px-1 lg:px-10 md:pt-28">
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <div className="w-full border-b border-stone-700 dark:border-slate-100 mb-10 p-2">
                            <h2 className="uppercase font-bold text-stone-700 dark:text-slate-100 text-2xl">Contact Us</h2>
                        </div>

                        <div className="grid grid-col-1 gap-7">
                            <div className="mx-auto">
                                <h2 className="text-xl font-semibold dark:text-slate-100">Get in Touch</h2>
                            </div>
                            {/* Name */}
                            <div className="p-1 border  border-slate-800 dark:border-slate-100 rounded-sm w-11/12 md:w-2/4 mx-auto">
                                <input
                                    id='name'
                                    className="dark:text-stone-100 text-black p-3 w-full bg-transparent"
                                    type="text"
                                    minLength={2}
                                    maxLength={150}
                                    placeholder="Name"
                                    autoComplete="on"
                                />
                            </div>

                            {/* Phone */}
                            <div className="p-1 border  border-slate-800 dark:border-slate-100 rounded-sm w-11/12 md:w-2/4 mx-auto">
                                <input
                                    id='phone'
                                    className="dark:text-stone-100 text-black p-3 w-full bg-transparent"
                                    type="text"
                                    minLength={7}
                                    maxLength={15}
                                    placeholder="Phone"
                                    autoComplete="on"
                                />
                            </div>

                            {/* Email */}
                            <div className="p-1 border  border-slate-800 dark:border-slate-100 rounded-sm w-11/12 md:w-2/4 mx-auto">
                                <input
                                    id='email'
                                    className="dark:text-stone-100 text-black p-3 w-full bg-transparent"
                                    required
                                    type="email"
                                    minLength={5}
                                    maxLength={150}
                                    autoComplete="on"
                                    placeholder="Email"
                                />
                            </div>

                            {/* Message */}
                            <div className="p-1 mb-5 md:mb-0 border  border-slate-800 dark:border-slate-100 rounded-sm w-11/12 md:w-2/4 mx-auto">
                                <textarea
                                    id="message"
                                    className="dark:text-stone-100 text-black w-full p-3 bg-transparent"
                                    placeholder="Leave a message..."
                                    name="message"
                                    rows="4"
                                    autoComplete="off"
                                    minLength={10}
                                    maxLength={500}
                                />
                            </div>
                            <div className="mx-auto hidden md:block">
                                <h2>Add On Services</h2>
                            </div>
                            <section className="mx-auto pl-16">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {serviceData.map(({ id, name }) => (
                                        <div key={id} className="">
                                            <input
                                                onChange={(e) => {
                                                    const copy = new Set(checkedOptions);
                                                    if (copy.has(id)) {
                                                        copy.delete(id);
                                                    } else {
                                                        copy.add(id);
                                                    }
                                                    setCheckedOptions(copy);
                                                }}
                                                type="checkbox"
                                                id={id}
                                                name={name}
                                                value={id}
                                                checked={checkedOptions.has(id)} // Dynamically set the checked state based on whether id is in checkedOptions set
                                            />
                                            <label htmlFor={id} className="text-xs ml-1 capitalize" >{name}</label>
                                        </div>

                                    ))}
                                </div>
                            </section>
                            <div className="flex justify-center mb-7 md:mb-0 md:mt-7">
                                <button
                                    disabled={loading}
                                    className={loading ? "bg-green-700 dark:bg-green-800 bg-opacity-40 dark:bg-opacity-30 rounded-lg py-2 px-7 shadow-2xl w-fit" : "bg-slate-700 dark:bg-slate-500 rounded-lg py-2 px-7 shadow-2xl w-fit"}>
                                    {loading
                                        ? <h2 className="uppercase text-yellow-300 text-xl font-bold">Success!!!</h2>
                                        : <h2 className="uppercase text-slate-100 text-lg font-bold">Submit</h2>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section >
            {/* toast container */}
            <div className='z-11'>
                <ToastContainer
                    position='top-center'
                    autoClose={2000}
                />
            </div>
        </>
    )
}