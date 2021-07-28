import SMO from '../assets/super-mario-odyssey.png';
import CODIW from '../assets/call-of-duty-infinite-warfare.png';
import TW3 from '../assets/the-witcher-iii-wild-hunt.png';
import CODWWII from '../assets/call-of-duty-wwii.png';
import MKXL from '../assets/mortal-kombat-xl.png';
import SOD from '../assets/shards-of-darkness.png';
import TMSM from '../assets/terra-media-sombras-de-mordor.png';
import F18 from '../assets/fifa-18.png';
import HZD from '../assets/horizon-zero-dawn.png';
import { GameProps } from '../components/Game';

export const games: GameProps[] = [
    {
        id: 312,
        name: "Super Mario Odyssey",
        price: 197.88,
        score: 100,
        image: SMO,
        description:'Super Mario Odyssey é um jogo de plataforma desenvolvido pela Nintendo Entertainment Planning & Development e publicado pela Nintendo. Foi lançado mundialmente em 27 de outubro de 2017 exclusivamente para o Nintendo Switch.'
    },
    {
        id: 201,
        name: "Call Of Duty Infinite Warfare",
        price: 49.99,
        score: 80,
        image: CODIW,
        description:'Call of Duty: Infinite Warfare é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Infinity Ward e distribuído pela Activision. É o décimo terceiro jogo da franquia Call of Duty e foi lançado em 4 de novembro de 2016 para as plataformas Microsoft Windows, PlayStation 4 e Xbox One.'
    },
    {
        id: 102,
        name: "The Witcher III Wild Hunt",
        price: 119.5,
        score: 250,
        image: TW3,
        description: 'The Witcher 3: Wild Hunt é um jogo eletrônico de RPG de ação em mundo aberto desenvolvido pela CD Projekt RED e lançado no dia 19 de maio de 2015 para as plataformas Microsoft Windows, PlayStation 4, Xbox One e em outubro de 2019 para o Nintendo Switch, sendo o terceiro título da série de jogos The Witcher.'
    },
    {
        id: 99,
        name: "Call Of Duty WWII",
        price: 249.99,
        score: 205,
        image: CODWWII,
        description: 'Call of Duty: WWII é um jogo eletrônico de tiro em primeira pessoa produzido pela empresa Sledgehammer Games e distribuído pela Activision para PlayStation 4, Xbox One e Microsoft Windows. É o primeiro jogo da série Call of Duty a se passar durante a Segunda Guerra Mundial desde Call of Duty: World at War, em 2008.'
    },
    {
        id: 12,
        name: "Mortal Kombat XL",
        price: 69.99,
        score: 150,
        image: MKXL,
        description:'Mortal Kombat X é um videojogo de luta da série Mortal Kombat. Foi produzido pelo estúdio NetherRealm Studios e publicado pela Warner Bros. Home Entertainment. Realizado por Ed Boon, um dos criadores da série. É o décimo título principal da série e serve como sequela para Mortal Kombat de 2011.'
    },
    {
        id: 74,
        name: "Shards of Darkness",
        price: 71.94,
        score: 400,
        image: SOD,
        description:'Styx: Shards of Darkness é um videogame furtivo desenvolvido pelo desenvolvedor francês Cyanide e publicado pela Focus Home Interactive. O jogo foi lançado mundialmente em 14 de março de 2017 para Microsoft Windows, PlayStation 4 e Xbox One.'
    },
    {
        id: 31,
        name: "Terra Média: Sombras de Mordor",
        price: 79.99,
        score: 50,
        image: TMSM,
        description:'Middle-earth: Shadow of Mordor é um jogo eletrônico de ação-aventura ambientado no universo da saga "O Senhor dos Anéis" do autor J. R. R. Tolkien, desenvolvido pela Monolith Productions e distribuído pela Warner Bros. Interactive Entertainment.'

    },
    {
        id: 420,
        name: "FIFA 18",
        price: 195.39,
        score: 325,
        image: F18,
        description:'FIFA 18 é um jogo eletrônico de futebol desenvolvido e publicado pela EA Sports, que foi lançado mundialmente em 1 de Novembro de 2017. Este é o vigésimo quinto título principal da série FIFA e o segundo a usar o mecanismo de jogo da Frostbite para Xbox One, PS4 e PC.'
    },
    {
        id: 501,
        name: "Horizon Zero Dawn",
        price: 115.8,
        score: 290,
        image: HZD,
        description:'Horizon Zero Dawn é um jogo eletrônico de RPG de ação desenvolvido pela Guerrilla Games e publicado pela Sony Interactive Entertainment. Foi lançado em 28 de fevereiro de 2017 para PlayStation 4 e em 7 de agosto de 2020 para Microsoft Windows.'
    }

]