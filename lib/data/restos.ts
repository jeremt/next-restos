const data = {
    restaurants: [
        {
            id: crypto.randomUUID(),
            titre: "Le Jardin Vert",
            description:
                "Restaurant entièrement végétalien proposant des plats créatifs à base de produits locaux et de saison. Une cuisine saine et savoureuse dans un cadre chaleureux.",
            adresse: "12 rue des Lilas, 75011 Paris",
            tags: ["vegan", "bio", "fait maison", "sans gluten"],
            avis: [
                {username: "MarieCook", message: "Incroyable ! Le burger de lentilles est une révélation.", note: 5},
                {username: "ThomasV", message: "Très bon mais un peu cher pour les portions.", note: 3},
                {
                    username: "LauraDiet",
                    message: "Enfin un restaurant vegan qui ne fait pas semblant d'être gourmand !",
                    note: 5,
                },
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "Pho Saigon",
            description:
                "Authentique restaurant vietnamien tenu par une famille depuis 1998. Spécialiste du pho traditionnel et des rouleaux de printemps faits maison.",
            adresse: "47 avenue de Choisy, 75013 Paris",
            tags: ["vietnamien", "asiatique", "soupe", "fait maison", "familial"],
            avis: [
                {username: "Kevin13", message: "Le meilleur pho de Paris, sans discussion.", note: 5},
                {username: "SophieL", message: "Accueil chaleureux et bouillon parfumé. Je reviendrai !", note: 5},
                {username: "Marc_Gourmet", message: "Bon rapport qualité-prix, cadre simple mais agréable.", note: 4},
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "Trattoria da Enzo",
            description:
                "Cuisine italienne traditionnelle importée directement de Naples. Pâtes fraîches, pizzas au feu de bois et tiramisu fait maison à tomber par terre.",
            adresse: "3 rue Lepic, 75018 Paris",
            tags: ["italien", "pizza", "pâtes", "feu de bois", "romantique"],
            avis: [
                {
                    username: "Clara_Roma",
                    message: "La pizza margherita est exactement comme à Naples. Bravo !",
                    note: 5,
                },
                {username: "PierreB", message: "Trop bruyant le week-end, mais la cuisine est excellente.", note: 4},
                {
                    username: "Nathalie_M",
                    message: "Le tiramisu est divin. Je pourrais en manger tous les jours.",
                    note: 5,
                },
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "Sushi Zen",
            description:
                "Restaurant japonais haut de gamme proposant des sushis préparés à la minute par un chef formé à Tokyo. Ambiance épurée et service impeccable.",
            adresse: "88 rue du Faubourg Saint-Honoré, 75008 Paris",
            tags: ["japonais", "sushi", "poisson", "gastronomique", "luxe"],
            avis: [
                {username: "AlexFoodie", message: "Le plateau omakase est une expérience inoubliable.", note: 5},
                {username: "Béatrice_W", message: "Cher mais vraiment d'une qualité exceptionnelle.", note: 4},
                {username: "JulienT", message: "Le service est un peu froid, mais les sushis sont parfaits.", note: 4},
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "El Rancho",
            description:
                "Steakhouse mexicain convivial avec une carte de tacos, burritos et grillades généreuses. Ambiance festive et grande sélection de margaritas.",
            adresse: "22 rue de la Roquette, 75011 Paris",
            tags: ["mexicain", "viande", "grillades", "cocktails", "festif"],
            avis: [
                {username: "Pablo_G", message: "Les tacos al pastor sont authentiques et délicieux !", note: 5},
                {username: "Emma_Paris", message: "Super ambiance, parfait pour un repas en groupe.", note: 4},
                {
                    username: "Romain_B",
                    message: "La margarita est trop sucrée à mon goût, mais les plats sont top.",
                    note: 3,
                },
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "Le Comptoir Libanais",
            description:
                "Saveurs du Liban dans une ambiance colorée et décontractée. Mezze généreux, falafels croustillants et houmous onctueux à partager entre amis.",
            adresse: "15 rue du Château d'Eau, 75010 Paris",
            tags: ["libanais", "végétarien", "mezze", "oriental", "convivial"],
            avis: [
                {
                    username: "Yasmine_H",
                    message: "Le meilleur houmous de la ville, je n'achète plus le supermarché.",
                    note: 5,
                },
                {username: "Fred_T", message: "Portions généreuses et prix très raisonnables. Top !", note: 5},
                {username: "Lucie_M", message: "Bien mais le service est parfois un peu lent.", note: 3},
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "Brasserie Alsacienne",
            description:
                "Institution parisienne fondée en 1923 spécialisée dans la cuisine alsacienne. Choucroute royale, flamekueche et bière pression artisanale dans un décor Belle Époque.",
            adresse: "5 boulevard du Montparnasse, 75006 Paris",
            tags: ["alsacien", "français", "brasserie", "bière", "traditionnel"],
            avis: [
                {
                    username: "Georges_A",
                    message: "La choucroute est généreuse et bien parfumée. Un classique indémodable.",
                    note: 4,
                },
                {
                    username: "Isabelle_D",
                    message: "Le cadre est magnifique, on se croirait dans les années 20.",
                    note: 5,
                },
                {
                    username: "Patrick_V",
                    message: "Bon mais un peu touristique. Les portions ont réduit ces dernières années.",
                    note: 3,
                },
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "Curry Palace",
            description:
                "Restaurant indien authentique proposant une grande variété de currys végétariens et non-végétariens. Épices importées directement du Kerala.",
            adresse: "34 passage Brady, 75010 Paris",
            tags: ["indien", "curry", "épicé", "végétarien", "exotique"],
            avis: [
                {username: "Anita_K", message: "Authentique comme à Mumbai ! Le butter chicken est parfait.", note: 5},
                {username: "David_L", message: "Attention si vous n'aimez pas le piment, demandez mild !", note: 4},
                {username: "Sophie_R", message: "Le daal est délicieux et très réconfortant.", note: 4},
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "Burger Factory",
            description:
                "Burgers artisanaux avec des steaks de bœuf limousin, des pains briochés maison et des sauces secrètes. Ambiance street-food chic dans un loft industriel.",
            adresse: "9 rue Oberkampf, 75011 Paris",
            tags: ["burger", "américain", "street food", "viande", "craft"],
            avis: [
                {username: "Tom_B", message: "Le BBQ Bacon Burger est monstrueusement bon.", note: 5},
                {username: "Julie_C", message: "Files d'attente longues le soir, mais ça vaut l'attente.", note: 4},
                {
                    username: "Nico_P",
                    message: "Les frites maison sont incroyables ! Endroit branché mais un peu bruyant.",
                    note: 4,
                },
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "La Crêperie Bretonne",
            description:
                "Crêperie traditionnelle bretonne avec des galettes de sarrasin bio et des crêpes sucrées. Cidre artisanal et ambiance authentique de Finistère.",
            adresse: "17 rue Mouffetard, 75005 Paris",
            tags: ["breton", "crêperie", "galettes", "cidre", "sans gluten"],
            avis: [
                {username: "Anne_B", message: "La galette complète est parfaite, pâte bien croustillante.", note: 5},
                {username: "Michel_L", message: "Le cidre fermier est excellent. Ambiance très sympa.", note: 4},
                {
                    username: "Camille_D",
                    message: "Petite salle donc il faut réserver, mais ça vaut vraiment le déplacement.",
                    note: 4,
                },
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "Ramen Tokyo",
            description:
                "Spécialiste du ramen tonkotsu avec un bouillon mijoté 18 heures. File d'attente inévitable mais l'expérience est unique. Gyozas et edamames en entrée.",
            adresse: "6 rue Saint-Anne, 75001 Paris",
            tags: ["japonais", "ramen", "soupe", "nouilles", "umami"],
            avis: [
                {username: "Hugo_M", message: "Le bouillon tonkotsu est profond et réconfortant. Un must!", note: 5},
                {username: "Chloé_V", message: "Compter 30 min d'attente mais ça vaut chaque minute.", note: 4},
                {username: "Louis_G", message: "Les gyozas sont croustillants à souhait. Parfait en hiver.", note: 5},
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "Le Bistrot du Marché",
            description:
                "Bistrot parisien de quartier avec une carte courte qui change chaque semaine selon les arrivages du marché. Vins naturels et ambiance canaille garantis.",
            adresse: "28 rue du Poteau, 75018 Paris",
            tags: ["français", "bistrot", "terroir", "vins naturels", "saison"],
            avis: [
                {
                    username: "Bertrand_C",
                    message: "Le tartare de bœuf est excellent et la sélection de vins parfaite.",
                    note: 5,
                },
                {username: "Marina_S", message: "Ambiance de vrai bistrot parisien comme on n'en fait plus.", note: 5},
                {username: "Olivier_T", message: "Carte réduite mais chaque plat est travaillé avec soin.", note: 4},
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "Ethiopian Coffee & Kitchen",
            description:
                "Premier restaurant éthiopien du quartier, proposant des injeras garnis de wats savoureux. Café de cérémonie éthiopien servi avec des pop-corns selon la tradition.",
            adresse: "41 rue du Faubourg Saint-Denis, 75010 Paris",
            tags: ["éthiopien", "africain", "végétarien", "épicé", "café"],
            avis: [
                {
                    username: "Fatou_D",
                    message: "L'injera est fermentée à la perfection. Un voyage culinaire magnifique.",
                    note: 5,
                },
                {username: "Clément_B", message: "Le café de cérémonie est une expérience à part entière !", note: 5},
                {username: "Vera_P", message: "Dépaysant et délicieux. Le doro wat est savoureux.", note: 4},
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "Tapas y Mas",
            description:
                "Bar à tapas animé inspiré des tabernas de Barcelone. Patatas bravas, jambon ibérique, croquetas et sangria dans une atmosphère festive.",
            adresse: "2 rue de la Huchette, 75005 Paris",
            tags: ["espagnol", "tapas", "partage", "festif", "sangria"],
            avis: [
                {
                    username: "Carlos_M",
                    message: "Les croquetas de jamón sont fondantes, exactement comme à Barcelone.",
                    note: 5,
                },
                {username: "Delphine_H", message: "Super endroit pour un apéro dînatoire en groupe !", note: 4},
                {
                    username: "Nicolas_F",
                    message: "La sangria est un peu trop sucrée mais les tapas sont vraiment bons.",
                    note: 3,
                },
            ],
        },
        {
            id: crypto.randomUUID(),
            titre: "Green Bowl",
            description:
                "Restaurant healthy & coloré spécialisé dans les bowls nutritifs, smoothies et salades composées. Idéal pour une pause déjeuner saine et rapide.",
            adresse: "55 avenue de l'Opéra, 75002 Paris",
            tags: ["healthy", "bowl", "végétarien", "sans gluten", "rapide"],
            avis: [
                {
                    username: "Elisa_F",
                    message: "Le Buddha Bowl est magnifique visuellement et délicieux. Parfait !",
                    note: 5,
                },
                {username: "Antoine_R", message: "Frais, léger et rassasiant. Mon lunch de bureau préféré.", note: 4},
                {
                    username: "Sandra_K",
                    message: "Un poil cher pour les quantités, mais la qualité est irréprochable.",
                    note: 4,
                },
            ],
        },
    ],
};

export const listRestos = () => {
    return data.restaurants.map((resto) => {
        return {
            id: resto.id,
            titre: resto.titre,
            description: resto.description,
            // TODO: average_rating
        };
    });
};

export const getRestoById = (id: string) =>
    data.restaurants.find((resto) => {
        return resto.id === id;
    });
