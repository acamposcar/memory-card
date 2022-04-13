import { useEffect, useState } from 'react';
import Card from './Card';
import styles from './Main.module.css';
import Score from './Score';
import players from '../data/players';

function Main() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [memory, setMemory] = useState([]);

  // Sort players array randomly
  players.sort(() => {
    if (Math.random() > 0.5) return 1;
    return -1;
  });

  const selectPlayer = (id) => {
    const selectedPlayer = players.find((player) => id === player.id);
    if (memory.includes(selectedPlayer)) {
      setScore(0);
      setMemory([]);
    } else {
      setScore((prevState) => prevState + 1);
      setMemory((prevState) => [...prevState, selectedPlayer]);
    }
  };

  useEffect(() => {
    if (score <= bestScore) return;
    setBestScore((prevState) => prevState + 1);
  }, [score]);

  return (
    <div className={styles.container}>

      <Score score={score} bestScore={bestScore} />
      <div className={styles.grid}>
        {players.map((player) => (
          <Card
            key={player.id}
            onSelectPlayer={selectPlayer}
            player={player}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
