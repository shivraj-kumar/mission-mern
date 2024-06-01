import React from 'react'
import Navbar from "../components/Navbar";
import Sidebaar from "../components/Sidebaar";
import Coursescard from "../components/Coursescard";
import image27 from "../images/udmilogo.svg";
import image28 from "../images/course logo.svg";
import image29 from "../images/course logo2.svg";
import image30 from "../images/course logo3.svg";
function Paidcourses() {
  return (
   <>
    <Navbar />
      <div className="Freecont">
        <Sidebaar />
        <div className="freebox">
          <p className="allheading hea2">
            Paid <span className="spa">Courses</span>
          </p>
          <div className="coursecardfree">
            <Coursescard
              para2="Shivraj Prasad"
              para3="5 Hours"
              h2="Web Development in 2024"
              imag={image27}
              para="Learn how to develop a responsive and functional website ”in advance level”"
              button="Paid"
            />
                <Coursescard
              para2="Yashwant Mandal"
              para3="8 Hours"
              h2="Cloud Computing"
              imag={image27}
              para="Master cloud storage & online application and many more ”in advance level”"
              button="Paid"
            />
                <Coursescard
              para2="Rishu"
              para3="5 Hours"
              h2="Web Design(Ui & UX)"
              imag={image27}
              para="Learn how to develop a responsive and functional website ”in advance level”"
              button="Paid"
            />
                <Coursescard
              para2="Sahil"
              para3="12 Hours"
              h2="Ethical hacking "
              imag={image28}
              para="Become a White hacker & protect systems ”in advance level”"
              button="Paid"
            />
                <Coursescard
              para2="Shivraj Prasad"
              para3="5 Hours"
              h2="MS Excel"
              imag={image28}
              para="Excel in spreadsheets & data analysis ”in advance level”"
              button="Paid"
            />
                <Coursescard
              para2="Shail"
              para3="94 Lessons"
              h2="Automation"
              imag={image28}
              para="Automate tasks & data efficiency ”in advance level”"
              button="Paid"
            />
                <Coursescard
              para2="Ravi"
              para3="24 Lessons"
              h2="Digital Marketing Basics"
              imag={image29}
              para="Market your brand online with social media ”in advance level”"
              button="Paid"
            />
                <Coursescard
              para2="Vaibhav Srijan"
              para3="5 Hours"
              h2="Game Development"
              imag={image29}
              para="Build your own games ”in advance level”"
              button="Paid"
            />
                <Coursescard
              para2="Yashwant Mandal "                                                 
              para3="9 Hours"
              h2="IOT 101"
              imag={image29}
              para="Connect devices to the internet of Things ”in advance level”"
              button="Paid"
            />
                <Coursescard
              para2="Ravi"
              para3="6 Hours"
              h2="Blockchain & Cryptocurrency"
              imag={image30}
              para="Explore the future of finance with a new digital currency ”in advance level”"
              button="Free"
            />
                 <Coursescard
              para2="Shivraj Prasad"
              para3="13 Hours"
              h2="AI & Machin Learning"
              imag={image30}
              para="Master the Future, build intelligent apps with AI & Machine Learning ”in advance level”"
              button="Paid"
            />
                 <Coursescard
              para2="Shivraj Prasad"
              para3="5 Hours"
              h2="Web Development in 2024"
              imag={image27}
              para="Learn how to develop a responsive and functional website ”in advance level”"
              button="Paid"
            />
            
          </div>
        </div>
      </div>
   </>
  )
}


export default Paidcourses