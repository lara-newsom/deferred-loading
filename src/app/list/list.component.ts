import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

interface Cat {
  nickname: string;
  name: string;
  age: number;
  color: string;
  description: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  rowData: Cat[] = [
    {
      nickname: 'Whisker McGee',
      name: 'Mr. Fluffykins',
      age: 5,
      color: 'White',
      description:
        'Mr. Fluffykins is a majestic feline with a penchant for napping on sunny windowsills. He enjoys chasing shadows and is an expert at birdwatching, although he has never caught a bird in his life. Despite his regal appearance, Mr. Fluffykins has a mischievous side and often gets into trouble by knocking over plants and stealing socks.',
    },
    {
      nickname: 'Cuddle Monster',
      name: 'Sir Purrington III',
      age: 3,
      color: 'Tabby',
      description:
        "Sir Purrington III is a lovable tabby cat who adores cuddling with anyone willing to give him attention. His favorite pastime is lounging on laps while purring contentedly. Sir Purrington III has a playful spirit and enjoys batting around toy mice and chasing after laser pointers. Despite his affectionate nature, he can be quite demanding when it comes to mealtime and isn't afraid to voice his displeasure if dinner is served late.",
    },
    {
      nickname: 'Grandma Naughty',
      name: 'Princess Whiskerina',
      age: 19,
      color: 'Calico',
      description:
        'Princess Whiskerina is a spirited calico cat with a mischievous streak. She enjoys exploring every nook and cranny of her kingdom, leaving no box unturned or curtain unclimbed. Princess Whiskerina is known for her acrobatic feats and can often be found balancing on the narrowest of ledges. Despite her adventurous nature, she has a sweet disposition and loves nothing more than curling up in a cozy blanket for a catnap.',
    },
    {
      nickname: 'Dumpster Goblin',
      name: 'Muffin',
      age: 7,
      color: 'Brown',
      description:
        "Muffin, also known as the Dumpster Goblin, is a fearless explorer who loves nothing more than rummaging through trash cans in search of hidden treasures. Despite his scruffy appearance, he's surprisingly agile and can often be found scaling fences and leaping from rooftop to rooftop. Muffin has a mischievous streak and enjoys playing pranks on unsuspecting passersby, but deep down, he's a sweetheart who loves cuddles and chin scratches.",
    },
    {
      nickname: 'Toilet Inspector',
      name: 'Sir Meowsalot',
      age: 1,
      color: 'White and Brown',
      description:
        "Sir Meowsalot, also known as the Toilet Inspector, takes his job very seriously. He prides himself on his meticulous inspections of all things bathroom-related, from toilets to sinks to shower curtains. Sir Meowsalot is a stickler for cleanliness and will not hesitate to bathe himself multiple times a day to maintain his pristine appearance. Despite his refined demeanor, he's not above indulging in a game of chase with a crumpled-up piece of paper or a stray hair tie.",
    },
    {
      nickname: 'Furry McFluff',
      name: 'Princess Whiskers',
      age: 1,
      color: 'Gray and White',
      description:
        "Princess Whiskers, also known as Furry McFluff, is a gentle soul with a heart of gold. She enjoys lounging in sunbeams and watching birds flit by outside the window. Princess Whiskers is a skilled hunter and often brings her humans 'gifts' of half-dead insects and small rodents. Despite her prowess in the wild, she's a bit of a scaredy-cat when it comes to loud noises and sudden movements.",
    },
    {
      nickname: 'Snugglebug',
      name: 'Whiskerella',
      age: 5,
      color: 'Black and White',
      description:
        "Whiskerella, also known as Snugglebug, is a cuddly cat with a heart of gold. She enjoys nothing more than curling up in her favorite blanket and purring contentedly while being stroked. Whiskerella is a social butterfly and loves meeting new people, often following them around the house to ensure they're properly welcomed. Despite her affectionate nature, she's fiercely independent and won't hesitate to assert herself when necessary.",
    },
    // Add more cats below
    {
      nickname: 'Ginger Ninja',
      name: 'Socks',
      age: 3,
      color: 'Orange',
      description:
        "Socks, also known as the Ginger Ninja, is a fearless warrior with lightning-fast reflexes. He's a master of stealth and can often be found hiding in the shadows, waiting to pounce on unsuspecting prey. Socks is a skilled hunter and takes great pride in his ability to catch insects and toy mice with deadly precision. Despite his tough exterior, he's a big softie who loves nothing more than curling up in his favorite spot by the fireplace.",
    },
    {
      nickname: 'Purrfect Paws',
      name: 'Mittens',
      age: 6,
      color: 'Gray and White',
      description:
        "Mittens, also known as Purrfect Paws, is a sophisticated feline with impeccable manners. She enjoys lounging in the sun and observing the world from her perch by the window. Mittens is a skilled hunter and often brings her humans 'presents' of half-dead birds and mice. Despite her aristocratic demeanor, she's not above indulging in a game of chase with a stray piece of string or a crumpled-up ball of paper.",
    },
    {
      nickname: 'Sir Floofington',
      name: 'Walter Raspberry',
      age: 4,
      color: 'White',
      description:
        "Walter Raspberry, also known as Sir Floofington, is a regal gentleman with a luxurious coat of fur. He enjoys lounging on velvet cushions and being fanned with palm fronds by his loyal servants. Sir Floofington is a connoisseur of fine cuisine and insists on being served only the finest cuts of tuna and salmon. Despite his haughty demeanor, he's a softie at heart and enjoys snuggling up with his humans by the fire.",
    },
    {
      nickname: 'Queenie',
      name: 'Samantha',
      age: 5,
      color: 'Calico',
      description:
        "Samantha, also known as Queenie, is a majestic calico cat with a queenly presence. She enjoys lounging on her royal throne and being waited on hand and foot by her loyal subjects. Samantha is a skilled hunter and often brings her humans 'gifts' of half-dead mice and birds. Despite her regal demeanor, she's a bit of a diva and won't hesitate to demand attention when she feels she's not getting enough.",
    },
    {
      nickname: 'Captain Snuggles',
      name: 'Felix',
      age: 7,
      color: 'Black',
      description:
        "Felix, also known as Captain Snuggles, is a dashing black cat with a heart of gold. He enjoys lounging in sunbeams and being pampered with chin scratches and belly rubs. Felix is a skilled hunter and often brings his humans 'gifts' of half-dead insects and small rodents. Despite his tough exterior, he's a big softie who loves nothing more than curling up in his favorite spot by the fireplace.",
    },
    {
      nickname: 'Fluffykins',
      name: 'Toby',
      age: 3,
      color: 'Orange',
      description:
        "Toby, also known as Fluffykins, is a charming orange tabby with a heart of gold. He enjoys lounging in sunbeams and chasing after toy mice with boundless energy. Toby is a social butterfly and loves meeting new people, often following them around the house to ensure they're properly welcomed. Despite his playful nature, he's a bit of a scaredy-cat when it comes to loud noises and sudden movements.",
    },
    {
      nickname: 'Sir Whiskerpants',
      name: 'Leo',
      age: 14,
      color: 'Brown',
      description:
        "Leo, also known as Sir Whiskerpants, is a distinguished gentleman with a luxurious coat of fur. He enjoys lounging on velvet cushions and being fanned with palm fronds by his loyal servants. Leo is a connoisseur of fine cuisine and insists on being served only the finest cuts of tuna and salmon. Despite his haughty demeanor, he's a softie at heart and enjoys snuggling up with his humans by the fire.",
    },
    {
      nickname: 'Meowster',
      name: 'Oliver',
      age: 16,
      color: 'Black and White',
      description:
        "Oliver, also known as Meowster, is a suave black and white tuxedo cat with a heart of gold. He enjoys lounging in sunbeams and being pampered with chin scratches and belly rubs. Oliver is a skilled hunter and often brings his humans 'gifts' of half-dead insects and small rodents. Despite his tough exterior, he's a big softie who loves nothing more than curling up in his favorite spot by the fireplace.",
    },
    {
      nickname: 'Fluffybutt',
      name: 'Maxwell Poindexter',
      age: 3,
      color: 'Gray',
      description:
        "Maxwell Poindexter, also known as Fluffybutt, is a playful gray cat with a penchant for mischief. He enjoys chasing after toy mice and batting around crumpled-up balls of paper with boundless energy. Maxwell Poindexter is a skilled hunter and often brings his humans 'gifts' of half-dead insects and small rodents. Despite his rambunctious nature, he's a big softie who loves nothing more than curling up in his favorite blanket for a catnap.",
    },
    {
      nickname: 'Princess Purrington',
      name: 'Luna',
      age: 7,
      color: 'Tabby',
      description:
        "Luna, also known as Princess Purrington, is a playful tabby cat with a heart of gold. She enjoys chasing after toy mice and climbing to the top of her cat tree with boundless energy. Luna is a social butterfly and loves meeting new people, often following them around the house to ensure they're properly welcomed. Despite her playful nature, she's a bit of a scaredy-cat when it comes to loud noises and sudden movements.",
    },
    {
      nickname: 'Fluffy McFlufferson',
      name: 'Whiskers',
      age: 4,
      color: 'Orange',
      description:
        "Whiskers is a charming orange tabby with a fluffy coat that's as soft as a cloud. He has a playful personality and enjoys pouncing on feather toys with boundless energy. Whiskers is a curious explorer and often gets into mischief while investigating new smells and sounds. Despite his antics, he's incredibly affectionate and loves to snuggle up with his humans at the end of a long day.",
    },
    {
      nickname: 'Sassy Pants',
      name: 'Miss Mittens',
      age: 6,
      color: 'Gray',
      description:
        'Miss Mittens is a sophisticated gray cat with a sassy attitude to match. She takes pride in her sleek fur and impeccable grooming habits. Miss Mittens enjoys lounging in sunbeams and watching the world go by from her favorite perch by the window. Despite her aloof exterior, she has a soft spot for belly rubs and will purr contentedly when given the attention she deserves.',
    },
    {
      nickname: 'Furry Fury',
      name: 'Captain Whiskerbeard',
      age: 7,
      color: 'Black',
      description:
        "Captain Whiskerbeard is a dashing black cat with a mysterious aura. He's a seasoned adventurer who's seen it all and isn't afraid to show it. Captain Whiskerbeard enjoys prowling the night, hunting imaginary prey in the moonlight. Despite his grizzled appearance, he's a softie at heart and enjoys snuggling up with his humans for a well-deserved catnap.",
    },
    {
      nickname: 'Midnight Marauder',
      name: 'Shadow',
      age: 4,
      color: 'Black',
      description:
        "Shadow, also known as the Midnight Marauder, is a sleek black cat with a mysterious aura. He enjoys prowling the night and hunting imaginary prey in the moonlight. Shadow is a skilled hunter and often brings his humans 'gifts' of half-dead insects and small rodents. Despite his nocturnal habits, he's a big softie who loves nothing more than curling up in his favorite spot by the fireplace.",
    },
    {
      nickname: 'Pumpkin Pie',
      name: 'Butterscotch',
      age: 7,
      color: 'Orange',
      description:
        "Butterscotch, also known as Pumpkin Pie, is a sweet orange tabby with a playful spirit. He enjoys chasing after toy mice and climbing to the top of his cat tree with boundless energy. Butterscotch is a social butterfly and loves meeting new people, often following them around the house to ensure they're properly welcomed. Despite his playful nature, he's a bit of a scaredy-cat when it comes to loud noises and sudden movements.",
    },
    {
      nickname: 'Sir Whiskersworth',
      name: 'Boots',
      age: 5,
      color: 'Gray and White',
      description:
        "Boots, also known as Sir Whiskersworth, is a sophisticated feline with impeccable manners. He enjoys lounging in the sun and observing the world from his perch by the window. Boots is a skilled hunter and often brings his humans 'presents' of half-dead birds and mice. Despite his aristocratic demeanor, he's not above indulging in a game of chase with a stray piece of string or a crumpled-up ball of paper.",
    },
    {
      nickname: 'Fluffy McFluff',
      name: 'Hot Sauce',
      age: 3,
      color: 'Orange',
      description:
        "Hot Sauce, also known as Fluffy McFluff, is a playful orange tabby with a heart of gold. He enjoys chasing after toy mice and climbing to the top of his cat tree with boundless energy. Hot Sauce is a social butterfly and loves meeting new people, often following them around the house to ensure they're properly welcomed. Despite his playful nature, he's a bit of a scaredy-cat when it comes to loud noises and sudden movements.",
    },
    {
      nickname: 'Purrlock Holmes',
      name: 'Fuzzington',
      age: 3,
      color: 'Black and White',
      description:
        'Fuzzington, alias Purrlock Holmes, is a mysterious investigator who can often be found on the trail of missing toys and hidden treats. With his keen sense of smell and sharp intellect, Fuzzington solves mysteries that baffle even the most astute humans. Despite his serious demeanor, he enjoys curling up by the fire with a good book and a warm cup of milk.',
    },
    {
      nickname: 'Meowcolm X',
      name: 'Whiskerby',
      age: 4,
      color: 'Gray',
      description:
        "Whiskerby, aka Meowcolm X, is a feline revolutionary with a passion for justice and equality. He's always on the lookout for opportunities to protest against closed doors and inaccessible treats. With his charismatic charm and persuasive meows, Whiskerby rallies his fellow felines to join him in the fight for a better world. Despite his serious activism, he enjoys napping in sunbeams and playing with feather toys.",
    },
    {
      nickname: 'Chairman Meow',
      name: 'Mittensworth',
      age: 5,
      color: 'White',
      description:
        'Mittensworth, also known as Chairman Meow, is a visionary leader with a knack for strategic planning and long-term vision. He dreams of a world where every cat has equal access to cozy beds and endless treats. With his charismatic charm and persuasive purrs, Mittensworth leads his followers to a brighter future. Despite his revolutionary ideals, he enjoys lounging in sunbeams and chasing after laser pointers.',
    },
    {
      nickname: 'Sir Meows-a-lot',
      name: 'Snugglebum',
      age: 6,
      color: 'Tabby',
      description:
        "Snugglebum, aka Sir Meows-a-lot, is a distinguished gentleman with a penchant for poetry and fine dining. He can often be found reciting Shakespearean sonnets while lounging in his favorite armchair. With his refined tastes and impeccable manners, Snugglebum is the epitome of sophistication. Despite his aristocratic demeanor, he's not above indulging in a game of chase with a crumpled-up ball of paper.",
    },
    {
      nickname: 'Whisker Whisperer',
      name: 'Muffinface',
      age: 3,
      color: 'Orange',
      description:
        'Muffinface, also known as the Whisker Whisperer, has a magical touch when it comes to calming anxious kitties and soothing frazzled nerves. With her gentle purrs and comforting cuddles, Muffinface brings peace and tranquility to even the most chaotic households. Despite her calming influence, she enjoys chasing after toy mice and climbing to the top of her cat tree with boundless energy.',
    },
    {
      nickname: 'Duke Fluffington',
      name: 'Squishy',
      age: 4,
      color: 'Brown',
      description:
        "Squishy, alias Duke Fluffington, is a regal feline with a heart of gold. He enjoys lounging in sunbeams and being pampered with chin scratches and belly rubs. With his charming personality and playful antics, Squishy wins the hearts of everyone he meets. Despite his aristocratic pedigree, he's not above indulging in a game of chase with a crumpled-up piece of paper.",
    },
    {
      nickname: 'Professor Purrington',
      name: 'Fluffybutt',
      age: 7,
      color: 'Black',
      description:
        'Fluffybutt, also known as Professor Purrington, is a scholarly cat with a passion for feline literature and philosophy. He spends his days poring over ancient texts and pondering the meaning of life. With his wise demeanor and thoughtful meows, Professor Purrington imparts wisdom to all who seek his guidance. Despite his intellectual pursuits, he enjoys napping in sunbeams and playing with feather toys.',
    },
    {
      nickname: 'Troublemaker',
      name: 'Charlie',
      age: 2,
      color: 'Orange',
      description:
        'Charlie is a mischievous orange tabby with a penchant for getting into trouble. He enjoys knocking over flower pots and unraveling toilet paper rolls with boundless energy. Despite his naughty antics, Charlie has a heart of gold and loves cuddling up with his humans at the end of the day.',
    },
    {
      nickname: 'Mischief Master',
      name: 'Max',
      age: 7,
      color: 'Gray and White',
      description:
        'Max, also known as the Mischief Master, is a playful gray and white cat with a knack for causing chaos. He enjoys swatting objects off tables and darting through open doors before they can be closed. Despite his wild behavior, Max is a lovable goofball who enjoys snuggling up with his humans for a nap.',
    },
    {
      nickname: 'Rascal',
      name: 'Uncle Jack',
      age: 4,
      color: 'Black',
      description:
        'Uncle Jack, also known as the Rascal, is a black cat with a mischievous glint in his eye. He enjoys hiding in closets and surprising unsuspecting passersby with a playful pounce. Despite his naughty behavior, Uncle Jack is a sweet and affectionate cat who loves nothing more than curling up on the couch with his favorite human.',
    },
    {
      nickname: 'Chaos Kitty',
      name: 'Sophie',
      age: 7,
      color: 'Calico',
      description:
        'Sophie, also known as the Chaos Kitty, is a spirited calico with a talent for causing mayhem. She enjoys knocking over water glasses and chasing after imaginary mice with boundless energy. Despite her wild behavior, Sophie is a loving and loyal companion who enjoys cuddling up with her humans at the end of a long day.',
    },
    {
      nickname: 'Whirlwind',
      name: 'Jack',
      age: 2,
      color: 'Tabby',
      description:
        'Jack, also known as Whirlwind, is a whirlwind of energy with a talent for causing chaos wherever he goes. He enjoys darting through the house at top speed and knocking over anything in his path with boundless enthusiasm. Despite his wild antics, Jack is a lovable goofball who enjoys cuddling up with his humans for a nap.',
    },
    {
      nickname: 'Big Trouble',
      name: 'Lily',
      age: 7,
      color: 'White',
      description:
        'Lily, also known as the Big Trouble, is a playful white cat with a knack for getting into trouble. She enjoys climbing curtains and unraveling yarn with boundless energy. Despite her naughty antics, Lily is a sweet and affectionate cat who loves nothing more than curling up on the couch with her favorite human.',
    },
    {
      nickname: 'Little Devil',
      name: 'Bella',
      age: 4,
      color: 'Black and White',
      description:
        'Bella, also known as the Little Devil, is a black and white cat with a mischievous streak. She enjoys darting through the house at top speed and knocking over anything in her path with boundless enthusiasm. Despite her devilish behavior, Bella is a lovable goofball who enjoys cuddling up with her humans for a nap.',
    },
    {
      nickname: 'Mayhem Maker',
      name: 'Molly',
      age: 2,
      color: 'Gray',
      description:
        'Molly, also known as the Mayhem Maker, is a spirited gray cat with a talent for causing chaos. She enjoys knocking over water glasses and darting through open doors before they can be closed. Despite her wild behavior, Molly is a loving and loyal companion who enjoys cuddling up with her humans at the end of a long day.',
    },
    {
      nickname: 'Stinky Breath',
      name: 'Gustav',
      age: 12,
      color: 'Gray',
      description:
        'Gustav, also known as Stinky Breath, is a playful gray cat with a penchant for mischief. Despite his adorable appearance, he has a breath that can clear a room in seconds. Gustav enjoys chasing after toy mice and lounging in sunbeams.',
    },
    {
      nickname: 'Tuna Butt',
      name: 'Frederick',
      age: 8,
      color: 'Calico',
      description:
        'Frederick, also known as Tuna Butt, is a curious calico cat with a love for all things fishy. His fondness for tuna often leaves him with a distinctive aroma that follows him wherever he goes. Frederick enjoys exploring his surroundings and basking in the warmth of the sun.',
    },
    {
      nickname: 'Smelly Paws',
      name: 'Hans',
      age: 4,
      color: 'Tabby',
      description:
        'Hans, also known as Smelly Paws, is a mischievous tabby cat with a playful spirit. Despite his charming personality, he has a tendency to get into things that leave his paws less than fresh. Hans enjoys chasing after feather toys and curling up in warm laps for cuddles.',
    },
    {
      nickname: 'Funky Fur',
      name: 'Matilda',
      age: 2,
      color: 'White',
      description:
        'Matilda, also known as Funky Fur, is an elegant white cat with a gentle demeanor. Despite her graceful appearance, she has a fur that can sometimes develop a unique scent of its own. Matilda enjoys lounging in sunbeams and being pampered with gentle strokes and chin scratches.',
    },
    {
      nickname: 'Garlic Whiskers',
      name: 'Ludwig',
      age: 8,
      color: 'Orange',
      description:
        'Ludwig, also known as Garlic Whiskers, is a lively orange tabby with a zest for life. His love for garlic-infused treats often leaves him with whiskers that emit a distinctive aroma. Ludwig enjoys exploring his surroundings and chasing after laser pointers.',
    },
    {
      nickname: 'Sardine Snout',
      name: 'Elena',
      age: 4,
      color: 'Gray',
      description:
        'Elena, also known as Sardine Snout, is a sleek gray cat with a playful personality. Her fondness for sardine-flavored snacks often leaves her with a distinctive scent emanating from her snout. Elena enjoys lounging in sunbeams and watching birds through the window.',
    },
    {
      nickname: 'Musty Mittens',
      name: 'Oscar',
      age: 5,
      color: 'Calico',
      description:
        'Oscar, also known as Musty Mittens, is a dignified calico cat with a love for adventure. Despite his regal appearance, his outdoor explorations sometimes leave his mittens with a musty odor. Oscar enjoys climbing trees and curling up in cozy blankets for a catnap.',
    },
    {
      nickname: 'Rotten Tail',
      name: 'Clara',
      age: 2,
      color: 'Tabby',
      description:
        'Clara, also known as Rotten Tail, is a curious tabby cat with a mischievous streak. Despite her sweet demeanor, she has a tail that occasionally emits a less-than-pleasant scent. Clara enjoys chasing after toy mice and exploring every nook and cranny of her home.',
    },
    {
      nickname: 'Smelly Whiskers',
      name: 'Friedrich',
      age: 8,
      color: 'White',
      description:
        'Friedrich, also known as Smelly Whiskers, is an affectionate white cat with a gentle soul. Despite his loving nature, he has whiskers that sometimes carry a unique scent of their own. Friedrich enjoys cuddling up with his humans and receiving gentle chin scratches.',
    },
    {
      nickname: 'Blitzkatze',
      name: 'Schnitzelbaum von Fluffenhausen III',
      age: 2,
      color: 'Gray',
      description:
        'Schnitzelbaum von Fluffenhausen III, also known as Blitzkatze, is a mysterious gray cat with an air of sophistication. Despite his elaborate name, he has a lightning-fast agility that earns him his nickname. Blitzkatze enjoys exploring the great outdoors and chasing after elusive bugs.',
    },
    {
      nickname: 'Schattenjäger',
      name: 'Krautwurst der Unverständliche',
      age: 10,
      color: 'Calico',
      description:
        'Krautwurst der Unverständliche, also known as Schattenjäger, is a fearless calico cat with a talent for hunting. Despite his incomprehensible name, he has a knack for tracking down shadows and darting through the darkness. Schattenjäger enjoys prowling around at night and patrolling his territory.',
    },
    {
      nickname: 'Nachtgänger',
      name: 'Rüdiger von Katzendorf',
      age: 4,
      color: 'Tabby',
      description:
        'Rüdiger von Katzendorf, also known as Nachtgänger, is a nocturnal tabby cat with a mysterious aura. Despite his grandiose name, he has a tendency to roam the night in search of adventure. Nachtgänger enjoys prowling the streets under the moonlight and indulging in midnight snacks.',
    },
    {
      nickname: 'Donnergroll',
      name: 'Klopfer der Verwirrende',
      age: 2,
      color: 'White',
      description:
        'Klopfer der Verwirrende, also known as Donnergroll, is a quirky white cat with a penchant for confusion. Despite his perplexing name, he has a thunderous purr that can be heard from miles away. Donnergroll enjoys lounging in sunbeams and playing hide-and-seek with his humans.',
    },
    {
      nickname: 'Nebelkrieger',
      name: 'Schnurrbart von Mäusefänger',
      age: 10,
      color: 'Orange',
      description:
        "Schnurrbart von Mäusefänger, also known as Nebelkrieger, is a brave orange tabby with a warrior's spirit. Despite his mouse-catching name, he has a mysterious allure that draws others to him. Nebelkrieger enjoys patrolling the neighborhood and defending his territory from imaginary foes.",
    },
    {
      nickname: 'Mondtänzer',
      name: 'Furzkissen der Unerklärliche',
      age: 4,
      color: 'Gray',
      description:
        'Furzkissen der Unerklärliche, also known as Mondtänzer, is a graceful gray cat with a love for moonlit dances. Despite his inexplicable name, he has a talent for twirling under the moonlight with unmatched elegance. Mondtänzer enjoys lounging on rooftops and serenading the night with his meows.',
    },
    {
      nickname: 'Frostklau',
      name: 'Puschel der Kuschelbar',
      age: 5,
      color: 'Calico',
      description:
        'Puschel der Kuschelbar, also known as Frostklau, is a cuddly calico with a mischievous streak. Despite his fluffy appearance, he has a penchant for stealing socks and hiding them in mysterious places. Frostklau enjoys snuggling up with his humans and plotting his next sock heist.',
    },
    {
      nickname: 'Morgenlicht',
      name: 'Pelzknäuel von Schnurrpurr',
      age: 2,
      color: 'Tabby',
      description:
        'Pelzknäuel von Schnurrpurr, also known as Morgenlicht, is a fluffy tabby with a love for the morning sun. Despite his tangled name, he has a warm and gentle nature that radiates tranquility. Morgenlicht enjoys lounging in sunbeams and watching the world wake up around him.',
    },
    {
      nickname: 'Dunkelflüsterer',
      name: 'Kratzbürste von Fauchfaust',
      age: 13,
      color: 'White',
      description:
        'Kratzbürste von Fauchfaust, also known as Dunkelflüsterer, is a mysterious white cat with a penchant for the shadows. Despite his scratchy name, he has a whisper-soft meow that can barely be heard. Dunkelflüsterer enjoys exploring dark corners and keeping his humans guessing.',
    },
    {
      nickname: 'Moonshine',
      name: 'Stink Expert',
      age: 2,
      color: 'Gray',
      description:
        'Stink Expert, also known as Moonshine, is a crafty gray cat with a knack for mischief. Despite his doughy appearance, he has a fiery spirit that matches his mountain roots. Moonshine enjoys exploring the great outdoors and chasing after elusive critters.',
    },
    {
      nickname: 'Whisker',
      name: 'Grizzle',
      age: 10,
      color: 'Calico',
      description:
        'Grizzle, also known as Whisker, is a feisty calico cat with a love for adventure. Despite her gritty name, she has a soft spot for cuddles and chin scratches. Whisker enjoys prowling around the farm and soaking up the warm Tennessee sun.',
    },
    {
      nickname: 'Sassafras',
      name: 'Lady Salad Pants',
      age: 4,
      color: 'Tabby',
      description:
        'Lady Salad Pants, also known as Sassafras, is a spirited tabby cat with a playful personality. Despite his doughy name, he has a spicy streak that keeps his humans on their toes. Sassafras enjoys climbing trees and hunting for hidden treasures.',
    },
    {
      nickname: 'Holler',
      name: 'Star Castle',
      age: 2,
      color: 'White',
      description:
        'Star Castle, also known as Holler, is a fearless white cat with a penchant for adventure. Despite his ethereal name, he has a down-to-earth demeanor that endears him to all who meet him. Holler enjoys exploring the backwoods and chasing after elusive critters.',
    },
    {
      nickname: 'Smokey',
      name: 'Gravy',
      age: 11,
      color: 'Orange',
      description:
        'Gravy, also known as Smokey, is a laid-back orange tabby with a love for lazy afternoons. Despite his saucy name, he has a gentle nature that soothes the soul. Smokey enjoys lounging on the porch and watching the world go by.',
    },
    {
      nickname: 'Bubba',
      name: 'Biscuit',
      age: 4,
      color: 'Gray',
      description:
        'Biscuit, also known as Bubba, is a lovable gray cat with a heart of gold. Despite his doughy name, he has a rugged charm that makes him the life of the party. Bubba enjoys chasing after fireflies and lounging in the shade on hot summer days.',
    },
    {
      nickname: 'Skeeter',
      name: 'Mason Jar',
      age: 2,
      color: 'Calico',
      description:
        'Mason Jar, also known as Skeeter, is a curious calico cat with a love for exploration. Despite her inanimate name, she has a lively spirit that keeps her humans entertained. Skeeter enjoys chasing after butterflies and climbing to the top of the tallest trees.',
    },
    {
      nickname: 'Cooter',
      name: 'Grits',
      age: 11,
      color: 'Brown',
      description:
        'Grits, also known as Cooter, is a mischievous brown cat with a penchant for trouble. Despite his gritty name, he has a heart of gold that shines through in everything he does. Cooter enjoys playing in the creek and basking in the warm Tennessee sun.',
    },
    {
      nickname: 'Bud',
      name: 'Moonshine',
      age: 4,
      color: 'Tabby',
      description:
        'Moonshine, also known as Bud, is a spirited tabby cat with a love for adventure. Despite his ethereal name, he has a down-to-earth demeanor that endears him to all who meet him. Bud enjoys exploring the backwoods and chasing after elusive critters.',
    },
    {
      nickname: 'Fluffy McFlufferson',
      name: 'Rocky Ridge',
      age: 2,
      color: 'Gray',
      description:
        'Rocky Ridge, also known as Fluffy McFlufferson, is a majestic gray cat with a mane of fur that rivals the softness of clouds. Despite his imposing name, he has a gentle nature that endears him to all who meet him. Fluffy McFlufferson enjoys lounging in sunbeams and birdwatching from the windowsill.',
    },
    {
      nickname: 'Mayor Of Poopytown',
      name: 'Thunder Canyon',
      age: 13,
      color: 'Calico',
      description:
        'Thunder Canyon, also known as Mayor Of Poopytown, is a regal calico cat with a penchant for adventure. Despite her majestic name, she has a playful spirit that keeps her humans entertained for hours on end. Mayor Of Poopytown enjoys exploring the great outdoors and curling up in cozy blankets for a catnap.',
    },
    {
      nickname: 'PigPen',
      name: 'Misty Falls',
      age: 4,
      color: 'Tabby',
      description:
        'Misty Falls, also known as PigPen, is a spirited tabby cat with a love for mischief. Despite her serene name, she has a mischievous streak that keeps her humans on their toes. PigPen enjoys darting through the house at top speed and chasing after imaginary mice.',
    },
    {
      nickname: 'Furball Von Fluffington',
      name: 'Echo Valley',
      age: 17,
      color: 'White',
      description:
        'Echo Valley, also known as Furball Von Fluffington, is an elegant white cat with a regal bearing. Despite his fluffy appearance, he has a dignified demeanor that commands respect. Furball Von Fluffington enjoys lounging in sunbeams and surveying his domain from his perch on the windowsill.',
    },
    {
      nickname: 'Paws McGraw',
      name: 'Whispering Pines',
      age: 11,
      color: 'Orange',
      description:
        'Whispering Pines, also known as Paws McGraw, is a charismatic orange tabby with a knack for charm. Despite his rugged name, he has a smooth-talking personality that wins over everyone he meets. Paws McGraw enjoys lounging on the porch and soaking up the warm Tennessee sun.',
    },
    {
      nickname: 'Meowzart',
      name: 'Sandy Dunes',
      age: 20,
      color: 'Gray',
      description:
        'Sandy Dunes, also known as Meowzart, is a musical gray cat with a flair for the dramatic. Despite his sandy name, he has a sophisticated taste in classical music that sets him apart from the crowd. Meowzart enjoys serenading his humans with purrs and meows while they relax on the beach.',
    },
    {
      nickname: 'Captain Fuzzypants',
      name: 'Cascade Crest',
      age: 5,
      color: 'Calico',
      description:
        'Cascade Crest, also known as Captain Fuzzypants, is a dashing calico cat with a sense of adventure. Despite her majestic name, she has a mischievous streak that leads her into all sorts of trouble. Captain Fuzzypants enjoys exploring the great outdoors and plotting her next daring escapade.',
    },
    {
      nickname: 'Duchess Fluffernutter',
      name: 'Silver Summit',
      age: 1,
      color: 'Tabby',
      description:
        'Silver Summit, also known as Duchess Fluffernutter, is a refined tabby cat with an aristocratic air. Despite her imposing name, she has a gentle nature that endears her to all who meet her. Duchess Fluffernutter enjoys lounging in sunbeams and receiving adoration from her loyal subjects.',
    },
    {
      nickname: 'Lord Snugglebottom',
      name: 'Golden Gorge',
      age:7,
      color: 'White',
      description:
        'Golden Gorge, also known as Lord Snugglebottom, is a noble white cat with a heart of gold. Despite his majestic name, he has a playful spirit that brings joy to all who know him. Lord Snugglebottom enjoys chasing after feather toys and curling up in warm laps for cuddles.',
    },
    {
      nickname: 'Sergeant Furrypants',
      name: 'Whispering Willow',
      age: 4,
      color: 'Orange',
      description:
        'Whispering Willow, also known as Sergeant Furrypants, is a brave orange tabby with a heart of gold. Despite her rugged name, she has a soft spot for cuddles and chin scratches. Sergeant Furrypants enjoys patrolling the neighborhood and keeping her humans safe from imaginary foes.',
    },
    {
      nickname: 'Fluffylicious McMeow',
      name: 'Frodo Baggins',
      age: 1,
      color: 'Gray',
      description:
        'Frodo Baggins, also known as Fluffylicious McMeow, is a brave gray cat with a heart of gold. Despite his small stature, he has a spirit as fierce as any hero from Middle-earth. Fluffylicious McMeow enjoys exploring the great outdoors and basking in the warm glow of the sun.',
    },
    {
      nickname: 'Whiff Wizard',
      name: 'Gandalf the Gray',
      age: 19,
      color: 'Calico',
      description:
        'Gandalf the Gray, also known as Whiff Wizard, is a wise calico cat with a penchant for adventure. Despite his age, he has a playful spirit that keeps him forever young at heart. Whiff Wizard enjoys chasing after butterflies and curling up in cozy blankets for a catnap.',
    },
    {
      nickname: 'Purrrtastic Meowmaster',
      name: 'Legolas Greenleaf',
      age: 10,
      color: 'Tabby',
      description:
        'Legolas Greenleaf, also known as Purrrtastic Meowmaster, is an agile tabby cat with a knack for archery. Despite his graceful demeanor, he has a mischievous streak that leads him into all sorts of adventures. Purrrtastic Meowmaster enjoys prowling around the forest and climbing trees in search of imaginary foes.',
    },
    {
      nickname: 'Furrylicious Purrinator',
      name: 'Aragorn Son of Arathorn',
      age: 11,
      color: 'White',
      description:
        'Aragorn Son of Arathorn, also known as Furrylicious Purrinator, is a noble white cat with a regal bearing. Despite his imposing name, he has a gentle nature that endears him to all who meet him. Furrylicious Purrinator enjoys lounging in sunbeams and receiving adoration from his loyal subjects.',
    },
    {
      nickname: 'Snugglelicious Whiskermeow',
      name: 'Gollum',
      age: 19,
      color: 'Orange',
      description:
        'Gollum, also known as Snugglelicious Whiskermeow, is a peculiar orange tabby with a mysterious past. Despite his rough exterior, he has a tender heart that yearns for affection. Snugglelicious Whiskermeow enjoys curling up in warm laps and receiving chin scratches from his precious humans.',
    },
    {
      nickname: 'Purrfectly Enigmatic Floof',
      name: 'Galadriel Lady of Light',
      age: 19,
      color: 'Gray',
      description:
        'Galadriel Lady of Light, also known as Purrfectly Enigmatic Floof, is an ethereal gray cat with a luminous presence. Despite her otherworldly beauty, she has a playful spirit that brings joy to all who know her. Purrfectly Enigmatic Floof enjoys chasing after fireflies and dancing under the moonlight.',
    },
    {
      nickname: 'Snuggletastic Adventuremeow',
      name: 'Samwise Gamgee',
      age: 5,
      color: 'Calico',
      description:
        'Samwise Gamgee, also known as Snuggletastic Adventuremeow, is a loyal calico cat with a heart of gold. Despite his humble origins, he has a spirit as brave as any hero from Middle-earth. Snuggletastic Adventuremeow enjoys exploring the garden and keeping watch over his precious humans.',
    },
    {
      nickname: 'Gothic Whiskerlord',
      name: 'Raven Darkclaw',
      age: 11,
      color: 'Black',
      description:
        'Raven Darkclaw, also known as Gothic Whiskerlord, is a brooding black cat with a penchant for darkness and despair. Despite his gloomy appearance, he has a soft spot for poetry and midnight strolls. Gothic Whiskerlord enjoys lounging in shadowy corners and contemplating the mysteries of the universe.',
    },
    {
      nickname: 'Eternal Nightprowler',
      name: 'Luna Moonshadow',
      age: 3,
      color: 'Gray',
      description:
        'Luna Moonshadow, also known as Eternal Nightprowler, is a mysterious gray cat with a love for the moon and all things mystical. Despite her aloof demeanor, she has a playful spirit that comes alive under the cover of darkness. Eternal Nightprowler enjoys prowling the streets and communing with the spirits of the night.',
    },
    {
      nickname: 'Melancholic Meowster',
      name: 'Shadow Whisperer',
      age: 19,
      color: 'Tabby',
      description:
        'Shadow Whisperer, also known as Melancholic Meowster, is a contemplative tabby cat with a talent for brooding and introspection. Despite his somber disposition, he has a tender heart that yearns for connection. Melancholic Meowster enjoys curling up in dark corners and pondering the meaning of existence.',
    },
    {
      nickname: 'Doomsday Dreamer',
      name: 'Midnight Mourner',
      age: 14,
      color: 'Black',
      description:
        'Midnight Mourner, also known as Doomsday Dreamer, is a nocturnal black cat with a penchant for apocalyptic visions and existential dread. Despite his ominous aura, he has a gentle soul that seeks solace in the quiet of the night. Doomsday Dreamer enjoys gazing at the stars and contemplating the end of the world.',
    },
    {
      nickname: 'Sorrowful Shadowcaster',
      name: 'Obsidian Nightshade',
      age: 3,
      color: 'Black',
      description:
        'Obsidian Nightshade, also known as Sorrowful Shadowcaster, is a enigmatic black cat with a talent for summoning darkness and melancholy. Despite her mysterious nature, she has a playful side that emerges in moments of solitude. Sorrowful Shadowcaster enjoys prowling the streets and weaving spells of sorrow and despair.',
    },
    {
      nickname: 'Eerie Echo',
      name: 'Echo Nightfall',
      age: 10,
      color: 'Gray',
      description:
        'Echo Nightfall, also known as Eerie Echo, is a spectral gray cat with a haunting presence and a love for the unknown. Despite his ethereal appearance, he has a mischievous streak that leads him into all sorts of otherworldly adventures. Eerie Echo enjoys prowling the shadows and communing with spirits from beyond.',
    },
    {
      nickname: 'Grim Whiskers',
      name: 'Shadow Shroud',
      age: 5,
      color: 'Black',
      description:
        'Shadow Shroud, also known as Grim Whiskers, is a somber black cat with a penchant for darkness and despair. Despite his ominous aura, he has a heart of gold that yearns for connection and understanding. Grim Whiskers enjoys prowling the night and contemplating the mysteries of life and death.',
    },
    {
      nickname: 'Mournful Meowmaker',
      name: 'Dusk Shadowcaster',
      age: 14,
      color: 'Gray',
      description:
        'Dusk Shadowcaster, also known as Mournful Meowmaker, is a brooding gray cat with a talent for summoning melancholy and woe. Despite her solemn demeanor, she has a playful side that emerges in moments of solitude. Mournful Meowmaker enjoys lurking in the twilight and serenading the moon with mournful meows.',
    },
    {
      nickname: 'Nebulous Nightmare',
      name: 'Nightshade',
      age: 3,
      color: 'Black',
      description:
        'Nightshade, also known as Nebulous Nightmare, is a shadowy black cat with a penchant for haunting dreams and nocturnal escapades. Despite his eerie presence, he has a gentle soul that seeks solace in the darkness. Nebulous Nightmare enjoys prowling the streets and conjuring visions of the unknown.',
    },
    {
      nickname: 'Gloomy Ghost',
      name: 'Whispering Wraith',
      age: 14,
      color: 'White',
      description:
        'Whispering Wraith, also known as Gloomy Ghost, is a spectral white cat with a haunting presence and a love for the macabre. Despite her ethereal appearance, she has a mischievous streak that leads her into all sorts of supernatural adventures. Gloomy Ghost enjoys prowling the shadows and communing with spirits from beyond.',
    },
    {
      nickname: 'Drunk Panda',
      name: 'Li Chen',
      age: 14,
      color: 'Tabby',
      description:
        'Li Chen, also known as Drunk Panda, is a jovial tabby cat with a love for bamboo and beer. Despite his round belly, he has a lightfootedness that belies his intoxication. Drunk Panda enjoys rolling in the grass and munching on bamboo shoots after a night of revelry.',
    },
    {
      nickname: 'Furrbulous Elvenpaw',
      name: 'Arwen Evenstar',
      age: 8,
      color: 'Tabby',
      description:
        'Arwen Evenstar, also known as Furrbulous Elvenpaw, is a graceful tabby cat with a love for adventure. Despite her elegant demeanor, she has a mischievous streak that leads her into all sorts of trouble. Furrbulous Elvenpaw enjoys exploring the great outdoors and chasing after imaginary butterflies.',
    },
    {
      nickname: 'Snackninja',
      name: 'Xander Nightshade',
      age: 8,
      color: 'Gray',
      description:
        'Xander Nightshade, also known as Snackninja, is a street-smart gray cat with a talent for pilfering snacks from unsuspecting humans. Despite his rough exterior, he has a soft spot for kittens and strays in need. Snackninja enjoys prowling the alleys and outsmarting humans to satisfy his hunger.',
    },
    {
      nickname: 'Gourmet Guerrilla',
      name: 'Aria Ember',
      age: 13,
      color: 'Calico',
      description:
        'Aria Ember, also known as Gourmet Guerrilla, is a cunning calico cat with a taste for gourmet food and adventure. Despite her elegant appearance, she has a mischievous streak that leads her into all sorts of trouble. Gourmet Guerrilla enjoys prowling the streets and indulging in stolen delicacies.',
    },
    {
      nickname: 'Midnight Marauder',
      name: 'Kai Stormborn',
      age: 9,
      color: 'Tabby',
      description:
        'Kai Stormborn, also known as Midnight Marauder, is a fearless tabby cat with a penchant for nocturnal adventures and stolen snacks. Despite his wild nature, he has a gentle heart that endears him to all who meet him. Midnight Marauder enjoys prowling the alleys and raiding trash cans for tasty treats.',
    },
    {
      nickname: 'Epicurean Eavesdropper',
      name: 'Luna Shadowheart',
      age: 9,
      color: 'White',
      description:
        'Luna Shadowheart, also known as Epicurean Eavesdropper, is a sophisticated white cat with a taste for fine cuisine and mischief. Despite her refined appearance, she has a mischievous streak that leads her to eavesdrop on humans and steal their snacks. Epicurean Eavesdropper enjoys prowling the streets and indulging in stolen delicacies.',
    },
    {
      nickname: 'Culinary Connoisseur',
      name: 'Finnegan Nightcrawler',
      age: 3,
      color: 'Orange',
      description:
        'Finnegan Nightcrawler, also known as Culinary Connoisseur, is a charismatic orange tabby with a knack for finding the best snacks in town. Despite his rough upbringing, he has a refined palate that sets him apart from other street cats. Culinary Connoisseur enjoys prowling the alleys and sampling different flavors of stolen treats.',
    },
    {
      nickname: 'Stealthy Snackthief',
      name: 'Esme Moonlight',
      age: 6,
      color: 'Black',
      description:
        'Esme Moonlight, also known as Stealthy Snackthief, is a mysterious black cat with a talent for stealing snacks under the cover of darkness. Despite her nocturnal habits, she has a playful spirit that comes alive when the moon is high. Stealthy Snackthief enjoys prowling the alleys and raiding trash cans for tasty treats.',
    },
    {
      nickname: 'Gastronomic Grafter',
      name: 'Dante Nightshade',
      age: 5,
      color: 'Tabby',
      description:
        'Dante Nightshade, also known as Gastronomic Grafter, is a resourceful tabby cat with a talent for finding food in unexpected places. Despite his rough exterior, he has a soft spot for kittens and strays in need. Gastronomic Grafter enjoys prowling the alleys and outsmarting humans to satisfy his hunger.',
    },
    {
      nickname: 'Savory Swindler',
      name: 'Evelyn Silverclaw',
      age: 6,
      color: 'Gray',
      description:
        'Evelyn Silverclaw, also known as Savory Swindler, is a street-smart gray cat with a taste for savory snacks and adventure. Despite her petite frame, she has a fierce spirit that makes her a force to be reckoned with. Savory Swindler enjoys prowling the streets and outwitting humans to get her next meal.',
    },
    {
      nickname: 'Culinary Catburglar',
      name: 'Milo Nightstalker',
      age: 3,
      color: 'Brown',
      description:
        'Milo Nightstalker, also known as Culinary Catburglar, is a cunning brown cat with a talent for stealing snacks from unsuspecting humans. Despite his mischievous nature, he has a loyal heart that makes him a beloved member of the neighborhood. Culinary Catburglar enjoys prowling the alleys and plotting his next snack heist.',
    },
    {
      nickname: 'Gourmand Grifter',
      name: 'Isabella Moonshadow',
      age: 6,
      color: 'Orange',
      description:
        'Isabella Moonshadow, also known as Gourmand Grifter, is a street-smart orange tabby with a taste for gourmet food and adventure. Despite her rough exterior, she has a heart of gold that makes her a beloved member of the neighborhood. Gourmand Grifter enjoys prowling the streets and indulging in stolen delicacies.',
    },
    {
      nickname: 'Whiskerlicious Wizardpaw',
      name: 'Bilbo Baggins',
      age: 9,
      color: 'White',
      description:
        'Bilbo Baggins, also known as Whiskerlicious Wizardpaw, is a curious white cat with a penchant for mischief. Despite his small stature, he has a sense of adventure that rivals any hobbit from the Shire. Whiskerlicious Wizardpaw enjoys exploring the garden and embarking on epic quests in search of treasure.',
    },
    {
      nickname: 'Miso Master',
      name: 'Hiroshi Watanabe',
      age: 6,
      color: 'Orange',
      description:
        'Hiroshi Watanabe, also known as Miso Master, is a wise orange tabby with a love for miso soup and mischief. Despite his advanced age, he has a youthful spirit that keeps him forever young at heart. Miso Master enjoys prowling around the neighborhood and sampling different flavors of miso.',
    },
    {
      nickname: 'Evil Fluffylicious Master',
      name: 'Sauron',
      age: 1,
      color: 'Orange',
      description:
        'Sauron, also known as Evil Fluffylicious Master, is a formidable orange tabby with a mysterious aura. Despite his fearsome reputation, he has a soft spot for belly rubs and chin scratches. Evil Fluffylicious Master enjoys lounging in sunbeams and plotting his next conquest of Middle-earth.',
    },
    {
      nickname: 'Cletus',
      name: 'Cornbread',
      age: 6,
      color: 'Orange',
      description:
        'Cornbread, also known as Cletus, is a rambunctious orange cat with a heart of gold. Despite his crumbly name, he has a warm and comforting presence that brings joy to all who know him. Cletus enjoys exploring the barn and napping in the sun-drenched hayloft.',
    },
    {
      nickname: 'Geisterjäger',
      name: 'Plüsch von Schlummerland',
      age: 1,
      color: 'Orange',
      description:
        'Plüsch von Schlummerland, also known as Geisterjäger, is a plushy orange tabby with a fearless spirit. Despite his sleepy name, he has a knack for chasing imaginary ghosts and protecting his home from the supernatural. Geisterjäger enjoys snuggling up with his humans and dreaming of grand adventures.',
    },
    {
      nickname: 'Fishy Fur',
      name: 'Sunshine',
      age: 1,
      color: 'Orange',
      description:
        'Sunshine, also known as Fishy Fur, is a playful orange tabby with a love for all things aquatic. Her fondness for fish-flavored treats often leaves her fur with a distinctive aroma. Sunshine enjoys lounging in sunbeams and playing with feather toys.',
    },
    {
      nickname: 'Trouble',
      name: 'Leapin Larry',
      age: 3,
      color: 'Orange',
      description:
        'Leapin Larry, also known as Trouble, is an orange tabby with a mischievous glint in his eye. He enjoys hiding in closets and surprising unsuspecting passersby with a playful pounce. Despite his naughty behavior, Leapin Larry is a sweet and affectionate cat who loves nothing more than curling up on the couch with his favorite human.',
    },
    {
      nickname: 'Mischief Maker',
      name: 'Milo',
      age: 1,
      color: 'Brown',
      description:
        'Milo, also known as the Mischief Maker, is a playful brown cat with a knack for causing chaos. He enjoys knocking over flower pots and darting through open doors before they can be closed. Despite his wild behavior, Milo is a lovable goofball who enjoys cuddling up with his humans for a nap.',
    },
    {
      nickname: 'Sneaky Snickers',
      name: 'Buttons',
      age: 3,
      color: 'Calico',
      description:
        'Buttons, also known as Sneaky Snickers, is a mischievous calico with a knack for getting into trouble. She enjoys sneaking up on unsuspecting feet and pouncing on toes with lightning speed. With her playful antics and infectious energy, Buttons keeps her humans on their toes. Despite her mischievous nature, she enjoys cuddling up in a warm blanket and purring contentedly.',
    },
    {
      nickname: 'Count Fluffula',
      name: 'Pudding',
      age: 15,
      color: 'White and Gray',
      description:
        "Pudding, also known as Count Fluffula, is a noble feline with a regal presence. He enjoys lounging on velvet cushions and being waited on hand and foot by his loyal subjects. With his aristocratic pedigree and refined tastes, Pudding is the epitome of sophistication. Despite his royal lineage, he's not above indulging in a game of chase with a feather toy.",
    },
    {
      nickname: 'Frisky Biscuits',
      name: 'Oreo',
      age: 6,
      color: 'Black and White',
      description:
        'Oreo, alias Frisky Biscuits, is a master craftsman with a knack for building elaborate forts and intricate tunnels. He spends his days constructing elaborate structures out of cardboard boxes and toilet paper rolls. With his creative genius and attention to detail, Oreo creates works of art that dazzle and amaze. Despite his engineering prowess, he enjoys lounging in sunbeams and playing with feather toys.',
    },

  ];

  colDefs: ColDef[] = [
    { field: 'name' },
    { field: 'nickname' },
    { field: 'age' },
    { field: 'color' },
  ];
}
