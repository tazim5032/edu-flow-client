import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutUs = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    { id: 1, title: "History", subtitle: "Our Journey So Far", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend suscipit sem, ut ultrices sapien aliquam quis. Donec condimentum tempor mauris, ac feugiat nisi venenatis vitae." },
    { id: 2, title: "Mission", subtitle: "What We Aim For", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend suscipit sem, ut ultrices sapien aliquam quis. Donec condimentum tempor mauris, ac feugiat nisi venenatis vitae." },
    { id: 3, title: "Vision", subtitle: "Our Future Goals", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend suscipit sem, ut ultrices sapien aliquam quis. Donec condimentum tempor mauris, ac feugiat nisi venenatis vitae." },
    { id: 4, title: "Team", subtitle: "Meet Our Team", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend suscipit sem, ut ultrices sapien aliquam quis. Donec condimentum tempor mauris, ac feugiat nisi venenatis vitae." }
  ];

  return (
    <div className="grid grid-cols-2 justify-center justify-items-center gap-8 mb-[250px] pt-24">
      {items.map(item => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
          className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer"
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">{item.subtitle}</p>
          </div>
        </motion.div>
      ))}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="max-w-md rounded-lg overflow-hidden shadow-lg m-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-2xl mb-2 text-center">
                {items.find(item => item.id === selectedId).title}
              </div>
              <p className="text-gray-700 text-lg">
                {items.find(item => item.id === selectedId).content}
              </p>
            </div>
            <div className="px-6 py-4 flex justify-end">
              <button
                onClick={() => setSelectedId(null)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutUs;
