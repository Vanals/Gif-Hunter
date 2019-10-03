# Pokemon Top Trumps
## My Outcome

As from the beginning, in the home page you will find the rules of the game and the tasks given; plus, the assignments I have worked on and finished are followed by a green emoji.

At the end of the home page you will see two buttons, which will take you to the two main areas of the application.


![](https://i.ibb.co/VjCmKTK/Screen-Shot-2019-10-03-at-18-09-08.png)


The first button will take you to the page where ALL the pokemons cards, of the first generation, can be seen and filtered by type(or partial type).


![](https://i.ibb.co/sbcxc1V/Screen-Shot-2019-10-03-at-18-08-32.png)


The second button will take you to the game page, which has most of the logic required to make it work.
The main functionalities that I have been implemented are: 
- Randomly deal 6 cards into _two hands_ 
OPS! Actually three hands!
You will find three hardcoded players in the game; Marco, Anthony and Louise. But the logic allows you to play with even more  players but minumum two of course!
 - Show the first card in each hand, and the other covered 
 - Show the of buttons which reflect the pokemons attributes to play with 
 - The first player (only the first for now) will be able to select the attribute to play with and the winner will be
declared in each player's panel.

For now is only possible play the first turn, but the turn logic is mostly done and you can already see lots of game funtionalities just landing on the page and pressing the attributes buttons.

![](https://i.ibb.co/TgxMZPt/Screen-Shot-2019-10-03-at-18-40-08.png)
![](https://i.ibb.co/XbDLGpJ/Screen-Shot-2019-10-03-at-18-56-56.png)


### Approach

First of all I have carefully read the game rules and the tasks to be developed.
I have then set up the working environment ejecting and setting CRA to use decorators with Mobx and installed few other packages like prop-types and react-router.

I have decided to use Mobx as it is the state management library I have been using for the past year and I feel comfortable with. Besides I think I won't have any problems on learning new sate management libraries such as Redux.
'prop-types' is a super useful package I daily use and 'react-router' helped me to extend the application to more pages.

Successively I have started with the first tasks creating a basic PokemonCard component which in short time became part of the PokemonCardsList and PlayerHand components.
I have styled the JSX using CSS modules and Flexbox.

The more complicated part was architecting the Pokemon Top Trump game. I had to carefully think about the folder and file structure and how the components and stores would have more or less comunicated. To help me on that I did draw a schema in a paper.

I could have spent more time testing and making the app more styled but I prefered focus on the react/javascript functionality.
I've anyway nicely styled the cards, the back of the cards and used flexbox to nicely dispose the html elements.
I have also created one basic Jest test for one function of the pokemonTopTrumpsStore.


### How to use

1) Clone the project
```
git clone https://github.com/Vanals/Pokemon_Top_Trumps.git
```
2) Changes into the project directory on ur computer via Terminal
```
cd /Pokemon_Top_Trumps
```
3) Install the dependencies
```
yarn install
```
4) Run the server
```
yarn start
```
5) Navigate in the website through the two buttons placed below the home page!

x) To run the test
```
yarn test
```
