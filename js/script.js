const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {};
  learning.topic = "JS";
  learning.learningGoals = ["build projects", "learn React", "keep coding"];
  learning.catagory = "front end developmeny";
  learning.topicImportance = "high";



learning.topic = "JavaScript";
learning.learningGoals.splice(1, 1);

console.log(learning);

topicElement.innerText = `✔️ I'm learning ${learning.topic}`;
topicElement.classList.remove("hide");

countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals`;
countElement.classList.remove("hide");
