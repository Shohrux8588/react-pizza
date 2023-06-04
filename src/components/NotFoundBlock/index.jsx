import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <span>😞</span>
      <br />
      <h1>not found :(</h1>
    </div>
  );
}

export default NotFoundBlock;
