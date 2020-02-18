// PECS: Producer Extends Consumer Super
// Type variable in Java could be bounded with Super and Extends keywords

// A upper bound is defined by extends keyword: all elements of the collection extends this base type.
// A Producer Collection is a collection where elements can only be read.
void f(Collection< ? extends Number > p )
{
	for ( Number n : p )
	{
		; // something
	}

	p.add( 4 );  // Error p is read-only
}

// A lower bound is defined by super keyword: all elements of the collection
// A Consumer Collection is a collection where elements can only be added
void g(Collection< ? super Number > c )
{
	c.add( 4 );	// Integer
	c.add( 4.f) ; 	// Float
	
	Number n = c.get(0); // Error c is write-only
}

// Bounded types defines an hierarchy
// Assignement to a subtype is valid (variance)
{
	List<Float> fl = Arrays.asList( 4.f, 5.f );
	List<? extends Number> nl = fl;
}





