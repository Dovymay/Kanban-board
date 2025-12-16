
import logo from './assets/Images/Logo.png'
import Buttons from "./components/buttons"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App () {
    return (
        <>
        <Navbar/>
        <Buttons/>
        <section id="cards">
            <Card title = "To Do" class ="to-do" id="to-do-card"/>
            <Card title = "In-Progress" class="in-progress" id="in-progress-card"/>
            <Card title= "Completed" class="completed" id="completed-card"/>
        </section>





        </> 
        

    )
}

export default App
