// JavaScript uses (mainly) three types for primitives: string, number, boolean.
// For numbers JS engine internally uses integers and floats to speed up execution.

// 1. number to string: ''+ expression
{
    var x = 12;     // typeof x -> number
    var y = ''+ 12; // typeof y -> string ('12')
}

// 2. string to number: + expression
{
    var x = '12';   // typeof x -> string
    var y = +x;     // typeof y -> number (12)
}

// 3. boolean to number: + expression
{
    var x = true;   // typeof x -> boolean
    var y = +x;     // typeof y -> number (1)
}

// 4. number to boolean: !! expression
{
    var x = 0;      // typeof x -> number
    var y = !!w;    // typeof y -> boolean (false)
}

// 5. number: force float to integer: ~~ expression
{
    var x = 12.34;  // typeof x -> number
    var y = ~~x;    // typeof y -> number (12)
}
