import React from 'react';
import '../css/home.css';
import headingImage from "../assets/images/college-placement-management.webp"
import newDrive from "../assets/images/create-new-drive.webp"
import educationDetails from "../assets/images/education-details.webp"
import driveDetails from "../assets/images/drive-details.webp"
function Home() {
  return (
    <div className="container about-container">
      <h1 className="heading ">College Placement management web portal</h1>
      <img
        className="heading-image"
        src={headingImage}
        alt="doon-institute-school"
      />

      <p>
        “Placement management software” is a web application for the placement
        and training department in the college. This application helps to manage
        the student information with regards to the placements.
      </p>
      <p>
        The web application can be accessed throughout the organization with
        proper login provided. The “placement management software” or system
        helps the students, company to register and communicate all the
        information in the portal.
      </p>
      <p>
        The users can easily get access to the portal and also the data can be
        retrieved easily within no time. In various colleges, training and
        placement officers have to manage the student’s profile and documents
        for their placements manually.
      </p>
      <p>
        The placement officers will collect the information from various
        companies who want to recruit the students and updates to the students
        from time to time. And also arranges the profile of students according
        to various streams. The placement officer will clearly notify the needs
        and requirements of the company.
      </p>
      <p>
        The administrator will play an important role in the placement portal
        because they provide approval of students’ registration and update in
        the portal. We can create a search engine for the administrator who can
        search for everything regarding students and the company. Earlier, It
        was difficult to communicate the information with the “N” number of
        students together about the placement drives. So the web application was
        designed which was easy and efficient to communicate the information to
        the students in a manual way.
      </p>

      <h3>RECRUITER:</h3>

      <h4>CREATE NEW DRIVE:</h4>
      <hr className="underline" />
      <p>
        A New Drive contains the student’s information as well as the company
        information. A new drive can be created by filling out the student’s
        personal details and academic details, like name, program, stream,
        batch. The criteria of percentage and backlog will be mentioned by the
        organization in default. Students who are eligible according to the
        organization criteria can only attend the drive.
      </p>
      <p>
        If there is any backlog of the students that also should be mentioned
        along with their stream name. The Date of drive and the last date of
        application will be filled by default and it cannot be changed. The job
        designation can be selected and the description will also be mentioned
        by the organization.
      </p>
      <p>
        Once all the details are entered we should verify that all the
        above-mentioned details are true and accurate. The process would help
        the company to get all the information about the students.
      </p>
      <img
        className="subHeading-image"
        src={newDrive}
        alt="doon-institute-school"
      />

      <h4>EDUCATION DETAILS:</h4>
      <hr className="underline" />

      <p>
        The students who are participating in the drive should fill their
        information, like the name of the college, batch, And the general
        criteria of percentage, backlog, previous year backlog (which will be
        mentioned by default, to all the students if you need any changes you
        can change by clicking on Add custom criteria) Should be mentioned.
      </p>
      <p>
        Programs and stream names contain details like 10th and 12th CGPA and
        percentages should be specified, the package will be specified by
        default according to the organization’s ability.
      </p>
      <p>
        Next, if the student has done any specializations (masters) the name of
        that should be mentioned. The number of years of bond or agreement the
        company would like to have with you will be mentioned. The date of the
        drive, the last date of submission of application and designation, Job
        descriptions, information about the company will be mentioned by default
        for all the students.
      </p>
      <img
        className="subHeading-image"
        src={educationDetails}
        alt="doon-institute-school"
      />
      <h4>DRIVE DETAILS :</h4>
      <hr className="underline" />

      <p>
        Drive details contain the information of the date of drive and
        institution name and it also contains details of the contact person
        (placement officer details), contact details (phone number and email
        address), college address.
      </p>
      <p>
        The page shows the details of the list of students who have applied for
        the drive along with the date when they have applied. The applied
        students can attend the interview on the mentioned date. If students
        clear any of the rounds in the interview and further get shortlisted for
        the next round their names will be mentioned in the list.
      </p>
      <p>
        Once if the students clear their final round the final result will be
        declared on the same page. the students who have cracked the interview
        will be mentioned. Likewise, the students can keep track of all these
        details.
      </p>
      <img
        class="subHeading-image"
        src={driveDetails}
        alt="doon-institute-school"
      />
    </div>
  );
}

export default Home;
