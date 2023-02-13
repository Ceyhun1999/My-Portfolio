import About from "../about/About";
import Header from "../header/Header";
import Skills from "../skills/Skills";

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                <About />
                <Skills />
            </main>
        </>
    );
}
