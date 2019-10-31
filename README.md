## **c0in** Documentation

c0in will be a financial tracking web application that visualises the 
users finances such as graphing incomings and outgoings and giving them
a live overview.

>Git Project link - https://github.com/users/CallumIllsley/projects/1

### Libraries used
> #### Semantic UI React - https://react.semantic-ui.com/usage
> Semantic UI will be used for the visual design of the application
>
> #### React-Redux - https://react-redux.js.org/
> React redux used for state management across the application

### Helpful snippets

> Setting redux state -         
> ```<button onClick={ () => dispatch( addIncome({type : "Fuel", name : 'Fueled car', amount : 3, id : 3}))}>TEST ME</button> ```
>
> Getting redux state - <br/>
> ```const income = useSelector(state => state.income)```
