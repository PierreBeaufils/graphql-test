# Requête 1
```
{
    product(id: 17) 
}
```
# Résultat 1
```
{
    "data": {
        "id": 17,
        "name": "radiateur",
        "weight": 14.0,
        "price": 217.55
    }
}
```
# Requête 2
```
{
    product(id: 17) {
        name
        price
    }
}
```
# Résultat 2
```
{
    "data": {
        "name": "radiateur",
        "price": 217.55
    }
}
```
# Requête 3
```
{
    products {
        id
        name
        category {
            label
        }
    }
}
```
# Résultat 3
```
{
    "data": [
        {
            "id": 17,
            "name": "radiateur",
            "category": {
                "label": "chauffage"
            }
        },
        {
            "id": 23,
            "name": "porte",
            "category": {
                "label": "osef"
            }
        }
    ]
}
```