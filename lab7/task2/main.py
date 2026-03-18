from models import Animal, Dog, Cat


def main():
    animal = Animal("GenericAnimal", 5, "gray")
    dog = Dog("Buddy", 3, "brown", "Labrador")
    cat = Cat("Misty", 2, "white", True)

    animals = [animal, dog, cat]

    for a in animals:
        print(a)
        print(a.speak())   # polymorphism
        print(a.move())
        print()

    print(dog.fetch())
    print(cat.climb())


if __name__ == "__main__":
    main()