import styles from './Score.module.css';

function Score(props) {
  const { score, bestScore } = props;

  return (
    <div className={styles['score-group']}>
      <div className={styles.score}>
        Score:
        {' '}
        {score}
      </div>
      <div className={`${styles.score} ${styles.best}`}>
        Best Score:
        {' '}
        {bestScore}
      </div>
    </div>
  );
}

export default Score;
