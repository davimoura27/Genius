import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export function Play() {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/game");
  };

  return (
    <div className={styles.play}>
      <button onClick={handlePlayClick}> Play </button>
    </div>
  );
}
