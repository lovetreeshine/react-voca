import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dummy from '../db/data.json'
export default function DayList(){
    //console.log(dummy);
    //map을 사용하면 편함. 반환되는 배열에서는 jsx를 사용

    const [days, setDays] = useState([]);
    // const [count, setCount] = useState(0);

    // function onClick() {
    //     setCount(count + 1);
    // }

    // function onClick2() {
    //     setDays([
    //         ...days, /* 현재 배열  */
    //         {
    //             id: Math.random(),
    //             day: 1
    //         }
    //     ]);
    // }

    useEffect (() => {
        
    /**
     * console.log("Count change");
     * }, [count]);  // count 버튼에 따라 콘솔로그가 찍힘
     * 
     *  */ 
        fetch("http://localhost:3001/days")
            .then(res => {
                return res.json();
            })
            .then(data => {
                setDays(data);
            });

    }, []);

    return (
        <>
            <ul className="list_day">
                {/* {dummy.days.map(day => ( */}
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    {/* 
                        <Link to="/day">Day {day.day}</Link>
                        a태그 href 대신 <Link to="/">를 사용  
                    
                        Day {day.day}
                    */}
                    </li>
                ))}
            </ul>
{/*             <button onClick={onClick}>{count}</button>
            <button onClick={onClick2}>Day change</button> */}
        </>
    );
}