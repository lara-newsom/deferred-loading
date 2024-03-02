import { Injectable } from '@angular/core';
import { of } from 'rxjs';
type CoolStuff = {
  name: string;
  era: string;
  ranking: number;
  description: string;
  price: number;
};

@Injectable({
  providedIn: 'root',
})
export class LegacyService {
  coolStuffArray: CoolStuff[] = [
    {
      name: 'Nintendo Entertainment System (NES)',
      era: '1980s',
      ranking: 1,
      description:
        'The Nintendo Entertainment System (NES) revolutionized the home gaming industry in the 1980s. With iconic games like Super Mario Bros., The Legend of Zelda, and Metroid, it became a cultural phenomenon, paving the way for modern gaming consoles. Its influence on pop culture is undeniable.',
      price: 100, // Sample price in dollars
    },
    {
      name: 'Sony Walkman',
      era: '1980s',
      ranking: 2,
      description:
        'The Sony Walkman, introduced in the early 1980s, transformed the way people listened to music. With its portable cassette player, music lovers could enjoy their favorite tunes on the go. It became a symbol of personal freedom and technological advancement.',
      price: 80, // Sample price in dollars
    },
    {
      name: "Rubik's Cube",
      era: '1980s',
      ranking: 3,
      description:
        "The Rubik's Cube, invented in 1974 but gaining immense popularity in the 1980s, challenged minds worldwide. Its colorful, twisting puzzle captivated people of all ages, becoming a symbol of intellectual prowess and problem-solving skills.",
      price: 15, // Sample price in dollars
    },
    {
      name: 'Atari 2600',
      era: '1980s',
      ranking: 4,
      description:
        'The Atari 2600, released in the late 1970s but dominating the 1980s, brought arcade-style gaming into homes. With classics like Pac-Man, Space Invaders, and Pitfall!, it laid the groundwork for the modern video game industry.',
      price: 200, // Sample price in dollars
    },
    {
      name: 'Transformers',
      era: '1980s',
      ranking: 5,
      description:
        'Transformers, the iconic toys and animated series from the 1980s, captivated children with their epic battles between Autobots and Decepticons. With memorable characters like Optimus Prime and Megatron, it sparked imaginations and became a cultural phenomenon.',
      price: 30, // Sample price in dollars
    },
    {
      name: 'Super Soaker',
      era: '1990s',
      ranking: 6,
      description:
        'The Super Soaker, introduced in the early 1990s, revolutionized water fights. With its powerful streams of water, it provided endless summer fun for kids and adults alike, becoming a must-have toy for outdoor play.',
      price: 20, // Sample price in dollars
    },
    {
      name: 'Game Boy',
      era: '1990s',
      ranking: 7,
      description:
        'The Game Boy, released in the late 1980s but dominating the 1990s, brought handheld gaming to the masses. With classic titles like Tetris and Pokémon, it provided hours of entertainment on the go, cementing its place in gaming history.',
      price: 80, // Sample price in dollars
    },
    {
      name: 'Tamagotchi',
      era: '1990s',
      ranking: 8,
      description:
        'The Tamagotchi, introduced in the mid-1990s, became a worldwide sensation. As a virtual pet housed in a small egg-shaped device, it taught responsibility and garnered a dedicated fanbase of caretakers.',
      price: 15, // Sample price in dollars
    },
    {
      name: 'Furby',
      era: '1990s',
      ranking: 9,
      description:
        "Furby, the interactive robotic toy from the late 1990s, captured hearts with its cute appearance and ability to 'learn' phrases. It became a cultural phenomenon and a sought-after holiday gift, despite its occasional mischievous behavior.",
      price: 40, // Sample price in dollars
    },
    {
      name: 'Discman',
      era: '1990s',
      ranking: 10,
      description:
        'The Discman, introduced in the early 1990s, offered portable CD playback, revolutionizing how people listened to music on the go. It provided a sleek alternative to bulky cassette players, making it a staple accessory for music lovers.',
      price: 60, // Sample price in dollars
    },
    {
      name: 'Pac-Man Arcade Machine',
      era: '1980s',
      ranking: 11,
      description:
        'The Pac-Man arcade machine, released in 1980, became an instant hit and an icon of 1980s pop culture. Its simple yet addictive gameplay and colorful characters made it a favorite in arcades worldwide, spawning numerous sequels and adaptations.',
      price: 3000, // Sample price in dollars
    },
    {
      name: 'Teenage Mutant Ninja Turtles Action Figures',
      era: '1990s',
      ranking: 12,
      description:
        'Teenage Mutant Ninja Turtles action figures, based on the popular animated series, were a staple of toy collections in the 1990s. With characters like Leonardo, Donatello, Michelangelo, and Raphael, kids could recreate their favorite turtle-powered adventures.',
      price: 25, // Sample price in dollars
    },
    {
      name: 'Sega Genesis',
      era: '1990s',
      ranking: 13,
      description:
        "The Sega Genesis, released in the late 1980s but reaching its peak in the early 1990s, was a powerhouse in the console wars. With iconic games like Sonic the Hedgehog and Streets of Rage, it provided fierce competition to Nintendo's dominance.",
      price: 120, // Sample price in dollars
    },
    {
      name: 'G.I. Joe Action Figures',
      era: '1980s',
      ranking: 14,
      description:
        'G.I. Joe action figures, launched in the 1960s but reaching their height of popularity in the 1980s, were beloved by kids for their military-themed adventures. With a vast array of characters and vehicles, they provided endless imaginative play.',
      price: 20, // Sample price in dollars
    },
    {
      name: 'Power Wheels',
      era: '1990s',
      ranking: 15,
      description:
        'Power Wheels, battery-powered ride-on vehicles for kids, were a must-have toy in the 1990s. With designs ranging from cars to trucks and even motorcycles, they allowed children to experience the thrill of driving at a young age.',
      price: 200, // Sample price in dollars
    },
    {
      name: 'Pet Rock',
      era: '1970s',
      ranking: 16,
      description:
        "The Pet Rock, a fad from the 1970s, was a simple concept: a smooth stone packaged with a 'care and training manual.' Despite its simplicity, it became a cultural phenomenon, reflecting the whimsical nature of the era.",
      price: 10, // Sample price in dollars
    },
    {
      name: '8-Track Tape Player',
      era: '1970s',
      ranking: 17,
      description:
        'The 8-track tape player, popular in the 1970s, allowed music lovers to enjoy their favorite tunes on the go. Although bulky and prone to mechanical issues, it provided a convenient way to listen to music outside the home.',
      price: 50, // Sample price in dollars
    },
    {
      name: '1970s Disco Ball',
      era: '1970s',
      ranking: 18,
      description:
        'The disco ball, synonymous with the 1970s disco era, transformed dance floors into glittering spectacles of light. With its mirrored surface reflecting colorful lights, it became an essential element of disco culture.',
      price: 80, // Sample price in dollars
    },
    {
      name: 'Etch A Sketch',
      era: '1970s',
      ranking: 19,
      description:
        'The Etch A Sketch, introduced in the late 1950s but reaching the height of its popularity in the 1970s, was a mechanical drawing toy. With its unique method of drawing using knobs, it provided endless creative possibilities for children.',
      price: 12, // Sample price in dollars
    },
    {
      name: '1970s Volkswagen Beetle',
      era: '1970s',
      ranking: 20,
      description:
        'The Volkswagen Beetle, an iconic car of the 1970s, was known for its distinctive design and affordability. With its compact size and reliable engineering, it captured the spirit of the era and became a symbol of counterculture.',
      price: 3000, // Sample price in dollars
    },
    {
      name: 'Lava Lamp',
      era: '1970s',
      ranking: 21,
      description:
        "The Lava Lamp, a quintessential icon of the 1970s, mesmerized with its colorful blobs of wax floating in liquid. Its psychedelic glow and soothing motion made it a popular decor item, capturing the spirit of the era's counterculture.",
      price: 35, // Sample price in dollars
    },
    {
      name: 'Hot Wheels',
      era: '1970s',
      ranking: 22,
      description:
        'Hot Wheels, introduced in the late 1960s but reaching peak popularity in the 1970s, became a favorite among kids for their detailed toy cars and thrilling tracks. With their speed and customization options, they sparked imaginative racing adventures.',
      price: 3, // Sample price in dollars
    },
    {
      name: 'Space Hopper',
      era: '1970s',
      ranking: 23,
      description:
        'The Space Hopper, a large rubber ball with handles, gained popularity as a toy and exercise device in the 1970s. With its bouncy fun and nostalgic appeal, it remains a beloved symbol of childhood play from that era.',
      price: 20, // Sample price in dollars
    },
    {
      name: 'The Original Star Wars Action Figures',
      era: '1970s',
      ranking: 24,
      description:
        'The original Star Wars action figures, released in the late 1970s, became instant collectibles and fueled imaginations with characters from a galaxy far, far away. With iconic figures like Luke Skywalker, Darth Vader, and Princess Leia, they ignited the imaginations of generations.',
      price: 50, // Sample price in dollars
    },
    {
      name: 'Pong Home Console',
      era: '1970s',
      ranking: 25,
      description:
        'The Pong home console, released in the early 1970s, brought arcade-style gaming into living rooms. With its simple yet addictive gameplay, it became the first commercially successful video game and laid the foundation for the gaming industry.',
      price: 100, // Sample price in dollars
    },
    {
      name: 'Nintendo DS',
      era: '2000s',
      ranking: 31,
      description:
        "The Nintendo DS, released in the mid-2000s, revolutionized handheld gaming with its dual screens and touch functionality. With innovative titles like Brain Age and Nintendogs, it appealed to gamers of all ages and became one of Nintendo's best-selling consoles.",
      price: 130, // Sample price in dollars
    },
    {
      name: 'Apple iPhone',
      era: '2000s',
      ranking: 32,
      description:
        'The Apple iPhone, introduced in the late 2000s, redefined the smartphone industry with its touchscreen interface and app ecosystem. With its sleek design and advanced features, it became a cultural icon and transformed the way people communicate and interact with technology.',
      price: 600, // Sample price in dollars
    },
    {
      name: 'PlayStation Portable (PSP)',
      era: '2000s',
      ranking: 33,
      description:
        'The PlayStation Portable (PSP), released in the mid-2000s, brought console-quality gaming to a handheld device. With its impressive graphics and multimedia capabilities, it appealed to gamers on the go and offered a library of diverse titles.',
      price: 120, // Sample price in dollars
    },
    {
      name: 'Yu-Gi-Oh! Trading Card Game',
      era: '2000s',
      ranking: 34,
      description:
        'The Yu-Gi-Oh! Trading Card Game, popularized in the early 2000s, captivated fans with its strategic gameplay and iconic monsters. With a competitive scene and a vast array of cards to collect, it became a cultural phenomenon and a staple of schoolyard battles.',
      price: 5, // Sample price in dollars
    },
    {
      name: 'iPod Nano',
      era: '2000s',
      ranking: 35,
      description:
        'The iPod Nano, introduced in the mid-2000s, offered a compact and stylish alternative to the iPod Classic. With its smaller size and vibrant display, it became a popular choice for music lovers on the go.',
      price: 100, // Sample price in dollars
    },
    {
      name: 'iPod Classic',
      era: 'Early 2000s',
      ranking: 26,
      description:
        'The iPod Classic, introduced in the early 2000s, revolutionized the way people listened to music on the go. With its sleek design and large storage capacity, it became synonymous with portable music players and laid the groundwork for the digital music era.',
      price: 250, // Sample price in dollars
    },
    {
      name: 'Nintendo GameCube',
      era: 'Early 2000s',
      ranking: 27,
      description:
        "The Nintendo GameCube, released in the early 2000s, offered a unique gaming experience with its compact design and innovative controller. With classic titles like Super Smash Bros. Melee and The Legend of Zelda: Wind Waker, it holds a special place in many gamers' hearts.",
      price: 100, // Sample price in dollars
    },
    {
      name: 'Razor Scooter',
      era: 'Early 2000s',
      ranking: 28,
      description:
        'The Razor Scooter, popularized in the early 2000s, became a cultural phenomenon with its lightweight design and smooth ride. It quickly became a must-have mode of transportation for kids and teens, sparking scooter tricks and races.',
      price: 30, // Sample price in dollars
    },
    {
      name: 'Harry Potter Book Series',
      era: 'Early 2000s',
      ranking: 29,
      description:
        "The Harry Potter book series, penned by J.K. Rowling, captivated readers worldwide in the early 2000s with its magical world of Hogwarts and the boy wizard's adventures. With its rich storytelling and memorable characters, it became a literary phenomenon.",
      price: 20, // Sample price in dollars
    },
    {
      name: 'Sony PlayStation 2',
      era: 'Early 2000s',
      ranking: 30,
      description:
        'The Sony PlayStation 2, released in the early 2000s, dominated the gaming market with its vast library of games and powerful hardware. With hits like Grand Theft Auto: San Andreas and Final Fantasy X, it solidified its place as one of the best-selling consoles of all time.',
      price: 150, // Sample price in dollars
    },
    {
      name: 'Easy-Bake Oven',
      era: '1960s',
      ranking: 41,
      description:
        'The Easy-Bake Oven, introduced in the 1960s, allowed children to bake small treats with a light bulb-powered oven. With its simple design and easy-to-use features, it became a popular toy for aspiring young chefs.',
      price: 20, // Sample price in dollars
    },
    {
      name: 'Barbie Fashion Doll',
      era: '1960s',
      ranking: 42,
      description:
        'The Barbie Fashion Doll, launched in the late 1950s but reaching peak popularity in the 1960s, became an iconic symbol of fashion and femininity. With a range of outfits and accessories, it sparked imaginative play and set trends for generations.',
      price: 10, // Sample price in dollars
    },
    {
      name: 'GI Joe Action Soldier',
      era: '1960s',
      ranking: 43,
      description:
        'The GI Joe Action Soldier, introduced in the early 1960s, was a poseable action figure representing military personnel. With a variety of uniforms and accessories, it offered realistic play experiences and became a favorite among young boys.',
      price: 5, // Sample price in dollars
    },
    {
      name: 'Etch A Sketch',
      era: '1960s',
      ranking: 44,
      description:
        'The Etch A Sketch, introduced in the early 1960s, provided hours of drawing fun with its unique knob-controlled sketching pad. With its simple yet innovative design, it became a classic toy enjoyed by children of all ages.',
      price: 10, // Sample price in dollars
    },
    {
      name: 'Troll Dolls',
      era: '1960s',
      ranking: 45,
      description:
        'Troll Dolls, originating in the 1960s, were known for their colorful hair and whimsical designs. With their quirky charm, they became a popular toy and collectible, inspiring various fads and trends over the years.',
      price: 8, // Sample price in dollars
    },
    {
      name: 'Twister',
      era: '1960s',
      ranking: 46,
      description:
        'Twister, introduced in the mid-1960s, brought interactive fun to parties and gatherings with its colorful mat and physical challenges. With its simple yet entertaining gameplay, it became a classic party game enjoyed by people of all ages.',
      price: 15, // Sample price in dollars
    },
    {
      name: 'Hot Wheels Redline Cars',
      era: '1960s',
      ranking: 47,
      description:
        'Hot Wheels Redline Cars, launched in the late 1960s, revolutionized the die-cast toy car industry with their sleek designs and smooth performance. With their low-friction wheels and detailed features, they became highly sought-after collectibles.',
      price: 5, // Sample price in dollars
    },
    {
      name: 'Slinky',
      era: '1960s',
      ranking: 48,
      description:
        'The Slinky, introduced in the 1940s but reaching peak popularity in the 1960s, delighted generations with its mesmerizing spring action. With its simple yet captivating movement, it became a timeless toy enjoyed by children and adults alike.',
      price: 3, // Sample price in dollars
    },
    {
      name: '1964 1/2 Ford Mustang',
      era: '1960s',
      ranking: 49,
      description:
        'The 1964 1/2 Ford Mustang, introduced in the mid-1960s, became an automotive icon with its sleek design and affordable price tag. With its sporty appearance and powerful performance, it captured the spirit of the era and remains a classic symbol of American muscle.',
      price: 25000, // Sample price in dollars
    },
    {
      name: "Barbie's Dream House",
      era: '1960s',
      ranking: 50,
      description:
        "Barbie's Dream House, introduced in the early 1960s, provided a luxurious home for the iconic fashion doll. With its stylish design and range of accessories, it allowed children to create their own imaginative stories and adventures.",
      price: 30, // Sample price in dollars
    },
    {
      name: 'Mr. Potato Head',
      era: '1950s',
      ranking: 51,
      description:
        'Mr. Potato Head, introduced in the early 1950s, was one of the first toys to use interchangeable plastic parts. With its mix-and-match features, it encouraged creative play and became an instant classic.',
      price: 2, // Sample price in dollars
    },
    {
      name: 'Slinky',
      era: '1950s',
      ranking: 52,
      description:
        'The Slinky, introduced in the late 1940s but gaining popularity in the 1950s, captivated children with its unique spring action. With its mesmerizing movement, it became a timeless toy enjoyed by generations.',
      price: 1, // Sample price in dollars
    },
    {
      name: 'Duncan Yo-Yo',
      era: '1950s',
      ranking: 53,
      description:
        'The Duncan Yo-Yo, a staple of 1950s pop culture, provided hours of entertainment with its simple yet challenging tricks. With its iconic design and smooth performance, it remains a beloved toy for yo-yo enthusiasts.',
      price: 3, // Sample price in dollars
    },
    {
      name: '1957 Chevrolet Bel Air',
      era: '1950s',
      ranking: 54,
      description:
        "The 1957 Chevrolet Bel Air, an automotive icon of the 1950s, epitomized the era's style and innovation. With its distinctive fins and chrome accents, it remains one of the most recognizable and sought-after classic cars.",
      price: 50000, // Sample price in dollars
    },
    {
      name: 'Fisher-Price Music Box TV',
      era: '1950s',
      ranking: 55,
      description:
        'The Fisher-Price Music Box TV, introduced in the mid-1950s, entertained young children with its charming melodies and rotating pictures. With its nostalgic design and simple operation, it became a beloved toy for generations.',
      price: 10, // Sample price in dollars
    },
    {
      name: 'Hula Hoop',
      era: '1950s',
      ranking: 56,
      description:
        'The Hula Hoop, introduced in the late 1950s, sparked a craze with its simple yet addictive exercise routine. With its colorful design and rhythmic motion, it became a symbol of fun and fitness for people of all ages.',
      price: 5, // Sample price in dollars
    },
    {
      name: 'Tupperware',
      era: '1950s',
      ranking: 57,
      description:
        'Tupperware, introduced in the 1940s but gaining popularity in the 1950s, revolutionized food storage with its airtight containers and innovative seal design. With its convenience and durability, it became a staple in households worldwide.',
      price: 8, // Sample price in dollars
    },
    {
      name: '1950s Coca-Cola Vending Machine',
      era: '1950s',
      ranking: 58,
      description:
        'The 1950s Coca-Cola vending machine, with its classic design and iconic logo, became a fixture in diners and soda shops across America. With its refreshing beverages and nostalgic charm, it remains a symbol of retro Americana.',
      price: 5000, // Sample price in dollars
    },
    {
      name: 'Mickey Mouse Club Mouseketeer Ears',
      era: '1950s',
      ranking: 59,
      description:
        'The Mickey Mouse Club Mouseketeer Ears, introduced in the 1950s as merchandise for the popular TV show, became an iconic accessory for young fans. With their distinctive design and association with the beloved mouse, they remain a cherished collectible.',
      price: 20, // Sample price in dollars
    },
    {
      name: 'Etch A Sketch',
      era: '1950s',
      ranking: 60,
      description:
        'The Etch A Sketch, introduced in the late 1950s, provided endless drawing fun with its unique knob-controlled sketching pad. With its simple yet innovative design, it became a classic toy enjoyed by children of all ages.',
      price: 4, // Sample price in dollars
    },
    {
      name: 'View-Master',
      era: '1940s',
      ranking: 61,
      description:
        'The View-Master, introduced in the late 1930s but gaining popularity in the 1940s, offered immersive 3D views of various scenes and destinations. With its innovative stereoscopic technology, it provided a unique form of entertainment and education.',
      price: 5, // Sample price in dollars
    },
    {
      name: 'Silly Putty',
      era: '1940s',
      ranking: 62,
      description:
        'Silly Putty, invented in the early 1940s as a synthetic rubber compound, became a popular toy known for its stretchy and bouncy properties. With its versatile applications and playful nature, it captured the imagination of children and adults alike.',
      price: 1, // Sample price in dollars
    },
    {
      name: 'Tupperware',
      era: '1940s',
      ranking: 63,
      description:
        'Tupperware, introduced in the late 1930s but gaining popularity in the 1940s, revolutionized food storage with its airtight containers and innovative seal design. With its convenience and durability, it became a staple in households worldwide.',
      price: 8, // Sample price in dollars
    },
    {
      name: 'Slinky',
      era: '1940s',
      ranking: 64,
      description:
        'The Slinky, introduced in the early 1940s, provided endless entertainment with its mesmerizing spring action. With its simple yet captivating design, it became a classic toy enjoyed by generations.',
      price: 2, // Sample price in dollars
    },
    {
      name: '1940s Coca-Cola Bottle',
      era: '1940s',
      ranking: 65,
      description:
        'The 1940s Coca-Cola bottle, with its iconic contour shape and embossed logo, became a symbol of American pop culture. With its refreshing beverage and distinctive packaging, it remains a collectible piece of nostalgia.',
      price: 100, // Sample price in dollars
    },
    {
      name: 'Monopoly Board Game',
      era: '1930s',
      ranking: 66,
      description:
        'The Monopoly board game, introduced in the late 1930s, became a beloved pastime for families around the world. With its competitive gameplay and strategic elements, it remains one of the most popular board games of all time.',
      price: 10, // Sample price in dollars
    },
    {
      name: 'Mickey Mouse Plush Toy',
      era: '1930s',
      ranking: 67,
      description:
        'The Mickey Mouse plush toy, introduced in the early 1930s, became an instant hit with fans of the iconic Disney character. With its soft fabric and friendly appearance, it remains a cherished collectible for Disney enthusiasts.',
      price: 5, // Sample price in dollars
    },
    {
      name: 'Lionel Train Set',
      era: '1930s',
      ranking: 68,
      description:
        'The Lionel train set, popular in the 1930s, brought the magic of railroads into homes with its detailed locomotives and lifelike accessories. With its immersive experience and realistic features, it captured the imaginations of children and adults alike.',
      price: 50, // Sample price in dollars
    },
    {
      name: 'Shirley Temple Doll',
      era: '1930s',
      ranking: 69,
      description:
        'The Shirley Temple doll, inspired by the popular child actress of the 1930s, became a cherished playmate for young girls. With its realistic features and fashionable outfits, it captured the charm and innocence of the era.',
      price: 20, // Sample price in dollars
    },
    {
      name: 'Radio Flyer Wagon',
      era: '1930s',
      ranking: 70,
      description:
        'The Radio Flyer wagon, introduced in the early 1930s, provided hours of outdoor fun for children with its sturdy construction and smooth ride. With its classic design and versatility, it became a staple in households across America.',
      price: 30, // Sample price in dollars
    },
    {
      name: 'Teddy Bear',
      era: '1910s',
      ranking: 76,
      description:
        'The Teddy Bear, popularized in the early 1900s, became a cherished toy named after President Theodore Roosevelt. With its cuddly fur and friendly face, it provided comfort and companionship to children during the tumultuous times of the First World War.',
      price: 20, // Sample price in dollars
    },
    {
      name: 'Meccano Construction Set',
      era: '1910s',
      ranking: 77,
      description:
        'The Meccano Construction Set, introduced in the late 1900s but reaching popularity in the 1910s, offered children the opportunity to build mechanical models with metal parts and tools. With its educational value and engineering challenges, it sparked creativity and innovation.',
      price: 30, // Sample price in dollars
    },
    {
      name: 'Titanic Memorabilia',
      era: '1910s',
      ranking: 78,
      description:
        "Titanic memorabilia, following the tragic sinking of the RMS Titanic in 1912, became collectible items commemorating the historic event. From postcards to newspapers and artifacts salvaged from the wreckage, they serve as reminders of the ship's fateful maiden voyage.",
      price: 100, // Sample price in dollars
    },
    {
      name: 'Tin Toy Train',
      era: '1910s',
      ranking: 79,
      description:
        'Tin toy trains, popular in the early 1900s, provided children with miniature locomotives and railways for imaginative play. With their intricate details and mechanical movements, they captured the excitement of the burgeoning railway industry.',
      price: 25, // Sample price in dollars
    },
    {
      name: 'Victrola Phonograph',
      era: '1910s',
      ranking: 80,
      description:
        'The Victrola phonograph, introduced in the late 1800s but gaining popularity in the early 1900s, brought music into homes with its iconic horn and spinning records. With its nostalgic charm and timeless melodies, it became a centerpiece of family entertainment.',
      price: 150, // Sample price in dollars
    },
    {
      name: 'Raggedy Ann Doll',
      era: '1920s',
      ranking: 71,
      description:
        'The Raggedy Ann Doll, introduced in the early 1920s, became a beloved companion for children with its charming, handmade appearance. With its soft fabric and embroidered features, it captured the innocence and nostalgia of the era.',
      price: 15, // Sample price in dollars
    },
    {
      name: 'Fisher-Price Wooden Pull Toy',
      era: '1920s',
      ranking: 72,
      description:
        'Fisher-Price Wooden Pull Toys, popular in the 1920s, delighted young children with their simple yet whimsical designs. With their durable construction and playful movements, they became treasured toys passed down through generations.',
      price: 10, // Sample price in dollars
    },
    {
      name: 'Art Deco Radio',
      era: '1920s',
      ranking: 73,
      description:
        'The Art Deco radio, a hallmark of 1920s design, brought entertainment and style into homes with its sleek lines and decorative motifs. With its innovative technology and aesthetic appeal, it became a symbol of modernity and luxury.',
      price: 200, // Sample price in dollars
    },
    {
      name: 'Charlie Chaplin Film Poster',
      era: '1920s',
      ranking: 74,
      description:
        "Charlie Chaplin film posters, popular in the 1920s, promoted the iconic silent film star's comedic masterpieces. With their vibrant artwork and nostalgic charm, they remain collectible pieces of cinematic history.",
      price: 50, // Sample price in dollars
    },
    {
      name: 'Flapper Dress',
      era: '1920s',
      ranking: 75,
      description:
        'The Flapper Dress, a symbol of 1920s fashion, epitomized the spirit of the Jazz Age with its loose silhouette and embellished details. With its daring style and sense of liberation, it remains an iconic garment of the era.',
      price: 80, // Sample price in dollars
    },
    {
      name: 'Edison Phonograph',
      era: '1890s',
      ranking: 86,
      description:
        'The Edison Phonograph, introduced in the late 1800s, brought recorded sound into homes with its cylindrical records and hand-cranked mechanism. With its groundbreaking technology and nostalgic charm, it revolutionized the way people experienced music.',
      price: 200, // Sample price in dollars
    },
    {
      name: 'Bicycle Playing Cards',
      era: '1890s',
      ranking: 87,
      description:
        'Bicycle playing cards, introduced in the late 1800s, became a standard deck for card games and magic tricks. With their durable finish and classic design, they remain a favorite among card enthusiasts and performers.',
      price: 3, // Sample price in dollars
    },
    {
      name: "1893 World's Columbian Exposition Souvenir",
      era: '1890s',
      ranking: 88,
      description:
        "The 1893 World's Columbian Exposition souvenir, commemorating the historic event in Chicago, showcased the technological and cultural achievements of the late 19th century. With its elaborate designs and diverse array of memorabilia, it remains a sought-after collectible.",
      price: 100, // Sample price in dollars
    },
    {
      name: 'Victorian Dollhouse',
      era: '1890s',
      ranking: 89,
      description:
        'The Victorian dollhouse, popular in the late 1800s, provided children with a miniature world of elaborate furnishings and detailed decorations. With its ornate design and attention to detail, it offered hours of imaginative play.',
      price: 80, // Sample price in dollars
    },
    {
      name: 'Jelly Roll Morton Sheet Music',
      era: '1890s',
      ranking: 90,
      description:
        'Jelly Roll Morton sheet music, featuring the compositions of the influential jazz musician, captured the spirit of the burgeoning jazz age in the late 1800s. With its lively rhythms and catchy melodies, it remains a treasure for music enthusiasts.',
      price: 20, // Sample price in dollars
    },
    {
      name: 'Kewpie Doll',
      era: '1900s',
      ranking: 81,
      description:
        'The Kewpie Doll, introduced in the early 1900s, became a popular collectible with its cherubic face and whimsical design. With its nostalgic charm and variety of sizes and outfits, it remains a beloved doll for collectors and enthusiasts.',
      price: 25, // Sample price in dollars
    },
    {
      name: 'Gibson Girl Magazine Illustrations',
      era: '1900s',
      ranking: 82,
      description:
        "Gibson Girl magazine illustrations, popular in the early 1900s, captured the elegant and independent spirit of the Gibson Girl archetype. With their intricate details and romanticized depictions of society life, they remain iconic images of the era's ideals.",
      price: 50, // Sample price in dollars
    },
    {
      name: 'Wright Flyer Model',
      era: '1900s',
      ranking: 83,
      description:
        'The Wright Flyer model, commemorating the historic flight of the Wright brothers in 1903, became a symbol of aviation achievement. With its detailed design and historical significance, it celebrates the dawn of powered flight.',
      price: 40, // Sample price in dollars
    },
    {
      name: 'Velocipede Tricycle',
      era: '1900s',
      ranking: 84,
      description:
        'The Velocipede tricycle, popular in the late 1800s but still enjoyed in the early 1900s, provided children with a stylish and speedy mode of transportation. With its sturdy construction and classic design, it offered hours of outdoor fun.',
      price: 60, // Sample price in dollars
    },
    {
      name: 'Teddy Roosevelt Rough Rider Teddy Bear',
      era: '1900s',
      ranking: 85,
      description:
        "The Teddy Roosevelt Rough Rider Teddy Bear, introduced in the early 1900s, honored President Theodore Roosevelt's military service with a rugged, patriotic design. With its adventurous spirit and patriotic appeal, it became a symbol of American pride.",
      price: 30, // Sample price in dollars
    },
    {
      name: 'Steiff Button in Ear Teddy Bear',
      era: '1870s',
      ranking: 96,
      description:
        'The Steiff Button in Ear Teddy Bear, introduced in the late 19th century, became the first commercially produced teddy bear with movable limbs and jointed construction. With its high-quality craftsmanship and iconic button in the ear, it set the standard for teddy bear design.',
      price: 300, // Sample price in dollars
    },
    {
      name: 'Phonograph Cylinder',
      era: '1870s',
      ranking: 97,
      description:
        'The Phonograph Cylinder, invented by Thomas Edison in the late 19th century, was the earliest medium for recorded sound. With its cylindrical shape and grooved surface, it preserved audio recordings of music, speeches, and other sounds.',
      price: 20, // Sample price in dollars
    },
    {
      name: '1876 Centennial Exposition Souvenir',
      era: '1870s',
      ranking: 98,
      description:
        'The 1876 Centennial Exposition souvenir, celebrating the 100th anniversary of American independence, showcased technological and cultural achievements from around the world. With its diverse exhibits and elaborate designs, it remains a symbol of innovation and progress.',
      price: 150, // Sample price in dollars
    },
    {
      name: 'Victorian Penny Farthing Bicycle',
      era: '1870s',
      ranking: 99,
      description:
        'The Victorian Penny Farthing bicycle, popular in the late 19th century, featured a large front wheel and a small rear wheel. With its distinctive design and high seating position, it offered a unique riding experience for adventurous cyclists.',
      price: 200, // Sample price in dollars
    },
    {
      name: 'Waltz King Sheet Music',
      era: '1870s',
      ranking: 100,
      description:
        'Waltz King sheet music, featuring compositions by Johann Strauss II and other composers of the era, captured the elegance and romance of Viennese waltzes. With their flowing melodies and graceful rhythms, they remain timeless classics for ballroom dancers and music lovers.',
      price: 10, // Sample price in dollars
    },
    {
      name: 'Edison Light Bulb',
      era: '1880s',
      ranking: 91,
      description:
        'The Edison Light Bulb, invented by Thomas Edison in the late 1870s but gaining popularity in the 1880s, revolutionized indoor lighting with its long-lasting filament. With its innovative design and practical utility, it illuminated homes and businesses around the world.',
      price: 50, // Sample price in dollars
    },
    {
      name: 'Victorian Tea Set',
      era: '1880s',
      ranking: 92,
      description:
        'The Victorian tea set, popular in the late 19th century, provided an elegant way to enjoy afternoon tea with friends and family. With its delicate porcelain and ornate designs, it captured the refinement and social customs of the Victorian era.',
      price: 70, // Sample price in dollars
    },
    {
      name: '1886 Coca-Cola Syrup Dispenser',
      era: '1880s',
      ranking: 93,
      description:
        'The 1886 Coca-Cola syrup dispenser, reflecting the early days of the iconic beverage, dispensed the refreshing drink in soda fountains and pharmacies. With its vintage design and historical significance, it remains a prized collectible for Coca-Cola enthusiasts.',
      price: 500, // Sample price in dollars
    },
    {
      name: 'Velocipede Tricycle',
      era: '1880s',
      ranking: 94,
      description:
        'The Velocipede tricycle, popular in the late 19th century, provided children with a stylish and speedy mode of transportation. With its sturdy construction and classic design, it offered hours of outdoor fun.',
      price: 60, // Sample price in dollars
    },
    {
      name: 'Gibson Girl Magazine Illustrations',
      era: '1880s',
      ranking: 95,
      description:
        "Gibson Girl magazine illustrations, popular in the late 19th century, captured the elegant and independent spirit of the Gibson Girl archetype. With their intricate details and romanticized depictions of society life, they remain iconic images of the era's ideals.",
      price: 50, // Sample price in dollars
    },
    {
      name: '1869 Transcontinental Railroad Spike',
      era: '1860s',
      ranking: 101,
      description:
        'The 1869 Transcontinental Railroad spike, driven into the ground at Promontory Summit, Utah, marked the completion of the first railway connecting the East and West Coasts of the United States. With its historical significance and symbolic importance, it represents the culmination of a monumental engineering achievement.',
      price: 1000, // Sample price in dollars
    },
    {
      name: 'Civil War Era Chess Set',
      era: '1860s',
      ranking: 102,
      description:
        'The Civil War era chess set, popular during the 1860s, featured intricately carved pieces representing Union and Confederate soldiers. With its historical theme and craftsmanship, it provided entertainment and reflection during a turbulent period in American history.',
      price: 200, // Sample price in dollars
    },
    {
      name: 'Victorian Mourning Jewelry',
      era: '1860s',
      ranking: 103,
      description:
        'Victorian mourning jewelry, prevalent in the 1860s, served as a tangible expression of grief and remembrance following the loss of a loved one. With its somber designs and sentimental value, it provided comfort and solace during times of mourning.',
      price: 150, // Sample price in dollars
    },
    {
      name: '1861 Springfield Rifle Musket',
      era: '1860s',
      ranking: 104,
      description:
        "The 1861 Springfield rifle musket, widely used during the American Civil War, played a pivotal role in shaping the course of history. With its accuracy and reliability, it became the standard firearm for Union infantrymen and a symbol of the conflict's intensity.",
      price: 800, // Sample price in dollars
    },
    {
      name: 'Victorian Stereoscope Viewer',
      era: '1860s',
      ranking: 105,
      description:
        'The Victorian stereoscope viewer, popular in the 1860s, provided immersive experiences with its 3D stereoscopic images. With its innovative technology and captivating visuals, it offered a glimpse into distant lands and exotic destinations.',
      price: 75, // Sample price in dollars
    },
    {
      name: '1869 Transcontinental Railroad Spike',
      era: '1860s',
      ranking: 101,
      description:
        'The 1869 Transcontinental Railroad spike, driven into the ground at Promontory Summit, Utah, marked the completion of the first railway connecting the East and West Coasts of the United States. With its historical significance and symbolic importance, it represents the culmination of a monumental engineering achievement.',
      price: 1000, // Sample price in dollars
    },
    {
      name: 'Civil War Era Chess Set',
      era: '1860s',
      ranking: 102,
      description:
        'The Civil War era chess set, popular during the 1860s, featured intricately carved pieces representing Union and Confederate soldiers. With its historical theme and craftsmanship, it provided entertainment and reflection during a turbulent period in American history.',
      price: 200, // Sample price in dollars
    },
    {
      name: 'Victorian Mourning Jewelry',
      era: '1860s',
      ranking: 103,
      description:
        'Victorian mourning jewelry, prevalent in the 1860s, served as a tangible expression of grief and remembrance following the loss of a loved one. With its somber designs and sentimental value, it provided comfort and solace during times of mourning.',
      price: 150, // Sample price in dollars
    },
    {
      name: '1861 Springfield Rifle Musket',
      era: '1860s',
      ranking: 104,
      description:
        "The 1861 Springfield rifle musket, widely used during the American Civil War, played a pivotal role in shaping the course of history. With its accuracy and reliability, it became the standard firearm for Union infantrymen and a symbol of the conflict's intensity.",
      price: 800, // Sample price in dollars
    },
    {
      name: 'Victorian Stereoscope Viewer',
      era: '1860s',
      ranking: 105,
      description:
        'The Victorian stereoscope viewer, popular in the 1860s, provided immersive experiences with its 3D stereoscopic images. With its innovative technology and captivating visuals, it offered a glimpse into distant lands and exotic destinations.',
      price: 75, // Sample price in dollars
    },
    {
      name: '1820s Georgian Pocket Watch',
      era: '1820s',
      ranking: 121,
      description:
        'The 1820s Georgian pocket watch, featuring intricate engravings and mechanical craftsmanship, epitomizes the elegance and precision of early timekeeping devices. With its timeless design and functional beauty, it remains a treasured accessory for collectors and enthusiasts.',
      price: 300, // Sample price in dollars
    },
    {
      name: 'Victorian Cameo Ring',
      era: '1820s',
      ranking: 122,
      description:
        'Victorian cameo rings, popular in the 1820s, showcased intricately carved profiles on gemstone or shell settings. With their romantic symbolism and classic design, they served as tokens of affection and style.',
      price: 50, // Sample price in dollars
    },
    {
      name: '1825 Erie Canal Commemorative Mug',
      era: '1820s',
      ranking: 123,
      description:
        'The 1825 Erie Canal commemorative mug, celebrating the completion of the historic waterway connecting the Great Lakes to the Hudson River, commemorates a milestone in American transportation history. With its patriotic design and historical significance, it symbolizes progress and prosperity.',
      price: 80, // Sample price in dollars
    },
    {
      name: 'Regency Tea Set',
      era: '1820s',
      ranking: 124,
      description:
        'The Regency tea set, popular in the early 19th century, featured delicate porcelain and elegant designs inspired by the neoclassical style of the Regency era. With its refined craftsmanship and timeless charm, it provided a sophisticated setting for afternoon tea.',
      price: 120, // Sample price in dollars
    },
    {
      name: '1836 Colt Paterson Revolver',
      era: '1830s',
      ranking: 116,
      description:
        'The 1836 Colt Paterson revolver, produced in the early 19th century, was the first commercial repeating firearm. With its innovative design and revolving cylinder, it revolutionized personal armament and paved the way for future firearms development.',
      price: 1500, // Sample price in dollars
    },
    {
      name: 'Victorian Mourning Brooch',
      era: '1830s',
      ranking: 117,
      description:
        'Victorian mourning brooches, popular in the 1830s, featured somber designs and sentimental motifs as tokens of remembrance for departed loved ones. With their symbolic significance and intricate craftsmanship, they provided solace during times of grief.',
      price: 90, // Sample price in dollars
    },
    {
      name: "1829 Stephenson's Rocket Model",
      era: '1830s',
      ranking: 118,
      description:
        "Stephenson's Rocket model, commemorating the groundbreaking locomotive designed by George Stephenson in 1829, celebrates the dawn of the railway age. With its innovative design and historical significance, it represents the advancement of transportation technology.",
      price: 200, // Sample price in dollars
    },
    {
      name: 'Victorian Snuff Box',
      era: '1830s',
      ranking: 119,
      description:
        'Victorian snuff boxes, popular in the 1830s, provided a convenient and fashionable way to carry and dispense powdered tobacco. With their ornate designs and practical utility, they served as status symbols and personal accessories.',
      price: 60, // Sample price in dollars
    },
    {
      name: 'Daguerreotype Camera',
      era: '1830s',
      ranking: 120,
      description:
        'The daguerreotype camera, invented by Louis Daguerre in 1839, pioneered the art of photography with its groundbreaking imaging process. With its historical significance and technological innovation, it revolutionized visual communication and artistic expression.',
      price: 1000, // Sample price in dollars
    },
    {
      name: '1845 Colt Paterson Revolver',
      era: '1840s',
      ranking: 111,
      description:
        "The 1845 Colt Paterson revolver, introduced in the mid-19th century, marked the beginning of Samuel Colt's firearms legacy. With its innovative design and revolving cylinder, it revolutionized the handgun industry and became synonymous with American frontier culture.",
      price: 1000, // Sample price in dollars
    },
    {
      name: 'Victorian Hairwork Jewelry',
      era: '1840s',
      ranking: 112,
      description:
        'Victorian hairwork jewelry, popular in the 1840s, incorporated human hair into intricate designs as a sentimental keepsake. With its delicate craftsmanship and personal significance, it served as a tangible connection to loved ones.',
      price: 80, // Sample price in dollars
    },
    {
      name: 'Penny Black Stamp',
      era: '1840s',
      ranking: 113,
      description:
        "The Penny Black stamp, issued in 1840, was the world's first adhesive postage stamp used in a public postal system. With its iconic design featuring Queen Victoria's profile, it marked a significant advancement in the postal service and philatelic history.",
      price: 500, // Sample price in dollars
    },
    {
      name: '1849 Gold Rush Gold Pan',
      era: '1840s',
      ranking: 114,
      description:
        'The 1849 Gold Rush gold pan, used by prospectors during the California Gold Rush, symbolizes the pursuit of wealth and opportunity in the American West. With its practical utility and historical significance, it represents the spirit of adventure and entrepreneurship.',
      price: 50, // Sample price in dollars
    },
    {
      name: 'Victorian Cameo Brooch',
      era: '1840s',
      ranking: 115,
      description:
        'Victorian cameo brooches, popular in the 1840s, featured intricately carved profiles on layered shell or stone. With their elegant design and timeless appeal, they served as fashionable accessories for women of the era.',
      price: 70, // Sample price in dollars
    },
    {
      name: '1820s Georgian Snuff Box',
      era: '1820s',
      ranking: 125,
      description:
        'Georgian snuff boxes, popular in the 1820s, were crafted from luxurious materials such as gold, silver, and precious gemstones. With their intricate designs and practical utility, they served as stylish accessories for gentlemen of the era.',
      price: 100, // Sample price in dollars
    },
    {
      name: 'Victorian Hair Comb',
      era: '1820s',
      ranking: 126,
      description:
        "Victorian hair combs, fashionable in the 1820s, featured elaborate designs and ornate embellishments. With their functional beauty and decorative appeal, they added elegance to women's hairstyles of the era.",
      price: 40, // Sample price in dollars
    },
    {
      name: '1815 Waterloo Commemorative Medal',
      era: '1810s',
      ranking: 127,
      description:
        'The 1815 Waterloo commemorative medal, minted to honor the decisive Battle of Waterloo, marks a pivotal moment in European history. With its symbolic design and historical significance, it celebrates the end of the Napoleonic Wars.',
      price: 150, // Sample price in dollars
    },
    {
      name: 'Regency Tea Caddy',
      era: '1810s',
      ranking: 128,
      description:
        'The Regency tea caddy, popular in the early 19th century, provided a decorative and practical way to store precious tea leaves. With its elegant design and intricate details, it reflected the refined tastes of the Regency era.',
      price: 80, // Sample price in dollars
    },
    {
      name: '1812 Napoleonic War Sword',
      era: '1810s',
      ranking: 129,
      description:
        'The 1812 Napoleonic War sword, wielded by soldiers during the conflict between France and its European adversaries, represents the martial spirit and military prowess of the era. With its functional design and historical significance, it embodies the tumultuous times of the Napoleonic Wars.',
      price: 500, // Sample price in dollars
    },
    {
      name: '1804 Lewis and Clark Compass',
      era: '1800s',
      ranking: 130,
      description:
        'The 1804 Lewis and Clark compass, used during the historic expedition to explore the western territories of the United States, guided explorers through uncharted wilderness. With its rugged design and navigational accuracy, it played a crucial role in shaping American history.',
      price: 300, // Sample price in dollars
    },
    {
      name: 'Empire Waist Regency Gown',
      era: '1800s',
      ranking: 131,
      description:
        'The Empire waist Regency gown, popular in the early 19th century, featured a high waistline and flowing skirt inspired by ancient Greco-Roman fashion. With its elegant simplicity and timeless silhouette, it epitomized the romanticism of the Regency era.',
      price: 200, // Sample price in dollars
    },
    {
      name: '1803 Louisiana Purchase Map',
      era: '1800s',
      ranking: 132,
      description:
        "The 1803 Louisiana Purchase map, documenting the vast territory acquired by the United States from France, represents a landmark expansion of the nation's borders. With its cartographic detail and historical significance, it illustrates the westward expansion of the young republic.",
      price: 500, // Sample price in dollars
    },
    {
      name: "1805 Nelson's Flagship HMS Victory Model",
      era: '1800s',
      ranking: 133,
      description:
        "Nelson's flagship HMS Victory model, commemorating the famous British warship commanded by Admiral Horatio Nelson, celebrates naval victories during the Napoleonic Wars. With its detailed craftsmanship and historical significance, it honors Britain's maritime heritage.",
      price: 400, // Sample price in dollars
    },
    {
      name: 'Georgian Silver Tea Service',
      era: '1800s',
      ranking: 134,
      description:
        'Georgian silver tea services, popular in the early 19th century, featured exquisite craftsmanship and elegant designs. With their polished surfaces and ornate handles, they provided a luxurious setting for serving tea.',
      price: 600, // Sample price in dollars
    },
    {
      name: '1793 French Revolution Commemorative Coin',
      era: '1790s',
      ranking: 135,
      description:
        'The 1793 French Revolution commemorative coin, minted in the aftermath of the revolutionary events in France, symbolizes the ideals of liberty, equality, and fraternity. With its revolutionary imagery and historical significance, it marks a transformative moment in European history.',
      price: 200, // Sample price in dollars
    },
    {
      name: '1790s Regency Pocket Watch',
      era: '1790s',
      ranking: 136,
      description:
        'The 1790s Regency pocket watch, featuring intricate engravings and mechanical precision, epitomizes the elegance and craftsmanship of early timepieces. With its ornate design and functional beauty, it reflects the refined tastes of the Regency era.',
      price: 400, // Sample price in dollars
    },
    {
      name: '1792 U.S. Minted Half Dime',
      era: '1790s',
      ranking: 137,
      description:
        'The 1792 U.S. minted half dime, one of the first coins produced by the United States Mint, represents the birth of American coinage. With its historic design and numismatic significance, it holds a special place in the annals of American numismatics.',
      price: 1000, // Sample price in dollars
    },
    {
      name: 'Empire Style Regency Chair',
      era: '1790s',
      ranking: 138,
      description:
        'Empire style Regency chairs, popular in the late 18th and early 19th centuries, featured neoclassical motifs and luxurious upholstery. With their elegant proportions and refined craftsmanship, they epitomized the opulence of the Regency era.',
      price: 300, // Sample price in dollars
    },
    {
      name: '1798 Naval Battle of the Nile Painting',
      era: '1790s',
      ranking: 139,
      description:
        "The 1798 Naval Battle of the Nile painting, depicting Admiral Horatio Nelson's decisive victory over the French fleet, celebrates British naval supremacy during the Napoleonic Wars. With its dramatic portrayal and historical significance, it commemorates a pivotal moment in naval history.",
      price: 800, // Sample price in dollars
    },
    {
      name: '2021 PlayStation 5',
      era: '2020s',
      ranking: 150,
      description:
        'The PlayStation 5, released in 2020, brings immersive gaming experiences with its powerful hardware and extensive library of games. With its high-fidelity graphics and innovative controller features, it offers hours of entertainment for gamers of all ages.',
      price: 499, // Sample price in dollars
    },
    {
      name: '2020 LEGO Super Mario Starter Course',
      era: '2020s',
      ranking: 151,
      description:
        'The LEGO Super Mario Starter Course, introduced in 2020, combines traditional LEGO building with interactive gameplay inspired by the iconic video game character. With its modular design and electronic components, it offers endless creative possibilities for fans of all ages.',
      price: 59, // Sample price in dollars
    },
    {
      name: '2023 Nintendo Switch OLED Model',
      era: '2020s',
      ranking: 152,
      description:
        'The Nintendo Switch OLED model, announced in 2021 and released in 2023, enhances the handheld gaming experience with its vibrant OLED display and improved audio. With its versatile design and extensive game library, it continues to delight gamers worldwide.',
      price: 349, // Sample price in dollars
    },
    {
      name: '2022 Barbie Dreamhouse Playset',
      era: '2020s',
      ranking: 153,
      description:
        'The Barbie Dreamhouse playset, launched in 2022, offers endless imaginative play with its interactive features and stylish design. With its customizable rooms and accessories, it provides a dream home for Barbie and her friends to explore and enjoy.',
      price: 199, // Sample price in dollars
    },
    {
      name: "2024 LEGO Star Wars Ultimate Collector's Millennium Falcon",
      era: '2020s',
      ranking: 154,
      description:
        "The LEGO Star Wars Ultimate Collector's Millennium Falcon, released in 2024, celebrates the iconic spaceship from the Star Wars saga with its detailed design and impressive scale. With its thousands of pieces and authentic features, it's a must-have for Star Wars fans and LEGO enthusiasts alike.",
      price: 799, // Sample price in dollars
    },
    {
      name: '2019 Nintendo Switch',
      era: '2010s',
      ranking: 155,
      description:
        'The Nintendo Switch, launched in 2017, offers versatile gaming experiences with its hybrid design that can be used as a handheld console or connected to a TV. With its innovative Joy-Con controllers and extensive game library, it provides entertainment for players of all ages.',
      price: 299, // Sample price in dollars
    },
    {
      name: '2010 iPad',
      era: '2010s',
      ranking: 156,
      description:
        'The iPad, introduced by Apple in 2010, revolutionized portable computing with its large touchscreen display and intuitive user interface. With its sleek design and expansive app ecosystem, it became a versatile tool for entertainment, productivity, and creativity.',
      price: 499, // Sample price in dollars
    },
    {
      name: '2013 Rainbow Loom',
      era: '2010s',
      ranking: 157,
      description:
        'The Rainbow Loom, launched in 2013, sparked a crafting craze with its simple loom and colorful rubber bands that could be woven into intricate bracelets and accessories. With its creative potential and social appeal, it became a favorite pastime for children and adults alike.',
      price: 15, // Sample price in dollars
    },
    {
      name: '2018 Fortnite Nerf Blasters',
      era: '2010s',
      ranking: 158,
      description:
        'Fortnite Nerf blasters, introduced in 2018, bring the action-packed battles of the popular video game into the real world with foam dart-firing replicas of in-game weapons. With their authentic designs and competitive gameplay, they offer thrilling outdoor fun for Fortnite fans.',
      price: 29, // Sample price in dollars
    },
    {
      name: '2012 LeapFrog LeapPad Explorer',
      era: '2010s',
      ranking: 159,
      description:
        'The LeapFrog LeapPad Explorer, released in 2012, offers interactive educational experiences for young learners with its touchscreen tablet and curriculum-based apps. With its durable design and engaging content, it introduces children to essential skills in reading, math, and more.',
      price: 99, // Sample price in dollars
    },
    {
      name: '2001 Beyblade',
      era: '2000s',
      ranking: 160,
      description:
        'Beyblade, introduced in 2001, offers thrilling battles with customizable spinning tops that compete in specialized arenas. With its strategic gameplay and collectible components, it provides exciting entertainment for children aged 8-12.',
      price: 19, // Sample price in dollars
    },
    {
      name: '2003 LEGO Bionicle',
      era: '2000s',
      ranking: 161,
      description:
        'LEGO Bionicle, launched in 2001, combines action figures with building bricks to create mythical characters in an epic storyline. With its intricate designs and imaginative play possibilities, it inspires creativity and adventure for children aged 8-12.',
      price: 29, // Sample price in dollars
    },
    {
      name: '2002 Yu-Gi-Oh! Trading Card Game',
      era: '2000s',
      ranking: 162,
      description:
        'The Yu-Gi-Oh! Trading Card Game, released in 2002, offers strategic duels with collectible cards featuring powerful monsters and magical spells. With its competitive gameplay and social interactions, it provides endless entertainment for children aged 8-12.',
      price: 10, // Sample price in dollars
    },
    {
      name: '2004 Robosapien Robot',
      era: '2000s',
      ranking: 163,
      description:
        'The Robosapien robot, introduced in 2004, combines technology with interactive play as a programmable humanoid robot with lifelike movements and behaviors. With its remote control capabilities and customizable actions, it offers hours of fun for children aged 8-12.',
      price: 79, // Sample price in dollars
    },
    {
      name: '2000 Razor Scooter',
      era: '2000s',
      ranking: 164,
      description:
        'The Razor Scooter, launched in 2000, revolutionized outdoor fun with its lightweight design and smooth ride. With its foldable frame and vibrant colors, it became a must-have accessory for children aged 8-12 looking for thrilling adventures.',
      price: 39, // Sample price in dollars
    },
    {
      name: '1996 Pokémon Trading Card Game',
      era: '1990s',
      ranking: 165,
      description:
        'The Pokémon Trading Card Game, introduced in 1996, offers strategic battles with collectible cards featuring beloved Pokémon creatures. With its competitive gameplay and social interactions, it provides endless entertainment for children aged 8-12.',
      price: 12, // Sample price in dollars
    },
    {
      name: '1992 Super Soaker 200',
      era: '1990s',
      ranking: 166,
      description:
        'The Super Soaker 200, launched in 1992, revolutionized water fights with its powerful pump-action and long-range spray. With its large water reservoir and easy-to-use design, it offers hours of outdoor fun for children aged 8-12.',
      price: 29, // Sample price in dollars
    },
    {
      name: '1991 Teenage Mutant Ninja Turtles Action Figures',
      era: '1990s',
      ranking: 167,
      description:
        'The Teenage Mutant Ninja Turtles action figures, released in 1991, bring the heroic reptilian quartet to life with detailed sculpts and accessories. With their posable joints and iconic characters, they inspire imaginative play for children aged 8-12.',
      price: 15, // Sample price in dollars
    },
    {
      name: '1993 Talkboy Tape Recorder',
      era: '1990s',
      ranking: 168,
      description:
        'The Talkboy tape recorder, made famous by the movie Home Alone 2 in 1992, allows children to record and modify their voices for hilarious effects. With its portable design and playback features, it offers creative fun for children aged 8-12.',
      price: 24, // Sample price in dollars
    },
    {
      name: '1997 Tamagotchi Virtual Pet',
      era: '1990s',
      ranking: 169,
      description:
        'The Tamagotchi virtual pet, introduced in 1997, offers digital pet ownership with responsibilities like feeding and playing. With its compact design and interactive features, it provides nurturing fun for children aged 8-12.',
      price: 10, // Sample price in dollars
    },
  ];
  coolStuff$ = of(this.coolStuffArray);
}
