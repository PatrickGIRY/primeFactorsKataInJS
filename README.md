# Prime factors kara in JS
## Transformation Priority Prime

[See the Uncle Bob blog](https://8thlight.com/blog/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html)
[Norwegian Developers Conference 2011 5 workshop video](https://www.youtube.com/watch?v=B93QezwTQpI)

Refactoring are simple operations that change the structure of the code without changing it's behavior.
Transformations are simple operation that change the behavior of code.
Transformations can be used as the sole means for passing the currently failing test in the red/green/refactor cycle. 
As the test get more specific, the production get more generic.

## Transformation

    ( {}             –> undefined    ) no code at all->code that employs undefined
    ( undefined      -> constant     )
    ( constant       -> constant+    ) a simple constant to a more complex constant
    ( constant       -> scalar       ) replacing a constant with a variable or an argument
    ( statement      -> statements   ) adding more unconditional statements.
    ( unconditional  -> if           ) splitting the execution path
    ( scalar         -> array        )
    ( array          -> container    )
    ( statement      -> recursion    )
    ( if             -> while        )
    ( expression     -> function     ) replacing an expression with a function or algorithm
    ( variable       -> assignment   ) replacing the value of a variable.


