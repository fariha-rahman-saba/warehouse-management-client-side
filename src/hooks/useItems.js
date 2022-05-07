import { useEffect, useState } from "react";


const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = `http://localhost:4000/items`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return [items, setItems];
};

export default useItems;