import { useState , useEffect } from "react";

export function ChaiMenu(){
    const [menu,setMenu] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/menu`)
            .then((response) => response.json())
            .then((data) => setMenu(data))
            .catch((error) => console.error("error fetching menu", error));
    }, []);

    return (
        <>
        <h2>Chai Menu</h2>
        {menu ? (
            <ul>
                {menu.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        ) : (
            <p>Loading menu...</p>
        )}
        </>
    );
}