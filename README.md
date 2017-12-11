# Prime factors kara in JS
## Transformation Priority Prime

[See the Uncle Bob blog](https://8thlight.com/blog/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html)
[Norwegian Developers Conference 2011 5 workshop video](https://www.youtube.com/watch?v=B93QezwTQpI)

Refactoring are simple operations that change the structure of the code without changing it's behavior.
Transformations are simple operation that change the behavior of code.
Transformations can be used as the sole means for passing the currently failing test in the red/green/refactor cycle. 
As the test get more specific, the production get more generic.

## Transformation

    no code   -> undefined
    undefined -> constant
    constant  -> scalar
    statement -> if
    scalar    -> vector
    statement -> recursion
    if        -> while
    statement -> function
    stateless -> assignment


