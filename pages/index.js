import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  const {
    count,
    change,
    handleClick,
    handleChange,
    text,
    array,
    handleText,
    handleArray,
  } = props;

  return (
    <div className={styles.container}>
      <Header />

      {change ? <h1>{count}</h1> : ""}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleChange}>{change ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleArray}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="index" />
      <h1>あああ</h1>

      <Footer />
    </div>
  );
}
