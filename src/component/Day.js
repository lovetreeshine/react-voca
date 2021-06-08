// import dummy from "../db/data.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day(){
    //dummy.words
    //const day = 3;
    
    // (1)
    // const a = useParams();
    // const day = a.day;

    // (2)
    // const day = useParams().day;
    
    // (3)
    const { day } = useParams();


    // const wordList = dummy.words.filter(word => word.day === Number(day));
    // const wordList = words.filter(word => word.day === Number(day));
    const [words, setWords] = useState([]);
    useEffect (() => {
        fetch(`http://localhost:3001/words?day=${day}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setWords(data);
            });

    }, [day]);
    


    return  <>
    <h2>Day {day}</h2>
    <table>
        <tbody>
            {/* {dummy.words.map(word => ( */}
            {/* {wordList.map(word => ( */}
            {words.map(word => (
                <Word word={word} key={word.id}/>
            ))}
        </tbody>
    </table>

    </>;

}