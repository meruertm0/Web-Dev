def print_rangoli(size):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    width = 4 * size - 3
    lines = []

    for i in range(size):
        s = "-".join(alphabet[size-1:i:-1] + alphabet[i:size])
        lines.append(s.center(width, "-"))

    print("\n".join(lines[::-1] + lines[1:]))


n = int(input())
print_rangoli(n)