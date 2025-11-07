import type { Genre } from "../models";
import styles from "./GenresList.module.css";

interface Props {
  genresList: Genre[];
  onSelect: (id: number) => void;
  title: string;
}

function GenresList({ genresList, onSelect, title }: Props) {
  return (
    <div>
      <h2 className="mb-4">{title}</h2>
      <div className="list list-row block">
        {genresList?.length > 0 &&
          genresList.map((genre) => (
            <div
              className={"list-item flex " + styles.genreRow}
              data-id={genre.id}
              key={genre.id}
              onClick={() => onSelect(genre.id)}
            >
              <img className={styles.genreImage} src={genre.image} />
              <div>{genre.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default GenresList;
