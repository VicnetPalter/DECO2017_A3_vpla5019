# Flexy Flamingo stretching application


Project name is a Flexy FLamingo that allows users to track various different stretches to promote healthy lifestyle and being consistent with keeping up with your stretching goals. 

The application lets you add workouts, select type of stretch(and display how to do stretch and identify muscle location), select the depth of th stretch to track performance, time the streth and then finally save the stretch;

## Prerequisites

Before you begin, ensure you have met the following requirements:

Have access to the git hub repository
Have cloned the respository and opened it in your preffered text editor.

## Running the Website

The best and easiest to run this website is through your browser. 

1. When you are accessing this project in your text editor simple run the command: npm run start
2. This is will host the website on the local port.
3. Once the website is running click this link to open it in your browser. http://localhost:8888/


## Contributing to Flexy Flamingo

To contribute to Flext Flamingo, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


## Important Notes on Function of Website

The implementation of certain elements such as showing and hiding workout details are incomplete they work in some respect but when creating multiple workout and deleting various workouts details will still all show. See details button on website after creating a workout.

Issues in selecting dynamically created elements based on array data elements occured leading to these problems. 

When workouts are deleted they update after going to the summary page not actively this is due to them being deleted from an array and the update doesnt occur unless the function runs again. See script comments for more detail.  

Apologies for these inconsistencies 
