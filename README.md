# Social-Meet-Up-Application
Find other people with similar interests/hobbies as you and create events to meet-up. You can also create new interests, or add a new event location.

## Development Process
We started out with a vague concept of a social meet up app. Logically, the first thing that users will want to see is if there are others who have similar hobbies as them.
This gave us an idea about how to design the homepage. When arriving at the homepage, the first thing that users will see would be a welcome message followed by a list/assortment of pre-existing hobbies. Users can then choose to navigate to a specific hobby page or create a new hobby if they cannot find what they are looking for. 
If a user decides to go to a specific hobby page, they are also probably looking for any events that might be happening for that hobby. Therefore, it makes sense to have a list of upcoming events for that on the page. Users can also organize a new event for their hobby. If they decide to do so, logically, they would also need a location to host their event.
This is where our databasea design comes in. It made the most sense to have 3 major tables: Hobbies, Events, and Locations. As for the relationships, we made the decision that an event would be a one-and-done deal, meaning there cannot be multiple hobbies or locations for a single event. A hobby could have multiple events, and a location could have multiple events.
Therefore, it made sense to have some join tables such as hobby_events and event_locations
## Application Logic

### MVP Criteria
- Basic functioning Navbar
- CRUD operations (add, view, edit, delete) events/locations/interests(Wajih)
- Connection to a postgres database
- All buttons are functional
- Elements (ex: specific interests/events/locations) can be clicked on for more details
- Have basic CSS styling

### Post-MVP Plans
- Accessibility
- React bootstrap elements
- add a users table & user profile page

### Outstanding bugs & Unfinished functionality

## Project Planning

| Date | Goals |
| ---- | ----- |
| Sun. 04/24 | Github main branch ready to go, install npm packages |
| Tue. 04/26 | Have homepage, setup routes, have database tables ready(sequelize) |
| Thu. 04/28 | Have data grabbed from the database, Setup navbar and stub routes |
| Sun. 05/01 | Start rendering data from the database into pages, add styling |
| Tue. 05/03 | Make sure all CRUD opertions are working, prepare presentation |
| Thu. 05/05 | Presentation |

### Requirements

- Must be a full-stack application using own front and back-end.
- Use full CRUD functionality with the database.
- A complete product.
- Deployed online using Heroku.
- Effort must be spent on styling and appearance
- Use several sensibly named components in React
- Have a Readme.md file in the GitHub repository that describes the inspiration for the application, how to use the application, lists the technologies used to build the application, and addresses any outstanding bugs or unfinished functionality

### Deliverables

- A working application built by the whole group
- A link to your application, which is deployed somewhere on the internet
- A link to your GitHub repository, so we can see the progress on your application
- README.md file with the requirements stated above

## Grading Scale

| Domain | What are we looking for? |
| ------ | ------------------------ |
| User Experience | Was effort put into styling? Does this Application have a goos User Experience? Is the User Interface intuitive? Can I comfortably navigate without using the backward and forward buttons on my browser? |
| Functionality | Is the app usable? Do all features work? |
| Workflow | Did you use GitHub properly? Is there a readme? |
| Code Style | Does the code follow best practices/naming conventions? Is it DRY? |
| Presentation | Did the group present the project to the class and did all group members participate in the presentation? Is the site deployed where others can access? |
