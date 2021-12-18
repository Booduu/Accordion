import React, { useState, useCallback } from "react";
import ItemList from "./ItemList";
import "./List.module.scss";

const services = [
  {
    id: 1,
    title: "Intégration Web",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions"
  },
  {
    id: 2,
    title: "Web Design",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions"
  },
  {
    id: 3,
    title: "Gestion de projet",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions"
  },
  {
    id: 4,
    title: "Responsiv Design",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions"
  },
  {
    id: 5,
    title: "Maintenance",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions"
  },
  {
    id: 6,
    title: "Référencement Naturel",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions"
  }
];

const List = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  // Performance render concerns
  const handleClick = useCallback((id) => {
    setSelectedItem((prev) => {
      // If you click on the current open , all items li have to be closed.
      if (id === prev) {
        return 0;
      }
      return id;
    });
  }, []);

  // No Performance render concerns
  /*  
  const handleClick = (id) => {
    setSelectedItem((prev) => {
      // If you click on the current open , all items li have to be closed.
      if (id === prev) {
        return 0;
      }
      return id;
    });
  };
  */

  return (
    <nav>
      <ul>
        {services.map((el) => (
          <ItemList
            key={el.title}
            data={el}
            id={el.id}
            open={el.id === selectedItem}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default List;
