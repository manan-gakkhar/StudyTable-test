import './App.css';
import AlternatingLayout from './Components/AlternatingLayout';
import StudyTableLanding from './Components/StudyTableLanding';
import ExplanationSection from './Components/ExplanationSection';
import Footer from './Components/Footer';

    function App() {
      return (
        <div className="App">
          <StudyTableLanding />
          <AlternatingLayout />
          <ExplanationSection />
          <Footer />
        </div>
      );
    }

export default App;
