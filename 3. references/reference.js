// In JS every Object is an associative Array {}: a set of key/value pairs.

// 1. Each Object could have many references pointing to it
{
	var a = {};
	
	var r1 = a;
	var r2 = a;
}

// 2. Changes of an Object using a reference are visible with others references
{
	a.x = 0;
	
	r1.x; 	// --> 0
	r2.x; 	// --> 0
}

// 3. To have another  (shallow) copy of the original Object use Object.assign()
{
	a.x = 0;
	var r1 = Object.assign( {}, a );

	r1.x = 1; 	// --> 1
	a.x; 		// --> 0
}

// 4. With ES6 is possible to have a (shallow) copy of an Object via Spread Operator: ...
{
	r2 = { ...a };
	
	r2.x = 2;	// --> 2
	a.x; 		// --> 0;
}

// 5. To have a (shallow) copy of an Indexed Array the fastest way is slice() function
{
	var a = [ 0, 1, 2];
	var b = a.slice(0);
	
	b[0] = 10; 	// --> 10
	a[0]; 		// --> 0
}
