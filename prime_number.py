def is_prime(n: int) -> bool:
	if(n<=1): return False
	if(n==2): return True

	prime = True;
	for i in range(2, n):
		if(n % i == 0):
			prime = False
			break

	return prime