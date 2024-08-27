

import { TodoFooter, Header, Todos, Footer } from "./components/index";

function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        {/* <!-- This section should be hidden by default and shown when there are todos --> */}
          <Todos/>
        {/* <!-- This footer should be hidden by default and shown when there are todos --> */}
        <TodoFooter />
      </section>
      <Footer />
    </>
  );
}

export default App;
