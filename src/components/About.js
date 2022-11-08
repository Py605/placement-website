import React from 'react';
import '../css/about.css';
import fullImage from "../assets/images/doon-institute-full-image.jpg"
import headerImage from "../assets/images/doon-institute-school.jpg"
import firstImage from "../assets/images/management-students-studying-1.jpg"
import secondImage from "../assets/images/computer-lab-1.jpg"
import Footer from './Footer';
function About() {
  return (
    <section>
      <img className="full-image" src={fullImage} alt="doon-institute-school" />

      <div className="container about-container">
        <h1 className="heading ">About Doon Group Of Institutions</h1>
        <hr className="about-underline" />
        <p>
          Doon Institute is situated in Shyampur at 9th Milestone on the
          Haridwar-Rishikesh highway. The campus is easily accessible by public
          transport and is a mere 15 minute drive from downtown Rishikesh/
          Haridwar and just under an hour from Dehradun. The imposing 15 acres
          of green campus boasts of airy and well-lit roomy classNamerooms,
          finest laboratories and workshops, a modern computer centre, a library
          endowed with relevant titles and the administrative block.
        </p>
        <p>
          The Institute designed with fountains and has been aesthetically large
          landscaped lawns & gardens. With this entire infrastructure in place,
          the institute is strongly committed to provide quality education to
          its students. Incorporation of the latest in Information Technology
          ensures that students have access to library and computing facilities
          of the highest quality, with an array of networked computers, LCD
          Monitors, subject-specific software and access to the Internet and
          intranet.
        </p>
        <div className="outer-image-div ">
          <img
            className="subHeading-image"
            src={headerImage}
            alt="doon-institute-school"
          />
        </div>

        <h3>Academics And Pedagogy</h3>
        <p>
          Though theoretical inputs are essential to any educational programme,
          our stress is on the overall development of the individual. Now a
          days, technological changes and innovations are fast transforming the
          very basis of the concept of technical education.
        </p>

        <p>
          Today, what one needs is the skill to manage technical and managerial
          resources efficiently. In order to make the learning process highly
          integrated, the syllabus is reviewed and analysed periodically to be
          in sync with the latest issues.
        </p>

        <div className="two-images">
          <div className="outer-image-div child-two-image">
            <img
              src={firstImage}
              alt="management-students-1"
            />
          </div>
          <div className="outer-image-div child-two-image">
            <img src={secondImage} alt="management-students-1" />
          </div>
        </div>

        <h3 className="below-image">Case Study : The Simulation Method</h3>

        <p>
          Our Institutes bring complex realities of today's technology into the
          classNameroom through the powerful medium of case studies; both real
          and simulated. It is an interactive process which stimulates the
          expertise and hidden potential of budding technocrats making them more
          confident to deal with practical problems of the corporate world.
        </p>
        <p>
          We have undertaken the task of developing comprehensive case studies
          in fundamental and functional management and technical areas.
        </p>

        <h3>Teaching Aids</h3>

        <p>
          Lecture sessions are conducted with the help of modern teaching aids.
          Our Institutes are well equipped with LCD projectors, project slides,
          educational audio video cassettes, CDs, TVs and other gadgets that are
          essential for any first rate professional technical institute.
        </p>
      </div>
    <Footer />
    </section>
  );
}

export default About;
