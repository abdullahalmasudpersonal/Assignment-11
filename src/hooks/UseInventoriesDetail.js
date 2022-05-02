import { useEffect, useState } from "react";

const useInventoriesDetail = inventoriesId => {
    const [inventories, setInventories] = useState({});

    useEffect(() => {
        const url = `https://tranquil-wave-46370.herokuapp.com/inventories/${inventoriesId}`;
        console.log(url);

        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [inventoriesId]);
    return [inventories];
}

export default useInventoriesDetail;