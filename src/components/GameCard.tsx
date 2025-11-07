import type { Platform } from "../models";
import type Game from "../models/Game";
import styles from "./GameCard.module.css";

interface Props {
  game: Game;
  platforms: Platform[];
}

function GameCard({ game, platforms }: Props) {
  return (
    <div className={styles.card} key={game.id}>
      <img className={styles.image} src={game.image} alt={game.name} />
      <div className={styles.gameInformation}>
        <div className={"mb-3 " + styles.platformScoreRow}>
          <div className={styles.platforms}>
            {game.platforms?.map((p) => (
              <div key={p.id} className={styles.platformRow}>
                {p.name}
              </div>
            ))}
          </div>
          <div className={styles.score}>{game.score}</div>
        </div>
        <div className={styles.row}>{game.name}</div>
      </div>
    </div>
  );
}

export default GameCard;
