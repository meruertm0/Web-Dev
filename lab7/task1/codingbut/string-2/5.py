def end_other(a, b):
    a = a.lower()
    b = b.lower()
    return a.endswith(b) or b.endswith(a)

end_other('Hiabc', 'abc')   # True
end_other('AbC', 'HiaBc')   # True
end_other('abc', 'abXabc')  # True