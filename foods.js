const foods = [
  {
    id: 1,
    name: "Bibimbap",
    koreanName: "비빔밥",
    emoji: "🍚",
    category: "Rice",
    howToEat: "Don't just stir lightly. You must mix the rice, gochujang (red chili paste), and various namul (seasoned vegetables) vigorously with your spoon until every grain of rice is coated in a glossy, red sauce. This thorough mixing is the essence of Bibimbap, as it ensures a perfect symphony of flavors—savory, sweet, and spicy—in every single mouthful. True flavor harmony is achieved only when all components are fully integrated.",
    dont: "Never eat the toppings separately as if it were a salad with a side of rice. The name 'Bibimbap' literally translates to 'mixed rice,' and its soul lies in the act of combination. Picking out ingredients or eating them one by one is considered unusual and defeats the purpose of the dish, which is to create a balanced, unified taste experience.",
    tip: "For an authentic, next-level experience, order your Bibimbap in a 'Dolsot' (hot stone pot). Before you start mixing, let it sit for a minute or two. This creates a layer of 'Nurungji' (crispy scorched rice) at the bottom, which adds a delightful crunchy texture and a nutty, toasted flavor that contrasts beautifully with the soft toppings."
  },
  {
    id: 2,
    name: "Kimchi Jjigae",
    koreanName: "김치찌개",
    emoji: "🍲",
    category: "Stew",
    howToEat: "This quintessential Korean comfort stew is best served bubbling hot, directly from the pot. Use your spoon to scoop up a bit of the rich, spicy broth, tender pork or tofu, and flavorful aged kimchi all at once. Place this mixture over a spoonful of steamed white rice and eat them together. This method allows the rice to soak up the broth, balancing the intense, savory flavors of the stew.",
    dont: "Avoid eating Kimchi Jjigae when it's lukewarm or cold. The dish is designed to be a hearty, warming experience, and its deep flavors are most pronounced when it is piping hot. Letting it cool down diminishes the robust aroma and the satisfying warmth that defines this classic Korean soul food.",
    tip: "The secret to an exceptional Kimchi Jjigae lies in the age of the kimchi. Well-fermented, sour kimchi will produce a much deeper and more complex flavor profile. For an extra layer of comfort, many Koreans love to add a slice of ramyeon noodles or even a slice of American cheese on top, letting it melt into the stew for a creamy, modern twist."
  },
  {
    id: 3,
    name: "Samgyeopsal",
    koreanName: "삼겹살",
    emoji: "🥓",
    category: "BBQ",
    howToEat: "The art of eating Samgyeopsal is a hands-on, communal experience. Grill the thick pork belly strips until they are golden brown and crispy on the outside but still juicy inside. Use the provided scissors to cut the meat into bite-sized pieces. To assemble your 'ssam' (wrap), take a piece of lettuce or perilla leaf, add a piece of grilled meat, a dollop of 'ssamjang' (spicy paste), a slice of raw or grilled garlic, and some grilled kimchi. Wrap it all up into a neat package and eat it in one single, glorious bite.",
    dont: "Resist the temptation to take a small bite out of your ssam. A wrap is meant to be eaten all at once to experience the full explosion of flavors and textures—the fresh crunch of the lettuce, the richness of the pork, the pungency of the garlic, and the spice of the ssamjang. Also, never rush the grilling process; patience is key to achieving that perfect crispy-yet-juicy texture.",
    tip: "For the ultimate flavor boost, grill slices of kimchi and whole garlic cloves in the pork fat that renders out onto the grill. The kimchi becomes beautifully caramelized and the garlic turns sweet and mellow. These grilled companions elevate the entire experience, adding another dimension of savory goodness to your wraps."
  },
  {
    id: 4,
    name: "Tteokbokki",
    koreanName: "떡볶이",
    emoji: "🌶️",
    category: "Street Food",
    howToEat: "Use a toothpick or chopsticks to pick up the chewy rice cakes (tteok) and fish cakes (eomuk), making sure they are generously coated in the vibrant, spicy-sweet gochujang sauce. It's a dish meant to be enjoyed casually, often standing at a street food stall, sharing with friends. The texture of the chewy rice cakes is as important as the flavor.",
    dont: "Don't underestimate the spice level, which can range from mild to fiery hot. If you're not used to Korean spice, ask for a milder version if possible. Also, don't wear your best white shirt; the thick, red sauce has a tendency to splash and stain.",
    tip: "Elevate your Tteokbokki experience by ordering assorted 'twigim' (fried items like vegetables or squid) on the side. The best way to eat them is by dipping them directly into the leftover Tteokbokki sauce, creating a perfect combination of crispy, chewy, and spicy. Many locals also add a hard-boiled egg or ramyeon noodles to make it a more substantial meal."
  },
  {
    id: 5,
    name: "Japchae",
    koreanName: "잡채",
    emoji: "🍝",
    category: "Noodle",
    howToEat: "Japchae is a beloved dish for celebrations and gatherings. Enjoy the delightful chewiness of the glass noodles, which are stir-fried with a colorful assortment of seasoned vegetables like spinach, carrots, onions, and mushrooms, along with thin strips of beef. The noodles are coated in a sweet and savory soy-sesame sauce, creating a harmonious and balanced flavor profile.",
    dont: "Don't let the noodles sit for too long before eating, as they can become clumpy or soggy. Japchae is best enjoyed fresh and warm when the noodles have the perfect 'al dente' yet slippery texture. Eating it cold significantly dulls the vibrant flavors and pleasant mouthfeel.",
    tip: "While often served as a side dish (banchan), Japchae can easily become a main course by serving it over a bowl of hot steamed rice, turning it into 'Japchae-bap'. The rice soaks up any extra sauce, making for an incredibly satisfying and complete meal."
  },
  {
    id: 6,
    name: "Bulgogi",
    koreanName: "불고기",
    emoji: "🥩",
    category: "BBQ",
    howToEat: "Meaning 'fire meat,' Bulgogi consists of thinly sliced beef marinated in a sweet and savory sauce of soy sauce, sugar, and pear juice. Grill or pan-fry it until it's tender and slightly caramelized. You can eat it directly with rice, letting the sweet juices flavor the grains, or wrap it in lettuce leaves (ssam) with a bit of rice and ssamjang for a fresher, crunchier bite.",
    dont: "Be careful not to overcook the meat. Because the slices are so thin, they cook very quickly. Overcooking will make the beef tough and dry, robbing you of the juicy tenderness that makes Bulgogi so famous. The goal is a tender texture with a hint of caramelization at the edges.",
    tip: "After cooking the meat, don't discard the leftover marinade in the pan. Add mushrooms, onions, and glass noodles (dangmyeon) to the pan and cook them in the remaining sauce. These 'service' additions absorb all the delicious beefy flavor and become an incredible bonus dish."
  },
  {
    id: 7,
    name: "Gimbap",
    koreanName: "김밥",
    emoji: "🍙",
    category: "Street Food",
    howToEat: "Gimbap is Korea's favorite picnic and lunchbox food. Each bite-sized slice is a perfect package of steamed rice and various fillings like seasoned vegetables, egg, and imitation crab or beef, all rolled in a sheet of dried seaweed (gim). Eat the slices as they are, or dip them in Tteokbokki sauce for a spicy kick. It’s designed to be a convenient, all-in-one meal.",
    dont: "Never unroll a Gimbap to eat the ingredients separately. The entire roll is carefully constructed to provide a balanced mix of flavors and textures in a single, neat bite. Disassembling it would be like deconstructing a sandwich before eating it—it just isn't done.",
    tip: "For a simple yet classic pairing, enjoy your Gimbap with a side of Danmuji (sweet yellow pickled radish). Its crunchy texture and tangy flavor provide a refreshing contrast that cleanses the palate between each savory bite of Gimbap."
  },
  {
    id: 8,
    name: "Sundubu Jjigae",
    koreanName: "순두부찌개",
    emoji: "🌶️",
    category: "Stew",
    howToEat: "This fiery stew features incredibly soft, uncurdled tofu ('sundubu') and is typically served boiling hot in a stone pot (dolsot). Right before you dig in, crack a raw egg into the center of the stew. The bubbling heat will cook the egg to a perfect, silky consistency. Gently break apart the tofu with your spoon and mix it with the broth, seafood, and egg for a comforting, spicy spoonful over rice.",
    dont: "Never touch the stone pot with your bare hands; it is dangerously hot and retains heat for a long time. Also, don't stir the stew too vigorously, as you'll break the delicate tofu into tiny pieces. The goal is to have soft, cloud-like chunks of tofu in your soup.",
    tip: "Many restaurants provide a small bowl of toasted seaweed flakes ('gim-garu') on the side. Sprinkling these over your rice before adding the stew adds a wonderfully savory, umami-rich crunch that elevates the entire dish. It's a small touch that makes a big difference."
  },
  {
    id: 9,
    name: "Pajeon",
    koreanName: "파전",
    emoji: "🥞",
    category: "Anju",
    howToEat: "Pajeon is a savory Korean pancake characterized by its generous amount of green onions. Tear off a piece with your chopsticks, dip it into the accompanying soy-vinegar dipping sauce, and enjoy the combination of soft, slightly chewy batter and crispy, golden-brown edges. The green onions become sweet and tender when cooked, providing the pancake's signature flavor.",
    dont: "Don't let your Pajeon get cold. Like any good pancake, it's at its absolute best when served hot and fresh from the pan. When it cools, it loses its delightful crispiness and can become dense and oily. Eat it while it’s sizzling.",
    tip: "There is a deeply ingrained cultural tradition in Korea of eating Pajeon with Makgeolli (milky rice wine), especially on rainy days. The sound of the rain is said to mimic the sizzling sound of the pancake being fried. This classic pairing, known as 'Pajeon on a rainy day,' is a beloved culinary ritual."
  },
  {
    id: 10,
    name: "Bingsu",
    koreanName: "빙수",
    emoji: "🍧",
    category: "Dessert",
    howToEat: "Bingsu is a spectacular shaved ice dessert that comes with a mountain of toppings. Traditionally, it was just red bean paste ('Patbingsu'), but modern versions include fresh fruits, condensed milk, ice cream, and more. The key is to gently mix the toppings with the fluffy, snow-like shaved ice to distribute the sweetness and flavors evenly. Every spoonful should have a little bit of everything.",
    dont: "Don't just eat the toppings off the top and leave a mountain of plain ice underneath. This is a common rookie mistake! The joy of Bingsu is in the combination of the creamy, sweet toppings with the cold, refreshing ice. Also, be mindful of brain freeze—eat slowly and savor it.",
    tip: "Bingsu portions are often enormous and meant for sharing. It's a social dessert, perfect for cooling down with friends or family on a hot summer day. Many cafes specialize in unique and elaborate Bingsu creations, making it a fun dessert adventure to try different types."
  },
  {
    id: 11,
    name: "Ramyeon",
    koreanName: "라면",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "Korean instant noodles, or Ramyeon, are a cultural phenomenon. The key is to cook the noodles until they are perfectly 'al dente'—firm with a good chew. Slurp them directly from the pot or bowl along with the rich, spicy broth. It's a quick, cheap, and deeply satisfying meal, beloved by Koreans of all ages.",
    dont: "Absolutely do not overcook the noodles. Mushy, soft noodles are the hallmark of poorly cooked Ramyeon and will ruin the texture. The noodles should have a springy resistance when you bite into them. Follow the package instructions, but lean towards the shorter cooking time.",
    tip: "The true beauty of Ramyeon lies in its customizability. Common additions include cracking an egg into the boiling broth, adding a slice of American cheese for creaminess, or throwing in leftover rice, kimchi, or Spam. A classic pro move is to eat the noodles off the pot lid, which cools them to the perfect temperature."
  },
  {
    id: 12,
    name: "Jajangmyeon",
    koreanName: "짜장면",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "This iconic Korean-Chinese noodle dish features thick, chewy noodles topped with a savory, almost-black sauce made from fermented black beans (chunjang), diced pork, and vegetables. Before you take a single bite, you must mix the sauce and noodles together vigorously until every strand is evenly coated. This ensures a balanced flavor in every slurp.",
    dont: "Wearing a white shirt while eating Jajangmyeon is a famously risky move. The thick, dark sauce is notorious for splashing, so proceed with caution! Also, don't be shy about slurping; it's a common and acceptable way to enjoy noodle dishes in Korea and helps cool them down.",
    tip: "The undisputed, ultimate pairing for Jajangmyeon is 'Tangsuyuk' (sweet and sour pork). This combination, known as 'Jajang-Tangsuyuk,' is a beloved culinary duo in Korea. The crispy, sweet pork provides the perfect contrast to the savory, earthy noodles. Don't forget a side of yellow pickled radish (danmuji) to cleanse the palate."
  },
  {
    id: 13,
    name: "Naengmyeon",
    koreanName: "냉면",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "This cold noodle dish is a summer savior. The long, chewy buckwheat noodles are served in a chilled, tangy broth (Mul Naengmyeon) or with a spicy red chili sauce (Bibim Naengmyeon). Before eating, it's customary to use the provided kitchen scissors to cut the noodles once or twice, making them easier to manage. Add a few dashes of vinegar and a squirt of yellow mustard to the broth to customize the flavor to your liking.",
    dont: "Don't even attempt to eat the noodles without cutting them first. They are incredibly long and elastic, making them nearly impossible to chew through otherwise. The scissors are not just a suggestion; they are a necessity for a pleasant dining experience.",
    tip: "Naengmyeon is the traditional partner for Korean BBQ, especially grilled pork ribs (Galbi). The cold, tangy noodles act as a refreshing palate cleanser that cuts through the rich, smoky flavor of the grilled meat. Alternating between a bite of hot, savory Galbi and a slurp of cold, zesty Naengmyeon is a match made in heaven."
  },
  {
    id: 14,
    name: "Galbi Jjim",
    koreanName: "갈비찜",
    emoji: "🍖",
    category: "Stew",
    howToEat: "Galbi Jjim is a luxurious dish of beef short ribs braised to perfection in a sweet and savory soy-based sauce with vegetables like carrots, radishes, and shiitake mushrooms. The meat should be so tender that it falls right off the bone. Enjoy the rich, succulent meat with a bowl of steamed rice, spooning the flavorful braising liquid over the top.",
    dont: "Don't expect this to be a spicy dish. Unlike many other Korean stews, Galbi Jjim is predominantly savory and sweet, making it a favorite among those who prefer milder flavors. Its richness comes from the slow-braised beef and the depth of the soy-garlic marinade.",
    tip: "Because it requires a long cooking time and premium ingredients, Galbi Jjim is often reserved for special occasions, holidays (like Chuseok), and celebratory family dinners. It's a dish that signifies hospitality and festivity. After finishing the meat, some people like to mix rice into the leftover sauce in the pot."
  },
  {
    id: 15,
    name: "Kimchi Bokkeumbap",
    koreanName: "김치볶음밥",
    emoji: "🍚",
    category: "Rice",
    howToEat: "This is a simple yet profoundly satisfying fried rice dish. Sour, aged kimchi is stir-fried with cold rice and often some pork or Spam. It's typically topped with a sunny-side-up fried egg. The best way to eat it is to break the runny yolk and mix it into the spicy rice, creating a creamy, rich coating that balances the kimchi's tanginess. A sprinkle of toasted seaweed and sesame seeds finishes it perfectly.",
    dont: "Don't use fresh, unfermented kimchi for this dish. The magic of Kimchi Bokkeumbap comes from the deep, complex, and sour flavor of well-fermented kimchi. Fresh kimchi will result in a bland and one-dimensional taste. The older and sourer, the better!",
    tip: "For an easy upgrade, add a slice of mozzarella or American cheese on top of the hot fried rice right after cooking. Cover the pan for a minute to let the cheese melt into a gooey, delicious blanket. The dairy richness provides a wonderful counterpoint to the spicy and sour notes of the kimchi."
  },
  {
    id: 16,
    name: "Mandu",
    koreanName: "만두",
    emoji: "🥟",
    category: "Street Food",
    howToEat: "Korean dumplings, or Mandu, come in various forms: steamed (jjin-mandu), pan-fried (gun-mandu), or boiled in soup (mandu-guk). Typically filled with a mixture of minced meat, tofu, vegetables, and glass noodles, they are best enjoyed hot. Dip each dumpling into a simple sauce made of soy sauce, vinegar, and a sprinkle of chili flakes for an extra kick.",
    dont: "Don't mistake them for Chinese jiaozi or Japanese gyoza. While similar, Korean Mandu often have a distinct flavor profile, with fillings that can include kimchi (Kimchi Mandu) or more tofu and glass noodles, giving them a unique texture and taste.",
    tip: "Mandu are incredibly versatile. While they are a delicious appetizer or snack on their own, they are also a key ingredient in 'Mandu-guk,' a comforting dumpling soup often eaten on New Year's Day. You can also add them to stews or ramyeon to make the meal more substantial."
  },
  {
    id: 17,
    name: "Hotteok",
    koreanName: "호떡",
    emoji: "🍯",
    category: "Street Food",
    howToEat: "Hotteok is a popular Korean sweet pancake, especially cherished during the cold winter months. It has a chewy, glutinous dough exterior and is filled with a hot, molten mixture of brown sugar, cinnamon, and sometimes chopped nuts or seeds. It's pressed flat and pan-fried until golden brown. Take a small, careful bite first to let some steam escape.",
    dont: "Be extremely careful with your first bite! The brown sugar filling becomes a scorching hot, lava-like syrup during cooking. Biting into it too eagerly is a guaranteed way to burn your tongue. Let it cool for a minute before indulging.",
    tip: "The best Hotteok is always freshly made from a street vendor's griddle. While the classic cinnamon-sugar filling is the most common, be on the lookout for modern variations, which can include savory fillings like vegetables and glass noodles ('Yachae Hotteok') or cheese ('Cheese Hotteok')."
  },
  {
    id: 18,
    name: "Jokbal",
    koreanName: "족발",
    emoji: "🐖",
    category: "Anju",
    howToEat: "Jokbal consists of pig's trotters cooked in a savory broth with soy sauce and spices until they are incredibly tender and flavorful. The meat is deboned and thinly sliced. Enjoy it by dipping a slice in 'saeujeot' (salted fermented shrimp sauce) and wrapping it in a lettuce leaf with garlic and ssamjang. The collagen-rich skin and fat provide a uniquely satisfying, gelatinous texture.",
    dont: "Don't be put off by the idea of eating pig's feet. Jokbal is a beloved delicacy with a rich, savory flavor and a surprisingly tender texture, not at all what you might expect. It's not about bones and cartilage, but about succulent, flavorful meat.",
    tip: "Jokbal is a classic 'Anju,' meaning food that is specifically meant to be eaten with alcohol. It pairs exceptionally well with Soju. It's a popular choice for late-night gatherings and deliveries, often enjoyed with 'Makguksu' (spicy buckwheat noodles) to balance its richness."
  },
  {
    id: 19,
    name: "Bossam",
    koreanName: "보쌈",
    emoji: "🍖",
    category: "Anju",
    howToEat: "Bossam is a dish of tender, boiled pork belly slices. The proper way to eat it is to create a 'ssam' (wrap). Take a slice of the pork, dip it lightly in 'saeujeot' (salted shrimp sauce), and place it on a leaf of fresh napa cabbage or lettuce. Add a piece of spicy radish kimchi ('musaengchae') or bossam-kimchi, a slice of raw garlic, and wrap it all up to be eaten in one bite.",
    dont: "Don't just eat the pork slices by themselves. The magic of Bossam is in the combination of the tender, mild pork with the pungent, spicy kimchi and fresh, crunchy vegetables. Each component is essential for the full flavor experience. Also, don't spread the ssamjang on the wrap; just a small dollop is enough.",
    tip: "The quality of the accompanying kimchi is just as important as the pork itself. A good Bossam restaurant is often judged by its 'Bossam-kimchi,' which is specially made to complement the boiled pork. It’s often sweeter and fruitier than regular kimchi."
  },
  {
    id: 20,
    name: "Janchi Guksu",
    koreanName: "잔치국수",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "Meaning 'banquet noodles,' this dish features very thin wheat noodles (somyeon) in a light, clear, and savory anchovy-based broth. It's garnished with colorful toppings like sliced egg, zucchini, and seaweed. To eat, mix the noodles and toppings gently and slurp them up with the delicate broth. It's a clean-tasting and comforting noodle soup.",
    dont: "Don't add a lot of heavy or spicy sauces like gochujang, as this will overwhelm the delicate flavor of the anchovy broth, which is the heart of the dish. A little bit of seasoned soy sauce ('yangnyeom-ganjang') is all you need to enhance the flavor if desired.",
    tip: "As the name suggests, Janchi Guksu is traditionally served at celebrations like weddings and birthdays in Korea. The long noodles symbolize a long and happy life. It's a dish that evokes feelings of warmth, community, and celebration."
  },
  {
    id: 21,
    name: "Doenjang Jjigae",
    koreanName: "된장찌개",
    emoji: "🍲",
    category: "Stew",
    howToEat: "This is one of Korea's most iconic and beloved stews, made with fermented soybean paste (doenjang). It's earthy, savory, and packed with umami. Typically served bubbling hot, you can eat it by spooning the stew, with its tofu, vegetables, and broth, over your bowl of rice and mixing it in, or by alternating spoonfuls of stew and rice.",
    dont: "Don't mistake it for a spicy stew like Kimchi Jjigae. While some versions have a little chili for a kick, its primary flavor profile is savory and salty, not spicy. Its charm lies in the deep, rustic flavor of the fermented soybeans.",
    tip: "Doenjang Jjigae is the quintessential accompaniment to Korean BBQ. The salty, savory stew cuts through the richness of the grilled meat perfectly. At many K-BBQ restaurants, a small pot of Doenjang Jjigae is included with the meal for this very reason."
  },
  {
    id: 22,
    name: "Haemul Pajeon",
    koreanName: "해물파전",
    emoji: "🥞",
    category: "Anju",
    howToEat: "This is the seafood-lover's version of the classic Korean pancake. It's loaded with green onions and a generous assortment of seafood, such as squid, shrimp, and mussels, all bound together in a savory batter. Tear it apart with your chopsticks, dip a piece into the soy-vinegar sauce, and enjoy the combination of crispy edges, chewy interior, and tender seafood.",
    dont: "Don't let it sit and get cold. A great Haemul Pajeon should be crispy on the outside. As it cools, it can become soggy and lose its textural appeal. It's a dish best shared and eaten immediately while it's hot.",
    tip: "Like its simpler cousin, Pajeon, Haemul Pajeon is a classic 'rainy day food' in Korea. It is almost always paired with Makgeolli (milky rice wine). The crisp, savory pancake and the slightly sweet, tangy rice wine are a match made in culinary heaven."
  },
  {
    id: 23,
    name: "Yukhoe",
    koreanName: "육회",
    emoji: "🥩",
    category: "Anju",
    howToEat: "Yukhoe is the Korean version of steak tartare. Thinly shredded, high-quality raw beef is seasoned with soy sauce, sesame oil, and garlic, then topped with a raw egg yolk. To eat, break the yolk and gently mix it into the beef. It's often served with thin slices of crisp, sweet Korean pear, which you can eat alongside the beef for a refreshing contrast.",
    dont: "If you are not comfortable with eating raw meat, this dish is not for you. It is crucial that Yukhoe is prepared at a reputable restaurant that uses extremely fresh, high-grade beef to ensure safety and quality. Don't hesitate to ask about the freshness.",
    tip: "Yukhoe is considered a delicacy and a popular 'anju' (food paired with alcohol). Its rich, savory, and slightly sweet flavor profile is a perfect match for the clean taste of Soju. The combination of the silky beef and the crisp pear is truly exquisite."
  },
  {
    id: 24,
    name: "Gopchang",
    koreanName: "곱창",
    emoji: "🍢",
    category: "BBQ",
    howToEat: "Gopchang refers to the small intestines of cattle or pigs, a delicacy beloved by many Koreans. It's typically grilled at the table until it's crispy on the outside and delightfully chewy on the inside. The grilled pieces are then dipped in a special sauce, often a mix of sesame oil and salt or a savory soybean-based sauce. It's a communal food, perfect for grilling with friends.",
    dont: "Don't be hesitant about the chewy texture; that's the main appeal of the dish. It might seem intimidating to first-timers, but its rich, unique flavor is what makes it a popular choice for adventurous eaters and late-night food connoisseurs.",
    tip: "Gopchang is a legendary partner for Soju. It's a quintessential late-night food in Korea, with entire streets and neighborhoods dedicated to Gopchang restaurants. After finishing the intestines, it's a must to order 'bokkeumbap' (fried rice), which is cooked on the same grill with the leftover flavorful oil, kimchi, and seaweed."
  },
  {
    id: 25,
    name: "Bokkeumbap",
    koreanName: "볶음밥",
    emoji: "🍚",
    category: "Rice",
    howToEat: "Bokkeumbap, or fried rice, is not just a dish on its own but also a grand finale to many Korean meals. After a meal of Dakgalbi (spicy stir-fried chicken) or Gopchang (grilled intestines), rice, kimchi, and seaweed are added to the grill or pan to soak up all the delicious leftover sauce and oil. It's stir-fried until the bottom gets slightly crispy.",
    dont: "Don't think of this as just 'leftovers.' This final fried rice course is an integral and highly anticipated part of the dining experience. It transforms the remaining flavors into a completely new and incredibly delicious dish that no one wants to miss.",
    tip: "For the best experience, flatten the rice against the hot pan and let it cook undisturbed for a few minutes. This creates a crispy, browned layer of 'nurungji' (scorched rice) at the bottom, which is the most coveted part. Scraping up these crispy bits is pure joy."
  },
  {
    id: 26,
    name: "Sikhye",
    koreanName: "식혜",
    emoji: "🥤",
    category: "Dessert",
    howToEat: "Sikhye is a traditional sweet Korean rice beverage. It's served chilled and has a uniquely refreshing, malty sweetness derived from barley malt powder. You'll often find soft, cooked rice grains floating in the drink, which are meant to be drunk along with the liquid. It's a very common dessert drink served after a meal.",
    dont: "Don't shake the can or bottle too vigorously before drinking. The rice grains are a pleasant, soft textural element, not sediment to be mixed in. Let them float gently in the sweet liquid.",
    tip: "Sikhye is famously enjoyed at a 'jjimjilbang' (Korean spa). After sweating in a hot sauna, there is nothing more refreshing than a cold, sweet glass of Sikhye. It's a cultural ritual and the perfect way to rehydrate and cool down."
  },
  {
    id: 27,
    name: "Sujeonggwa",
    koreanName: "수정과",
    emoji: "☕",
    category: "Dessert",
    howToEat: "This is another traditional Korean dessert punch, made from cinnamon, ginger, and brown sugar. It has a distinctively spicy and sweet flavor profile. It's served cold, often garnished with dried persimmons and pine nuts, which add a soft, fruity sweetness and a nutty crunch. Sip it slowly to appreciate its complex, aromatic flavors.",
    dont: "Don't drink Sujeonggwa warm. It is specifically designed as a cold beverage, and its refreshing, spicy qualities are best appreciated when it's well-chilled. The cold temperature balances the intensity of the ginger and cinnamon.",
    tip: "Sujeonggwa is often served as a digestif after a heavy or greasy meal, especially after Korean BBQ. The ginger and cinnamon are believed to aid in digestion, making it a functional and flavorful way to end a feast, particularly during festive holidays like Seollal (Lunar New Year)."
  },
  {
    id: 28,
    name: "Bungeoppang",
    koreanName: "붕어빵",
    emoji: "🐟",
    category: "Street Food",
    howToEat: "Literally 'carp bread,' Bungeoppang is a fish-shaped pastry with a crispy outer layer and a soft, chewy inside. It's typically filled with hot, sweet red bean paste, though modern versions also feature custard, chocolate, or even cheese. It's a quintessential winter street food in Korea, best eaten hot off the griddle.",
    dont: "Be careful on your first bite, as the filling is often extremely hot. Also, don't be disappointed that it doesn't taste like fish! The name only refers to its shape. Debating whether to start eating from the head or the tail is a fun, lighthearted tradition among Koreans.",
    tip: "Look for street vendors who make Bungeoppang to order. The freshest ones are irresistibly crispy on the outside and delightfully soft and steamy on the inside. They are often sold in paper bags of three or more, perfect for warming your hands and your stomach on a cold day."
  },
  {
    id: 29,
    name: "Hwe (Hoe)",
    koreanName: "회",
    emoji: "🍣",
    category: "Anju",
    howToEat: "Korean-style raw fish, or Hwe, is typically served in thicker slices than Japanese sashimi. You can dip it in soy sauce with wasabi, but the more traditional Korean way is to dip it in 'chogochujang' (a sweet and spicy chili sauce) or wrap it in a lettuce or perilla leaf with a slice of raw garlic and ssamjang, similar to how you'd eat K-BBQ.",
    dont: "Don't expect the fish to be served over rice like sushi. Hwe is all about savoring the fresh, clean taste and chewy texture of the fish itself. While 'Hwe-deopbap' (raw fish over rice) exists as a separate dish, standard Hwe is served on its own.",
    tip: "The ultimate Hwe experience is at a fish market by the coast, like Noryangjin in Seoul or Jagalchi in Busan. You can pick your live fish from a tank, have it prepared fresh for you on the spot, and enjoy it with Soju. The leftover fish parts are often used to make a spicy, hot stew ('maeun-tang') to finish the meal."
  },
  {
    id: 30,
    name: "Dolsot Bibimbap",
    koreanName: "돌솥비빔밥",
    emoji: "🍚",
    category: "Rice",
    howToEat: "This is an upgraded version of Bibimbap served in a sizzling hot stone pot (dolsot). The heat from the pot cooks the raw egg that's often cracked on top as you mix everything together. Before you mix, press the rice against the sides and bottom of the pot to help it get crispy.",
    dont: "Under no circumstances should you touch the stone pot with your bare hands. It is incredibly hot and will cause a severe burn. Always use the provided coaster or trivet and be mindful of where the pot is placed. Listen for the sizzle; that's the sound of deliciousness being created.",
    tip: "The best part of a Dolsot Bibimbap is the 'nurungji'—the layer of crispy, golden-brown scorched rice at the bottom of the pot. Scrape this up with your spoon after you've eaten most of the mixed rice. It's a textural delight and considered by many to be the highlight of the dish."
  },
  {
    id: 31,
    name: "Samgyetang",
    koreanName: "삼계탕",
    emoji: "🐔",
    category: "Stew",
    howToEat: "Samgyetang is a nourishing soup made with a whole young chicken stuffed with glutinous rice, ginseng, garlic, and jujube. The chicken is cooked until the meat is fall-off-the-bone tender. You eat the tender meat along with the rich, milky broth. It's a dish that is meant to restore energy and vitality.",
    dont: "Don't add a lot of salt to the broth before tasting it. The soup is often served unseasoned, with salt and pepper on the side for you to season to your personal preference. The focus is on the subtle, clean flavors of the chicken and ginseng.",
    tip: "Samgyetang is famously eaten during the three hottest days of the summer, known as 'sambok.' This practice, called 'yi-yeol-chi-yeol' (fighting heat with heat), is believed to help replenish nutrients and stamina lost through sweating. It's a delicious way to beat the summer heat, Korean-style."
  },
  {
    id: 32,
    name: "Ganjang Gejang",
    koreanName: "간장게장",
    emoji: "🦀",
    category: "Anju",
    howToEat: "This dish consists of fresh raw crabs marinated in a sweet and savory soy sauce. The proper way to eat it is to hold the crab shell and suck the sweet, gelatinous meat out. The highlight is the crab back shell, which is filled with rich, orange-colored tomalley. Spoon hot rice into the shell, mix it with the tomalley and marinade, and eat it directly from the shell.",
    dont: "Don't be shy about using your hands and getting a little messy. It's an essential part of the experience. Also, don't overlook the marinade; it's a flavor-packed sauce that's delicious when drizzled over rice.",
    tip: "Ganjang Gejang is famously known as 'bap-doduk,' which translates to 'rice thief.' The name comes from the fact that the dish is so delicious and addictively savory that you will find yourself eating multiple bowls of rice without even realizing it."
  },
  {
    id: 33,
    name: "Yangnyeom Gejang",
    koreanName: "양념게장",
    emoji: "🦀",
    category: "Anju",
    howToEat: "This is the spicy counterpart to Ganjang Gejang. Fresh raw crabs are marinated in a fiery, sweet, and spicy sauce made with gochugaru (chili flakes). Similar to its soy-sauce-based sibling, you suck the crab meat from the shell. The spicy marinade is incredibly flavorful, and it’s common to mix rice with the leftover sauce.",
    dont: "Don't order this if you have a low tolerance for spice. It packs a significant punch. The sweetness is there to balance the heat, but it is unapologetically spicy and meant for those who enjoy a fiery kick with their seafood.",
    tip: "Like Ganjang Gejang, this spicy version is also a notorious 'rice thief' (bap-doduk). Many people order both types of marinated crab for a complete 'Gejang' experience, alternating between the savory soy version and the exciting spicy one."
  },
  {
    id: 34,
    name: "Jeon (Assorted Korean Pancakes)",
    koreanName: "모듬전",
    emoji: "🥞",
    category: "Anju",
    howToEat: "Modum-jeon is a beautiful platter of assorted Korean pancakes. These can include pan-fried battered zucchini, fish fillets (saengseon-jeon), meat patties (wanja-jeon), and more. Each type of jeon has a unique flavor and texture. Dip each piece in the provided soy-vinegar sauce to complement its taste.",
    dont: "Don't eat Jeon when they are cold. They are at their peak when served warm and fresh, with a slightly crispy exterior. As they cool, they can become oily and lose their delicate texture.",
    tip: "Jeon is a staple food for Korean holidays like Chuseok (Harvest Festival) and Seollal (Lunar New Year). Preparing Jeon is a time-consuming, communal family activity. They are also a classic 'anju,' pairing perfectly with makgeolli."
  },
  {
    id: 35,
    name: "Gyeranmari",
    koreanName: "계란말이",
    emoji: "🍳",
    category: "Kimchi",
    howToEat: "Gyeranmari, or Korean rolled omelette, is a popular side dish (banchan). It's made by pouring thin layers of beaten egg into a pan and rolling them up, often with finely chopped vegetables, seaweed, or ham mixed in. The result is a beautiful, multi-layered omelette that's sliced into bite-sized pieces. Eat it as a savory accompaniment to your main meal.",
    dont: "Don't expect it to taste like a sweet French omelette. Gyeranmari is distinctly savory, seasoned with salt or fish sauce. Its texture is also denser and more substantial than its fluffy Western counterparts.",
    tip: "This is a go-to dish for Korean lunchboxes ('dosirak') because it's delicious even at room temperature. At some restaurants, you can get it with a gooey cheese filling, which is a popular modern twist."
  },
  {
    id: 36,
    name: "Eomuk (Odeng)",
    koreanName: "어묵",
    emoji: "🍢",
    category: "Street Food",
    howToEat: "Also known as Odeng, Eomuk consists of Korean fish cakes, usually folded and skewered on a long wooden stick. They are simmered in a hot, savory broth. At a street food stall, you grab a skewer, dip it in soy sauce if you like, and eat the fish cake. The broth is self-serve; grab a paper cup and ladle some in to sip alongside the Eomuk.",
    dont: "Don't throw away the broth! The warm, savory broth is considered an essential part of the experience, especially on a cold day. It's comforting, delicious, and free with the purchase of a skewer. Just keep refilling your cup.",
    tip: "Paying at these stalls is often on the honor system. You eat as many skewers as you want and then show the vendor your empty skewers to calculate the bill. It's a quintessential, affordable, and heartwarming Korean street food experience."
  },
  {
    id: 37,
    name: "Hodu Gwaja",
    koreanName: "호두과자",
    emoji: "🌰",
    category: "Dessert",
    howToEat: "These are small, walnut-shaped pastries with a thin, soft cake-like exterior. Inside, they are filled with sweet red bean paste and a piece of actual walnut, which gives them their name and a delightful crunch. They are best enjoyed warm, fresh from the machine.",
    dont: "Don't mistake these for simple cookies or nuts. They are a unique type of pastry. The combination of the soft cake, the sweet paste, and the crunchy walnut is what makes them special. The name 'walnut cookie' doesn't do it justice.",
    tip: "Hodu Gwaja are famously sold at highway rest stops all across Korea, making them the quintessential road trip snack. Buying a warm bag of these pastries is a beloved ritual for travelers on a long journey."
  },
  {
    id: 38,
    name: "Gyeranppang",
    koreanName: "계란빵",
    emoji: "🥚",
    category: "Street Food",
    howToEat: "Literally 'egg bread,' this is a popular and comforting street snack. It's a small, oblong loaf of bread that is slightly sweet and savory, with a whole egg baked right on top or inside. It's a simple, warm, and satisfying snack that's perfect for a quick breakfast or to warm you up in winter.",
    dont: "Don't expect the egg yolk to be runny. The egg is fully cooked through during the baking process. The charm of the dish is the combination of the fluffy, slightly sweet bread and the savory, fully-cooked egg in one bite.",
    tip: "Some vendors add a sprinkle of parsley, a bit of cheese, or a slice of ham to their Gyeranppang for extra flavor. It's a cheap and delicious snack that perfectly represents the simple, heartwarming nature of Korean street food."
  },
  {
    id: 39,
    name: "Soju",
    koreanName: "소주",
    emoji: "🍶",
    category: "Anju",
    howToEat: "Soju is Korea's national spirit. It's a clear, distilled beverage that is traditionally consumed neat, chilled, and in small shot glasses. It's a social drink, almost always enjoyed with food ('anju') and in the company of others. The etiquette involves pouring for others (especially elders) with two hands and receiving a pour with two hands.",
    dont: "Never pour your own drink; it's a social faux pas in traditional settings. Also, avoid drinking it warm, as chilling it significantly mellows its alcoholic bite and makes it much smoother. It's not a drink for sipping like whiskey; it's meant for shots.",
    tip: "Soju is the ultimate companion to a vast majority of Korean dishes, especially savory and greasy ones like Samgyeopsal or Gopchang. Its clean, neutral profile helps cleanse the palate. For a popular modern twist, mix it with beer to create 'Somaek' (Soju + Maekju/Beer)."
  },
  {
    id: 40,
    name: "Makgeolli",
    koreanName: "막걸리",
    emoji: "🍶",
    category: "Anju",
    howToEat: "Makgeolli is an unfiltered, fermented Korean rice wine. It's milky, sweet, tangy, and slightly carbonated. Before pouring, gently invert the bottle a couple of times to mix the sediment ('jigemi') that settles at the bottom. It is traditionally served chilled and drunk from small, rustic bowls rather than cups.",
    dont: "Don't shake the bottle violently, especially if it's a modern, pasteurized version, as the carbonation can cause it to overflow. A gentle tilt is all that's needed. Also, don't treat it like a fine wine; it's a rustic, humble drink meant for casual enjoyment.",
    tip: "The absolute classic, can't-miss pairing for Makgeolli is a savory Korean pancake, like Pajeon or Kimchi Jeon. This combination is so iconic, especially on rainy days, that it's a cultural institution in itself. The savory, oily pancake and the sweet, tangy rice wine are a perfect balance."
  },
  {
    id: 41,
    name: "Kimchi Mandu",
    koreanName: "김치만두",
    emoji: "🥟",
    category: "Street Food",
    howToEat: "These are a spicy and flavorful variation of Korean dumplings. The filling is made with chopped kimchi, tofu, and sometimes minced pork, giving them a distinctively tangy and spicy kick. Whether steamed, fried, or in a soup, they offer a more robust flavor compared to regular mandu. Enjoy them with a soy-vinegar dipping sauce.",
    dont: "Don't expect these to be mild. The spiciness of the kimchi is the star of the show. If you are not a fan of spicy food, you might want to stick to the regular 'gogi-mandu' (meat dumplings).",
    tip: "Kimchi Mandu are particularly delicious when pan-fried (gun-mandu style). The crispy, golden-brown exterior provides a wonderful contrast to the juicy, spicy filling. Many dumpling shops are famous specifically for their excellent Kimchi Mandu."
  },
  {
    id: 42,
    name: "Jjinppang",
    koreanName: "찐빵",
    emoji: "🍞",
    category: "Dessert",
    howToEat: "Jjinppang are soft, fluffy steamed buns. The most classic version is filled with sweet red bean paste (pat). They are a simple, comforting, and nostalgic snack, especially popular in the colder months. They are best eaten warm, fresh from the steamer, when the bread is at its softest.",
    dont: "Don't eat them cold, as the bread can become dense and stiff. The warmth is key to their fluffy, cloud-like texture. They are similar in concept to Chinese baozi, but with a distinct Korean style.",
    tip: "Jjinppang are often sold at small, dedicated shops in rural areas or near markets, especially in the Gangwon province. You can also find variations with vegetable or meat fillings, though the sweet red bean version remains the timeless classic."
  },
  {
    id: 43,
    name: "Chapssaltteok",
    koreanName: "찹쌀떡",
    emoji: "🍡",
    category: "Dessert",
    howToEat: "This dessert is a type of rice cake made from glutinous rice flour, giving it a very chewy and sticky texture. It's typically filled with sweet red bean paste. The outside is often coated in potato starch to prevent it from sticking. It's a simple, sweet, and satisfyingly chewy treat.",
    dont: "Be aware that they are quite dense and filling, so don't eat too many at once. The texture is much chewier and stickier than Japanese mochi, which is a common point of comparison.",
    tip: "Chapssaltteok is traditionally given as a good-luck gift to students before major exams. The stickiness ('chapssal') is a pun for 'sticking' to or passing the exam ('but-da'). It's a sweet way of wishing someone success."
  },
  {
    id: 44,
    name: "Patbingsu",
    koreanName: "팥빙수",
    emoji: "🍧",
    category: "Dessert",
    howToEat: "This is the original, classic form of Korean shaved ice. It consists of a mountain of shaved ice topped with sweet red bean paste (pat), chewy rice cake pieces (tteok), and often a sprinkle of nut powder and a drizzle of condensed milk. Mix all the components together with the ice for a harmonious blend of textures and flavors.",
    dont: "Don't just eat the toppings off the top. The beauty of Patbingsu is the combination of the creamy red beans, chewy tteok, and cold, refreshing ice in every bite. Modern bingsu has many fruit variations, but Patbingsu is the timeless ancestor.",
    tip: "For a traditional touch, some places serve Patbingsu in a brass bowl, which helps keep it cold for longer. It's a nostalgic summer dessert that evokes a sense of tradition compared to its more modern, fruit-laden counterparts."
  },
  {
    id: 45,
    name: "Dakgalbi",
    koreanName: "닭갈비",
    emoji: "🍗",
    category: "BBQ",
    howToEat: "Dakgalbi is a spicy stir-fried chicken dish cooked on a large iron plate right at your table. Diced chicken is marinated in a gochujang-based sauce and stir-fried with cabbage, sweet potatoes, and rice cakes. It's a fun, interactive meal. Once the chicken is cooked, you can wrap it in lettuce or perilla leaves to eat.",
    dont: "Don't wear nice clothes you're worried about. The communal cooking can lead to splatters. Also, don't forget the grand finale: ordering 'bokkeumbap' (fried rice) at the end. A server will add rice, kimchi, and seaweed to the leftover sauce on the grill and fry it up for you.",
    tip: "Many people add cheese as a topping. A server will create a 'river' of melted mozzarella cheese in the middle of the stir-fry, which you can dip the spicy chicken into. This 'cheese-dakgalbi' is a massively popular and delicious modern twist."
  },
  {
    id: 46,
    name: "Jjimdak",
    koreanName: "찜닭",
    emoji: "🍗",
    category: "Stew",
    howToEat: "Jjimdak is a savory and slightly sweet braised chicken dish. Chicken pieces are simmered in a soy sauce-based marinade with various vegetables like potatoes and carrots, and most importantly, wide glass noodles (dangmyeon). The noodles soak up the delicious, savory sauce, making them a highlight of the dish. Eat the tender chicken and noodles with rice.",
    dont: "Don't let the noodles sit in the sauce for too long, as they will absorb all the liquid and can become mushy. Eat them while they are still chewy and perfectly coated in the flavorful sauce. Be aware that dried red chilies are often included for a spicy kick, but are not meant to be eaten whole.",
    tip: "Originating from the city of Andong, 'Andong Jjimdak' is considered the most authentic version of the dish. It's a hearty, communal meal that is perfect for sharing with a group, offering a wonderful balance of savory, sweet, and spicy flavors."
  },
  {
    id: 47,
    name: "Gyeran Jjim (Volcano Style)",
    koreanName: "폭탄계란찜",
    emoji: "🌋🍳",
    category: "Stew",
    howToEat: "This is a visually spectacular version of Korean steamed eggs, known as 'poktan gyeranjjim' or 'volcano steamed egg.' It's cooked over high heat in a stone pot, causing it to puff up dramatically into a towering, fluffy dome. Scoop out spoonfuls of the light, airy, and savory egg soufflé and eat it as a side dish. It has a soft, almost cloud-like texture.",
    dont: "Don't be surprised when it gradually deflates after being served; that's completely normal. The impressive height is temporary. Also, be careful as the stone pot is extremely hot.",
    tip: "This impressive side dish is often served at Korean BBQ restaurants. Its mild, savory flavor and soft texture provide a perfect, soothing contrast to spicy mains or rich, grilled meats. It’s as much a feast for the eyes as it is for the palate."
  },
  {
    id: 48,
    name: "Kimchi Jeon",
    koreanName: "김치전",
    emoji: "🥞",
    category: "Anju",
    howToEat: "This is a savory pancake made with a simple batter, but its main ingredient is chopped, aged kimchi. It's pan-fried until the edges are crispy and golden. Tear it with your chopsticks and dip it in a soy-vinegar sauce. The pancake is tangy, spicy, and savory all at once.",
    dont: "Don't use fresh kimchi for this. The best Kimchi Jeon is made with sour, well-fermented kimchi, which gives it a much deeper and more complex flavor. Also, try not to make the pancake too thick; a thinner pancake allows for a better crispy-to-chewy ratio.",
    tip: "Kimchi Jeon is another classic 'rainy day' food in Korea, almost always enjoyed with a bowl of Makgeolli (rice wine). It’s a simple, humble, and incredibly delicious way to use up older kimchi, transforming it into a beloved comfort food."
  },
  {
    id: 49,
    name: "Buchimgae",
    koreanName: "부침개",
    emoji: "🥞",
    category: "Anju",
    howToEat: "Buchimgae is a general term for savory Korean pancakes. While Pajeon (green onion) and Kimchi Jeon are specific types, Buchimgae can be made with a wide variety of ingredients like zucchini (hobak-buchimgae), chives (buchu-jeon), or mixed vegetables. Enjoy them hot from the pan, dipped in a simple soy-vinegar sauce.",
    dont: "Don't confuse this with a breakfast pancake. Buchimgae is strictly savory and is eaten as an appetizer, a side dish, or most commonly, as 'anju' (food with alcohol). It should be crispy on the outside and slightly chewy on the inside.",
    tip: "This is a very versatile dish and a great way to use up leftover vegetables in the fridge. Almost any vegetable can be chopped up, mixed into a simple flour-and-egg batter, and pan-fried to create a delicious and easy meal or snack."
  },
  {
    id: 50,
    name: "Odeng-bokkeum",
    koreanName: "어묵볶음",
    emoji: "🍢",
    category: "Kimchi",
    howToEat: "This is a classic and very common Korean side dish (banchan) made from stir-fried fish cakes (odeng/eomuk). The fish cakes are sliced and stir-fried in a slightly sweet and savory soy-based sauce, sometimes with a little bit of gochujang for a spicy kick. It's a simple, comforting, and slightly chewy side dish that complements any Korean meal.",
    dont: "Don't expect the fish cakes to be crispy. In this stir-fried preparation, they are meant to be soft and tender, having absorbed the flavors of the sauce. This dish is different from the deep-fried fish cakes you might find elsewhere.",
    tip: "Eomuk-bokkeum is a staple in Korean home-cooking and lunchboxes because it's quick, easy, and inexpensive to make. It’s a beloved 'mit-banchan' (a basic side dish that can be stored for a few days) in many Korean households."
  },
  {
    id: 51,
    name: "Miyeokguk",
    koreanName: "미역국",
    emoji: "🍲",
    category: "Stew",
    howToEat: "This is a nourishing and deeply symbolic Korean seaweed soup. It's made by simmering seaweed (miyeok) in a flavorful broth, typically seasoned with beef or mussels. The soup has a clean, savory, and oceanic flavor. It's eaten with rice as part of a larger meal, prized for its restorative properties.",
    dont: "Don't be surprised by the slippery texture of the seaweed; it's a key characteristic of the soup. Also, don't serve this to someone on their birthday if you are not supposed to. It's a very specific tradition.",
    tip: "Miyeokguk is traditionally eaten by new mothers for postpartum recovery due to its high iodine and iron content. For this reason, it has also become the traditional soup to eat on one's birthday, as a way of honoring one's mother for giving birth. It’s a beautiful culinary tradition symbolizing gratitude and health."
  },
  {
    id: 52,
    name: "Juk",
    koreanName: "죽",
    emoji: "🥣",
    category: "Rice",
    howToEat: "Juk is Korean rice porridge. It's a gentle, comforting food that's incredibly easy to digest. It can be made plain or with various additions like chicken, vegetables, mushrooms, or most famously, abalone (Jeonbok-juk). It's eaten warm, often seasoned with a little soy sauce or salt to taste.",
    dont: "Don't expect Juk to be intensely flavorful. Its primary characteristic is its mildness, which makes it perfect for when you are feeling sick, recovering from an illness, or simply want a light and soothing meal. It's Korean comfort food in its purest form.",
    tip: "There are many specialized Juk restaurants in Korea that offer a wide variety of porridges, from savory options like pumpkin (Hobak-juk) to sweet ones like red bean (Pat-juk). It's a go-to meal for a quick and healthy breakfast or a light dinner."
  },
  {
    id: 53,
    name: "Kongguksu",
    koreanName: "콩국수",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "This unique and refreshing summer noodle dish consists of wheat noodles in a cold, creamy, and savory broth made from ground soybeans. The broth is thick and has a nutty, rich flavor. It's often served with shredded cucumber and sometimes a slice of tomato on top. Season it with a pinch of salt to enhance the nutty flavor.",
    dont: "Don't expect this to be a sweet dish, even though the broth looks milky. It is savory. Also, it is strictly a cold dish, designed to be a nutritious and cooling meal during the hot and humid Korean summer.",
    tip: "The quality of Kongguksu is entirely dependent on the quality of the soybean broth. A good restaurant will grind their own soybeans fresh each day to create a perfectly smooth and deeply nutty broth. It's a vegetarian-friendly dish that is both healthy and delicious."
  },
  {
    id: 54,
    name: "Sundae",
    koreanName: "순대",
    emoji: "🍢",
    category: "Street Food",
    howToEat: "Korean blood sausage, known as Sundae, is a popular street food. It's typically made by stuffing pig or cow intestines with various ingredients, most commonly glass noodles (dangmyeon) and pig's blood. It's steamed and then sliced. You can eat it on its own, or dip the slices in a special salt-and-pepper mix, ssamjang, or the sauce from tteokbokki.",
    dont: "Don't be intimidated by the 'blood sausage' description. The flavor is surprisingly mild and savory, not at all metallic or gamy. The texture, which comes from the glass noodles, is soft and chewy. Give it a try before you decide.",
    tip: "Sundae is often sold by the same street vendors who sell Tteokbokki and Twigim. The holy trinity of Korean street food is ordering all three together. Dip the Sundae and Twigim in the Tteokbokki sauce for the ultimate combination. Sundae is also the main ingredient in 'Sundae-gukbap,' a hearty and popular soup."
  },
  {
    id: 55,
    name: "Gukbap",
    koreanName: "국밥",
    emoji: "🍲🍚",
    category: "Rice",
    howToEat: "Gukbap is a compound word of Guk (soup) and Bap (rice), and it's exactly that: soup with rice. It's a hearty, humble, and popular one-bowl meal where hot soup is ladled over a bowl of rice. You can add condiments like chopped green onions, chili paste, or salted shrimp to season it to your liking. Mix everything together and eat it with a spoon.",
    dont: "Don't eat the rice and soup separately. The whole point of Gukbap is to have the rice soak up the flavorful broth, making every spoonful a perfect, hearty bite. It's a rustic meal meant to be mixed.",
    tip: "There are many regional varieties of Gukbap, such as Dwaeji-gukbap (pork and rice soup) from Busan or Kongnamul-gukbap (bean sprout soup) from Jeonju. It's a beloved hangover cure and a go-to meal for a quick, affordable, and deeply satisfying dining experience."
  },
  {
    id: 56,
    name: "Yukgaejang",
    koreanName: "육개장",
    emoji: "🌶️🍲",
    category: "Stew",
    howToEat: "Yukgaejang is a hearty, spicy, and deeply savory soup made with shredded beef, scallions, and other vegetables. The broth is fiery red and has a rich, beefy flavor with a smoky kick from chili oil. It's almost always served with a bowl of rice. You can either add the rice to the soup to make a gukbap, or alternate spoonfuls of rice and soup.",
    dont: "Be prepared for the heat. This is one of the spicier soups in Korean cuisine, designed to make you sweat. Also, don't skip the rice; its plainness is essential to balance the intense flavors of the soup.",
    tip: "Yukgaejang is a popular restorative dish, believed to provide energy and stamina. It’s a go-to meal for many when they feel a cold coming on or just need a powerful, invigorating boost. It's a classic example of ' invigoratingly spicy' Korean food."
  },
  {
    id: 57,
    name: "Seolleongtang",
    koreanName: "설렁탕",
    emoji: "🥛🍲",
    category: "Stew",
    howToEat: "This is a milky white, delicate soup made by simmering ox bones for many hours. It is served with thin slices of beef and somyeon noodles. The soup itself is served completely unseasoned. You must season it yourself at the table using the provided salt, ground black pepper, and chopped scallions to suit your personal taste.",
    dont: "Don't judge the soup by its initial blandness. It is intentionally served as a blank canvas for you to season. Failing to add salt and pepper will result in a very underwhelming experience. Be generous with the scallions for a fresh, sharp contrast.",
    tip: "Seolleongtang is often eaten with Kkakdugi (diced radish kimchi). Many connoisseurs like to pour some of the tangy Kkakdugi juice directly into the soup, which adds a whole new dimension of flavor. It's a popular breakfast food, known for being nourishing and easy on the stomach."
  },
  {
    id: 58,
    name: "Galbitang",
    koreanName: "갈비탕",
    emoji: "🍖🍲",
    category: "Stew",
    howToEat: "Galbitang is a clear yet rich and hearty soup made with beef short ribs. The soup is simmered for a long time, resulting in a deep, savory beef flavor and incredibly tender meat that falls off the bone. Enjoy the tender meat by dipping it in a soy-based dipping sauce, and savor the clean, nourishing broth with rice.",
    dont: "Don't over-season the broth initially. Like Seolleongtang, it's often seasoned to taste at the table, but its natural beef flavor is more pronounced. Avoid adding too many strong condiments that would mask the delicate, beefy aroma.",
    tip: "Galbitang is considered a slightly more luxurious soup compared to Seolleongtang due to the use of expensive short ribs. It's often served at weddings and other formal occasions, but is also a popular meal for a cold day when you need something hearty and warming."
  },
  {
    id: 59,
    name: "Kongnamul Gukbap",
    koreanName: "콩나물국밥",
    emoji: "🍲🍚",
    category: "Rice",
    howToEat: "This is a refreshing and clean-tasting soup from the city of Jeonju, made with soybean sprouts (kongnamul). The rice is served inside the hot broth, and it's often topped with chopped kimchi and a raw egg. You should quickly mix the egg into the soup to let it cook gently in the residual heat. The soybean sprouts provide a wonderful, crisp texture.",
    dont: "Don't let the egg sit on top and cook fully. The goal is to have it create silky strands within the soup, adding richness and texture. The soup's charm is its refreshing and light quality, so avoid adding too many heavy sauces.",
    tip: "Kongnamul Gukbap is another one of Korea's most famous hangover cures. The soybean sprouts contain asparagine, which helps break down alcohol in the body. It’s a light, hydrating, and deeply comforting meal, perfect for the morning after a long night."
  },
  {
    id: 60,
    name: "Kimchi Bokkeum",
    koreanName: "김치볶음",
    emoji: "🌶️",
    category: "Kimchi",
    howToEat: "Also known as Dubu Kimchi (Tofu with Kimchi), this dish consists of stir-fried kimchi and pork, served alongside slices of warm, plain boiled or steamed tofu. To eat it, you place a piece of the warm tofu, some of the stir-fried kimchi, and a slice of pork together and eat it all in one bite.",
    dont: "Don't use fresh, unripened kimchi. Just like with kimchi fried rice, this dish tastes best when made with sour, well-fermented kimchi. The stir-frying process mellows the sourness and deepens its flavor.",
    tip: "This is a classic 'anju' (food to be eaten with alcohol). The combination of the spicy, savory kimchi and pork with the mild, soft tofu is a perfect match for either Soju or Makgeolli. It's a staple at Korean pubs."
  },
  {
    id: 61,
    name: "Oi Muchim",
    koreanName: "오이무침",
    emoji: "🥒🌶️",
    category: "Kimchi",
    howToEat: "This is a spicy cucumber salad, a popular and easy-to-make side dish (banchan). Sliced cucumbers are seasoned with gochugaru (chili flakes), vinegar, sesame oil, and garlic. It's meant to be eaten as a refreshing, crunchy, and spicy accompaniment to a main meal, providing a cool contrast to rich or heavy dishes.",
    dont: "Don't let it sit for too long before serving. Oi Muchim is at its best when the cucumbers are fresh and crisp. If it sits for hours, the cucumbers will release water and become soft and soggy, losing their delightful crunch.",
    tip: "This is a great 'instant kimchi' for when you don't have any fermented kimchi on hand but want a spicy, refreshing side dish. It can be made in just a few minutes and instantly brightens up any Korean meal."
  },
  {
    id: 62,
    name: "Kkakdugi",
    koreanName: "깍두기",
    emoji: "🧊🌶️",
    category: "Kimchi",
    howToEat: "Kkakdugi is a type of kimchi made from diced Korean radish (mu). It's crunchy, juicy, and refreshingly spicy. It serves the same role as regular cabbage kimchi as a staple side dish, but its crunchy texture makes it a particularly good partner for rich, brothy soups.",
    dont: "Don't expect it to be soft. The hallmark of good Kkakdugi is its satisfyingly loud crunch. The radish cubes are meant to be firm and crisp, providing a great textural contrast to softer foods.",
    tip: "Kkakdugi is the inseparable soulmate of soups like Seolleongtang and Galbitang. The soup restaurants famous for these dishes are often just as famous for their delicious, perfectly fermented Kkakdugi. Don't be shy about asking for refills of this crunchy delight."
  },
  {
    id: 63,
    name: "Baechu Kimchi (Napa Cabbage Kimchi)",
    koreanName: "배추김치",
    emoji: "🥬🌶️",
    category: "Kimchi",
    howToEat: "This is the most iconic and ubiquitous of all kimchi. Made from napa cabbage, it's spicy, sour, salty, and packed with umami. It is served with virtually every Korean meal. You can eat it as is, or use it as an ingredient in countless other dishes. It's the heart and soul of Korean cuisine.",
    dont: "Don't be afraid of the fermentation. The sourness is a sign of good, healthy fermentation, which is rich in probiotics. Kimchi comes in many stages, from fresh ('geotjeori') to very sour and aged ('mugeunji'), each with its own culinary purpose.",
    tip: "The versatility of kimchi is endless. Fresh kimchi is great with Bossam (boiled pork). Perfectly ripened kimchi is the standard for side dishes. Sour, aged kimchi is perfect for making Kimchi Jjigae (stew) or Kimchi Bokkeumbap (fried rice). It's a dynamic ingredient, not just a static side dish."
  },
  {
    id: 64,
    name: "Dotorimuk",
    koreanName: "도토리묵",
    emoji: "🌰",
    category: "Anju",
    howToEat: "Dotorimuk is a savory jelly made from acorn starch. It has a smooth, slightly firm texture and a subtle, earthy flavor. It's typically served chilled, cut into cubes, and dressed with a seasoned soy sauce, chili flakes, and fresh vegetables like cucumber and scallions. It's a light and refreshing dish.",
    dont: "Don't expect it to taste sweet like a fruit jelly. Dotorimuk is entirely savory. Its flavor is very mild, so it relies heavily on the seasoned sauce for its taste. The texture is the main point of interest.",
    tip: "This is a healthy and low-calorie dish, often enjoyed by hikers at restaurants near mountains in Korea. It's considered a healthy 'anju' (food with alcohol), pairing well with makgeolli as a light and refreshing accompaniment."
  },
  {
    id: 65,
    name: "Memil Guksu (Buckwheat Noodles)",
    koreanName: "메밀국수",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "This dish, similar to Japanese soba, features cold buckwheat noodles. They are typically served with a chilled, savory dipping sauce made from soy sauce, dashi, and radish. You pick up a mouthful of noodles with your chopsticks and dip them into the sauce before eating. It’s a light, refreshing, and elegant noodle dish.",
    dont: "Don't pour the dipping sauce over the noodles. This is a dipping noodle dish, not a soup. Pouring the sauce over everything will make the noodles soggy and the flavor one-dimensional. The act of dipping ensures the right noodle-to-sauce ratio in every bite.",
    tip: "The quality of the dipping sauce ('tsuyu') is key. Some restaurants serve the noodles with a side of grated radish ('mu') and wasabi, which you can mix into the sauce to add extra layers of flavor and a pungent kick. It's a perfect meal for a hot summer day."
  },
  {
    id: 66,
    name: "Dakgangjeong",
    koreanName: "닭강정",
    emoji: "🍗",
    category: "Street Food",
    howToEat: "Dakgangjeong is a type of Korean fried chicken that is extra crispy and coated in a sticky, sweet, and often spicy sauce. Unlike regular fried chicken, it's typically double-fried to achieve a crunchier texture that holds up well against the sauce. It's often garnished with chopped nuts. It's sold in cups at street markets or in boxes for takeout.",
    dont: "Don't confuse this with the American-style buffalo wings. The sauce is typically a soy-garlic base with corn syrup for sweetness and gochujang for a spicy kick. The resulting texture is hard and crunchy, rather than just crispy.",
    tip: "One of the best things about Dakgangjeong is that it stays crispy even when it cools down, making it perfect for takeout and picnics. The Incheon Sinpo International Market is famously known for its legendary Dakgangjeong vendors."
  },
  {
    id: 67,
    name: "Chungmu Gimbap",
    koreanName: "충무김밥",
    emoji: "🍙",
    category: "Street Food",
    howToEat: "This is a deconstructed Gimbap originating from the coastal city of Chungmu (now Tongyeong). It consists of three simple parts served separately: plain, unseasoned rice rolled in seaweed, spicy radish kimchi, and spicy seasoned squid. To eat, you take one of the small rice rolls and eat it with a piece of the radish or squid.",
    dont: "Don't look for any fillings inside the rice rolls. They are intentionally plain. All the flavor comes from the two powerful side dishes. The plain rice acts as a neutral canvas for the spicy, savory squid and the crunchy, tangy radish.",
    tip: "This dish was originally created for fishermen as a meal that wouldn't spoil easily in the heat. The separation of the rice from the fillings kept it fresh for longer. It's a simple-looking but incredibly addictive combination."
  },
  {
    id: 68,
    name: "Kalguksu",
    koreanName: "칼국수",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "Meaning 'knife noodles,' Kalguksu is a beloved noodle soup featuring fresh, handmade noodles that are literally cut with a knife. The noodles are served in a rich, comforting broth, which can be made from anchovies, chicken, or clams (Bajirak Kalguksu). The soup is hearty, savory, and deeply satisfying.",
    dont: "The noodles in Kalguksu are the star, but don't forget the kimchi. A good Kalguksu restaurant is always accompanied by excellent, fresh kimchi. The spicy, fresh kimchi is an essential counterpoint to the mild, savory noodle soup.",
    tip: "The broth in Kalguksu is often slightly thickened from the starch of the fresh noodles cooking directly in it, giving it a unique, hearty consistency. The Myeongdong district in Seoul is famous for its 'Myeongdong Kyoja,' a legendary restaurant specializing in a rich Kalguksu."
  },
  {
    id: 69,
    name: "Japchae Bap",
    koreanName: "잡채밥",
    emoji: "🍚",
    category: "Rice",
    howToEat: "This is a simple yet brilliant combination of two Korean favorites: Japchae (glass noodle stir-fry) and Bap (rice). A generous portion of Japchae is served over a bed of hot steamed rice. You can eat them as is, enjoying the distinct layers, or mix them together to create a single, harmonious dish. It's a popular and satisfying one-bowl meal.",
    dont: "Don't expect this to be a light meal. The combination of noodles and rice makes it quite substantial and filling. It's often served in Korean-Chinese restaurants, sometimes with a side of Jajangmyeon sauce for extra flavor.",
    tip: "This dish is perfect for when you're craving the sweet and savory flavors of Japchae but want something more filling than just the noodles alone. The rice soaks up all the delicious sesame-soy sauce, ensuring no flavor goes to waste."
  },
  {
    id: 70,
    name: "Gyeran Jjim",
    koreanName: "계란찜",
    emoji: "🍳",
    category: "Stew",
    howToEat: "Gyeran Jjim is a simple Korean steamed egg side dish. Beaten eggs are mixed with a broth (like anchovy or kelp stock) and steamed in a small earthenware pot (ttukbaegi) until set. It has a soft, savory, and custard-like texture. Scoop it out with a spoon and eat it as a side dish alongside rice and other mains.",
    dont: "This is the simpler, home-style version, not to be confused with the dramatic 'volcano' Gyeran Jjim. Its texture is denser and more custard-like, rather than light and airy. It is meant to be a humble, comforting side.",
    tip: "Because of its mild, non-spicy flavor and soft texture, Gyeran Jjim is the perfect balancing side dish for a spicy Korean meal. It provides a soothing respite from the heat of dishes like spicy stews or stir-fries. It's also a favorite for children."
  },
  {
    id: 71,
    name: "Gamjatang",
    koreanName: "감자탕",
    emoji: "🍲",
    category: "Stew",
    howToEat: "Despite its name ('gamja' means potato), the star of this hearty and spicy stew is the generous portion of pork neck bones. The bones are simmered for a long time, making the meat incredibly tender. The broth is rich, spicy, and flavored with perilla seeds. Use your chopsticks and hands to get all the delicious meat off the bones. It's a communal, soul-warming dish.",
    dont: "Don't be shy about getting your hands dirty. The best meat is hidden in the nooks and crannies of the bones, and it's perfectly acceptable to pick them up to get every last morsel. Also, don't confuse 'gamja' (potato) with the 'gamja' bone, which is part of the pork spine.",
    tip: "Gamjatang is another classic late-night dish and hangover cure. After finishing the meat and potatoes, it's common to add ramyeon noodles or a portion of rice to the remaining broth to create a delicious 'bokkeumbap' (fried rice), ensuring not a drop of the flavorful soup goes to waste."
  },
  {
    id: 72,
    name: "Jumeokbap",
    koreanName: "주먹밥",
    emoji: "🍙",
    category: "Rice",
    howToEat: "Literally 'fist rice,' Jumeokbap are simple, savory rice balls. Warm rice is mixed with ingredients like chopped seaweed, sesame oil, and sesame seeds. You can then form them into bite-sized balls. They are often served 'DIY' style at restaurants, where you are given a bowl of the ingredients and a pair of plastic gloves to mix and form the rice balls yourself.",
    dont: "Don't confuse them with the more complex, rolled Gimbap. Jumeokbap is much simpler, often with the ingredients mixed directly into the rice rather than layered in the center. They are meant to be a quick, casual, and fun snack or side.",
    tip: "Jumeokbap is a perfect accompaniment to very spicy dishes, like spicy chicken feet (dakbal). The mild, savory rice balls provide a perfect way to temper the intense heat of the main dish. They are also a favorite for children's lunchboxes."
  },
  {
    id: 73,
    name: "Hobak Beombeok",
    koreanName: "호박범벅",
    emoji: "🎃",
    category: "Dessert",
    howToEat: "This is a thick, rustic, and traditional pumpkin porridge. It's made by simmering pumpkin with various beans and grains, and often includes small, chewy rice balls (saealsim). It has a natural, subtle sweetness from the pumpkin and is considered a healthy and comforting snack or light meal.",
    dont: "Don't expect it to be overly sweet like a Western pumpkin pie filling. The sweetness is very natural and mild. It's a wholesome, hearty porridge, not a decadent dessert.",
    tip: "Hobak Beombeok is a classic autumn dish, made when pumpkins are in season. It's a taste of traditional, rural Korean home-cooking, offering a sense of warmth and nostalgia."
  },
  {
    id: 74,
    name: "Bokbunja-ju",
    koreanName: "복분자주",
    emoji: "🍷",
    category: "Anju",
    howToEat: "This is a Korean fruit wine made from wild black raspberries (bokbunja). It has a deep reddish color and a sweet, berry-forward flavor with a slightly tart finish. It should be served chilled and sipped slowly to be appreciated. It's a popular alternative to Soju.",
    dont: "Don't chug it like a shot. It is a fruit wine with a rich flavor profile that should be savored. Its sweetness can be deceptive, as it still has a significant alcohol content (typically 15-19% ABV).",
    tip: "Bokbunja-ju is famously associated with stamina and virility in traditional Korean culture. It's often paired with rich seafood dishes like grilled eel (jangeo-gui), as the sweetness of the wine complements the savory flavor of the fish."
  },
  {
    id: 75,
    name: "Gyeran Bap",
    koreanName: "계란밥",
    emoji: "🍳🍚",
    category: "Rice",
    howToEat: "This is the ultimate Korean simple comfort food, often a nostalgic childhood meal. It consists of a bowl of hot steamed rice, a fried egg (preferably with a runny yolk), a drizzle of soy sauce, and a dash of sesame oil. You simply break the yolk and mix everything together into a savory, creamy, and satisfying meal.",
    dont: "Don't overcomplicate it. The beauty of Gyeran Bap is its simplicity. While you can add things like butter or chopped scallions, the core of the dish is just rice, egg, soy sauce, and sesame oil. Overcooking the egg yolk would rob you of the creamy sauce it creates.",
    tip: "This is a go-to 5-minute meal in many Korean households for when you are too tired to cook but still want something warm and satisfying. It's quick, cheap, and tastes like home."
  },
  {
    id: 76,
    name: "Kimchi Bokkeumbap with Cheese",
    koreanName: "치즈 김치볶음밥",
    emoji: "🧀🍚",
    category: "Rice",
    howToEat: "This is a modern and extremely popular upgrade to the classic Kimchi Fried Rice. After frying the rice, a generous amount of shredded mozzarella cheese is melted on top, creating a gooey, cheesy blanket over the spicy rice. Use your spoon to get a bit of the stretchy, melted cheese with every bite of the savory fried rice.",
    dont: "Don't let the cheese cool down and harden. This dish is meant to be eaten immediately while the cheese is hot, melty, and stretchy. The 'cheese pull' is an essential part of the visual and textural experience.",
    tip: "The creamy, mild flavor of the mozzarella provides the perfect counterpoint to the spicy and sour kimchi, taming the heat and adding a rich, savory dimension. It's a fusion dish that has become a modern classic in its own right."
  },
  {
    id: 77,
    name: "Gyeran-guk",
    koreanName: "계란국",
    emoji: "🍳🍲",
    category: "Stew",
    howToEat: "This is a very simple and light Korean egg drop soup. A basic anchovy or vegetable broth is brought to a simmer, and a thin stream of beaten egg is drizzled in to create silky, cloud-like ribbons of egg. It's a quick, comforting soup that is often served as part of a home-cooked meal when a heavier stew is not needed.",
    dont: "Don't boil the soup vigorously after adding the egg. This will break the egg into tiny, unappealing bits. The egg should be cooked gently in a simmering broth to create soft, delicate ribbons.",
    tip: "This soup is a go-to for many Korean parents as it's a favorite among children due to its mild flavor and fun texture. It’s also perfect for when you need a quick, warm soup on a cold day, as it can be prepared in under 10 minutes."
  },
  {
    id: 78,
    name: "Jeotgal (Fermented Seafood)",
    koreanName: "젓갈",
    emoji: "🦐🐟",
    category: "Kimchi",
    howToEat: "Jeotgal is a category of salted and fermented seafood used as a side dish or a seasoning ingredient. It has a very strong, salty, and pungent umami flavor. The most common way to eat it is to take a very small amount and eat it with a spoonful of plain rice. The rice balances the intense saltiness.",
    dont: "Never eat a large spoonful of Jeotgal by itself. It is extremely salty and is meant to be used as a condiment, not a main dish. A little bit goes a very long way. Start with a tiny portion to see if you enjoy the intense, oceanic flavor.",
    tip: "While eaten as a side dish (banchan), Jeotgal is also a crucial ingredient in making many types of kimchi, providing a deep, complex umami flavor that is essential to the fermentation process. Popular types include fermented shrimp (saeujeot) and squid (ojingeojeot)."
  },
  {
    id: 79,
    name: "Baek Kimchi (White Kimchi)",
    koreanName: "백김치",
    emoji: "🥬",
    category: "Kimchi",
    howToEat: "Baek Kimchi is a variety of kimchi made without the signature red chili flakes (gochugaru). It's fermented in a mild, fruity, and savory brine, giving it a crisp, clean, and refreshing taste. It's a wonderful palate cleanser and a great side dish for rich or heavy meals. The brine is also delicious and meant to be sipped.",
    dont: "Don't expect the spicy, pungent flavor of regular kimchi. Baek Kimchi is all about subtlety and refreshment. It showcases the natural sweetness of the napa cabbage and other vegetable ingredients.",
    tip: "This non-spicy kimchi is a fantastic option for children or anyone with a low tolerance for spicy food. It's a great introduction to the world of kimchi without the heat, highlighting the fermentation process itself."
  },
  {
    id: 80,
    name: "Ssam",
    koreanName: "쌈",
    emoji: "🥬🥩",
    category: "BBQ",
    howToEat: "Ssam literally means 'wrap,' and it's a cornerstone of the Korean dining experience. You take a leaf of lettuce, perilla, or steamed cabbage, add a piece of grilled meat (like Samgyeopsal or Bulgogi), a dollop of ssamjang (wrap sauce), maybe a slice of raw garlic or chili, and wrap it all up into a bite-sized package. The goal is to eat it in one single, flavorful bite.",
    dont: "Don't make your ssam so large that you can't eat it in one bite. Taking multiple bites of a single ssam is considered a bit clumsy. The one-bite rule ensures you get the perfect ratio of all ingredients at once. Also, don't nibble on the lettuce leaf by itself.",
    tip: "The world of ssam is vast. Experiment with different leafy vegetables beyond just lettuce. Perilla leaves (kkaennip) offer a unique, minty-anise flavor. Steamed pumpkin leaves (hobak-ip) or kelp (dashima) are also popular. The combination possibilities are endless!"
  },
  {
    id: 81,
    name: "Gyeran-ppang",
    koreanName: "계란빵",
    emoji: "🍞🥚",
    category: "Street Food",
    howToEat: "This beloved street food, literally 'egg bread,' is a warm, oblong pastry that's both sweet and savory. It has a fluffy, cake-like texture and contains a whole egg baked inside. It's a simple, comforting, and inexpensive snack that warms you up from the inside out. Best eaten hot from the vendor's cart.",
    dont: "Don't expect the egg yolk to be runny; it gets fully cooked through during the baking process. The magic is in the delightful combination of the sweet bread and the savory, fully-cooked egg in every bite.",
    tip: "This is a quintessential winter street food in Korea. While walking through a bustling market on a chilly day, the sight of a Gyeran-ppang cart with its steaming hot pastries is incredibly inviting. Some vendors add a sprinkle of cheese or ham for a modern twist."
  },
  {
    id: 82,
    name: "Kkochi Eomuk",
    koreanName: "꼬치어묵",
    emoji: "🍢",
    category: "Street Food",
    howToEat: "This is the skewered version of Korean fish cake, a street food staple. The fish cakes are folded onto long wooden skewers and simmered in a hot, savory broth. You grab a skewer from the communal pot, eat the fish cake (dipping it in soy sauce if you wish), and then sip the hot broth from a separate paper cup. It's a classic pay-per-skewer system.",
    dont: "Don't neglect the broth! It's a free, delicious, and essential part of the Kkochi Eomuk experience. Sipping the warm, umami-rich broth between bites of fish cake is incredibly comforting, especially in cold weather.",
    tip: "Street vendors often have two broth options: mild and spicy. Trying both can be a fun experience. This is one of the most affordable and heartwarming street foods you can find in Korea, beloved by people of all ages."
  },
  {
    id: 83,
    name: "Hwe-deopbap",
    koreanName: "회덮밥",
    emoji: "🍣🍚",
    category: "Rice",
    howToEat: "This is the Korean take on a raw fish rice bowl, similar to a poke bowl but with a distinct Korean flavor profile. It consists of a bowl of steamed rice topped with cubed raw fish (like tuna or salmon), a generous amount of fresh, crisp vegetables, and often flying fish roe. You add a dollop of 'chogochujang' (sweet and spicy chili paste) and a drizzle of sesame oil, then mix everything together like a bibimbap.",
    dont: "Don't eat the components separately. Just like bibimbap, the dish is meant to be thoroughly mixed so that every bite has a combination of the fresh fish, crisp vegetables, warm rice, and spicy-sweet sauce. The harmony of flavors and textures is key.",
    tip: "Hwe-deopbap is a fantastic, healthy, and refreshing meal, especially popular during the summer. It offers the satisfaction of bibimbap but with the clean, fresh taste of raw fish. It's a perfect one-bowl meal."
  },
  {
    id: 84,
    name: "Janchi Guksu (Warm)",
    koreanName: "잔치국수 (따뜻한)",
    emoji: "🍜",
    category: "Noodle",
    howToEat: "Meaning 'banquet noodles,' this warm, comforting noodle soup features thin wheat noodles (somyeon) in a light and savory anchovy broth. It's garnished with colorful, thinly sliced vegetables and egg. Slurp the noodles with the delicate broth for a clean and satisfying meal.",
    dont: "Don't add heavy or overpowering sauces. The beauty of Janchi Guksu is its simple, delicate broth. A small spoonful of seasoned soy sauce is all that's needed to enhance the flavor, if at all.",
    tip: "The name comes from the tradition of serving these noodles at celebrations like weddings and birthdays, where the long noodles symbolize a long and happy life. It's a dish that evokes a sense of warmth and festivity."
  },
  {
    id: 85,
    name: "Patjuk",
    koreanName: "팥죽",
    emoji: "🥣",
    category: "Dessert",
    howToEat: "Patjuk is a traditional Korean red bean porridge. It can be sweet (dan-patjuk) or savory, but the sweet version is more common as a dessert. It's eaten warm and often contains chewy, glutinous rice balls called 'saealsim' (bird's eggs). The texture is thick, smooth, and comforting.",
    dont: "Don't expect the level of sweetness you'd find in a Western dessert. The sweetness in traditional Patjuk is quite subtle and comes mainly from the red beans themselves, making it a wholesome and not-too-sugary treat.",
    tip: "Patjuk is traditionally eaten on 'Dongji' (the winter solstice), the longest night of the year. The red color of the beans was believed to ward off evil spirits. Eating a warm bowl of Patjuk on this day is a cherished winter tradition."
  },
  {
    id: 86,
    name: "Gyeran Toast",
    koreanName: "계란 토스트",
    emoji: "🍞🍳",
    category: "Street Food",
    howToEat: "This isn't just a simple egg toast; it's a popular Korean street food that's a perfect harmony of sweet and savory. An egg omelette, often mixed with chopped vegetables, is sandwiched between two slices of toasted bread. The bread is often sprinkled with sugar before being grilled, giving it a unique caramelized sweetness that contrasts with the savory filling.",
    dont: "Don't expect a typical Western breakfast sandwich. The addition of sugar is a key, characteristic element. It might sound unusual, but the sweet and savory combination is what makes it so addictive and beloved.",
    tip: "Known as 'gilgeori toast' (street toast), this is a classic grab-and-go breakfast for busy Koreans. Vendors often have their own special touches, like a secret sauce or a specific combination of vegetables. It’s a cheap, quick, and incredibly satisfying meal."
  }
];

export default foods;