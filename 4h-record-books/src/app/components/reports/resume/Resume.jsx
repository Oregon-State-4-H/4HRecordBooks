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
import Section9 from "./Section9.jsx";
import Section10 from "./Section10.jsx";
import Section11 from "./Section11.jsx";
import Section12 from "./Section12.jsx";
import Section13 from "./Section13.jsx";
import Section14 from "./Section14.jsx";

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

var section9Data = [
  {
    year: "2019-20",
    type: "Demonstration",
    topic: "How to Straighten Material",
    timesGiven: "2",
    location: "Club & County",
    size: "73",
  },
  {
    year: "",
    type: "Newspaper Article",
    topic: "International Exchange",
    timesGiven: "1",
    location: "Oregonian",
    size: "185,000",
  },
  {
    year: "2020-21",
    type: "Illustrated Talk",
    topic: "Bathing a Sheep",
    timesGiven: "3",
    location: "Club, County, and State Fair",
    size: "15",
  },
  {
    year: "",
    type: "Educational Display",
    topic: "Breeds of Sheep",
    timesGiven: "2",
    location: "County and State Fair",
    size: "2000",
  },
  {
    year: "",
    type: "Speech to Rotary Club",
    topic: "What 4-H Has Taught Me",
    timesGiven: "1",
    location: "County",
    size: "25",
  },
  {
    year: "",
    type: "Interview Judging",
    topic: "Photo, Art, and Science",
    timesGiven: "3",
    location: "County",
    size: "6",
  },
  {
    year: "",
    type: "Oral Reasons",
    topic: "Livestock Judging Contest",
    timesGiven: "3",
    location: "County",
    size: "1",
  },
  {
    year: "",
    type: "Video",
    topic: "How to Shear a Sheep",
    timesGiven: "N/A",
    location: "YouTube",
    size: "86 Views",
  },
]

var section10Data = [
  {
    year: "2019-20",
    type: "Oral Book Report",
    topic: "Oregon Trail",
    timesGiven: "1",
    location: "School",
    size: "35",
  },
  {
    year: "",
    type: "Scripture Reading",
    topic: "Different Each week",
    timesGiven: "10",
    location: "Church",
    size: "150",
  },
  {
    year: "2020-21",
    type: "Science Fair Display",
    topic: "Recycling Study",
    timesGiven: "1",
    location: "School",
    size: "30",
  },
  {
    year: "",
    type: "TV Story",
    topic: "Interviewed regarding soccer team",
    timesGiven: "1",
    location: "KGW TV",
    size: "5000",
  },
  {
    year: "",
    type: "Website",
    topic: "FFA chapter information",
    timesGiven: "N/A",
    location: "www.----",
    size: "50 Members",
  },
]

var section11Data = [
  {
    year: "2019-20",
    event: "County Fair",
    description: "Horse: showmanship, western equitation, trail, ground training, jumping, dressage",
    award: "3 blues, 2 reds, 1 white",
  },
  {
    year: "",
    event: "State Fair",
    description: "Sheep: showmanship, market lamb",
    award: "2 blues, 1 red",
  },
  {
    year: "",
    event: "County Fair",
    description: "Clothing: 1 dress phase 2; 2 articles for home",
    award: "1 blue, 2 reds",
  },
  {
    year: "2020-21",
    event: "County Judging Contest",
    description: "Livestock",
    award: "1 blue",
  },
  {
    year: "",
    event: "County Presentation Contest",
    description: "Illustrated Talk",
    award: "1 blue",
  },
  {
    year: "",
    event: "Spring Horse Classic - State",
    description: "Illustrated Talk",
    award: "3rd place individual presentation",
  },
]

var section12Data = [
  {
    year: "2019-20",
    event: "Chess Tournament",
    recognition: "3rd Place",
    region: "Local",
  },
  {
    year: "2020-21",
    event: "FFA Livestock Judging",
    recognition: "2nd Place Team",
    region: "State",
  },
  {
    year: "",
    event: "Mid-Valley Paint Show",
    recognition: "4th place English Equitation",
    region: "Regional",
  },
  {
    year: "",
    event: "State Debate finals",
    recognition: "Participant; did not place",
    region: "State",
  }
]

var section13Data = [
  {
    year: "2019-20",
    description: "Livestock Advancement Certificate - Step 1",
  },
  {
    year: "",
    description: "Top Intermediate Record Book",
  },
  {
    year: "",
    description: "County Fair Intermediate Sheep Showmanship - Champion",
  },
  {
    year: "2020-21",
    description: "County Medal - Sheep",
  },
  {
    year: "",
    description: "National 4-H Conference Delegate",
  },
  {
    year: "",
    description: "Selected for State 4-H Ambassador Team",
  },
]

var section14Data = [
  {
    year: "2019-20",
    description: "Spelling Champion for Grade 9",
  },
  {
    year: "",
    description: "Student of the Month for March",
  },
  {
    year: "",
    description: "First Aid Certificate",
  },
  {
    year: "2020-21",
    description: "Eagle Scout Rank",
  },
  {
    year: "",
    description: "Hunter Safety Certificate",
  },
]

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
        <Section9 tableData={section9Data}/>
        <Section10 tableData={section10Data}/>
        <Section11 tableData={section11Data}/>  
        <Section12 tableData={section12Data}/>
        <Section13 tableData={section13Data}/>
        <Section14 tableData={section14Data}/>
    </Document>
  )
};

export default PDFFile;
