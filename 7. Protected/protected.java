// Protected by whom?
// Protected keyword in Java is ofter misunderstood.
// Consider this example:

// package p;
// class A { protected int x; }

// package q;
// class B extends A {
// 	void f()
// 	{
// 		B b = this;
// 		b.x = 0;  
// 	}
// }
// Assignment instruction causes an error but it seems violate protected definition
// B is a sub-class of A but cannot access a protected field of A

// Using a variable of type B the error is corrected
// void f()
// {
// 	B b = this;
// 	b.x = 0;  // correct
// }

// This happens to protect a sub-class from others inheritance branches
// Consider this case:
package m;
class C extends A {
	void f() {
		A a = new B();
		a.x = 0;  // error
	}
}
					
						A
					  /	  \
				     B	   C

// C and B have no direct relation they only share an ancestor.
// If the assignment instruction was permitted 
// C class could modify the internal representation of B
// C class could contains malicious code and alter the behaviour of the Program.
