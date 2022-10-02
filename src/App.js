import './App.css';
import { Anime } from './components/Anime';
import { AnimeDescription } from './components/Description';
import { AnimeEvaluation } from './components/Evaluation';
import { GetWindowSize } from './components/js/render';

function App() {

  const isDesktop = GetWindowSize()

  return   (
    <>
      {isDesktop ? (
        <>
          <div id="left-side">
            <Anime/>
          </div>
          <div id="right-side">
            <section id="section-description">
              <AnimeDescription/>
            </section>
            <section id="section-evaluation">
              <AnimeEvaluation/>
            </section>
          </div>
        </>
      ) : (
        <>
          <section id="anime">
            <Anime/>
          </section>
          <section id="description">
            <AnimeDescription/>
          </section>
          <section id="evaluation">
            <AnimeEvaluation/>
          </section>
        </>
      )}
    </>
  )
}

export default App;
