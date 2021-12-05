import React from "react";
import styles from "./ItemList.module.scss";
import Arrow from "../../../../assets/images/arrow.png";

const ItemList = ({ data, handleClick, open }) => {
  return (
    <li
      key={data.title}
      className={styles.item}
      onClick={() => handleClick(data.id)}
    >
      <div className={styles["title-line"]}>
        <div>0{data.id}.</div>
        <div>{data.title}</div>
        <div>
          <img
            src={Arrow}
            alt="picto"
            style={{
              transform: open
                ? "rotate(90deg) translateY(5px)"
                : "rotate(0deg) translateY(5px)",
              transition: open ? "0.4s" : "1s"
            }}
          />
        </div>
      </div>

      <div className={styles.content} data-close={!open}>
        <p>{data.content}</p>
      </div>
    </li>
  );
};

export default ItemList;
