
const foods = [
  {
    id: 1,
    name: "Bibimbap",
    koreanName: "비빔밥",
    emoji: "🍚",
    category: "Rice",
    howToEat: "Mix all the ingredients and gochujang perfectly before eating.",
    dont: "Don't pick out your least favorite vegetables; the harmony is key.",
    tip: "Add a fried egg and a dash of sesame oil for extra flavor and richness."
  },
  {
    id: 2,
    name: "Kimchi Jjigae",
    koreanName: "김치찌개",
    emoji: "🍲",
    category: "Stew",
    howToEat: "Serve hot with rice, scooping soup and ingredients together.",
    dont: "Don't eat it cold; it loses its hearty, warming essence.",
    tip: "The older the kimchi, the deeper the flavor. Pair with a bowl of warm rice."
  },
  {
    id: 3,
    name: "Samgyeopsal",
    koreanName: "삼겹살",
    emoji: "🥓",
    category: "BBQ",
    howToEat: "Grill pork belly, cut, wrap in lettuce with ssamjang, garlic, and kimchi.",
    dont: "Don't overcook or undercook the meat; aim for crispy edges and juicy interior.",
    tip: "Grill kimchi and garlic alongside the meat for an extra burst of flavor."
  },
  {
    id: 4,
    name: "Tteokbokki",
    koreanName: "떡볶이",
    emoji: "🌶️",
    category: "Street Food",
    howToEat: "Eat the chewy rice cakes and fish cakes covered in spicy gochujang sauce.",
    dont: "Don't underestimate the spice; start small if you're sensitive.",
    tip: "Dip fried items (twigim) or gimbap into the leftover sauce for maximum enjoyment."
  },
  {
    id: 5,
    name: "Japchae",
    koreanName: "잡채",
    emoji: "🍝",
    category: "Noodle",
    howToEat: "Enjoy the sweet and savory glass noodles with various stir-fried vegetables and meat.",
    dont: "Don't let it get cold; it's best served warm to appreciate the texture.",
    tip: "A perfect side dish for any meal, and often served during special occasions."
  },
  {
    id: 6,
    name: "Bulgogi",
    koreanName: "불고기",
    emoji: "🥩",
    category: "BBQ",
    howToEat: "Grill or pan-fry the thinly sliced marinated beef until tender, then eat with rice.",
    dont: "Don't overcook the meat; it should remain juicy and flavorful.",
    tip: "Wrap in lettuce with a little ssamjang for a fresh bite."
  },
  {
    id: 7,
    name: "Gimbap",
    koreanName: "김밥",
    emoji: "🍙",
    category: "Street Food",
    howToEat: "Eat bite-sized rolls of rice and various ingredients wrapped in seaweed.",
    dont: "Don't unroll it; it's designed for a perfect single bite.",
    tip: "Great for picnics, lunchboxes, or a quick and satisfying snack."
  },
  {
    id: 8,
    name: "Sundubu Jjigae",
    koreanName: "순두부찌개",
    emoji: "🌶️",
    category: "Stew",
    howToEat: "Mix the soft tofu gently and crack an egg into the boiling stew right before eating.",
    dont: "Don't touch the sizzling stone pot directly; it stays hot.",
    tip: "Add some roasted seaweed flakes (gim-garu) to your rice for an extra savory kick."
  },
  {
    id: 9,
    name: "Pajeon",
    koreanName: "파전",
    emoji: "🥞",
    category: "Anju",
    howToEat: "Dip slices of the savory green onion pancake in soy sauce and enjoy.",
    dont: "Don't eat it cold; it loses its crispiness and flavor.",
    tip: "Best enjoyed on a rainy day with a glass of makgeolli (rice wine)."
  },
  {
    id: 10,
    name: "Bingsu",
    koreanName: "빙수",
    emoji: "🍧",
    category: "Dessert",
    howToEat: "Gently mix the shaved ice and various toppings together.",
    dont: "Don't eat it too fast, or you'll get a brain freeze.",
    tip: "Share with friends, as it's often a generous portion, perfect for summer."
  },
  {
    id: 11,
    name: "Ramyeon",
    koreanName: "라면",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "Slurp the noodles and rich broth, adding optional toppings like egg or cheese.",
    dont: "Don't overcook the noodles; they should still have a good chew.",
    tip: "Customizing with extra ingredients like kimchi, tteok, or spam makes it even better."
  },
  {
    id: 12,
    name: "Jajangmyeon",
    koreanName: "짜장면",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "Mix the thick black bean sauce thoroughly with the noodles until evenly coated.",
    dont: "Don't wear white while eating; splashes are inevitable.",
    tip: "Pair it with tangsuyuk (sweet and sour pork) for the ultimate Korean-Chinese combo."
  },
  {
    id: 13,
    name: "Naengmyeon",
    koreanName: "냉면",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "Cut the long buckwheat noodles with scissors, then add vinegar and mustard to taste.",
    dont: "Don't try to eat the uncut noodles; they are traditionally very long.",
    tip: "A refreshing dish, especially popular during hot summer months to cool down."
  },
  {
    id: 14,
    name: "Galbi Jjim",
    koreanName: "갈비찜",
    emoji: "🍖",
    category: "Stew",
    howToEat: "Savor the tender, fall-off-the-bone braised short ribs with rice.",
    dont: "Don't expect it to be spicy; it's generally savory and slightly sweet.",
    tip: "Often served during holidays or special gatherings due to its rich flavor."
  },
  {
    id: 15,
    name: "Kimchi Bokkeumbap",
    koreanName: "김치볶음밥",
    emoji: "🍚",
    category: "Rice",
    howToEat: "Mix the fried rice with kimchi, usually topped with a fried egg and seaweed.",
    dont: "Don't use bland kimchi; the sourer, the better for this dish.",
    tip: "Add a slice of cheese on top while it's still hot for a melty, creamy addition."
  },
  {
    id: 16,
    name: "Mandu",
    koreanName: "만두",
    emoji: "🥟",
    category: "Street Food",
    howToEat: "Enjoy boiled, steamed, or fried dumplings, often with a soy-vinegar dipping sauce.",
    dont: "Don't confuse them with Chinese dumplings; Korean mandu have unique fillings.",
    tip: "Mandu can be a meal on its own or added to soups like tteokguk."
  },
  {
    id: 17,
    name: "Hotteok",
    koreanName: "호떡",
    emoji: "🍯",
    category: "Street Food",
    howToEat: "Bite carefully into the warm, chewy pancake filled with hot brown sugar syrup.",
    dont: "Don't eat too fast; the molten sugar filling can burn your tongue.",
    tip: "A beloved winter street snack, especially delicious fresh off the griddle."
  },
  {
    id: 18,
    name: "Jokbal",
    koreanName: "족발",
    emoji: "🐖",
    category: "Anju",
    howToEat: "Wrap slices of braised pig's trotters in lettuce with ssamjang, garlic, and kimchi.",
    dont: "Don't be squeamish about the texture; it's incredibly tender and flavorful.",
    tip: "A classic anju, perfect with soju or makgeolli, especially late at night."
  },
  {
    id: 19,
    name: "Bossam",
    koreanName: "보쌈",
    emoji: "🍖",
    category: "Anju",
    howToEat: "Wrap steamed pork belly slices in fresh lettuce or kimchi with various condiments.",
    dont: "Don't dip directly into the ssamjang; spread a little on your wrap.",
    tip: "Enjoy with a variety of fresh kimchi and salted shrimp sauce (saeujeot)."
  },
  {
    id: 20,
    name: "Janchi Guksu",
    koreanName: "잔치국수",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "Savor the light, clear anchovy broth with thin wheat noodles and various toppings.",
    dont: "Don't add too much gochujang; the delicate broth flavor is key.",
    tip: "A comforting dish often served at celebrations or as a light, warm meal."
  },
  {
    id: 21,
    name: "Doenjang Jjigae",
    koreanName: "된장찌개",
    emoji: "🍲",
    category: "Stew",
    howToEat: "Eat with rice, mixing spoonfuls of stew into your rice or eating separately.",
    dont: "Don't expect it to be spicy; its charm is the savory fermented soybean paste.",
    tip: "A staple in Korean homes, often accompanying grilled meat like samgyeopsal."
  },
  {
    id: 22,
    name: "Haemul Pajeon",
    koreanName: "해물파전",
    emoji: "🥞",
    category: "Anju",
    howToEat: "Dip the savory seafood and green onion pancake in soy sauce.",
    dont: "Don't let it get soggy; it's best when the edges are crispy.",
    tip: "The perfect rainy day food, especially with a glass of makgeolli."
  },
  {
    id: 23,
    name: "Yukhoe",
    koreanName: "육회",
    emoji: "🥩",
    category: "Anju",
    howToEat: "Mix the raw beef with the egg yolk and pear slices before eating.",
    dont: "Don't eat if you are sensitive to raw meat; ensure it's extremely fresh.",
    tip: "A delicate and savory dish, often enjoyed with soju."
  },
  {
    id: 24,
    name: "Gopchang",
    koreanName: "곱창",
    emoji: "🍢",
    category: "BBQ",
    howToEat: "Grill the beef or pork intestines until crispy and chewy, then dip in sauce.",
    dont: "Don't be afraid of the texture; it's a popular delicacy for adventurous eaters.",
    tip: "Best enjoyed late at night with friends and plenty of soju."
  },
  {
    id: 25,
    name: "Bokkeumbap",
    koreanName: "볶음밥",
    emoji: "🍚",
    category: "Rice",
    howToEat: "Eat the stir-fried rice, often made with leftover ingredients from a main dish.",
    dont: "Don't expect it to be plain; it's usually packed with flavor and sometimes spicy.",
    tip: "A common way to finish a meal, especially after a hot pot or BBQ, by frying rice in the remaining sauce."
  },
  {
    id: 26,
    name: "Sikhye",
    koreanName: "식혜",
    emoji: "🥤",
    category: "Dessert",
    howToEat: "Drink this sweet rice punch chilled, often with a few floating rice grains.",
    dont: "Don't shake it too vigorously; the rice grains should settle naturally.",
    tip: "A refreshing traditional drink, especially after a meal or from a jjimjilbang (Korean spa)."
  },
  {
    id: 27,
    name: "Sujeonggwa",
    koreanName: "수정과",
    emoji: "☕",
    category: "Dessert",
    howToEat: "Enjoy this traditional cinnamon punch chilled, often with a persimmon or pine nuts.",
    dont: "Don't drink it warm; it's meant to be a cold, refreshing beverage.",
    tip: "A classic post-meal digestif, especially during holidays."
  },
  {
    id: 28,
    name: "Bungeoppang",
    koreanName: "붕어빵",
    emoji: "🐟",
    category: "Street Food",
    howToEat: "Bite into the fish-shaped pastry, usually filled with sweet red bean paste or custard.",
    dont: "Don't eat too fast; the hot filling can burn your tongue.",
    tip: "A beloved winter street snack, often bought from street vendors with a choice of fillings."
  },
  {
    id: 29,
    name: "Hwe (Hoe)",
    koreanName: "회",
    emoji: "🍣",
    category: "Anju",
    howToEat: "Dip slices of raw fish in gochujang, ssamjang, or soy sauce with wasabi.",
    dont: "Don't expect it to be served with rice like Japanese sushi (unless it's hwedupbap).",
    tip: "Best enjoyed fresh by the sea with soju, showcasing the fish's natural flavors."
  },
  {
    id: 30,
    name: "Dolsot Bibimbap",
    koreanName: "돌솥비빔밥",
    emoji: "🍚",
    category: "Rice",
    howToEat: "Mix well in the hot stone pot, letting the bottom rice crisp up.",
    dont: "Don't touch the hot pot with bare hands; use a trivet.",
    tip: "The crispy rice (nurungji) at the bottom is a highly prized part of the dish."
  },
  {
    id: 31,
    name: "Samgyetang",
    koreanName: "삼계탕",
    emoji: "🐔",
    category: "Stew",
    howToEat: "Eat the tender chicken stuffed with rice and ginseng, sipping the nourishing broth.",
    dont: "Don't add too much salt initially; taste the broth first.",
    tip: "A traditional healthy dish, especially popular during hot summer days to replenish energy."
  },
  {
    id: 32,
    name: "Ganjang Gejang",
    koreanName: "간장게장",
    emoji: "🦀",
    category: "Anju",
    howToEat: "Suck the sweet, savory raw marinated crab meat from its shell, often mixing with rice.",
    dont: "Don't be afraid to get messy; it's part of the authentic experience.",
    tip: "Known as a 'rice thief' (bap-doduk) because it makes you eat so much rice."
  },
  {
    id: 33,
    name: "Yangnyeom Gejang",
    koreanName: "양념게장",
    emoji: "🦀",
    category: "Anju",
    howToEat: "Enjoy the spicy raw marinated crab, usually mixing the spicy sauce with rice.",
    dont: "Don't expect it to be mild; it has a fiery kick for spice lovers.",
    tip: "Another 'rice thief' for those who crave a delicious and spicy seafood kick."
  },
  {
    id: 34,
    name: "Jeon (Assorted Korean Pancakes)",
    koreanName: "모듬전",
    emoji: "🥞",
    category: "Anju",
    howToEat: "Dip various pan-fried ingredients like zucchini, meat, or fish in soy-vinegar sauce.",
    dont: "Don't eat them cold; they are best served warm to enjoy their texture.",
    tip: "A popular dish for holidays and gatherings, perfect with makgeolli."
  },
  {
    id: 35,
    name: "Gyeranmari",
    koreanName: "계란말이",
    emoji: "🍳",
    category: "Kimchi", // Often served with kimchi as banchan
    howToEat: "Eat slices of the rolled omelette as a side dish or snack.",
    dont: "Don't expect it to be sweet; it's a savory egg dish.",
    tip: "Often includes vegetables or seaweed, and is a popular lunchbox item for all ages."
  },
  {
    id: 36,
    name: "Eomuk (Odeng)",
    koreanName: "어묵",
    emoji: "🍢",
    category: "Street Food",
    howToEat: "Eat the fish cakes skewered on sticks, often from a street vendor in a hot broth.",
    dont: "Don't forget to drink the accompanying broth from a paper cup.",
    tip: "A comforting and affordable street snack, especially in winter."
  },
  {
    id: 37,
    name: "Hodo Gwaja",
    koreanName: "호두과자",
    emoji: "🌰",
    category: "Dessert",
    howToEat: "Bite into the walnut-shaped cakes with a sweet red bean and walnut filling.",
    dont: "Don't confuse them with actual walnuts; these are delightful pastries.",
    tip: "A popular snack for travelers, often sold at rest stops across Korea."
  },
  {
    id: 38,
    name: "Gyeranppang",
    koreanName: "계란빵",
    emoji: "🥚",
    category: "Street Food",
    howToEat: "Enjoy the fluffy, sweet, and savory bread with a whole egg baked inside.",
    dont: "Don't expect a runny yolk; the egg is fully cooked inside the bread.",
    tip: "A popular quick breakfast or street snack, especially comforting in cooler weather."
  },
  {
    id: 39,
    name: "Soju",
    koreanName: "소주",
    emoji: "🍶",
    category: "Anju",
    howToEat: "Drink chilled in small shots, usually paired with food (anju) and good company.",
    dont: "Don't drink it warm; chilling significantly improves the taste.",
    tip: "Korea's most popular alcoholic beverage, often enjoyed socially and responsibly."
  },
  {
    id: 40,
    name: "Makgeolli",
    koreanName: "막걸리",
    emoji: "🍶",
    category: "Anju",
    howToEat: "Shake gently before pouring to mix the sediment, then drink from a bowl.",
    dont: "Don't drink it like beer; it's a milky, slightly sweet rice wine.",
    tip: "Pairs perfectly with savory Korean pancakes (pajeon) on a rainy day."
  },
  {
    id: 41,
    name: "Kimchi Mandu",
    koreanName: "김치만두",
    emoji: "🥟",
    category: "Street Food",
    howToEat: "Eat these dumplings filled with spicy kimchi, often steamed or boiled.",
    dont: "Don't expect them to be mild; the kimchi provides a delicious kick.",
    tip: "A popular variant of mandu for those who love spicy and flavorful fillings."
  },
  {
    id: 42,
    name: "Jjinppang",
    koreanName: "찐빵",
    emoji: "🍞",
    category: "Dessert",
    howToEat: "Bite into the soft, fluffy steamed bun, often filled with sweet red bean paste.",
    dont: "Don't eat it cold; it's best served warm and soft.",
    tip: "A traditional Korean steamed bun, perfect for a light and comforting snack."
  },
  {
    id: 43,
    name: "Chapssaltteok",
    koreanName: "찹쌀떡",
    emoji: "🍡",
    category: "Dessert",
    howToEat: "Enjoy the chewy glutinous rice cake, often filled with sweet red bean paste.",
    dont: "Don't eat too many at once; they are surprisingly filling.",
    tip: "A popular snack, especially during exam season, as 'sticky' implies success."
  },
  {
    id: 44,
    name: "Patbingsu",
    koreanName: "팥빙수",
    emoji: "🍧",
    category: "Dessert",
    howToEat: "Mix the shaved ice with sweet red bean paste, tteok, and condensed milk.",
    dont: "Don't eat only the toppings; ensure you get a good mix with the ice.",
    tip: "A classic Korean shaved ice dessert, perfect for cooling down in summer."
  },
  {
    id: 45,
    name: "Dakgalbi",
    koreanName: "닭갈비",
    emoji: "🍗",
    category: "BBQ",
    howToEat: "Stir-fry marinated chicken and vegetables on a large hot plate, then enjoy with rice.",
    dont: "Don't forget to order fried rice (bokkeumbap) at the end, mixing it into the leftover sauce.",
    tip: "A spicy and savory communal dish, great for sharing with friends or family."
  },
  {
    id: 46,
    name: "Jjimdak",
    koreanName: "찜닭",
    emoji: "🍗",
    category: "Stew",
    howToEat: "Savor the tender braised chicken with vegetables and glass noodles in a savory soy-based sauce.",
    dont: "Don't eat it too fast; the noodles absorb a lot of delicious flavor.",
    tip: "Originating from Andong, this dish is a delicious and hearty meal for any occasion."
  },
  {
    id: 47,
    name: "Gyeran Jjim (Volcano Style)",
    koreanName: "폭탄계란찜",
    emoji: "🌋🍳",
    category: "Stew",
    howToEat: "Enjoy the extra fluffy and tall steamed egg, often served in a hot stone bowl.",
    dont: "Don't be surprised by its impressive height; it's meant to be visually striking.",
    tip: "A fun and comforting side dish that's visually appealing and perfect with spicy meals."
  },
  {
    id: 48,
    name: "Kimchi Jeon",
    koreanName: "김치전",
    emoji: "🥞",
    category: "Anju",
    howToEat: "Dip the crispy kimchi pancake in soy sauce and enjoy, especially with makgeolli.",
    dont: "Don't make it too thick; a thin and crispy pancake is ideal for texture.",
    tip: "The perfect way to use up sour kimchi, transforming it into a delicious snack."
  },
  {
    id: 49,
    name: "Buchimgae",
    koreanName: "부침개",
    emoji: "🥞",
    category: "Anju",
    howToEat: "Enjoy various savory pancakes, often made with different vegetables or seafood.",
    dont: "Don't confuse it with pajeon, which specifically features green onions.",
    tip: "A versatile dish, great for snacks, appetizers, or as a light meal with drinks."
  },
  {
    id: 50,
    name: "Odeng-bokkeum",
    koreanName: "어묵볶음",
    emoji: "🍢",
    category: "Kimchi", // Side dish, often eaten with kimchi
    howToEat: "Eat this stir-fried fish cake as a quick and savory side dish (banchan).",
    dont: "Don't expect it to be spicy unless red pepper flakes are explicitly added.",
    tip: "A common and easy-to-make banchan in Korean households, versatile and tasty."
  },
  {
    id: 51,
    name: "Miyeokguk",
    koreanName: "미역국",
    emoji: "🍲",
    category: "Stew",
    howToEat: "Sip this nourishing seaweed soup, traditionally eaten on birthdays and after childbirth.",
    dont: "Don't serve it on any day other than a birthday for those celebrating.",
    tip: "A symbol of gratitude to mothers and a wish for good health and longevity."
  },
  {
    id: 52,
    name: "Juk",
    koreanName: "죽",
    emoji: "🥣",
    category: "Rice",
    howToEat: "Eat this rice porridge when you're sick or for a light, comforting meal.",
    dont: "Don't add too many strong flavors; it's meant to be mild and easy to digest.",
    tip: "Comes in many varieties, often with abalone (jeonbokjuk) or various vegetables."
  },
  {
    id: 53,
    name: "Kongguksu",
    koreanName: "콩국수",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "Enjoy these cold noodles in a creamy, savory soybean broth, often with cucumber.",
    dont: "Don't expect it to be warm; it's a refreshing summer dish.",
    tip: "A nutritious and satisfying meal, especially on hot days when you need to cool down."
  },
  {
    id: 54,
    name: "Sundae",
    koreanName: "순대",
    emoji: "🍢",
    category: "Street Food",
    howToEat: "Eat slices of Korean blood sausage, often served with salt, gochujang, or in soup.",
    dont: "Don't be intimidated by the ingredients; it's a savory and unique delicacy.",
    tip: "A popular street food and anju, often enjoyed alongside tteokbokki."
  },
  {
    id: 55,
    name: "Gukbap",
    koreanName: "국밥",
    emoji: "🍲🍚",
    category: "Rice",
    howToEat: "Mix rice directly into the hot soup, adding condiments like chopped green onions or chili paste.",
    dont: "Don't eat the rice separately; it's meant to be soaked in the flavorful broth.",
    tip: "A hearty and warming one-bowl meal, perfect for any time of day, especially after a long night."
  },
  {
    id: 56,
    name: "Yukgaejang",
    koreanName: "육개장",
    emoji: "🌶️🍲",
    category: "Stew",
    howToEat: "Savor this spicy shredded beef and vegetable soup, often served with rice.",
    dont: "Don't skip the rice; it helps balance the intense spiciness and flavors.",
    tip: "A classic Korean comfort food, known for its deep, rich, and invigorating flavors."
  },
  {
    id: 57,
    name: "Seolleongtang",
    koreanName: "설렁탕",
    emoji: "🥛🍲",
    category: "Stew",
    howToEat: "Season the milky ox bone soup to your taste with salt, pepper, and green onions.",
    dont: "Don't expect strong flavors initially; it's meant to be seasoned at the table.",
    tip: "A nourishing and mild soup, often eaten for breakfast or when feeling unwell."
  },
  {
    id: 58,
    name: "Galbitang",
    koreanName: "갈비탕",
    emoji: "🍖🍲",
    category: "Stew",
    howToEat: "Enjoy the clear beef short rib soup, savoring the tender meat and flavorful broth.",
    dont: "Don't over-season it; the natural beef flavor is prominent and delicious.",
    tip: "A hearty and elegant soup, often served on special occasions or as a comforting meal."
  },
  {
    id: 59,
    name: "Kongnamul Gukbap",
    koreanName: "콩나물국밥",
    emoji: "🍲🍚",
    category: "Rice",
    howToEat: "Mix rice into the refreshing bean sprout soup, often with a raw egg and gochujang.",
    dont: "Don't let the egg overcook; mix it quickly into the hot soup to cook gently.",
    tip: "A popular hangover remedy, light yet satisfying and full of healthy sprouts."
  },
  {
    id: 60,
    name: "Kimchi Bokkeum",
    koreanName: "김치볶음",
    emoji: "🌶️",
    category: "Kimchi",
    howToEat: "Eat this stir-fried kimchi as a side dish, often with tofu or pork.",
    dont: "Don't use fresh kimchi; sour, fermented kimchi yields the best flavor for frying.",
    tip: "A versatile banchan that can be customized with various ingredients, a Korean staple."
  },
  {
    id: 61,
    name: "Oi Muchim",
    koreanName: "오이무침",
    emoji: "🥒🌶️",
    category: "Kimchi",
    howToEat: "Enjoy this spicy cucumber salad as a refreshing and crunchy side dish.",
    dont: "Don't let it sit too long; it's best fresh and crisp to maintain its texture.",
    tip: "A quick and easy banchan that adds a spicy and cool kick to any meal."
  },
  {
    id: 62,
    name: "Kkakdugi",
    koreanName: "깍두기",
    emoji: "🧊🌶️",
    category: "Kimchi",
    howToEat: "Eat these crunchy diced radish kimchi cubes with soups or stews.",
    dont: "Don't expect it to be soft; the radish is meant to maintain its satisfying crunch.",
    tip: "A popular type of kimchi, especially good with seolleongtang and other mild soups."
  },
  {
    id: 63,
    name: "Baechu Kimchi (Napa Cabbage Kimchi)",
    koreanName: "배추김치",
    emoji: "🥬🌶️",
    category: "Kimchi",
    howToEat: "Eat as a staple side dish with almost every Korean meal; it complements everything.",
    dont: "Don't be afraid to take a big bite; it's meant to be enjoyed vigorously.",
    tip: "The most iconic and essential Korean food, coming in endless varieties and aging stages."
  },
  {
    id: 64,
    name: "Dotorimuk (Acorn Jelly)",
    koreanName: "도토리묵",
    emoji: "🌰",
    category: "Anju",
    howToEat: "Eat this savory jelly salad, often seasoned with soy sauce, vinegar, and vegetables.",
    dont: "Don't expect it to taste like fruit jelly; it's savory and earthy.",
    tip: "A unique and healthy anju or side dish, often served chilled for refreshment."
  },
  {
    id: 65,
    name: "Memil Guksu (Buckwheat Noodles)",
    koreanName: "메밀국수",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "Eat these cold buckwheat noodles with a savory dipping sauce.",
    dont: "Don't slurp too loudly; a gentle slurp is acceptable, but be mindful.",
    tip: "A refreshing summer dish, similar to Japanese soba but with distinct Korean flavors."
  },
  {
    id: 66,
    name: "Dakgangjeong",
    koreanName: "닭강정",
    emoji: "🍗",
    category: "Street Food",
    howToEat: "Enjoy crispy, bite-sized fried chicken coated in a sweet and spicy glaze.",
    dont: "Don't confuse it with regular fried chicken; it's usually saucier and crunchier.",
    tip: "A popular snack or light meal, often sold in cups from street vendors, perfect for on-the-go."
  },
  {
    id: 67,
    name: "Chungmu Gimbap",
    koreanName: "충무김밥",
    emoji: "🍙",
    category: "Street Food",
    howToEat: "Eat small rolls of plain gimbap with spicy radish kimchi and seasoned squid.",
    dont: "Don't expect fancy fillings inside the gimbap; the sides are the main event.",
    tip: "Originating from Chungmu (now Tongyeong), a unique and highly addictive street food."
  },
  {
    id: 68,
    name: "Kalguksu",
    koreanName: "칼국수",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "Savor the handmade knife-cut noodles in a hot, savory broth, often with clams or chicken.",
    dont: "Don't forget to add fresh kimchi on the side to enhance the flavors.",
    tip: "A comforting and hearty noodle soup, perfect for cold days or when you need a warm meal."
  },
  {
    id: 69,
    name: "Japchae Bap",
    koreanName: "잡채밥",
    emoji: "🍚",
    category: "Rice",
    howToEat: "Eat the Japchae on top of rice, often served with a side of black bean sauce or jjajang.",
    dont: "Don't mix the rice and Japchae too much before eating; enjoy the layers.",
    tip: "A satisfying one-bowl meal that combines two Korean favorites into one delicious dish."
  },
  {
    id: 70,
    name: "Gyeran Jjim",
    koreanName: "계란찜",
    emoji: "🍳",
    category: "Stew",
    howToEat: "Scoop the fluffy steamed egg directly from the hot pot.",
    dont: "Don't let it sit too long; it's best enjoyed hot and fresh.",
    tip: "A comforting and mild dish, great for balancing spicy meals or as a gentle side."
  },
  {
    id: 71,
    name: "Gamjatang",
    koreanName: "감자탕",
    emoji: "🍲",
    category: "Stew",
    howToEat: "Savor the rich, spicy pork bone soup, usually shared among friends.",
    dont: "Don't forget to scrape the meat off the bones; it's incredibly tender.",
    tip: "Often served with a side of chewy noodles or rice at the end, absorbing all the flavor."
  },
  {
    id: 72,
    name: "Jumeokbap",
    koreanName: "주먹밥",
    emoji: "🍙",
    category: "Rice",
    howToEat: "Eat these seasoned rice balls as a snack or a light meal, often homemade.",
    dont: "Don't confuse them with gimbap; jumeokbap are usually simpler and spherical.",
    tip: "Great for kids or as a quick, customizable bite-sized snack."
  },
  {
    id: 73,
    name: "Hobak Beombeok",
    koreanName: "호박범벅",
    emoji: "🎃",
    category: "Dessert",
    howToEat: "Eat this sweet pumpkin porridge warm, often with sticky rice balls.",
    dont: "Don't expect it to be overly sweet; it's subtly flavored for natural taste.",
    tip: "A comforting and healthy traditional snack or light meal, especially in autumn."
  },
  {
    id: 74,
    name: "Bokbunja-ju",
    koreanName: "복분자주",
    emoji: "🍷",
    category: "Anju",
    howToEat: "Drink this sweet and slightly tart raspberry wine chilled.",
    dont: "Don't chug it; savor its unique fruity flavor and enjoy slowly.",
    tip: "Known for its purported health benefits and enjoyed with various Korean dishes."
  },
  {
    id: 75,
    name: "Gyeran Bap",
    koreanName: "계란밥",
    emoji: "🍳🍚",
    category: "Rice",
    howToEat: "Mix a fried egg, soy sauce, and sometimes butter or sesame oil into hot rice.",
    dont: "Don't overcook the egg; a slightly runny yolk is ideal for mixing.",
    tip: "A simple, comforting, and quick meal, often a childhood favorite for its ease."
  },
  {
    id: 76,
    name: "Kimchi Bokkeumbap with Cheese",
    koreanName: "치즈 김치볶음밥",
    emoji: "🧀🍚",
    category: "Rice",
    howToEat: "Enjoy the spicy kimchi fried rice with melted cheese on top.",
    dont: "Don't let the cheese get too hard; eat it while it's gooey and delicious.",
    tip: "The cheese adds a creamy, salty balance to the spicy kimchi, a popular fusion."
  },
  {
    id: 77,
    name: "Gyeran Gyeran-guk",
    koreanName: "계란국",
    emoji: "🍳🍲",
    category: "Stew",
    howToEat: "Sip this light and comforting egg drop soup, often served as a simple side soup.",
    dont: "Don't let it boil too vigorously after adding the egg; it should be gently simmered.",
    tip: "A quick and easy soup, great for kids or a light meal, and very soothing."
  },
  {
    id: 78,
    name: "Jeotgal (Fermented Seafood)",
    koreanName: "젓갈",
    emoji: "🦐🐟",
    category: "Kimchi",
    howToEat: "Eat a tiny bit with rice as a pungent, savory side dish.",
    dont: "Don't eat a large portion; it's very salty and intensely flavorful.",
    tip: "Adds a deep umami flavor to meals, often an acquired but highly prized taste."
  },
  {
    id: 79,
    name: "Baek Kimchi (White Kimchi)",
    koreanName: "백김치",
    emoji: "🥬",
    category: "Kimchi",
    howToEat: "Enjoy this non-spicy, refreshing kimchi as a palate cleanser or side dish.",
    dont: "Don't expect the usual spice; it's a milder, often sweeter alternative.",
    tip: "Great for those who can't handle spice or prefer a lighter kimchi experience."
  },
  {
    id: 80,
    name: "Ssam",
    koreanName: "쌈",
    emoji: "🥬🥩",
    category: "BBQ",
    howToEat: "Wrap grilled meat (like samgyeopsal or bulgogi) with lettuce or perilla leaves, adding ssamjang and other condiments.",
    dont: "Don't make your ssam too big; it should be eaten in one bite.",
    tip: "Experiment with different vegetables and toppings to find your perfect combination."
  },
  {
    id: 81,
    name: "Gyeran-ppang",
    koreanName: "계란빵",
    emoji: "🍞🥚",
    category: "Street Food",
    howToEat: "Enjoy the soft, sweet bread with a whole egg baked inside, a perfect quick snack.",
    dont: "Don't mistake it for a regular muffin; the egg is the star.",
    tip: "A warm and comforting street food during colder months."
  },
  {
    id: 82,
    name: "Kkochi Eomuk",
    koreanName: "꼬치어묵",
    emoji: "🍢",
    category: "Street Food",
    howToEat: "Eat fish cakes skewered on sticks from a hot broth, usually from street vendors.",
    dont: "Don't discard the broth; it's meant to be sipped alongside the fish cakes.",
    tip: "A quintessential street food experience, especially comforting on chilly days."
  },
  {
    id: 83,
    name: "Hwe덮밥 (Hwedupbap)",
    koreanName: "회덮밥",
    emoji: "🍣🍚",
    category: "Rice",
    howToEat: "Mix raw fish and vegetables with rice and a spicy gochujang sauce.",
    dont: "Don't eat the ingredients separately; mix well for the best flavor harmony.",
    tip: "A refreshing and healthy alternative to traditional bibimbap, especially in summer."
  },
  {
    id: 84,
    name: "Janchi Guksu (Warm)",
    koreanName: "잔치국수 (따뜻한)",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "Sip the warm, comforting anchovy broth with thin wheat noodles and various toppings.",
    dont: "Don't let it get cold; the warmth is part of its comfort.",
    tip: "Often served at special occasions or simply as a light, soothing meal."
  },
  {
    id: 85,
    name: "Patjuk",
    koreanName: "팥죽",
    emoji: "🥣",
    category: "Dessert",
    howToEat: "Eat this warm red bean porridge, often with small rice cakes (saealsim) inside.",
    dont: "Don't expect it to be overly sweet; it has a subtle, earthy sweetness.",
    tip: "Traditionally eaten on Dongji (winter solstice) to ward off evil spirits."
  },
  {
    id: 86,
    name: "Gyeran Toast",
    koreanName: "계란 토스트",
    emoji: "🍞🍳",
    category: "Street Food",
    howToEat: "Enjoy this sweet and savory egg toast sandwich, often with ham and cheese.",
    dont: "Don't expect a typical savory breakfast toast; it has a unique sweet touch.",
    tip: "A popular quick breakfast or snack from street vendors, highly satisfying."
  }
];

export default foods;
