import React, { useEffect, useRef } from 'react';
import '../styles/StudyTableLanding.css';

const StudyTableLanding = () => {
  const examCategoriesRef = useRef(null);
  
  useEffect(() => {
    // Animation for exam categories
    const examCategories = examCategoriesRef.current;
    if (examCategories) {
      examCategories.style.opacity = '0';
      examCategories.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        examCategories.style.opacity = '1';
        examCategories.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  return (
    <div className="studytable-container">
      <header className="studytable-header">
        <h1 className="studytable-logo">STUDY<span>table</span></h1>
      </header>

      <main className="studytable-content">
        <div className="studytable-text-content">
          <h2 className="studytable-headline">
            <span className="studytable-primary">Optimize</span>{" "}
            <span className="studytable-secondary">Your</span>
          </h2>
          <h2 className="studytable-headline">
            <span className="studytable-secondary">Performance For</span>
          </h2>
          <h2 className="studytable-headline">
            <span className="studytable-primary">JEE, NEET,</span>{" "}
            <span className="studytable-secondary">and</span>{" "}
            <span className="studytable-primary">Boards</span>
          </h2>
          
          <p className="studytable-description">
            Your personal AI-Tutor for all academic needs. Whether its school 
            exam, boards or competitive exams we plan, manage, and help you 
            clear your doubts instantly. For students of class 10th, 11th and 12th 
            (CBSE) and preparing for all medical or engineering entrance exams
          </p>
          
          <div className="studytable-action-buttons">
            <button className="studytable-button studytable-primary-button">
              Apply for admission
            </button>
            <button className="studytable-button studytable-text-button">
              Sign In <span className="studytable-arrow">→</span>
            </button>
          </div>
        </div>
          
          <div className="studytable-illustration">
            <img 
              src="https://res.cloudinary.com/djoebsejh/image/upload/v1741541369/hmik8m0fbyv5nyndtuuw.svg" 
              alt="Illustration of StudyTable" 
              className="studytable-image"
              />
          </div>
      </main>
    </div>
  );
};

export default StudyTableLanding;