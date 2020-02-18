// Stack vs Heap Memory
// Process Memory is divided in Heap and Stack memories

// Stack Memory: contains only local variables and function value returns.
// Memory is allocated at variable declaration of the executed function

void f()
{
	int a;
	char b;
	g();
}

int g()
{
	float x, y;
	return 1;
}

// These declaration are allocated at the end the stack during execution:
// ... | { a, b } | { x, y }  | 
// and deallocated when functions return.
// ... | { a, b } | 1 |

// Heap is a memory pool shared between functions invokation
// declaration are allocated using new operator
{
	int *ip = new int;
}
//	ip -> | int |
//	free -> | ..... |




