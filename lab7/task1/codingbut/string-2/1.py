def double_char(s):
    result = ""
    for c in s:
        result += c * 2
    return result

double_char('The')      # 'TThhee'
double_char('AAbb')     # 'AAAAbbbb'
double_char('Hi-There') # 'HHii--TThheerree'