import {useState, useEffect} from "react";

const useInventories = () =>{
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-wave-46370.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, []);
    return [inventories, setInventories]
}

export default useInventories;