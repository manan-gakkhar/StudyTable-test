import React from 'react';
import '../styles/AlternatingLayout.css';

const AlternatingLayout = () => {
  return (
    <div className="page-container">
      {/* First section - Text first, Image second */}
      <section className="section">
        <div className="text-container">
          <h2 className="heading">Unlimited Practice Sessions</h2>
          <p className="paragraph">
          For topics and subjects you go through in your school and coaching every day, we create instant practice session specially made for your days need. Our innovative AI algorithm crafts batches of 20 questions, each accompanied by instant feedback and solutions - it's like having a Home tutor 24X7.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/djoebsejh/image/upload/v1741542382/giz85eayk3inrfycunbm.png"
            alt="Team working on innovative solutions"
            className="image"
          />
        </div>
      </section>

      {/* Second section - Image first, Text second */}
      <section className="section">
        <div className="text-container1">
          <h2 className="heading">Personalized Assessment</h2>
          <p className="paragraph">
            We measure your learning differently—not just comparing you among your classmates, but also evaluating how much you have learned and how your skills have grown. We create tests based on your learning sessions and exam requirements to understand and modify your study plan.
          </p>
        </div>
        <div className="image-container1">
          <img
            src="https://res.cloudinary.com/djoebsejh/image/upload/v1741542382/xusk5zqtku8ml5ngvpnd.png"
            alt="Product showcase"
            className="image"
          />
        </div>
      </section>

      {/* Third section - Text first, Image second */}
      <section className="section">
        <div className="text-container">
          <h2 className="heading">Managing Students' Academic Life</h2>
          <p className="paragraph">
            There is more to studying than just practicing tests. To meet exam requirements, students must carefully revise, adjust their study plans, and understand their own learning curves. We manage it all for you so that you can focus on learning without worry.
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/djoebsejh/image/upload/v1741542382/b5ogfjwv53f6xkv6ic8b.png"
            alt="Academic management"
            className="image"
          />
        </div>
      </section>
    </div>
  );
};

export default AlternatingLayout;
