# def transpose(matrix):
    
#     transposed = []
    
    
#     for col in range(len(matrix[0])):
        
#         new_row = []
        
        
#         for row in matrix:
#             new_row.append(row[col])
        
        
#         transposed.append(new_row)
    
#     return transposed


# matrix = [
#     [1, 2, 3],
#     [4, 5, 6]
# ]

# transposed_matrix = transpose(matrix)
# print(transposed_matrix)

# def diamond(n):
#     if n <= 0 or n % 2 == 0:
#         return None
    
#     result = ''
    
#     for num in range(1 , n + 1 , 2 ):
#         spaces = ' ' * ((n-num)//2)
#         result += spaces + '*' * num + '\n'
        
#     for i in range (n-2,0,-2):
#         spaces = ' ' * ((n-num)//2)
#         result += spaces + '*' * i + '\n'
        
#     return result


# def matrix_addition(matrix1, matrix2):
#     n = len(matrix1)
#     result = [[0] * n for _ in range(n)]
#     for i in range(n):
#         for j in range(n):
#             result[i][j] = matrix1[i][j] + matrix2[i][j]
#     return result

# matrix1 = [
#     [1, 2, 3],
#     [3, 2, 1],
#     [1, 1, 1]
# ]

# matrix2 = [
#     [2, 2, 1],
#     [3, 2, 3],
#     [1, 1, 3]
# ]

# print(matrix_addition(matrix1, matrix2))