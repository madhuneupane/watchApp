Web application created as a requirement for Langara College's term 2 Integrated Project class

This app will provide to the user the possibility to follow up the person’s favorite programs, including keeping track of the movies / shows already watched, completing monthly challenges, making their own watchlist and more.

# Before cloning the project, follow below steps to make sure that NODE, NPM, VUE and SASS are set and configured on the local environment. Please note that the step(4) will create a new Vue project on your local machine! After finishing all the steps below, delete "src" folder and "Readme" file that are inside of the newly created local project folder. Then, just download the codes from Github and copy inside of the same newly created local project folder.

### 1 - Install Node
The latest version of Node can be find at the official site:
```
https://nodejs.org/en/download/
```

### 2 - Install NPM
It is possible to install the npm through the terminal using the code below:
```
npm install -g npm
```

Also, it's possible to check more details about the installation process at the link:
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### 3 - Install VUE
It is possible to install the VUE through the terminal using the code below:
```
npm install -g @vue/cli
```

Also, it's possible to check more details about the installation process at the link:
https://vuejs.org/guide/quick-start.html

### 4 - Create a new VUE project
```
vue create {name of the project}
(ex: vue create watchapp)

select Vue 3 and press ENTER
```
After the creation of the project folder, move to the project folder and

### 5 - Install SASS
It is possible to install the SASS through the terminal using the 3 codes below:
```
npm install -g sass
```
```
npm install sass-loader -D
```
```
npm install node-sass -D
```

Also, it's possible to check more details about the installation process at the link:
https://sass-lang.com/install

PS: The last to codes are to avoid any bug with sass-loader error

### 6 - Install vue-firebase
```
npm install vuefire firebase
```

### 7 - Install vueper slides
```
npm i vueperslides
```

### 8 - Install router
```
npm install vue-router
```

### 9 - Install Axios
```
npm install --save axios
```

### Readme UPDATE - Vue Star Ratings
To be able to do the rating more similar with the mockups, will be necessary to install the Vue library for stars rating. Inside the project, please run this command on the VS Code terminal (no additional requirements).
```
npm install vue3-star-ratings --save
```

### 10 - Run the serve
```
npm run serve
```

If your local server runs correctly, without any issue, your local environment is ready and good to start working.
After checking that your local server is running correctly, download the github files and replace the "src" folder

### 11 - Check for additional needs
The terminal might bring additional necessities to run the serve, specially if you forgot to install any of the tools in you machine environment. You can talk with your fellow team members to help sort it out.

## GitHub instructions:

### 1 - Clone Eden's repository - watchapp
This must be done, otherwise you won't be able to keep track of the changes, and also to commit your changes to the project.

### 2 - Commit
Please include a short title and a more detailed description. This is extremely important to the rest of the team and also to yourself.

### 3 - Pull Requests
If you see there's something available to pull but not sure of what it's, please check the website (as through the app you won't be able to see the changes, only that they exist).

### 4 - Reverting Changes
The easiest way for you to revert your changes is to delete your local folder, check the GitHub website, revert your changes by clicking over your past changes and then clone the repo again.
