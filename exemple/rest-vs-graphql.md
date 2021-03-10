# Oblog - REST vs GraphQL

## REST

GET /posts -> récupère tous les posts -> page d'accueil
GET /posts/17 -> récupère un post d'id 17 -> lecture d'un article
GET /posts/category/8 -> récupère les posts d'une catégorie d'id 8 -> quand on clique sur la catégorie de l'article
GET /categories -> liste les catégories -> lien dans le header

## RESTful

GET /posts -> récupère tous les posts -> page d'accueil
GET /posts/17 -> récupère un post d'id 17 -> lecture d'un article
GET /posts/category/8 -> récupère les posts d'une catégorie d'id 8 -> quand on clique sur la catégorie de l'article
GET /categories -> liste les catégories -> lien dans le header
GET /categories/8 -> récupère les infos de la catégorie 8 -> pour l'affichage complet d'un article

## GraphQL
```
{
    posts
}

{
    post(id: 17)
}

{
    category(id: 8) {
        posts
    }
}

{
    categories
}
```