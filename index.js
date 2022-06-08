

function TemporaryName(){
    return (
        <div>
        <img src="./react-icon.png" width="40" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ul>
    </div>
    )
}

ReactDOM.render(<TemporaryName/>, document.getElementById("root"))
