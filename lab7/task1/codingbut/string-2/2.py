def count_hi(s):
    count = 0
    for i in range(len(s) - 1):
        if s[i:i+2] == "hi":
            count += 1
    return count

count_hi('abc hi ho')  # 1
count_hi('ABChi hi')   # 2
count_hi('hihi')       # 2