import styles from './Card.module.css';

function Card(props) {
  const { player, onSelectPlayer } = props;

  const clickHandler = () => {
    onSelectPlayer(player.id);
  };

  return (
    <button type="button" onClick={clickHandler} className={styles.card}>
      <img className={styles.image} src={player.image} alt="" />
      <h3>{player.name}</h3>
    </button>
  );
}

export default Card;
