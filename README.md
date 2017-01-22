# Dinllon Finish in April

## Prerequisite

* Install the latest nodejs <a href="https://nodejs.org/en/" target="_blank">Download</a>
* Install the VSCode <a href="https://code.visualstudio.com/" target="_blank">Download</a>
* Install Git from <a href="https://git-scm.com/downloads" target="_blank">Download</a>

## Essential Parts with Git

>### checkout the commands with the <a href="https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html" target="_blank">Basic Command</a>
>#### Never make changes on master branch, it only can be merged with develop branch
>#### When start working on a new feature, follow these commands:
        
        git checkout develop (switch to develop branch)
        git pull (if there is new changes)
        git branch feature/[name]  (create a new branch,[name] means optional parameter)

>#### then start working on the new feature/[name] branch, you can commit and push it to the remote,after finishing it,
you can try to merge to the develop branch by these commands:

        git checkout develop
        git pull
        git merge feature/[name]  (merge the feature/[name] branch to develop)
        git push -u origin develop (push the merged code to develop)
        git push origin --delete feature/[name] (delete the remote one)
        git branch -d feature/[name] (delete the local feature/[name] branch )

>#### When there is a bug you need to fix, create branch named bugfix/[name] base on develop branch 
and follow the same steps like you do on feature


## Start web client app

>#### Open the directory you want to put the code, and open git bash enter below commands:

        git clone https://github.com/likeconan/Dinllon.git

>#### Then open the code repository with VSCode and open the terminal enter below commands:

        npm install
        npm start

>#### Then open your browser and navigate to localhost:3000

