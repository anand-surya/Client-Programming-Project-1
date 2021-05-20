# Client-Programming-Project-1
Movie Suggestions using Dynamic Form Elements

Website Name: Discover Cinema

Description: 
    This is a movie and tv-show recommendation website. It gives movie and tv-show recommendations based on your taste.Enter
    your name and start discovering cinema. The website gets input from the users and suggests three different movies or 
    tv-series. The users can change their selections midway/after seeing results to view different suggestion.

Technologies used:

    - HTML
    - Javascript
    - CSS

Setup:
    Download the folder in the local machine
    Open the index.html file in Chrome, Firefox, or Edge browser.

Website walkthrough:
    1. Enter your name in the input field and submit it using the button given below.

    2. You will be taken to the recommendation section. 

    3. Select the desired options and result will be generated based on your choices.

    4. After getting result, if you want to reset 
            - you can change the selected options or  (does not delete localstorage)
            - press the reset button and start from the step 1 (deletes localstorage)


Input validation:

    The validation function is called when the input field goes out of focus. The username obtained from the user is validated 
    against a regex for alphabets and white spaces. If the input does not match it gives an alert to the user to enter alphabets. 
    Also, there is a second validation when the submit button is clicked if the input field is empty it gives an alert to the user
    that input field cannot be empty.

Features: 

    Scrolling feedback (DHTML) - There is a scrolling text displaying an imaginary feedback from a customer. It is a Javascript 
    animation and made with DHTML. The text scrolls from left to right. This will give new customers entering the website a positive 
    impression of the website. The position of the text is increment in an interval and reset after reaching a position.

    Slideshow - Below the scrolling feedback there is a slideshow with posters of few movies. Use the next and previous arrows 
    to navigate the slideshow. The slideshow gives a nice appearance to the website. For now it contains pre-assigned images. If
    the site is made live, we can display new releases.

    Blinking text (DHTML) - Above the input field which gets the user's name, there is blinking text which display 'register and
    start discovering!!!'. Since, the text is blinking it will grab the user's attention and make them register. The color of text
    is changed alternatively at an interval to give the blinking effect.

    Data file - There are two data files in the data folder. Both of them have different depths of select (3 & 4). The select Elements
    are created dynamically and data files with n depth can be accommodated. To change the data file, in the index.html file 
    uncomment the commented data file and vice versa.

    Scrolling between sections  - I have added a button after username field to scroll to the next section.

    Image buttons - Instead of regular button with text, I have used image buttons for scrolling and reset.

    Background Image - The background image of the website is a collage of movie posters which supports the functionality of the
    site.

    Result - The result will contain three recommendations in the form of poster. The poster will be attractive than displaying 
    just the movie/tv-show name.

    Fonts - I have used Josefin Sans and Limelight fonts from google font library.

    Input field - The input field initially has less alpha value, when the user click the field the background color changes to 
    white, which helps the user to see clearly what is typed.

    Extra texts - All the text like name, placeholders, alert messages are stored in a separated data file.
