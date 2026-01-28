const foodData = [
    {
        name: "Samgyeopsal (Pork Belly BBQ)",
        koreanName: "삼겹살",
        category: "BBQ",
        image: "https://images.unsplash.com/photo-1595270966459-717db445037d?q=80&w=800&auto=format&fit=crop",
        desc: "Thick slices of pork belly grilled at your table. It's a cornerstone of Korean food culture, often enjoyed with friends and soju.",
        dont: "Don't eat the meat plain or with a fork. Never, ever let the garlic burn on the grill!",
        do: "Make a 'ssam' (wrap). Place a piece of lettuce in your palm, add grilled meat, a slice of garlic, and a dab of ssamjang (red bean paste). Wrap it up and eat it in one glorious bite."
    },
    {
        name: "Bibimbap (Mixed Rice)",
        koreanName: "비빔밥",
        category: "Rice",
        image: "https://images.unsplash.com/photo-1584278858536-5252a2334710?q=80&w=800&auto=format&fit=crop",
        desc: "A colorful and healthy rice bowl topped with various seasoned vegetables, a fried egg, and your choice of protein (beef, chicken, or tofu).",
        dont: "Don't politely nibble at the ingredients separately. This is a dish that demands to be mixed.",
        do: "Add gochujang (red chili paste) to your liking, then use your spoon to vigorously mix all the ingredients together until the rice is evenly coated. Every spoonful should have a bit of everything."
    },
    {
        name: "Kimchi-jjigae (Kimchi Stew)",
        koreanName: "김치찌개",
        category: "Stew",
        image: "https://images.unsplash.com/photo-1583561958223-958b4b7405e6?q=80&w=800&auto=format&fit=crop",
        desc: "A fiery and comforting stew made with aged kimchi, pork, and tofu. It's a soulful dish, perfect for a cold day.",
        dont: "Don't just sip the broth like it's a soup. The real flavor is in the combination of ingredients.",
        do: "Spoon the stew over your rice, mixing it in. Make sure to get a piece of kimchi, pork, and tofu in each bite."
    },
    {
        name: "Chimaek (Chicken & Beer)",
        koreanName: "치맥",
        category: "Fried Chicken",
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
        desc: "The iconic pairing of Korean fried chicken and cold beer (maekju). The chicken is known for its incredibly crispy skin and juicy meat.",
        dont: "Don't bother with a knife and fork. Don't be afraid to get your hands dirty.",
        do: "Use your hands or the provided tongs. Order 'ban-ban' (half and half) to try both original and seasoned (yangnyeom) chicken. Don't forget the pickled radish for a refreshing crunch."
    },
    {
        name: "Tteokbokki (Spicy Rice Cakes)",
        koreanName: "떡볶이",
        category: "Street Food",
        image: "https://images.unsplash.com/photo-1597154568291-1e941452c9a6?q=80&w=800&auto=format&fit=crop",
        desc: "Chewy rice cakes and fish cakes simmered in a sweet and spicy gochujang-based sauce. The ultimate Korean comfort street food.",
        dont: "Don't just eat the rice cakes. The sauce is where the magic is.",
        do: "Order extra toppings like a boiled egg or 'twigim' (fried snacks) to dip into the rich sauce. Use your spoon to scoop up the sauce with every bite."
    },
    {
        name: "Bulgogi (Marinated Beef BBQ)",
        koreanName: "불고기",
        category: "BBQ",
        image: "https://images.unsplash.com/photo-1548651717-3844f2c0b0f0?q=80&w=800&auto=format&fit=crop",
        desc: "Thinly sliced beef marinated in a sweet and savory sauce of soy sauce, sugar, and pear juice. It's a universally loved Korean dish.",
        dont: "Don't overcook it. The meat is thin and cooks quickly, so keep an eye on it.",
        do: "Eat it in a 'ssam' with rice, or simply enjoy it on its own. The leftover sauce is delicious mixed with rice."
    },
    {
        name: "Jajangmyeon (Black Bean Noodles)",
        koreanName: "자장면",
        category: "Noodle",
        image: "https://images.unsplash.com/photo-1628751505370-13f591f24d78?q=80&w=800&auto=format&fit=crop",
        desc: "A Korean-Chinese noodle dish with a thick, savory black bean sauce, diced pork, and vegetables. It's a popular delivery food.",
        dont: "Don't try to eat the noodles and sauce separately. You'll get weird looks.",
        do: "Mix it thoroughly with your chopsticks and spoon until every strand is coated in the dark, glossy sauce. Slurping is encouraged!"
    },
    {
        name: "Sundubu-jjigae (Soft Tofu Stew)",
        koreanName: "순두부찌개",
        category: "Stew",
        image: "https://images.unsplash.com/photo-1551608695-10e3d647a7e8?q=80&w=800&auto=format&fit=crop",
        desc: "A bubbling hot and spicy stew made with extra soft, silken tofu, seafood or meat, and vegetables. It's served boiling in an earthenware pot.",
        dont: "Don't eat it too fast—it's incredibly hot! Don't let the raw egg just sit there.",
        do: "Crack the raw egg provided into the stew as soon as it arrives and stir it in to cook. Mix the soft tofu and broth with your rice."
    },
    {
        name: "Hotteok (Sweet Korean Pancake)",
        koreanName: "호떡",
        category: "Street Food",
        image: "https://plus.unsplash.com/premium_photo-1664472688488-617f65427d1a?q=80&w=800&auto=format&fit=crop",
        desc: "A popular winter street food, this is a flour pancake filled with a sweet mixture of brown sugar, honey, chopped peanuts, and cinnamon.",
        dont: "Don't take a huge bite right away. The molten sugar inside is extremely hot.",
        do: "Carefully nibble the edge to let some steam out first. The combination of the chewy dough and sweet, nutty filling is addictive."
    }
];