import React from "react";
import toast from "react-hot-toast";
import { Spinner } from "../components/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { API } from "../global/FetchAPI";
import { reset } from "../global/TodoSlice";
import { TodoForm } from "../containers/TodoForm";
import { CardItem } from "../components/CardItem";

export const Todos = () => {
    const [showModal, setShowModal] = React.useState(false);
    const dispatch = useDispatch();

    const { loading, isError, todos } 
        = useSelector((state) => state.todos);
    
    React.useEffect(() => {
        if (isError) {
            toast.error(isError.message);
        };
        dispatch(API.FetchAll());
        return () => {
            dispatch(reset());
        };
    }, [isError, dispatch]);

    if (loading) return <Spinner />;

    return (
        <main className="mx-auto container py-20 px-6">
            <section 
                className="grid 
                    sm:grid-cols-1 
                    md:grid-cols-2 
                    lg:grid-cols-3 
                    xl:grid-cols-4 
                    gap-6">
                {todos && todos.length > 0 ? (
                    todos.map((todo, index) => <CardItem key={index} todo={todo} />)
                ) : (
                    <p className="text-center text-3xl text-slate-700">
                        No tickets yet! Click on the bottom of the page
                    </p>
                )}
            </section>
            <section 
                className="fixed z-30 
                    bottom-6 
                    right-10 
                    bg-gray-700 
                    p-2 
                    rounded-full 
                    hover:bg-gray-600 
                    cursor-pointer">
                <span 
                    className="text-[#fff]" 
                    onClick={() => setShowModal(true)}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M12 4v16m8-8H4" 
                    />
                </svg>
                </span>
            </section>
            {showModal && <TodoForm setShowModal={setShowModal} />}
        </main>
    );
};


