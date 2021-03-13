# Movie Database Search

## Set up

Install dependencies with `npm install`
start a dev server with `npm run dev`


## Acceptance Criteria 

### **MovieSearch-01**

**AS A** user  
**I WANT** to search for a movie  
**SO THAT** I can find something to watch  

**GIVEN** I am on the search page  
**WHEN** I view the page  
**THEN** I can see a box with a button so I can search for a given movie title  

### **MovieSearch-02**

**AS A** user  
**I WANT** to see a list of movies based on my search  
**SO THAT** I can pick from the results  

**GIVEN** I am on the search page  
**WHEN** I have entered a search term  
**THEN** I can see a grid of movies, each showing the poster, title and year of release  

### **MovieSearch-03**

**AS A** user  
**I WANT** to see search results displayed in groups with pagination labelling at the top  
**SO THAT** the page remains performant and I can see which group I am looking at  

**GIVEN** I am on the search page  
**WHEN** the search results are displayed  
**THEN** I can see the results load, (showing x of x) to indicate the current paginated group being displayed  
**AND** I can click arrows to navigate between the groups of results  

### **MovieSearch-04**

**AS A** user  
**I WANT** to see more information about a film  
**SO THAT** I can decide whether to watch it  

**GIVEN** I am on the search page  
**WHEN** I click on a film  
**THEN** a modal appears, displaying the poster, title, year, plot, director, genre and cast of the selected film   
