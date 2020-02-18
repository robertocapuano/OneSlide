// JavaScript uses two symbols to denote the lack of information: undefined, null
// This causes confusion in beginners.
// There are 2 cases significats: variables and object properties.

// 1. undefined: Variable declaration
// When a variable is declared without an assignment.
{
    var a;
    a; // --> undefined
}
// A variable could be defined with null value
{
    var a = null; // --> null
}

// Warning: using a varibale not declared produce an Error
{ 
    a; // --> ReferenceError
}

// 2. undefined: Object properties
// Object are associative arrays: a set of key/value pairs.
// When a key is not defined produces undefined.

{
    var a = {};
    a.x; // --> undefined
}

// null is used to point out that key is present but value is missing.
{ 
    var a = { x: null };

    a.x; // -> null
}

