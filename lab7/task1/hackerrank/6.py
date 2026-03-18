n = int(input())
lst = []

for _ in range(n):
    cmd = input().split()

    if cmd[0] == "insert":
        i = int(cmd[1])
        e = int(cmd[2])
        lst.insert(i, e)

    elif cmd[0] == "print":
        print(lst)

    elif cmd[0] == "remove":
        e = int(cmd[1])
        lst.remove(e)

    elif cmd[0] == "append":
        e = int(cmd[1])
        lst.append(e)

    elif cmd[0] == "sort":
        lst.sort()

    elif cmd[0] == "pop":
        lst.pop()

    elif cmd[0] == "reverse":
        lst.reverse()