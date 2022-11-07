# Diablo 2 Character Build Sets
This app pulls data for Diablo 2 builds from a local database and renders it to the web page for users to view standard build sets for Diablo 2 character classes.
Allows users to favorite builds they come across while browsing the page, and also remove builds from their favorites list if they decide they no longer want it.

## Authors
- [@Jeff Kelley](https://www.github.com/jpkelley6)

## Start Guide 
Fork and clone this repo. Then run the following code. 

``` bash 
 cd back-end
 npm install 
 nodemon backendServer.js
  
 cd front-end/react-mvp
 npm install 
 npm start 
```
    
## Features
- Charcter tiles that users can click on to populate list of popular Diablo 2 builds for that class
- Character tiles have add/ remove favorite buttons
- Favorited builds small window on page to allower user to keep track of which builds they clicked
- Favorites button that populates tiles for all the builds that the user favorited in their browsing
- Dynamic updates during page interaction
- Uses Howler for sound effects across the app
- Uses SweetAlert for alerts on the page

## Lessons Learned
Use of state was very helpful in managing the dynamic updates. Being able to update the state and have it re-render after the update made the app feel like it is interacting with the user real-time.
Use of sweetalerts allowed the customization of the alert window to keep the theme of the page throughout the interaction instead of using the standard alert window.

## Tech Stack
**Client:** React, CSS, HTML

**Server:** Node, Express, PosgreSQL