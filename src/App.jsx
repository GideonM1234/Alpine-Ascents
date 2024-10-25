import "./App.css";
import Contact from "./Contactsd/Contact";
import Courseslist from "./Courses/Courseslist";
import Home from "./Home/Home";
import Mission from "./Home/Mission";
import Hrs from "./Hrs";
import Mountian from "./Mountainery/Mountian";
import Nav from "./Navbar/Nav";
import Thicker from "./Thicker";
function App() {
	return (
		<>
			<Nav />
			<Home />
			<Mission />
			<Mountian />
			<Courseslist/>
			<Contact/>
			<Thicker/>
		</>
	);
}

export default App;
