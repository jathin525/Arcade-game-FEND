# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## I completed  the project by following steps to complete the game.
+ After I went through the instructions , I got a git hub link `https://github.com/udacity/frontend-nanodegree-arcade-game` and got the project file  in rubric structure which was provided by Udacity .
+ I get through it and got a plain page with error in console allEnemies[].
+ And initialized a player class and assigned to a variable.
+ for player I initialized render(), update(), handleInput() functions
+ As render() used for placing cards and update is used for updating position.
+ handle Input() is used for initializing  arrow keys functioning for a player by the pixel length measurement of canvas
+as they already implemented some logic in rubric structure i just changed steps to move __left arrow__ __right arrow__ __up arrow__ __down arrow__  as these are used for movement of the player by arrow keys.
+ when ever the actor reaches to the top the he must go to the initial position with adding some `gamescore` as +10. 
+ I initialized `gamescore` for counting the score of the game.
+ And I used bugs as enemies using array in two methods `update()`and render()*.
+ i also given some speed and positionsof the Enemy
+ And if actor touches the bug then he should again comes to the initial position by `update` .
+ then i used innerHTML method to display gamescore on desktop.
+ Then I given the `sweet alert` for ending the game with the total game score and reload page button using JavaScript.  
Over View 
+ there will bw a player who caan move one step in any direction
+ three Enemies(ie.bugs) who will move only from left to right in specific position in alternate speeds
+ there will be a top zone , if the player reaches the zone with out touching Enemies then he willgain +10 gamescore
+ if he touches Enemies then the game restarts by givin pop up of total gamescore we earned 
