# CS 463/563 Final Project Journal

## Student

Hemen Babis

## Project

Personal Portfoliio Website

## GitHub Repo

https://github.com/hemen-babis/portfolio-proj

## Deployed Site

https://hemen-babis.github.io/portfolio-proj/

## Video Presentation

https://youtu.be/4FzW-EF5xsA

## Overview

For my final project, I built a one-page personal portfolio website using HTML, CSS, and JavaScript. The goal of the project was to create a professional website that highlights my background, previous work, projects, and contact information while following the requirements from class.

I designed the site to feel polished and personal rather than looking like a generic template. I wanted it to reflect both my technical interests and my design sensibilities.

## Technologies Used

- HTML
- CSS
- JavaScript (ES6+)
- Google Fonts: Instrument Serif and Manrope

## Outside Sources Used

- Google Fonts
  - https://fonts.google.com/

I did not use a premade website theme or a Bootstrap theme.

## Development Journal

### Session 1: Planning the site structure

In my first work session, I focused on planning the content and structure of the website based on the assignment requirements.

I reviewed the project prompt and identified the required sections:

- Navbar
- About
- Previous Work
- Projects
- Contact

I decided to build the project as a one-page site because it made navigation simpler and let me use smooth scrolling for the navbar links. I also planned to use semantic HTML with a header, nav, main, section, and footer.

One challenge at this stage was deciding how to organize a large amount of personal and professional content without making the site feel cluttered. I solved that by planning card-based sections and grouped content blocks.

### Session 2: Building the HTML structure

In the second session, I created the base HTML structure in `index.html`.

I added:

- a fixed navbar
- a hero section
- the About section
- the Previous Work section
- the Projects section
- the Contact section
- a footer

I made sure the page structure used semantic tags and accessible headings. I also added alt text where images would be used.

At this stage, I used placeholder content first so I could focus on layout. After the structure was stable, I replaced the placeholders with my real professional content.

### Session 3: Styling the website

In the third session, I built the design system in `styles.css`.

I created a consistent visual style using:

- a warm neutral color palette
- rounded cards
- shadow and glass-like surface effects
- editorial-style typography
- responsive spacing
- grid layouts that collapse cleanly on smaller screens

I wanted the site to look polished and modern without relying on a premade theme. One challenge was making the site feel distinctive while still being readable and professional. I addressed that by using stronger typography choices and layered backgrounds, but I kept the structure clean.

I also added responsive breakpoints to make the layout adapt to mobile devices. On smaller screens, the navigation turns into a toggle menu and the multi-column sections become single-column layouts.

### Session 4: Adding JavaScript interactivity

In the fourth session, I implemented the interactivity in `script.js`.

I added:

- smooth scrolling for navbar links
- a mobile navigation toggle
- active navbar state updates while scrolling
- reveal-on-scroll animations using `IntersectionObserver`
- contact form validation with success and error messages

This was one of the main areas where I went beyond the most basic requirements. Instead of making the site fully static, I added interactions that improve usability and make the page feel more polished.

One issue I worked through was making the active nav state update correctly as the user scrolls. I solved this by observing each section and matching the visible section to the corresponding nav link.

### Session 5: Replacing placeholders with real content

In the fifth session, I updated the site with my actual content, experience, and project information.

I revised the writing so the site reflected my real professional background in AI/ML, software engineering, mathematics, and research-driven work. I also updated the project cards to use actual GitHub repositories instead of placeholders.

I added links to:

- `ai-todo-manager`
- `ai-research-assistant`
- `TemarLije`
- `rustqueuesim`

I also updated the contact section with my real email, LinkedIn, GitHub, and Telegram links.

### Session 6: Image integration and final cleanup

In the sixth session, I replaced placeholder visual elements with my real assets.

I updated the main portrait area to use my image file:

- `img/hemen.jpg`

I also updated the smaller logo/profile graphic areas to use:

- `img/hemen.jpg`

During cleanup, I removed extra placeholder wording and made sure the section names matched the assignment requirements exactly, especially `Previous Work` and `Contact`.

I also added a `README.md` file with run instructions, project structure, sources used, and deployment notes, since that is required by the assignment.

## Features Implemented

### Required Features

- Navbar for navigating the website
- About section
- Previous Work section
- Projects section
- Contact section
- One CSS file
- One JavaScript file
- Responsive layout
- Styled contact form

### Additional Features Beyond the Basics

- Scroll reveal animations
- Dynamic active navbar highlighting
- Mobile navigation toggle
- More custom visual styling than the basic examples used in class

## File Structure

- `index.html`
- `styles.css`
- `script.js`
- `README.md`
- `journal.md`

## How to Reproduce the Work

1. Create the base site structure in `index.html`.
2. Add semantic sections for the required content.
3. Create a shared visual system in `styles.css`.
4. Add responsive layout rules and mobile navigation styles.
5. Implement interactivity in `script.js`.
6. Replace placeholder content with real experience, project, and contact information.
7. Add real images and GitHub links.
8. Finalize the README and documentation.

## Problems Encountered and Solutions

### Problem: too much content for a simple one-page layout

I had a lot of information I wanted to include, including professional background, academic context, skills, project work, and contact details.

### Solution

I grouped information into cards and sections so the page stays readable and visually organized.

### Problem: keeping the site polished without using a template

It is easy for a personal website to either look too plain or too cluttered when everything is custom-built.

### Solution

I created a consistent design system with shared spacing, card styles, border radii, shadows, and typography so the site feels cohesive.

### Problem: matching the class requirements exactly

As the content evolved, some section labels became more portfolio-like than assignment-like.

### Solution

I revised the structure to match the assignment directly by using the required section names: About, Previous Work, Projects, and Contact.
