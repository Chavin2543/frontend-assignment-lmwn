Setup Instructions
1.) cd -> json-server -> npm install -> npm start (run json server)
2.) cd -> api-gateway -> npm install(install dependecies *first time only) -> npm start (run api gateway server)
3.) cd -> web -> npm install(install dependecies *first time only) -> npm start (run website)

API-GATEWAY Structure
-> server.js -> main api-gateway server
-> routes/index.js -> routing / searchAPI

HOW MY API WORKS ?
-> frontend calls http://localhost:3030/trips?keyword={something} to API Gateway running on port 3030
-> then API Gateway on port 3030 calls for http://localhost:9000/trips to JSON-Server running on port 9000 for data
-> API Gateway performs searching function on the json data received from the JSON Server
-> API Gateway sends response to frontend which is running on port 3000

WEB Structure
-> Components

-> Cards -> displaying individual result including title, description, photos, tags and also embedded url in some texts
ELEMENT INSIDE CARD
-> ManageTags -> divides tags into 2 sections including the every element before the last tag and the last tag itself
-> CreateTag -> to create and return tag section element
-> ManagePhoto -> divides photos into 2 sections including coverPhoto and extraPhoto(Additional Photos)
-> ManageDescription -> to limit the description's length
-> CreateDescription -> to create and return description section element
-> HandleTagInput -> to handle the pressing of the tags and call the search function in the Homepage according to the tag's value

-> CardLists -> displaying multiple cards via map function

-> ImageCarousel -> displaying additional photo other than the cover photo
ELEMENT INSIDE ImageCarousel
-> createImageCarousel -> to create and return an ImageCarousel element

-> Searchbar -> allows user to search
ELEMENT INSIDE SEARCHBAR
-> HandleInput -> to handle the input of the searchbar and set the searchText state for further usage
-> HandleEnterKeyPressed -> to handle the "Enter" Keypressed and called the search results

-> Page
ELEMENT INSIDE PAGE
-> Home.js -> displaying everything basically since there's only one page while storing search keyword, search result. Moreover, API is also called here in the Homepage

-> Config
ELEMENT INSIDE CONFIG
-> axios.js -> set the axios's baseURL

-> App.js -> Setup page navigation

every .js file will use styling from css module with the same name for example "Home.js" will use styling from "Home.module.css"

The program is designed with UX in mind so, user can hover at the small additional photo to zoom it
