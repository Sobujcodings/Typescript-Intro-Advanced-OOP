
* ## 1.What are some differences between interfaces and types in TypeScript?

type and interface are ways to define custom types, they describe the shape of data, specialy for object, usually we use type alias for all type of data like primitive and non-primitive but interface cant define primitive data type, we usually write object, array, function using interfaces. type is extended using & and interface is extended using extend keyword. Interface is used with implements and type is too but for type its less common, another difference is interface is more readable in IDE rather than type, sometimes type is harder to trace in complex cases.



* ## 3.Explain the difference between any, unknown, and never types in TypeScript ?

any: any data type is used when data type can be any type which has no type safety, allows any value.
unknown: unknown is used when we dont know the exact data type here, its type safe version of any. it can take also take any type data.
never: represent values that doesn't occur, we use it mostly when we throw a function that never return anything, never type make sure that any function throw a error or return no values.

