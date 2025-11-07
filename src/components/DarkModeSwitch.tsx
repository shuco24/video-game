import styles from "./DarkModeSwitch.module.css";

interface Props {
  checked: boolean;
  onChange: () => void;
}

export default function DarkModeSwitch({ checked, onChange }: Props) {
  return (
    <label className={styles.wrapper}>
      <div className={styles.toggle}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className={styles.slider} />
      </div>
      <span>Dark Mode</span>
    </label>
  );
}
