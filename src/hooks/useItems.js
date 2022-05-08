import { useEffect, useState } from "react";


const useItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = `https://mighty-beach-81550.herokuapp.com/items`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    return [items, setItems];
};

export default useItems;