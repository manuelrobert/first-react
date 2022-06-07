// function NavBar(){
//     return (
//         <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Link</a></li>
//             <li><a href="#">Something else here</a></li>
//             <li><a href="#">Disabled</a></li>
//         </ul>
//     )
// }
// function MainContent(){
//     return (
//         <h1>I'm learning React</h1>
//     )
// }
// ReactDOM.render(
//     <div>
//         <NavBar/>
//         <MainContent/>
//     </div>, 
//     document.getElementById("root")
// )  

const navbar = (
    <nav>
        <h1>
            Menu A
        </h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
console.log(navbar)

ReactDOM.render(navbar, document.getElementById("root"))