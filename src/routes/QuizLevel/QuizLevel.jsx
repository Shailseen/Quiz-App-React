import styles from "./QuizLevel.module.css";

export const QuizLevel = () => {

  return (
    <div className={styles.quiz_level_container}>
      <div className={styles.header}>Choose your level</div>
      <div
        className={styles.choice_container}
      >
        Easy
      </div>

      <div
        className={styles.choice_container}
      >
        Medium
      </div>

      <div
        className={styles.choice_container}
      >
        Hard
      </div>
    </div>
  );
};
