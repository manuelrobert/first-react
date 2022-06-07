function NavBar(){
    return (
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Something else here</a></li>
            <li><a href="#">Disabled</a></li>
        </ul>
    )
}
function MainContent(){
    return (
        <h1>I'm learning React</h1>
    )
}
ReactDOM.render(
    <div>
        <NavBar/>
        <MainContent/>
    </div>, 
    document.getElementById("root")
)  