Binary search: also known as half interval search, logarithmic search or binary chop

 - It searches for a position of target value in a sorted array. It compares the target value of a middle element of the
array. 
 - If they are equal  the half in which the target cannot lie is eliminated and the search continues on the remaining half, 
 again taking the middle element to compare to the target value, and repeating this until the target value is found. 
 - If the search ends with the remaining half being empty, the target is not in the array.
 
 It's a logarithmic search hence making it OLog(n)