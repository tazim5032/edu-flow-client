import { useEffect, useState } from 'react';
import Card from './Card';

const HomeCard = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/all-assignment-feature`)
            .then(res => res.json())
            .then(data => {

                setItems(data);

            });
    }, []);
    return (
        <div>
            <h1 className='text-center mt-12 text-4xl'>Featured Assignment</h1>
            <h1 className='text-center mt-2'>Highlighting Outstanding Assignments for Your Inspiration</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 mx-[2%] sm:mx-[4%]">
                {
                    items.slice(0, 6).map(item => <Card
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

export default HomeCard;