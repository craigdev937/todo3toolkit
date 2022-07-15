import React from "react";
import { useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";
import { EditTodo } from "../containers/EditTodo";

export const CardItem = ({ todo }) => {
    const [showEdit, setShowEdit] = React.useState(false);
    const dispatch = useDispatch();

    return (
    <main className="rounded">
        <aside 
            className="w-full 
                h-64 flex flex-col 
                justify-between 
                dark:bg-gray-800 
                bg-white
                dark:border-gray-700 
                rounded-lg
                border 
                border-gray-400
                mb-6 py-5 px-4">
            <section>
                <h4 
                    className="
                        text-gray-800 
                        dark:text-gray-100 
                        font-bold mb-3">
                    {todo.title}
                </h4>
                <p className="
                        text-gray-800
                        dark:text-gray-100 text-sm">
                    {todo.description}
                </p>
            </section>
            {showEdit ? 
                <EditTodo 
                    setShowEdit={setShowEdit} 
                    todo={todo} 
                /> : 
            null}
            <section>
                <aside 
                    className="flex 
                        items-center 
                        justify-between 
                        text-gray-800
                        dark:text-gray-100">
                    <section className="flex space-x-4">
                        <button 
                            className="w-8 h-8 
                                rounded-full 
                                bg-gray-800 
                                dark:bg-gray-100
                                dark:text-gray-800 
                                text-white 
                                flex 
                                items-center
                                justify-center 
                                focus:outline-none 
                                focus:ring-2 
                                focus-offset-2"
                            aria-label="edit note"
                            role="button"
                            onClick={() => setShowEdit(true)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-pencil"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                            </svg>
                        </button>
                        <button
                            className="
                                w-8 h-8 rounded-full 
                                bg-gray-800 
                                dark:bg-gray-100
                                dark:text-gray-800 
                                text-white flex
                                items-center 
                                justify-center 
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-offset-2 
                                focus:ring-black"
                            onClick={() => dispatch(API.Delete(todo.id))}
                            >X
                        </button>
                    </section>
                </aside>
            </section>
        </aside>
    </main>
    );
};


