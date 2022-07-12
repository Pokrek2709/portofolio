import self from "../img/self.jpg";
import mock3 from "../img/mock3.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Muhammad Faiz ",
    lastName: "Al Azmi",
    initials: "pais", 
    position: "a Fronted Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'like a coffe'
        },
        {
            emoji: '🌎',
            text: 'based in the Indonesia'
        },
        {
            emoji: "💼",
            text: "freelancer"
        },
        {
            emoji: "📧",
            text: "muhammadfaizalazmi@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/muhammad.f.azmi.5477",
            icon: 'fa fa-facebook'
        },
        {
            link: "https://www.instagram.com/muhammadfaiz2709",
            icon: 'fa fa-instagram'
        },
        {
            link: "https://github.com/Pokrek2709",
            icon: "fa fa-github"
        },
        {
            link: "https://www.linkedin.com/in/muhammadfaizalazmi/",
            icon: "fa fa-linkedin"
        },
        {
            link: "https://twitter.com/Pokrek2709",
            icon: "fa fa-twitter"
        }
    ],
    bio: "Hello! I'm Faiz. I'm a Freelancer. I studied Teknik Informatika in Institut Teknologi Telkom Purwokerto, I enjoy long walks on the beach, You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'bootstrap', 'html5', 'css3', 'figma', 'MySQL'],
            exposedTo: ['C++', 'adobe illustrator', 'Java']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'coding',
            emoji: '💻'
        },
        {
            label: 'drawing',
            emoji: '🎨'
        },
        {
            label: 'gaming',
            emoji: '🎮'
        }
    ],
    portfolio: [ 
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        }
    ]
}