import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";

export const TodoForm = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name.trim().length === 0) {
            toast.error("Enter a task before adding", {
                duration: 4000,
                position: "top-right",
            });
            return;
        }
        dispatch(API.Create({name, description}));
        setName("");
        setDescription("");
        setShowModal(false);
    };

    return (
        <main 
            className="fixed z-50 inset-0 
                    overflow-y-auto bg-gray-900 
                    bg-opacity-75">
                <section 
                    className="flex items-center 
                        justify-center 
                        min-h-screen px-4">
                    <aside className="w-full max-w-lg 
                            px-10 py-8 mx-auto 
                            bg-white shadow-xl">
                        <section 
                            className="max-w-md mx-auto space-y-6">
                            <form onSubmit={handleSubmit}>
                                <h2 
                                    className="text-2xl 
                                        font-bold"
                                    >Add your task
                                </h2>
                                <p className="my-4 opacity-70">
                                    Please enter the fields!
                                </p>
                                <hr className="my-6" />
                                <label 
                                    className="uppercase 
                                        text-sm font-bold 
                                        opacity-70"
                                    >Name
                                </label>
                                {/* INPUTS GO HERE */}
                                <input 
                                    className="p-3 mt-2 mb-4 
                                        w-full bg-slate-200 
                                        rounded border-2 
                                        border-slate-200 
                                        focus:outline-none"
                                    placeholder="Please enter a Name"
                                    type="text" 
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                                <label 
                                    className="uppercase 
                                        text-sm font-bold 
                                        opacity-70"
                                    >Description
                                </label>
                                <textarea 
                                    className="p-3 mt-2 
                                        mb-4 w-full 
                                        bg-slate-200 rounded 
                                        border-slate-200 
                                        focus:outline-none"
                                    placeholder="Please enter a Description"
                                    type="text"
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                />
                                <aside className="flex space-x-4">
                                    <input 
                                        className="py-3 px-6 my-2 
                                            bg-gray-700 
                                            text-white 
                                            font-medium 
                                            rounded
                                            hover:bg-gray-600
                                            cursor-pointer
                                            ease-in-out
                                            duration-300"
                                        type="submit" 
                                        value="Add"
                                    />
                                    <input 
                                        className="py-3 px-6 my-2 
                                            bg-emerald-500 
                                            text-white 
                                            font-medium rounded 
                                            cursor-pointer
                                            ease-in-out 
                                            duration-300"
                                        type="button" 
                                        value="Cancel" 
                                        onClick={() => setShowModal(false)}
                                    />
                                </aside>
                            </form>
                        </section>
                    </aside>
                </section>
        </main>
    );
};


