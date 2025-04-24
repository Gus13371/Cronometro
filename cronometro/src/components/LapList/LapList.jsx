


export default function LapList({laps}) {
    return <div>
        <div className="timer-laps">
            <h3>Voltas:</h3>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>
                        Volta {index + 1}: {lap}
                    </li>
                ))}
            </ul>
        </div>
    </div>
}