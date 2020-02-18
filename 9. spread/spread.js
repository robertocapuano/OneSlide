// ES6 introduces two new operators: ...spread and ..rest
// They have same syntax but opposite behavior.

// 1. rest
// Used only in function definition: collects all remaining
// arguments in a vector

// f('x', 'a', 'b')
function f( x, ...args )
{
	console.log( args ); // --> [ 'a', 'b' ]
}

// 2. spread
// Used to flat arrays and objects and produce a copy object

// Shallow Copy of Object:
{
	var a = { x: 0, y: 1 };
	var a1 = { ...a };

	a==a1; // --> false
	
	a.x = 1;
	a1.x; // --> 0
}

// Shallow Copy of Array:
{
	var b = [ 'a', 'b' ];
	var b1 = [ ...b ];
	
	b[0] = 'c';
	b1[0]; // --> 'a'
}

// Fastest Way to have a copy of Array is slice() method
{
	var a = [ 0, 1, 2];
	var b = a.slice(0);
	
	b[0] = 10; 	// --> 10
	a[0]; 		// --> 0
}
