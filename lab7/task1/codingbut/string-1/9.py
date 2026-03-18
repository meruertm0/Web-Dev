def combo_string(a, b):
    if len(a) < len(b):
        return a + b + a
    else:
        return b + a + b
    
combo_string('Hello', 'hi')   # 'hiHellohi'
combo_string('hi', 'Hello')   # 'hiHellohi'
combo_string('aaa', 'b')      # 'baaab'    