def left2(s):
    return s[2:] + s[:2]

left2('Hello')  # 'lloHe'
left2('java')   # 'vaja'
left2('Hi')     # 'Hi'