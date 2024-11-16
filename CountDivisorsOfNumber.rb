def divisors(n)
  return 0 if n == 0
  
  count = 0
  (1..Math.sqrt(n).to_i).each do |i|
    if n % i == 0
      count += 1 # count i as a divisor
      count += 1 if i != n / i # count n / i as a divisor if it's different
    end
  end
  count
end
