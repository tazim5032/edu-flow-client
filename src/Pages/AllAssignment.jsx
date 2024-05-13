import axios from "axios";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
//import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

const AllAssignment = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getData()
    }, [])



     const getData = async () => {
        const { data } = await axios(
            `${import.meta.env.VITE_API_URL}/all-assignment`
        )
        setItems(data)
    }
   
    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/all-assignment`)
    //         .then(res => res.json())
    //         .then(data => {
               
    //             setItems(data);
                
    //         });
    // }, []);

    return (
        <div className="">
            <Helmet>
                <title>Assignments</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-12 mx-[2%] sm:mx-[4%] mb-[100px]">
                {
                    items.map(item => <Card
                        key={item._id}
                        item={item}
                        items={items}
                        setItems={setItems}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default AllAssignment;