import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer, toast } from "react-toastify";

const defaultList = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
const setLocalStorage = (items) => {
    localStorage.setItem("list", JSON.stringify(items));
};
const App = () => {
    const [items, setItems] = useState(defaultList);

    const addItem = (newItemName) => {
        const newItems = [
            ...items,
            {
                name: newItemName,
                completed: false,
                id: nanoid(),
            },
        ];
        setItems(newItems);
        setLocalStorage(newItems);
        toast.success("item added to the list");
    };

    const editItem = (itemId) => {
        const newItems = items.map((item) => {
            if (item.id === itemId) {
                const newItem = { ...item, completed: !item.completed };
                return newItem;
            }
            return item;
        });

        setItems(newItems);
        setLocalStorage(newItems);
    };
    const removeItem = (itemId) => {
        const newItems = items.filter((item) => item.id !== itemId);
        setItems(newItems);
        setLocalStorage(newItems);
    };
    return (
        <section className="section-center">
            <ToastContainer position="top-center" />
            <Form addItem={addItem} />
            <Items items={items} removeItem={removeItem} editItem={editItem} />
        </section>
    );
};

export default App;
