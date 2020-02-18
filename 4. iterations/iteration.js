// There are two types of iterations: Outer loops, Inner loops.

// 1. In imperative prog. languages the most used loop is the outer one
{
	for ( var i = 0; i < 10; ++i )
	{
		// do something
	}
}

// 2. It has the advantage that could be break at any moment
{
	for ( var i = 0; i < 10; ++i )
	{
		if (i==3)
			break; // return i;
	}
}

// 3. In functional languages is widespread used the inner loop
{
	var A = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	
	A.forEach( ( i ) => { 
		// do something
	});
}

// 4. Loop is not breakable but could be pipelined
{
	var A = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	
	A.filter( (i) => !!(i%2); ).forEach( ( i ) => { 
		// do something
	});
}

// Outer Loop is more verbose: it needs a variable for the counter
// Inner Loop is more concise but is not breakable.

