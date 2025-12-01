export interface ProjectSection {
    type: 'text' | 'list' | 'image';
    title?: string;
    content?: string | string[];
}

export interface Project {
    id: number;
    title: string;
    type: string;
    techs: string[];
    context: string;
    challenge: string;
    solution: string;
    hasRepo: boolean;
    repoUrl?: string;
    image: string;
    details: ProjectSection[];
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "CMS Interne Automatisé",
        type: "Projet Stage (Activ'Communication)",
        techs: ['Next.js', 'React', 'SASS', 'MySQL'],
        context: "L'entreprise avait besoin d'accélérer la production de sites vitrines standardisés.",
        challenge: "Créer une interface intuitive pour des non-développeurs tout en générant du code optimisé.",
        solution: "Développement d'un CMS sur-mesure avec Next.js permettant un gain de temps de 40% sur la prod.",
        hasRepo: false,
        image: "/Stage2025-1.png",
        details: [
            {
                type: 'text',
                title: "Contexte et Défi Technique",
                content: "L'objectif était d'industrialiser la création de sites vitrines. Le défi technique principal n'était pas seulement de créer une interface d'administration, mais de concevoir un moteur capable de générer du code React/Next.js performant et SEO-friendly à partir d'une configuration stockée en base de données, le tout utilisable par des équipes marketing sans compétences techniques."
            },
            {
                type: 'text',
                title: "Architecture et Réalisation",
                content: "Pour réaliser cette interface d'édition en temps réel, j'ai dû concevoir une architecture hautement modulaire. J'ai développé un système de composants dynamiques où chaque bloc de contenu est une brique indépendante, configurable via une surcouche UI interactive. La difficulté majeure a été de synchroniser l'état visuel de l'éditeur avec la structure de données sous-jacente sans impacter les performances de rendu."
            },
            {
                type: 'text',
                title: "Gestion Avancée des Médias",
                content: "La gestion des médias a représenté un autre défi technique important. Il ne s'agissait pas simplement de stocker des fichiers, mais d'automatiser leur optimisation. J'ai implémenté un pipeline de traitement côté serveur qui convertit et redimensionne automatiquement les images en WebP à la volée. J'ai également dû sécuriser ces opérations sensibles via une API robuste, garantissant que l'intégrité du système ne soit jamais compromise."
            },
            {
                type: 'text',
                title: "Bilan Technique",
                content: "Ce projet a nécessité une maîtrise approfondie du cycle de vie des composants React et des capacités de rendu serveur de Next.js. Au-delà de la simple stack technique (Prisma, MySQL, SCSS), c'est la capacité à abstraire la complexité technique pour l'utilisateur final qui a fait le succès de cet outil, réduisant le temps de production de 40%."
            }
        ]
    },
    {
        id: 2,
        title: "Gestion Travail Salarié",
        type: "Projet Stage (SAS Perrin)",
        techs: ['Vue.js', 'Node.js', 'SQL Server'],
        context: "Gestion complexe et manuelle des entrées/sorties de véhicules.",
        challenge: "Connecter une SPA moderne à une base de données existante Microsoft SQL Server.",
        solution: "Application temps réel (Vue.js) fluidifiant le suivi logistique de l'entreprise.",
        hasRepo: false,
        image: "/GTS.png",
        details: [
            {
                type: 'text',
                title: "Contexte et Évolution du Besoin",
                content: "La mission initiale était d'utiliser une API d'intelligence artificielle pour calculer automatiquement les temps de travail sur chantier via géolocalisation. Cependant, l'analyse de faisabilité a révélé que le coût récurrent des requêtes IA serait prohibitif pour le volume de données de l'entreprise. J'ai donc proposé et validé une approche alternative : développer une logique métier sur-mesure."
            },
            {
                type: 'text',
                title: "Architecture Technique",
                content: "J'ai conçu une architecture découplée avec Vue.js pour le frontend et une API Node.js personnalisée. Cette API agit comme un middleware intelligent qui récupère les données brutes, applique les algorithmes de calcul de temps que j'ai développés, et sert les résultats au frontend. Cette approche a non seulement éliminé les coûts d'IA, mais a aussi offert un contrôle total sur la précision des calculs."
            },
            {
                type: 'text',
                title: "Défis d'Intégration Legacy",
                content: "Le point le plus complexe a été l'interaction avec le système d'information existant. L'entreprise utilisait une base de données Microsoft SQL Server avec une structure rigide et peu documentée. J'ai dû faire de la rétro-ingénierie pour comprendre le schéma de données et construire des requêtes SQL optimisées capables d'extraire les informations pertinentes sans impacter les performances du système de production."
            },
            {
                type: 'text',
                title: "Bilan",
                content: "Ce stage m'a permis de démontrer ma capacité à remettre en question une solution technique initiale (IA) pour proposer une alternative plus viable économiquement et techniquement. J'ai pu renforcer mes compétences en Vue.js (notamment sur la gestion des listes et du rendu conditionnel) et en backend Node.js, tout en apprenant à composer avec les contraintes fortes d'un système legacy."
            },
            {
                type: 'text',
                title: "Note Importante",
                content: "L'application nécessite une connexion directe à l'API interne de l'entreprise pour fonctionner. Par ailleurs, n'ayant pas effectué de captures d'écran lors de mon accès à l'environnement de production, je ne peux présenter de visuels de l'interface finale."
            }
        ]
    },
    {
        id: 3,
        title: "ARvolution",
        type: "Projet Universitaire (Équipe de 4)",
        techs: ['Vue.js', 'Node.js', 'PostgreSQL'],
        context: "Gestion complète d'un salon de réalité virtuelle (réservations, équipements, conférences).",
        challenge: "Intégration d'une carte interactive et gestion des notifications temps réel.",
        solution: "Plateforme fullstack avec tableau de bord administrateur et système de réservation unifié.",
        hasRepo: true,
        repoUrl: "https://github.com/ttherezien/Projet_ARvolution",
        image: "/Acceuil-ARvolution.png",
        details: [
            {
                type: 'text',
                title: "Envergure du Projet",
                content: "ARvolution a été mon projet le plus ambitieux à ce jour. En équipe de 4, nous avons développé une solution complète pour gérer un salon de réalité virtuelle. Le système gère tout : des réservations de stands et d'équipements à la gestion des conférences, en passant par l'authentification et un tableau de bord administrateur fournissant des rapports en temps réel."
            },
            {
                type: 'text',
                title: "Architecture Fullstack",
                content: "J'ai pris en charge une grande partie du backend, utilisant Node.js et PostgreSQL pour construire une API REST robuste. La complexité résidait dans la modélisation des données pour lier efficacement les utilisateurs, les réservations et les ressources physiques (casques VR, stands) tout en garantissant l'intégrité des données."
            },
            {
                type: 'text',
                title: "Défis Techniques & Apprentissage",
                content: "L'intégration de la carte interactive a été un défi majeur car nous manquions de compétences initiales sur ce sujet spécifique. Bien que fonctionnelle, son esthétique reste un point d'amélioration identifié. Nous avons également dû implémenter un système d'envoi d'emails transactionnels pour les confirmations de réservation, ce qui a nécessité une gestion fine des files d'attente et des erreurs."
            },
            {
                type: 'text',
                title: "Bilan",
                content: "Ce projet a été une expérience formatrice tant sur le plan technique (approfondissement Node.js/Postgres) que sur la gestion de projet en équipe. Il m'a permis de comprendre l'importance d'une API bien documentée et les défis de l'intégration de services tiers dans une application monolithique."
            }
        ]
    }
];
