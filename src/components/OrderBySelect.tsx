import styles from "./OrderBySelect.module.css";

interface Props {
  options: { id: string; text: string }[];
  onChange: (value: string) => void;
}

function OrderBySelect({ options, onChange }: Props) {
  return (
    <select
      className={`form-select ${styles.orderSelect}`}
      onChange={(e) => onChange(e.target.value)}
      disabled={options.length === 0}
    >
      <option value="">Order by...</option>
      {options &&
        options.map((o) => (
          <option value={o.id} key={o.id}>
            {o.text}
          </option>
        ))}
    </select>
  );
}

export default OrderBySelect;
