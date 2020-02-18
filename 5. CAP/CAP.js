// CAP theorem
// In a distributed DB there are 3 properties:
// Consistency: Every Read receives most recent Write
// Availability: Every Read receives a Response
// Partition Tolerance: In presence of a Network Fault Every Read receives a Response

//  Brewer formulation: Having a triangle with these properties as vertices

			Consistency
			
		/       			\
		
	Availability		--	Partition tolerance

// Only one side can be choosen: 2 out of 3 properties

// Fowler formulation:
// In case of  Network Partition you can have only one property between Availability and Consistency

							1. Availability
	Network Partition   	 = > 
							2. Consistency

// Directly deductible
