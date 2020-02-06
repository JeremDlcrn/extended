define({ "api": [
  {
    "type": "delete",
    "url": "/delete/:id",
    "title": "Delete a product",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Product id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Produit supprimé\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/product.js",
    "groupTitle": "Product",
    "name": "DeleteDeleteId"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "Return all products",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>All products</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"jejfljef464fe464effe\",\n  \"brand\": [\"Super U\"],\n  \"categories\": [\"Epicerie\"],\n  \"packaging\": [\"Boîte en verre\"],\n  \"bin\": [\"verre\"],\n  \"name\": \"Echalotte\",\n  \"description\": \"Echalotte en poudre\",\n  \"img\": \"http://google.com\",\n  \"barcode\": \"54346434664223\",\n  \"creation_date\": \"2020-02-06\"\n  },\n  {\n      \"_id\": \"jejfljef464fe464effe\",\n      \"brand\": [\"Super U\"],\n      \"categories\": [\"Epicerie\"],\n      \"packaging\": [\"Boîte en verre\"],\n      \"bin\": [\"verre\"],\n      \"name\": \"Echalotte\",\n      \"description\": \"Echalotte en poudre\",\n      \"img\": \"http://google.com\",\n      \"barcode\": \"54346434664223\",\n      \"creation_date\": \"2020-02-06\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/product.js",
    "groupTitle": "Product",
    "name": "GetAll"
  },
  {
    "type": "get",
    "url": "/:barcode",
    "title": "Return a product",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "barcode",
            "description": "<p>Product barcode</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>One product</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"jejfljef464fe464effe\",\n    \"brand\": [\"Super U\"],\n    \"categories\": [\"Epicerie\"],\n    \"packaging\": [\"Boîte en verre\"],\n    \"bin\": [\"verre\"],\n    \"name\": \"Echalotte\",\n    \"description\": \"Echalotte en poudre\",\n    \"img\": \"http://google.com\",\n    \"barcode\": \"54346434664223\",\n    \"creation_date\": \"2020-02-06\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/product.js",
    "groupTitle": "Product",
    "name": "GetBarcode"
  },
  {
    "type": "post",
    "url": "/add",
    "title": "Add a product",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Produit enregistré et ajouté dans l'historique\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/product.js",
    "groupTitle": "Product",
    "name": "PostAdd"
  },
  {
    "type": "put",
    "url": "/edit/:barcode",
    "title": "Edit a product",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "barcode",
            "description": "<p>Product barcode</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n   \"message\": \"Produit mis à jour\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/product.js",
    "groupTitle": "Product",
    "name": "PutEditBarcode"
  },
  {
    "type": "delete",
    "url": "/:id",
    "title": "Delete information of user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Utilisateur supprimé\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/user.js",
    "groupTitle": "User",
    "name": "DeleteId"
  },
  {
    "type": "get",
    "url": "/add-product/history/:id",
    "title": "Add a product scanned in history of user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Produit scanné ajouté à l'historique\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/user.js",
    "groupTitle": "User",
    "name": "GetAddProductHistoryId"
  },
  {
    "type": "get",
    "url": "/all",
    "title": "Return all users",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>All users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"roles\": [\"admin\"],\n  \"history\": [],\n  \"fullname\": \"Arthur Geay\",\n  \"mail\": \"arthur.geay@ynov.com\",\n  \"password\": \"jlejlfjeljefealjal\",\n  \"timezone\": \"UTC +1\",\n  \"registration_date\": \"2019-01-01\",\n  \"number_scan\": 0\n},\n{\n  \"roles\": [\"admin\"],\n  \"history\": [],\n  \"fullname\": \"Arthur Geay\",\n  \"mail\": \"arthur.geay@ynov.com\",\n  \"password\": \"jlejlfjeljefealjal\",\n  \"timezone\": \"UTC +1\",\n  \"registration_date\": \"2019-01-01\",\n  \"number_scan\": 0\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/user.js",
    "groupTitle": "User",
    "name": "GetAll"
  },
  {
    "type": "get",
    "url": "/history/:id",
    "title": "Return history of user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>History of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"64e464ee646e4\",\n  \"history\": [{\n      \"product\": \"efojef54fe55f45ef\",\n      \"date_scan\": \"2020-02-06\",\n      \"owner\": true\n  }],\n  \"productInfo\": [{\n      \"_id\": \"jejfljef464fe464effe\",\n      \"brand\": [\"Super U\"],\n      \"categories\": [\"Epicerie\"],\n      \"packaging\": [\"Boîte en verre\"],\n      \"bin\": [\"verre\"],\n      \"name\": \"Echalotte\",\n      \"description\": \"Echalotte en poudre\",\n      \"img\": \"http://google.com\",\n      \"barcode\": \"54346434664223\",\n      \"creation_date\": \"2020-02-06\"\n  }]\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/user.js",
    "groupTitle": "User",
    "name": "GetHistoryId"
  },
  {
    "type": "get",
    "url": "/:id",
    "title": "Return information of user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>User information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"roles\": [\"admin\"],\n  \"history\": [],\n  \"fullname\": \"Arthur Geay\",\n  \"mail\": \"arthur.geay@ynov.com\",\n  \"password\": \"jlejlfjeljefealjal\",\n  \"timezone\": \"UTC +1\",\n  \"registration_date\": \"2019-01-01\",\n  \"number_scan\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/user.js",
    "groupTitle": "User",
    "name": "GetId"
  },
  {
    "type": "get",
    "url": "/logout",
    "title": "User logout",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "message",
            "description": "<p>User is logged out</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Utilisateur déconnecté\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/user.js",
    "groupTitle": "User",
    "name": "GetLogout"
  },
  {
    "type": "get",
    "url": "/stat-history/:id",
    "title": "Return stats and last product scanned for user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Stats and history of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"64e464ee646e4\",\n  \"number_scan\": 1,\n  \"history\": [{\n      \"product\": \"efojef54fe55f45ef\",\n      \"date_scan\": \"2020-02-06\",\n      \"owner\": true\n  }],\n  \"productInfo\": [{\n      \"_id\": \"jejfljef464fe464effe\",\n      \"brand\": [\"Super U\"],\n      \"categories\": [\"Epicerie\"],\n      \"packaging\": [\"Boîte en verre\"],\n      \"bin\": [\"verre\"],\n      \"name\": \"Echalotte\",\n      \"description\": \"Echalotte en poudre\",\n      \"img\": \"http://google.com\",\n      \"barcode\": \"54346434664223\",\n      \"creation_date\": \"2020-02-06\"\n  }]\n},\n{\n  \"total_today\": 1\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/user.js",
    "groupTitle": "User",
    "name": "GetStatHistoryId"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "User login",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>User logged information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Utilisateur authentifié\",\n  \"user\": {\n      \"userId\": \"2e43fef4e34e34e\",\n      \"role\": [\"admin\"]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/user.js",
    "groupTitle": "User",
    "name": "PostLogin"
  },
  {
    "type": "put",
    "url": "/:id",
    "title": "Edit information of user",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Informations du profil mis à jour\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./backend/controllers/user.js",
    "groupTitle": "User",
    "name": "PutId"
  }
] });
