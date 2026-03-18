def mutate_string(string, position, character):
    return string[:position] + character + string[position+1:]

s = input()
position, character = input().split()
position = int(position)

print(mutate_string(s, position, character))