* Odin Book from The Odin Project! *

- [X] Create skeleton
  - [X] express "odin-book" --view=pug --css=sass
  - [X] npm install mongoose helmet morgan async passport passport-facebook async nodemon moment express-validator multer dotenv bcryptjs


- [ ] Create models/schemas
  - [ ] Users
    - [X] name
    - [X] birthdate
    - [X] profile photo
    - [X] cover photo
    - [X] occupation
    - [X] education
    - [X] location
    - [X] hometown
    - [X] bio
    - [X] relationship status
  - [X] Posts
    - [X] content
    - [X] author
    - [X] comments
    - [X] likes
    - [X] date
  - [X] Friends
    - [X] user1
    - [X] user2


- [ ] Create views
  - [ ] User
    - [ ] form
    - [ ] detail
      - [ ] others
      - [ ] self
    - [ ] friends
    - [ ] photos
  
  - [ ] view user
    - [ ] profile photo
    - [ ] cover photo
    - [ ] details
    - [ ] friends
    - [ ] posts
  - [ ] view friends
    - [ ] mutual
    - [ ] all
  - [ ] view posts (home page?)
    - [ ] make like real "timeline" - show all recent posts from current user + user's friends


- [X] Create form views
  - [X] sign up
  - [X] log in (with facebook & passport)
  - [X] edit profile
  - [X] create post?
- [ ] Create user views
  - [ ] view other profile
  - [ ] view user profile
  - [ ] homepage/timeline
  - [ ] settings
  - [ ] edit profile
  - [ ] create profile
  - [ ] photos
  - [ ] 



- [ ] Create routes


- [ ] Create controllers
  - [ ] Users
  - [ ] Friends
  - [ ] Timeline


- [ ] Create Authentication
  - [ ] Sign in using real facebook info (passportJS)


- [ ] Create fake data using Faker 
  - [ ] npm install faker

- [ ] Deploy to Heroku!


*Requirements Checklist:*
- [ ] Users must sign in to be able to see anything other than the sign in/up page
- [ ] Users should be able to sign in using real facebook details
- [ ] Users can send friend requests to other users
  - [ ] user must accept the friend request to become friends
- [ ] Users can create posts (begin with text only)
- [ ] Users can like posts
- [ ] Posts display content, author, comments, & likes
- [ ] Users can create profile with a photo (use passport to get from facebook)
- [ ] "view user" page contains profile info, profile photo, and posts
  - [ ] lists all users and buttons for sending friend requests to those who are not already friends or who dont already have a pending request


*Stretch Goals:*
- [ ] Make posts allow user images (either by url or by upload)
- [ ] allow users to upload and update their own profile photo
- [ ] style it!
- [ ] Add "poking" 
- [ ] Add "pages" 
- [ ] Add marketplace 
- [ ] Add chat 
- [ ] Add notifications