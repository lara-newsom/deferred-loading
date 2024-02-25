import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.scss'
})
export class CatsComponent {
  footerText = `Absolutely, let me introduce you to the quirky feline residents of Hortense's cabin in the Rockies. Each of these quirky feline companions brings their own unique talents and eccentricities to life in Hortense's cabin in the Rockies, making every day an adventure filled with laughter, love, and endless surprises.`;

  cats: { name: string, description: string }[] = [
    {
        name: "Whiskers the Acrobat",
        description: "Whiskers is an agile tabby with a penchant for acrobatics. This talented cat can often be found performing impressive feats of balance and agility, from walking tightropes stretched between furniture to executing flawless somersaults off the back of the sofa."
    },
    {
        name: "Mittens the Mastermind",
        description: "Mittens is a cunning tuxedo cat with a knack for solving puzzles. With a mischievous glint in his eye and a mind sharper than a tack, he can unravel even the most perplexing conundrums with ease, whether it's figuring out how to open a locked cabinet or devising elaborate escape routes from the cabin."
    },
    {
        name: "Socks the Songbird",
        description: "Socks is a melodious calico cat blessed with a voice that could rival that of a professional opera singer. With a repertoire ranging from soulful ballads to upbeat show tunes, she serenades the other cats (and sometimes unsuspecting visitors) with her enchanting melodies."
    },
    {
        name: "Fluffy the Fortune Teller",
        description: "Fluffy is a mystical Persian cat with an uncanny ability to predict the future. Whether it's foreseeing the outcome of a game of cat-and-mouse or divining the weather forecast for the week ahead, her mystical insights never fail to amaze and astound."
    },
    {
        name: "Patch the Painter",
        description: "Patch is a creative Siamese cat who channels his boundless energy into the world of art. Armed with a brush in his mouth and a palette of vibrant colors at his disposal, he creates stunning works of feline-inspired masterpieces that adorn the walls of the cabin."
    },
    {
        name: "Whiskers the Wordsmith",
        description: "This sophisticated Russian Blue has a way with words that would make even the most seasoned poet envious. With a flick of his tail and a purr of inspiration, he weaves tales of adventure and romance that captivate the hearts and minds of all who hear them."
    },
    {
        name: "Shadow the Sleuth",
        description: "Shadow is a sleek black cat with a talent for sleuthing. With his keen senses and stealthy demeanor, he's the go-to cat for solving mysteries and uncovering secrets hidden within the depths of the cabin's shadows."
    },
    {
        name: "Ginger the Gourmet",
        description: "Ginger is a connoisseur of fine cuisine, with a refined palate that rivals that of the most discerning food critic. From sampling exotic delicacies to concocting gourmet feasts from scratch, this orange tabby knows his way around the kitchen like no other."
    },
    {
        name: "Mittens the Mechanic",
        description: "Another Mittens in the mix, this one is a ginger Maine Coon with a knack for tinkering with gadgets and gizmos. Whether it's fixing a malfunctioning clock or constructing elaborate Rube Goldberg machines, he's always happiest when he's knee-deep in wires and widgets."
    },
    {
        name: "Luna the Librarian",
        description: "Luna is a studious Scottish Fold who takes her role as custodian of the cabin's extensive library very seriously. With a love for literature matched only by her love for napping, she can often be found curled up amongst the bookshelves, lost in a world of literary adventure."
    },
    {
        name: "Oreo the Oracle",
        description: "Oreo is a mystic black-and-white cat with a talent for divination. With a flick of her tail and a gaze as deep as the cosmos, she peers into the future, offering cryptic insights and enigmatic prophecies to those who seek her guidance."
    },
    {
        name: "Tigger the Time Traveler",
        description: "Tigger is a playful Bengal cat with a peculiar knack for bending the fabric of time itself. With a whisk of his tail and a boundless sense of curiosity, he embarks on thrilling adventures through the annals of history, leaving a trail of temporal chaos in his wake."
    },
    {
        name: "Boots the Botanist",
        description: "Boots is a green-eyed Abyssinian with a passion for plants. Whether it's cultivating exotic flowers in the cabin's sun-drenched windowsills or foraging for wild herbs in the Rocky Mountain wilderness, she has a green thumb that would make even the most seasoned botanist green with envy."
    },
    {
        name: "Leo the Linguist",
        description: "Leo is a polydactyl Persian with a love for languages. From meowing in Morse code to communicating through a complex system of paw gestures, he's fluent in a multitude of tongues and never fails to impress with his linguistic prowess."
    },
    {
        name: "Misty the Mindreader",
        description: "Misty is a mysterious Nebelung with a sixth sense that borders on the supernatural. With a single glance into her piercing blue eyes, she can peer into the depths of your soul, unraveling your deepest thoughts and desires with unsettling accuracy."
    }
];

}
