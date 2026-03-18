def common_end(a, b):
    return a[0] == b[0] or a[-1] == b[-1]

common_end([1, 2, 3], [7, 3])     # True
common_end([1, 2, 3], [7, 3, 2])  # False
common_end([1, 2, 3], [1, 3])     # True