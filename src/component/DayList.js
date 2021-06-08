import dummy from '../db/data.json'
export default function DayList(){
    console.log(dummy);
    //map을 사용하면 편함. 반환되는 배열에서는 jsx를 사용
    return <ul className="list_day">
        {dummy.days.map(day => (
            <li key={day.id}>Day {day.day}</li>
        ))}
    </ul>
}