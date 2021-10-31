
function CountDown() {
    return (
        <div className="container">
            <h1>Count Down</h1>
            <div className="container-countdown">
                <ul>
                    <li>
                        <span className="time"></span>
                        <span className="item">Days</span>
                    </li>
                    <li>
                        <span className="time"></span>
                        <span className="item">Hours</span>
                    </li>
                    <li>
                        <span className="time"></span>
                        <span className="item">Minutes</span>
                    </li>
                    <li>
                        <span className="time"></span>
                        <span className="item">Seconds</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CountDown;