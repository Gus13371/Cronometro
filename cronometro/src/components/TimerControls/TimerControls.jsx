


export default function TimerControls({onStart, onStop}) {
    return <div className="timer-controls">
        <button
            onClick={onStart}
        >
            Iniciar
        </button>
        <button
            onClick={onStop}
        >
            Zerar
        </button>
    </div>
}