import { Header, Footer, HeroBanner, Features, About } from "./components";

function App() {
  return (
    <>
      <Header />
      <main className="container max-w-screen-lg px-5 mx-auto mt-28">
        <div className="grid gap-y-28">
          <HeroBanner />
          <Features />
          <About />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
