# Linkedinder
The name is a combination of Linkedin and Tinder (haha). It's a job-searching platform in the structure of a dating app.

This project used the MERN stack (MongoDB, Express, React, and Nodejs) with socket.io for the chatting features.

### 1. Create React App and Login page and User UI with settings page
Upon first login, make them input the following...

Main fields: Name, age, picture of you, employer or potential employee, field.\
For employers: Preferred education, preferred skill (5 for now), company name.\
For potential employees: Education, skills (create 5 for now), about.

To change preferences and info, BAM Settings page.

### 2. Personalize feeds based on preferences
Different experience for employer and potential employee. Each ones feed should be exclusively the other category.

Employer: Recommend people that have a skill you want (plz give us a chance).\
Potential employee: Recommend job postings that at least one of your skills aligns with.

### 3. Add swiping function
Swipe by using the left and right arrow keys or the buttons on the UI.\
CLOSING AND RE-OPENING SHOULD SAVE THE STATE (plz actually follow through with this).

If you swiped through all the users (damn, why you so picky), ask for a re-cycle.

### 4. Add way to connect people
Make a chat app (woo) that connects employer to employee if both swiped right.
