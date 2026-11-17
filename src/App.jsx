
import "./style.css";

import Header from "./Components/Header";
import FormContainer from "./Components/FormContainer";
import StudentListContainer from "./Components/StudentlistContainer";

function App() {
  return (
    <div className="app">
      <div className="header-section">
        <Header />
      </div>

      <main className="container">
        <section className="card">
          <FormContainer />
        </section>

        <section className="card">
          <StudentListContainer />
        </section>
      </main>

      <footer>
        <p>© 2026 Student Directory | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
