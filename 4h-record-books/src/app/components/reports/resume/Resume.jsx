import { Document } from "@react-pdf/renderer";
import Section0 from "./Section0.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import Section5 from "./Section5.jsx";
import Section6 from "./Section6.jsx";
import Section7 from "./Section7.jsx";
import Section8 from "./Section8.jsx";

var section0Data = [
  {
    name: "Demo User",
    dob: "1/1/2006",
    county: "Yamhill",
    dateJoined: "1/15/2018",
  },
]

var section1Data = [
  {
    year: "2019-20",
    grade: "9",
    clubName: "4-H Club",
    clubSize: "10",
    clubLeader: "John Doe",
    meetingsHeld: "10",
    meetingsAttended: "10",
  },
  {
    year: "",
    grade: "9",
    clubName: "Yamhill County 4-H",
    clubSize: "15",
    clubLeader: "Jane Doe",
    meetingsHeld: "15",
    meetingsAttended: "15",
  },
  {
    year: "2020-21",
    grade: "10",
    clubName: "4-H Club",
    clubSize: "10",
    clubLeader: "John Doe",
    meetingsHeld: "10",
    meetingsAttended: "10",
  },
  {
    year: "",
    grade: "10",
    clubName: "Yamhill County 4-H",
    clubSize: "15",
    clubLeader: "Jane Doe",
    meetingsHeld: "15",
    meetingsAttended: "15",
  },
  {
    year: "2021-22",
    grade: "11",
    clubName: "4-H Club",
    clubSize: "10",
    clubLeader: "John Doe",
    meetingsHeld: "10",
    meetingsAttended: "10",
  },
  {
    year: "",
    grade: "11",
    clubName: "Yamhill County 4-H",
    clubSize: "15",
    clubLeader: "Jane Doe",
    meetingsHeld: "15",
    meetingsAttended: "15",
  },
]

var section2Data = [
  {
    year: "2019-20",
    name: "Horses",
    scope: "1 Horse",
  },
  {
    year: "",
    name: "Lambs",
    scope: "2 Lambs",
  },
  {
    year: "2020-21",
    name: "Horses",
    scope: "2 Horses",
  },
  {
    year: "",
    name: "Lambs",
    scope: "3 Lambs",
  },
  {
    year: "2021-22",
    name: "Lambs",
    scope: "2 Lambs",
  },
  {
    year: "",
    name: "Tech Wizards",
    scope: "Designed a webpage; 2 Remote Operated Vehicles",
  },  
]

var section3Data = [
  {
    year: "2019-20",
    activity: "Horse Camp",
    learned: "Learned how to care for horses",
    region: "State",
  },
  {
    year: "",
    activity: "Photography Clinic",
    learned: "How to take better close-ups",
    region: "Local",
  },
  {
    year: "2020-21",
    activity: "4-H Camp",
    learned: "Learned how to build a campfire",
    region: "Regional",
  },
  {
    year: "",
    activity: "Camp Counselor training",
    learned: "Learned how to work with younger members",
    region: "State",
  },
  {
    year: "2021-22",
    activity: "National Leadership Conference",
    learned: "Learned how to be a better leader",
    region: "National",
  }
]

var section4Data = [
  {
    year: "2019-20",
    activity: "Soccer Team",
    description: "80 practices; 20 games, 300 hours",
    region: "Local",
  },
  {
    year: "",
    activity: "Band",
    description: "50 lessons, 2 performances, 200 hours",
    region: "Local",
  },
  {
    year: "2020-21",
    activity: "Soccer Team",
    description: "120 practices; 20 games, 400 hours",
    region: "County",
  },
]

var section5Data = [
  {
    year: "2019-20",
    description: "Refreshment committee - brought snacks to two meetings",
    hours: "1",
    people: "14",
  },
  {
    year: "",
    description: "Camp Counselor – 50 youth, taught crafts",
    hours: "40",
    people: "50",
  },
  {
    year: "2020-21",
    description: "Club Secretary – Took notes at 10 meetings",
    hours: "2",
    people: "14",
  },
]

var section6Data = [
  {
    year: "2019-20",
    organization: "Middle School",
    description: "Student Aid in office; answered phone; greeted visitors",
    hours: "50",
    people: "1000",
  },
  {
    year: "2020-21",
    organization: "High School",
    description: "Student Council Vice-President",
    hours: "20",
    people: "1000",
  },
  {
    year: "",
    organization: "Soccer Club",
    description: "Team Captain",
    hours: "10",
    people: "20",
  },
]

var section7Data = [
  {
    year: "2019-20",
    description: "Visited nursing home; introduced my 4-H dog to 4 elderly patients",
    hours: "4",
    people: "15",
  },
  {
    year: "",
    description: "Club assembled Thanksgiving food basket for family of 6",
    hours: "1",
    people: "6",
  },
  {
    year: "",
    description: "County fairgrounds clean-up; weeded flower beds by entrance",
    hours: "3",
    people: "100",
  },
  {
    year: "2020-21",
    description: "Fairgrounds work day; painted beef barns",
    hours: "4",
    people: "500",
  },
  {
    year: "",
    description: "Wrote 10 letters to military with the County Ambassador team",
    hours: "2",
    people: "20",
  },
]

var section8Data = [
  {
    year: "2019-20",
    description: "Did yard work for elderly neighbors",
    hours: "5",
    people: "2",
  },
  {
    year: "",
    description: "Made campaign posters for school board candidate",
    hours: "4",
    people: "10",
  },
  {
    year: "2020-21",
    description: "Oregon beach clean-up with church youth group",
    hours: "5",
    people: "1000",
  },
  {
    year: "",
    description: "Donated food for school drive",
    hours: "1",
    people: "100",
  },
]

var section9Data = []

var section10Data = []

var section11Data = []

var section12Data = []

var section13Data = []

var section14Data = []

const PDFFile = () => {
  return (
    <Document>
        <Section0 userData={section0Data}/> 
        <Section1 tableData={section1Data}/> 
        <Section2 tableData={section2Data}/>
        <Section3 tableData={section3Data}/>
        <Section4 tableData={section4Data}/>
        <Section5 tableData={section5Data}/>
        <Section6 tableData={section6Data}/>
        <Section7 tableData={section7Data}/>
        <Section8 tableData={section8Data}/>
    </Document>
  )
};

export default PDFFile;
