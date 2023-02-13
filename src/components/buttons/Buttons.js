import styles from "./Buttons.module.css";

export default function BtnKaiAnimation(props) {
    return (
        <button className={styles.btnKaiAnimation}>
            {props.children}
        </button>
    );
}


