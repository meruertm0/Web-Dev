def make_tags(tag, word):
    return "<" + tag + ">" + word + "</" + tag + ">"
make_tags('i', 'Yay')     # "<i>Yay</i>"
make_tags('i', 'Hello')   # "<i>Hello</i>"
make_tags('cite', 'Yay')  # "<cite>Yay</cite>"