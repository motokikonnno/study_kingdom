import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";

export default function Home(props) {
  const {
    count,
    doubleCount,
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

      {change ? <h1>{doubleCount}</h1> : ""}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleChange}>{change ? "非表示" : "表示"}</button>

      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleArray}>追加</button>
      <ul>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="about" />

      <Footer />
    </div>
  );
}
