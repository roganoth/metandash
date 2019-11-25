# metandash
bamazon homework

This app allows the user to see the inventory of a mock store and is then prompted to order an item from the list by the item id and the number of items they wish to buy. This app simulates a bare bones store ui. 

I ran into a number of problems learning to work with mysql such as refreshing authentification due to autho:mode errors, and using the coding mysql.escape(var) to use variables for queries. I was able to solve them however, and have a working program for challenge 1. 

One other oddity I encountered was trying to set a variable to a response term minus another defined variable and getting a NaN response in the log but if I logged just the math it logged correctly so I just put the math in the query and it worked.

![returned table](/images/inventory.jpg)
![user prompts](/images/inquirer)
![response to purchase request](/images/purchaseComplete)(/images/purchaseIncomplete)
