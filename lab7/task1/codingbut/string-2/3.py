def cat_dog(s):
    return s.count("cat") == s.count("dog")

cat_dog('catdog')        # True
cat_dog('catcat')        # False
cat_dog('1cat1cadodog')  # True
