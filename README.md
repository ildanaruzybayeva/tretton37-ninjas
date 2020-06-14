[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/ildanaruzybayeva/JS-Code-Assignment-1337)

# JS-Code-Assignment-1337

---

<h1>1️⃣ _installation </h1> 
<p>As easy as simply clicking the gitpod button above, the code will automatically run react app and install all the dependencies. In oder to run tests, simply type 'npm test a' when the react app has finished initialization and available on port 3000</p>

<h1>2️⃣️ _features and functional requirements implemented</h1>
<h3>_design/accessibility 🌺</h3>
<ul>
  <li>Fancy animations (loading animation, main title color-animation, hover animations on cards, social-media links and pages)</li>
  <li>A modern design (color-picked tretton37 color codes / imported favicon / used Montserrat font-family)</li>
  <li>No UI framework used (such as Bootstrap, Ant)</li>
  <li>Responsive design, works on mobile and tablets</li>
</ul>

<h3>_functionality 🏗️</h3>
<ul>
  <li>Sort by name and office</li>
  <li>Available on a free public url (deployed with heroku)</li>
  <li>Only render a set of profiles using pagination </li>
</ul>

<h3>_testing/QA 🧪</h3>
<ul>
  <li>Works in Chrome, Firefox, Edge</li>
  <li>Unit tests for existing functionality</li>
</ul>

---

<h1>3️⃣ _thoughts behind the code</h1>

I have chosen to approach the task using React library for the following reasons:

<b>First</b>, React allows to build <b>complex scalable UIs</b> faster than vanilla JS. This has enabled me to cover most of the design/accessebility points fairly quickly in a structured manner. <b>The app has the following components: Heder, Person, People and Pagination.</b> The state is controlled in People.js component which is responsible for fetching API data and sending info to child components through props.

<b>Secondly</b>, since the app doesn't yet have filter tools and search bar, <b>sorting people by name and office on load time</b> was a must. It helps any user to navigate through the names when looking for a person. <b>The sorting function is located in helpers folder which can be further used to add other sorting and filtering methods</b>. The app has pagination implemented where only first 12 people are displayed from the API array.

<b>Finally</b>, React has <b>in-built testing and deployment tools</b> which were utilised to do unit testing and deploy the website to a publicly available url.
