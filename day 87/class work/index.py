# from collections import Counter

# def missing_values(seq):
#    
#     count = Counter(seq)
    
#     x = None 
#     y = None 
    
#      
#     for key, value in count.items():
#         if value == 1:
#             x = key
#         elif value == 2:
#             y = key
    
#     
#     return x * x * y








# def largest_pair_sum(arr):
    
#     arr.sort()
    
    
    # return arr[-1] + arr[-2]






# from bisect import bisect_left

# def smaller(arr):
#     result = []
#     sorted_list = []
    
    
#     for num in reversed(arr):
        
#         count = bisect_left(sorted_list, num)
#         result.append(count)
        
        
#         sorted_list.insert(bisect_left(sorted_list, num), num)
    
    
#     return result[::-1]


# print(smaller)







