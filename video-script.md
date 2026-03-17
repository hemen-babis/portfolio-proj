# Video Presentation Script

## What to Show While Recording

Use this order during the recording:

1. Show the website in the browser
2. Scroll through the main sections
3. Show `index.html`
4. Show `styles.css`
5. Show `script.js`
6. Show `README.md`
7. Show your GitHub commits
8. End back on the website

## Opening

Hi, my name is Hemen Babis, and this is my final project for CS 463/563, Intro to Web Development.

For this project, I built a personal portfolio website using HTML, CSS, and JavaScript. The purpose of the website is to professionally present my background, previous work, projects, and contact information in a clean and polished format.

This is a one-page website, and it includes all of the required sections from the assignment: a navbar, an About section, a Previous Work section, a Projects section, and a Contact section with a form.

## Show the Website Homepage

I’m starting on the main page of the site.

At the top, I have a fixed navigation bar. Because this is a one-page website, the links scroll to the corresponding sections instead of loading a new page.

The hero section introduces me professionally and gives a quick summary of my interests in AI, machine learning, software engineering, mathematics, and research-driven technology.

I also included visual profile elements and summary stats so the landing section gives a strong introduction right away.

## Scroll to About

This is the About section.

The assignment says the About section should contain a brief introduction that highlights professional experience, and that is what I focused on here. I wrote this section to explain who I am, what I study, what kinds of systems I enjoy building, and how I think about technology in a professional way.

I also included my photo in this section, which is one of the options specifically allowed in the assignment.

## Scroll to Previous Work

This is the Previous Work section.

The assignment says this part can include previous experience, general background, a resume-style outline, or skills. I used a combination of those.

In this section, I included:

- professional summary content
- technical skills
- tools and platforms
- performance metrics
- experience highlights

I wanted this part to communicate both what I have worked on and what I can do technically.

## Scroll to Projects

This is the Projects section.

The assignment requires 2 to 3 previous projects, and each one should include a name, description, and a link to GitHub or a deployed site.

I included multiple projects here, including:

- an AI-driven project manager
- a research assistant application
- TemarLije
- a Rust queue simulator

Each project includes a title, a short explanation, technologies used, and a GitHub repository link.

I also made sure not to include homework assignments from this course, since the assignment specifically says not to use those.

## Scroll to Contact

This is the Contact section.

The assignment requires a contact form, so I included one here and styled it consistently with the rest of the website.

I also included direct links like my email, LinkedIn, GitHub, and Telegram.

## Transition to Code

Now I’m going to show how I built the project in code.

## Show `index.html`

This is my `index.html` file.

I used semantic HTML throughout the site. For example, I used:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`

That helps keep the code valid, organized, and accessible.

The navbar links connect to section IDs, which is what allows the one-page layout to work cleanly.

The main required parts of the assignment are all represented in this file:

- About
- Previous Work
- Projects
- Contact

I also used actual image files for the portrait and branding areas instead of leaving placeholders in the final version.

## Show `styles.css`

This is my `styles.css` file.

The project requires at least one CSS file with consistent styles across the whole website, and this file handles that.

I wrote the styling from scratch rather than using a premade theme. I wanted the site to feel polished and personal, but still professional.

Some of the design choices I used here include:

- a custom color palette
- rounded corners
- soft shadows
- a consistent spacing system
- responsive grid layouts
- custom typography

I also used media queries to make the website responsive on smaller screens. On mobile, the layout collapses into single-column sections and the navigation turns into a toggle menu.

That supports both usability and responsiveness, which are specifically part of the grading guidelines.

## Show `script.js`

This is my JavaScript file.

The assignment says the project needs one JavaScript file with interactive behavior, and this file provides that.

The interactions I added are:

- smooth scrolling for the navbar links
- mobile menu toggle behavior
- active navbar highlighting while scrolling
- reveal-on-scroll animations
- contact form validation

For the form validation, I check whether the user entered a name, a valid email, and a detailed enough message. If the form is incomplete, the site shows an error message. If it passes validation, it shows a success message.

This is meaningful JavaScript functionality, and it is more than 30 lines. It also uses modern ES6+ syntax.

## Explain What Goes Beyond Class Basics

The assignment also says to go a step further beyond the basic examples from class.

For that part, I added reveal-on-scroll animations and dynamic active navigation states. Those interactions make the page feel more polished and more complete than a fully static page.

I also added reduced-motion support so that users who prefer less motion are not forced to see animations. That improves accessibility and overall code quality.

## Show Accessibility and Code Quality

For code quality, I tried to keep the project semantic, valid, accessible, responsive, and properly formatted.

Some examples of that are:

- semantic HTML structure
- a skip link for keyboard navigation
- clear heading hierarchy
- responsive layouts
- form labels and status messages
- focus states for interactive elements
- reduced-motion support

I also cleaned up unnecessary placeholder content and used consistent formatting across the files.

## Show `README.md`

This is my README file.

The assignment requires a README with instructions for how to run the code, any outside sources used, and where the site is deployed.

In my README, I included:

- a project overview
- how to run the project locally
- the file structure
- outside sources used
- deployment notes

## Show Commits

Now I’m going to briefly go over the commit history, since the assignment says the video should describe code contributions and go over the commits.

The main stages of my work were:

1. setting up the project files
2. building the page structure and required sections
3. designing the website with custom CSS
4. adding project links and real content
5. implementing JavaScript interactivity
6. refining responsiveness, accessibility, and final polish
7. adding documentation like the README and journal

If you are showing the actual GitHub commit page here, pause on each commit and explain what changed in one or two sentences.

## Closing While Showing the Website Again

Overall, this project combines the main topics from the course: HTML structure, CSS styling, responsive design, and JavaScript interactivity.

I also tried to make the website feel more polished and more personal than a basic template while staying within the class technology requirements.

This project includes the required sections, a custom design, responsive behavior, a working contact form, project links, and supporting documentation.

Thank you for watching.
