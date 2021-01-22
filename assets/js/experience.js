//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Engineer 2",
    cardImage: "assets/images/experience-page/aws.svg",
    place: "Amazon",
    time: "(Mar. 2020 - Jan. 2021)",
    desp: "<li>Designed and implemented a self-healing feature for Elasticsearch using Java which detects service issues and fixes them in real time.</li> " +
          "<li>Developed a dynamic throttling mechanism for Elasticsearch using Jetty and an analytics engine which stops rogue queries from blowing up clusters.</li> " +
          "<li>Contributed to open source Elasticsearch plugins for metrics collection, aggregation, and analytics.</li>",
  },
  {
    title: "Software Engineer (Backend API)",
    cardImage: "assets/images/experience-page/splunk.jpg",
    place: "Splunk",
    time: "(Oct. 2019 - Mar. 2020)",
    desp: "<li>Improved data routing logic in our Golang based control plane, giving customers fine-grained control over where their data lives and who could access it.</li>" +
          "<li>Created a new authentication service in Java capable of giving all Splunk customers access to the SignalFx application.</li>" +
          "<li>Designed a centralized throttling microservice which was consumable by all other services in the platform.</li>",
  },
  {
    title: "Software Engineer (Metadata/Application Teams)",
    cardImage: "assets/images/experience-page/signalfx.jpg",
    place: "SignalFx",
    time: "(May 2018 - Oct. 2019)",
    desp: "<li>Created a real time event streaming and handling service in Java using Helix, Elasticsearch, and Kafka.</li>" +
          "<li>Developed the core RESTful APIs for the entire service in Java using Jersey alongside other tooling.</li>" +
          "<li>Built a cloud storage migration tool in Python which reduced our Elasticsearch and Cassandra cluster average MTTR by 90%.</li>",
  },
  {
    title: "Software Engineer Intern",
    cardImage: "assets/images/experience-page/illumio.png",
    place: "Illumio",
    time: "(Jun. 2016 - Sept. 2016)",
    desp: "<li>Leveraged Ruby on Rails, Scala, and Gatling to create a system for managing, monitoring, analyzing, and executing all production tests.</li>" +
          "<li>Built a REST API server to allow production engineers to build and execute complex testing scripts.</li>" +
          "<li>Integrated the system with the company’s OneLogin authentication to ensure that only production engineers could use the system.</li>",
  },
  {
    title: "Software Engineer Intern",
    cardImage: "assets/images/experience-page/intel.jpg",
    place: "Intel",
    time: "(Jun. 2015 - Oct. 2015)",
    desp: "<li>Utilized Python and Django to quickly collect and analyze gigabytes of server data logs and display the statistics on a web server.</li>" +
          "<li>Improved and modified core control plane components of a 4G LTE cellular network using C++.</li>" +
          "<li>Discovered and optimized inefficient writes in the Radio Access Network software, resulting in an application speedup of 200%.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "UCLA DataFest",
    cardImage: "assets/images/experience-page/datafest.png",
    description:
      "2017 Finalist, analyzed a multi TB dataset for Expedia and made recommendations on how to improve customer conversion rates.",
  },
  {
    title: "LAHacks",
    cardImage: "assets/images/experience-page/lahacks.png",
    description:
      "Honorable mention for creating a pen pal app to connect users across vast distances and cultures based on similar interests",
  },
  {
    title: "SDHacks",
    cardImage: "assets/images/experience-page/sdhacks.png",
    description:
      "Created an app for foodies to quickly answer queries like: 'where's the best place to get carne asada fries near me?'.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Google Summer of Code",
    image: "assets/images/experience-page/gsoc.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
];

/*
const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
 */
