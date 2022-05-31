import axios from "axios";
import { useEffect, useState } from "react";
import Waiting from "./Waiting";
import Hangman from "./Hangman";
import './style.css';

function App() {
  const [puzzle, setPuzzle] = useState("");
  const [loading, setLoading] = useState(true);

  // puzzle api
  const getPuzzle = async() => {
    try{
      const p = await axios.get(
        'http://puzzle.mead.io/puzzle?wordCount=1'
      );
      let word = p.data.puzzle;
      console.log(word);
      setPuzzle(word);
    }catch(error){
      console.log("정보를 읽어올 수 없습니다.");
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{
    getPuzzle();
}, []);

  return (
    <>
      {loading ? <Waiting/> : <Hangman puzzle={puzzle} maxError={10}/>}
    </>
  );
}

export default App;
