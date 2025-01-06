---
title: "[✅ Beats 💯] LeetCode 1052. Grumpy Bookstore Owner - Easy Solution | Go"
publishedAt: '2024-06-20'
category: LeetCode
tags: 
	- Go
	- Leetcode
	- Array
	- Sliding Window
summary: 'There is a bookstore owner that has a store open for `n` minutes. Every minute, some number of customers enter the store. You are given an integer array `customers` of length `n` where `customers[i]` is the number of the customer that enters the store at the start of the <code>i<sup>th</sup></code> minute and all those customers leave after the end of that minute.'
banner: /images/banner/posts/1052-grumpy-bookstore-owner.webp
alt: "[✅ Beats 💯] LeetCode 1052. Grumpy Bookstore Owner - Easy Solution | Go"
mathjax: true
---

Link 👉🏻 [1052. Grumpy Bookstore Owner](https://leetcode.com/problems/grumpy-bookstore-owner/)

![[✅ Beats 💯] LeetCode 1052. Grumpy Bookstore Owner - Easy Solution | Go](/images/banner/posts/1052-grumpy-bookstore-owner.webp)

### Description


There is a bookstore owner that has a store open for `n` minutes. Every minute, some number of customers enter the store. You are given an integer array `customers` of length `n` where `customers[i]` is the number of the customer that enters the store at the start of the <code>i<sup>th</sup></code> minute and all those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy. You are given a binary array grumpy where `grumpy[i]` is `1` if the bookstore owner is grumpy during the <code>i<sup>th</sup></code> minute, and is `0` otherwise.

When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise, they are satisfied.

The bookstore owner knows a secret technique to keep themselves not grumpy for `minutes` consecutive minutes, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.

 

**Example 1:**

- Input:` customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3`
- Output: `16`
- Explanation: `The bookstore owner keeps themselves not grumpy for the last 3 minutes. The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.`

**Example 2:**

- Input: `customers = [1], grumpy = [0], minutes = 1`
- Output: `1`
 

**Constraints:**

- `n == customers.length == grumpy.length`
- <code>1 <= minutes <= n <= 2 * 10<sup>4</sup></code>
- `0 <= customers[i] <= 1000`
- `grumpy[i]` is either `0` or `1`.

### Intuition

Not grumpy for minutes consecutive minutes, we need to subtract the previous satisfaction if they were grumpy.

### Approach

1. Add the satisfaction from non-grumpy as the base satisfaction.
2. Compute the grumpy satisfaction then we have to make sure we can find the maximum satisfaction in the consecutive minutes.
3. If the current iteration is greater than the minutes and the previous iteration was grumpy, we need to subtract the previous satisfaction.
4. Make sure the satisfaction with Secret Technique is the maximum satisfaction.
5. Return the sum of the base satisfaction and the maximum satisfaction with Secret Technique.

```go
if i >= minutes && grumpy[i-minutes] == 1 {
    satisfiedWithTech -= customers[i-minutes] 
}
```

### Complexity
- Time complexity: $O(n)$

- Space complexity: $O(n)$

### Code

```go
func maxSatisfied(customers []int, grumpy []int, minutes int) int {
	baseSatisfied        := 0
	satisfiedWithTech    := 0
	maxSatisfiedWithTech := 0

	for i := 0; i < len(customers); i++ {
		if grumpy[i] == 1 {
			satisfiedWithTech += customers[i]
		} else {
			baseSatisfied += customers[i]
		}

		if i >= minutes && grumpy[i-minutes] == 1 {
			satisfiedWithTech -= customers[i-minutes] // because not grumpy for minutes consecutive minutes
		}

		if satisfiedWithTech > maxSatisfiedWithTech {
			maxSatisfiedWithTech = satisfiedWithTech
		}
	}

	return baseSatisfied + maxSatisfiedWithTech
}
```
