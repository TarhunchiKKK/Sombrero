
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/categories": {
        "post": {
          "operationId": "CategoriesController_create",
          "summary": "Create new category",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateCategoryDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Category"
                  }
                }
              }
            }
          },
          "tags": [
            "Categories"
          ]
        },
        "get": {
          "operationId": "CategoriesController_findAll",
          "summary": "Get all categories",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Category"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Categories"
          ]
        }
      },
      "/categories/{id}": {
        "get": {
          "operationId": "CategoriesController_findOne",
          "summary": "Get one category by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Category id to search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Category"
                  }
                }
              }
            }
          },
          "tags": [
            "Categories"
          ]
        },
        "patch": {
          "operationId": "CategoriesController_update",
          "summary": "Update one category by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Category id to search",
              "schema": {
                "type": "number"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateCategoryDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Categories"
          ]
        },
        "delete": {
          "operationId": "CategoriesController_remove",
          "summary": "Delete one category by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Category id to search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Categories"
          ]
        }
      },
      "/users": {
        "post": {
          "operationId": "UsersController_create",
          "summary": "Create user",
          "parameters": [],
          "requestBody": {
            "required": true,
            "description": "Data for user creation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUserDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          },
          "tags": [
            "Users"
          ]
        },
        "get": {
          "operationId": "UsersController_findAll",
          "summary": "Get all users",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Users"
          ]
        }
      },
      "/users/{id}": {
        "get": {
          "operationId": "UsersController_findOne",
          "summary": "Get one user by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "User id to search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          },
          "tags": [
            "Users"
          ]
        },
        "patch": {
          "operationId": "UsersController_update",
          "summary": "Update one user by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "User id to search",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "image",
              "required": true,
              "in": "path",
              "description": "User avatar to update",
              "schema": {}
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateUserDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Users"
          ]
        },
        "delete": {
          "operationId": "UsersController_remove",
          "summary": "Delete one user by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "User id for search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Users"
          ]
        }
      },
      "/files/account/{filename}": {
        "get": {
          "operationId": "FilesController_downloadAccountImage",
          "summary": "Get user avatar image",
          "parameters": [
            {
              "name": "filename",
              "required": true,
              "in": "path",
              "description": "User avatar filename",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StreamableFile"
                  }
                }
              }
            }
          },
          "tags": [
            "Static files"
          ]
        }
      },
      "/files/advertisement/{filename}": {
        "get": {
          "operationId": "FilesController_downloadAdvertisementImage",
          "summary": "Get advertisement image",
          "parameters": [
            {
              "name": "filename",
              "required": true,
              "in": "path",
              "description": "Advertisement image filename",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StreamableFile"
                  }
                }
              }
            }
          },
          "tags": [
            "Static files"
          ]
        }
      },
      "/files/contact/{filename}": {
        "get": {
          "operationId": "FilesController_downloadContactImage",
          "summary": "Get contact person avatar",
          "parameters": [
            {
              "name": "filename",
              "required": true,
              "in": "path",
              "description": "Contact person avatar filename",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StreamableFile"
                  }
                }
              }
            }
          },
          "tags": [
            "Static files"
          ]
        }
      },
      "/files/home/count": {
        "get": {
          "operationId": "FilesController_getHomeFilesCount",
          "summary": "Get home images count",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "number"
                  }
                }
              }
            }
          },
          "tags": [
            "Static files"
          ]
        }
      },
      "/files/home/{filename}": {
        "get": {
          "operationId": "FilesController_downloadHomeImage",
          "summary": "Get slider image",
          "parameters": [
            {
              "name": "filename",
              "required": true,
              "in": "path",
              "description": "Slider image filename",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/StreamableFile"
                  }
                }
              }
            }
          },
          "tags": [
            "Static files"
          ]
        }
      },
      "/advertisements": {
        "post": {
          "operationId": "AdvertisementsController_create",
          "summary": "Create advertisemnt",
          "parameters": [
            {
              "name": "image",
              "required": true,
              "in": "path",
              "description": "Advertisement image",
              "schema": {}
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateAdvertisementDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Advertisement"
                  }
                }
              }
            }
          },
          "tags": [
            "Advertisements"
          ]
        },
        "get": {
          "operationId": "AdvertisementsController_findAll",
          "summary": "Find all advertisements",
          "parameters": [
            {
              "name": "page",
              "required": true,
              "in": "path",
              "description": "Page for pagination",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "limit",
              "required": true,
              "in": "path",
              "description": "One page advertisements count",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "category",
              "required": true,
              "in": "query",
              "schema": {
                "type": "number"
              }
            },
            {
              "name": "categoryId",
              "required": true,
              "in": "path",
              "description": "Category for search",
              "schema": {}
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Advertisement"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Advertisements"
          ]
        }
      },
      "/advertisements/{id}": {
        "get": {
          "operationId": "AdvertisementsController_findOne",
          "summary": "Get one advertisement by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Advertisement id for search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Advertisement"
                  }
                }
              }
            }
          },
          "tags": [
            "Advertisements"
          ]
        },
        "patch": {
          "operationId": "AdvertisementsController_update",
          "summary": "Update one advertisement by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Advertisement id for search",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "image",
              "required": true,
              "in": "path",
              "description": "Advertisement image to update",
              "schema": {}
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateAdvertisementDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Advertisements"
          ]
        },
        "delete": {
          "operationId": "AdvertisementsController_remove",
          "summary": "Remove one advertisement by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Advertisement id for search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Advertisements"
          ]
        }
      },
      "/advertisements/like": {
        "post": {
          "operationId": "AdvertisementsController_likeAdvertisement",
          "summary": "Like one advertisement",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LikeAdvertisementDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Advertisements"
          ]
        }
      },
      "/advertisements/buy": {
        "post": {
          "operationId": "AdvertisementsController_buyAdvertisement",
          "summary": "Buy one advertisement",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/BuyAdvertisementDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Advertisements"
          ]
        }
      },
      "/advertisements/category": {
        "post": {
          "operationId": "AdvertisementsController_changeAdvertisementCategory",
          "summary": "Change advertisement category",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ChangeAdvertisementCategoryDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Advertisement"
                  }
                }
              }
            }
          },
          "tags": [
            "Advertisements"
          ]
        }
      },
      "/auth/login": {
        "post": {
          "operationId": "AuthController_login",
          "summary": "Login",
          "parameters": [],
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Authorization"
          ]
        }
      },
      "/auth/profile": {
        "get": {
          "operationId": "AuthController_getProfile",
          "parameters": [],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Authorization"
          ]
        }
      },
      "/auth/registration": {
        "post": {
          "operationId": "AuthController_registration",
          "summary": "Start user's registration (sending verification code on email)",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUserDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Authorization"
          ]
        }
      },
      "/auth/confirm": {
        "post": {
          "operationId": "AuthController_confirmVerificationCode",
          "summary": "End user's registration (email code verification)",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConfirmVerificationDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Authorization"
          ]
        }
      },
      "/contacts": {
        "post": {
          "operationId": "ContactsController_create",
          "summary": "Creates a new contact. Only admin can create new contact",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateContactDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Contact"
                  }
                }
              }
            }
          },
          "tags": [
            "Contacts"
          ]
        },
        "get": {
          "operationId": "ContactsController_findAll",
          "summary": "Find all contacts",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Contact"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Contacts"
          ]
        }
      },
      "/contacts/{id}": {
        "get": {
          "operationId": "ContactsController_findOne",
          "summary": "Find a contact by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Contact"
                  }
                }
              }
            }
          },
          "tags": [
            "Contacts"
          ]
        },
        "patch": {
          "operationId": "ContactsController_update",
          "summary": "Update a contact by id. Only admin can do this",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Contact id for update",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateContactDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Contacts"
          ]
        },
        "delete": {
          "operationId": "ContactsController_remove",
          "summary": "Delete one contact by id. Only admin can do this",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Conact id for remove",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Contacts"
          ]
        }
      },
      "/faqs": {
        "post": {
          "operationId": "FaqsController_create",
          "summary": "Creates a new faq",
          "parameters": [],
          "requestBody": {
            "required": true,
            "description": "Data for faq creation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateFaqDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Faq"
                  }
                }
              }
            }
          },
          "tags": [
            "Faqs"
          ]
        },
        "get": {
          "operationId": "FaqsController_findAll",
          "summary": "Get all faqs",
          "parameters": [],
          "responses": {
            "default": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Faq"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Faqs"
          ]
        }
      },
      "/faqs/{id}": {
        "get": {
          "operationId": "FaqsController_findOne",
          "summary": "Get one faq by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Faq id to search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "default": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Faq"
                  }
                }
              }
            }
          },
          "tags": [
            "Faqs"
          ]
        },
        "patch": {
          "operationId": "FaqsController_update",
          "summary": "Update one faq by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Faq id to search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateFaqDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Faqs"
          ]
        },
        "delete": {
          "operationId": "FaqsController_remove",
          "summary": "Delete one faq by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Faq id to search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Faqs"
          ]
        }
      },
      "/help": {
        "get": {
          "operationId": "HelpController_findAll",
          "summary": "Get all help questions categories with their questions",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/QuestionsCategory"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Help"
          ]
        }
      },
      "/help/questions": {
        "get": {
          "operationId": "HelpController_findAllQuestions",
          "summary": "Get all help questions",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Question"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Help"
          ]
        },
        "post": {
          "operationId": "HelpController_createQuestion",
          "summary": "Create new help question",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateQuestionDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Question"
                  }
                }
              }
            }
          },
          "tags": [
            "Help"
          ]
        }
      },
      "/help/categories": {
        "get": {
          "operationId": "HelpController_findAllQuestionsCategories",
          "summary": "Get all help questions categories",
          "parameters": [],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/QuestionsCategory"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Help"
          ]
        },
        "post": {
          "operationId": "HelpController_createQuestionsCategory",
          "summary": "Create new help questions category",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateQuestionsCategoryDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/QuestionsCategory"
                  }
                }
              }
            }
          },
          "tags": [
            "Help"
          ]
        }
      },
      "/help/questions/{id}": {
        "get": {
          "operationId": "HelpController_findOneQuestion",
          "summary": "Get one help question by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Help question id to search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Question"
                  }
                }
              }
            }
          },
          "tags": [
            "Help"
          ]
        },
        "patch": {
          "operationId": "HelpController_updateQuestion",
          "summary": "Update help question",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Help question id to search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateQuestionDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Help"
          ]
        },
        "delete": {
          "operationId": "HelpController_removeQuestion",
          "summary": "Remove help question by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Help question id to search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Help"
          ]
        }
      },
      "/help/categories/{id}": {
        "get": {
          "operationId": "HelpController_findOneQuestionsCategory",
          "summary": "Get one help questions category by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Help questions category id to search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/QuestionsCategory"
                  }
                }
              }
            }
          },
          "tags": [
            "Help"
          ]
        },
        "patch": {
          "operationId": "HelpController_updateQuestionsCategory",
          "summary": "Update help questions category",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Help question category id to search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateQuestionsCategoryDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Help"
          ]
        },
        "delete": {
          "operationId": "HelpController_removeQuestionsCategory",
          "summary": "Remove help questions category by id",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "description": "Help questions category id to search",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Help"
          ]
        }
      },
      "/help/questions/add-to-category": {
        "patch": {
          "operationId": "HelpController_addQuestionToCategory",
          "summary": "Add help question to questions category",
          "parameters": [],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AddQuestionToCategryDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/QuestionsCategory"
                  }
                }
              }
            }
          },
          "tags": [
            "Help"
          ]
        }
      }
    },
    "info": {
      "title": "Sombrero Marketplace",
      "description": "Rest API documentation",
      "version": "1.0.0",
      "contact": {}
    },
    "tags": [],
    "servers": [],
    "components": {
      "schemas": {
        "CreateCategoryDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "example": "Книги",
              "description": "Category title"
            }
          },
          "required": [
            "title"
          ]
        },
        "Category": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": "1",
              "description": "Category id"
            },
            "title": {
              "type": "string",
              "example": "Книги",
              "description": "Category title"
            },
            "advertisements": {
              "description": "This category's advertisements",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Advertisement"
              }
            }
          },
          "required": [
            "id",
            "title",
            "advertisements"
          ]
        },
        "Address": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": "1",
              "description": "User address id"
            },
            "country": {
              "type": "string",
              "enum": [
                "Belarus",
                "Russia",
                "Poland",
                "Kazakhstan",
                "France"
              ],
              "description": "User country"
            },
            "city": {
              "type": "string",
              "example": "Moscow",
              "description": "User city"
            },
            "street": {
              "type": "string",
              "example": "Ponomarenko",
              "description": "User street"
            },
            "houseNumber": {
              "type": "number",
              "example": "45",
              "description": "User house number"
            },
            "flatNumber": {
              "type": "number",
              "example": "12",
              "description": "User flat number"
            }
          },
          "required": [
            "id",
            "country",
            "city",
            "street",
            "houseNumber",
            "flatNumber"
          ]
        },
        "User": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": "1",
              "description": "User id"
            },
            "name": {
              "type": "string",
              "example": "Victor",
              "description": "User name"
            },
            "surname": {
              "type": "string",
              "example": "Barinov",
              "description": "User surname"
            },
            "phoneNumber": {
              "type": "string",
              "example": "+375298672635",
              "description": "User phone number"
            },
            "email": {
              "type": "string",
              "example": "victorbarinov@gmail.com",
              "description": "User email"
            },
            "password": {
              "type": "string",
              "example": "123456789",
              "description": "User password"
            },
            "photo": {
              "type": "string",
              "example": "u3TMx6J0p7QxrI33o8vPI9HEy5a6TSJs.jpg",
              "description": "User avatar"
            },
            "registrationDate": {
              "format": "date-time",
              "type": "string",
              "example": "",
              "description": "User id"
            },
            "address": {
              "description": "User address",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Address"
                }
              ]
            },
            "salesList": {
              "description": "User advertisements",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Advertisement"
              }
            },
            "wishList": {
              "description": "Advertisements user liked",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Advertisement"
              }
            },
            "purchasesList": {
              "description": "Advertisements user bought",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Advertisement"
              }
            }
          },
          "required": [
            "id",
            "name",
            "surname",
            "phoneNumber",
            "email",
            "password",
            "photo",
            "registrationDate",
            "address",
            "salesList",
            "wishList",
            "purchasesList"
          ]
        },
        "Advertisement": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": "1",
              "description": "Advertisement id"
            },
            "title": {
              "type": "string",
              "example": "Велосипед",
              "description": "Advertisement title"
            },
            "description": {
              "type": "string",
              "example": "Большая строка",
              "description": "Advertisement description"
            },
            "price": {
              "type": "number",
              "example": "200",
              "description": "Advertisement price"
            },
            "saleStatus": {
              "type": "boolean",
              "example": "false",
              "description": "Was advertisement bought by somebody"
            },
            "photo": {
              "type": "string",
              "example": "u3TMx6J0p7QxrI33o8vPI9HEy5a6TSJs.jpg",
              "description": "Advertisement photo"
            },
            "category": {
              "description": "Advertisement category",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Category"
                }
              ]
            },
            "vendor": {
              "description": "Product vendor",
              "allOf": [
                {
                  "$ref": "#/components/schemas/User"
                }
              ]
            },
            "wishedUsers": {
              "description": "Users liked this advertisement",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/User"
              }
            },
            "buyer": {
              "description": "User who bought this product",
              "allOf": [
                {
                  "$ref": "#/components/schemas/User"
                }
              ]
            }
          },
          "required": [
            "id",
            "title",
            "description",
            "price",
            "saleStatus",
            "photo",
            "category",
            "vendor",
            "wishedUsers",
            "buyer"
          ]
        },
        "UpdateCategoryDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "example": "Книги",
              "description": "Category title"
            }
          },
          "required": [
            "title"
          ]
        },
        "CreateAddressDto": {
          "type": "object",
          "properties": {
            "country": {
              "type": "string",
              "description": "User country",
              "enum": [
                "Belarus",
                "Russia",
                "Poland",
                "Kazakhstan",
                "France"
              ]
            },
            "city": {
              "type": "string",
              "example": "Moscow",
              "description": "User city"
            },
            "street": {
              "type": "string",
              "example": "Ponomarenko",
              "description": "User street"
            },
            "houseNumber": {
              "type": "number",
              "example": "45",
              "description": "User house number"
            },
            "flatNumber": {
              "type": "number",
              "example": "12",
              "description": "User flat number"
            }
          },
          "required": [
            "country",
            "city",
            "street",
            "houseNumber",
            "flatNumber"
          ]
        },
        "CreateUserDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "example": "Victor",
              "description": "User name"
            },
            "surname": {
              "type": "string",
              "example": "Barinov",
              "description": "User surname"
            },
            "phoneNumber": {
              "type": "string",
              "example": "+375298672635",
              "description": "User phone number"
            },
            "email": {
              "type": "string",
              "example": "victorbarinov@gmail.com",
              "description": "User email"
            },
            "password": {
              "type": "string",
              "example": "123456789",
              "description": "User password"
            },
            "address": {
              "description": "User address",
              "allOf": [
                {
                  "$ref": "#/components/schemas/CreateAddressDto"
                }
              ]
            }
          },
          "required": [
            "name",
            "surname",
            "phoneNumber",
            "email",
            "password",
            "address"
          ]
        },
        "UpdateUserDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "example": "Victor",
              "description": "User name"
            },
            "surname": {
              "type": "string",
              "example": "Barinov",
              "description": "User surname"
            },
            "phoneNumber": {
              "type": "string",
              "example": "+375298672635",
              "description": "User phone number"
            },
            "email": {
              "type": "string",
              "example": "victorbarinov@gmail.com",
              "description": "User email"
            },
            "password": {
              "type": "string",
              "example": "123456789",
              "description": "User password"
            },
            "address": {
              "description": "User address",
              "allOf": [
                {
                  "$ref": "#/components/schemas/CreateAddressDto"
                }
              ]
            }
          },
          "required": [
            "name",
            "surname",
            "phoneNumber",
            "email",
            "password",
            "address"
          ]
        },
        "StreamableFile": {
          "type": "object",
          "properties": {}
        },
        "CreateAdvertisementDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "example": "Велосипед",
              "description": "Advertisement title"
            },
            "description": {
              "type": "string",
              "example": " На этом велосипеде вы...",
              "description": "Advertisement description"
            },
            "price": {
              "type": "number",
              "example": "200",
              "description": "Advertisement price"
            },
            "saleStatus": {
              "type": "boolean",
              "example": "false",
              "description": "Is advertisemen bought by somebody"
            },
            "category": {
              "description": "Advertisement category",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Category"
                }
              ]
            },
            "vendor": {
              "description": "Product vendor",
              "allOf": [
                {
                  "$ref": "#/components/schemas/User"
                }
              ]
            },
            "buyer": {
              "description": "User who bought this product",
              "allOf": [
                {
                  "$ref": "#/components/schemas/User"
                }
              ]
            }
          },
          "required": [
            "title",
            "description",
            "price",
            "saleStatus",
            "category",
            "vendor",
            "buyer"
          ]
        },
        "UpdateAdvertisementDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "example": "Велосипед",
              "description": "Advertisement title"
            },
            "description": {
              "type": "string",
              "example": " На этом велосипеде вы...",
              "description": "Advertisement description"
            },
            "price": {
              "type": "number",
              "example": "200",
              "description": "Advertisement price"
            },
            "category": {
              "description": "Advertisement category",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Category"
                }
              ]
            }
          },
          "required": [
            "title",
            "description",
            "price",
            "category"
          ]
        },
        "LikeAdvertisementDto": {
          "type": "object",
          "properties": {
            "advertisement": {
              "description": "Liked advertisement (need to extract advertisement id)",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Advertisement"
                }
              ]
            },
            "user": {
              "description": "User who like advertisement (need to extract user id)",
              "allOf": [
                {
                  "$ref": "#/components/schemas/User"
                }
              ]
            }
          },
          "required": [
            "advertisement",
            "user"
          ]
        },
        "BuyAdvertisementDto": {
          "type": "object",
          "properties": {
            "advertisement": {
              "description": "Purchased product (need to extract advertisement id)",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Advertisement"
                }
              ]
            },
            "user": {
              "description": "Buyer (need to extract user id)",
              "allOf": [
                {
                  "$ref": "#/components/schemas/User"
                }
              ]
            }
          },
          "required": [
            "advertisement",
            "user"
          ]
        },
        "ChangeAdvertisementCategoryDto": {
          "type": "object",
          "properties": {
            "advertisement": {
              "description": "Advertisement (need to extract advertisement id)",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Advertisement"
                }
              ]
            },
            "category": {
              "description": "Category (need to extract category id)",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Category"
                }
              ]
            }
          },
          "required": [
            "advertisement",
            "category"
          ]
        },
        "ConfirmVerificationDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "example": "victorbarinov@gmail.com",
              "description": "User email address"
            },
            "verificationCode": {
              "type": "string",
              "example": "fLm2TqZN",
              "description": "This code was sended to user's email"
            }
          },
          "required": [
            "email",
            "verificationCode"
          ]
        },
        "CreateContactDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "example": "Дмитрий",
              "description": "Perosn name"
            },
            "post": {
              "type": "string",
              "example": "Менеджер",
              "description": "Person post"
            },
            "about": {
              "type": "string",
              "example": "Открыт к разговору 24 часа в сутки",
              "description": "Some words about person"
            }
          },
          "required": [
            "name",
            "post",
            "about"
          ]
        },
        "Contact": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": "1",
              "description": "Person id"
            },
            "name": {
              "type": "string",
              "example": "Дмитрий",
              "description": "Person name"
            },
            "post": {
              "type": "string",
              "example": "Менеджер",
              "description": "Person post"
            },
            "photo": {
              "type": "string",
              "example": "EW98hFC7RZ3OehcEYHCEd3XuM8q5QKbt.png",
              "description": "Person image"
            },
            "about": {
              "type": "string",
              "example": "Открыт к разговору 24 часа в сутки",
              "description": "Some words about person"
            }
          },
          "required": [
            "id",
            "name",
            "post",
            "photo",
            "about"
          ]
        },
        "UpdateContactDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "example": "Дмитрий",
              "description": "Person name"
            },
            "post": {
              "type": "string",
              "example": "Менеджер",
              "description": "Person post"
            },
            "about": {
              "type": "string",
              "example": "Открыт к разговору 24 часа в сутки",
              "description": "Some words about person"
            }
          },
          "required": [
            "name",
            "post",
            "about"
          ]
        },
        "CreateFaqDto": {
          "type": "object",
          "properties": {
            "question": {
              "type": "string",
              "example": "Как мне создать предложение?",
              "description": "Question"
            },
            "answer": {
              "type": "string",
              "example": "Чтобы создать предложение вам необходимо...",
              "description": "Answer"
            }
          },
          "required": [
            "question",
            "answer"
          ]
        },
        "Faq": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": "1",
              "description": "Faq id"
            },
            "question": {
              "type": "string",
              "example": "Как мне создать предложение?",
              "description": "Question"
            },
            "answer": {
              "type": "string",
              "example": "Чтобы создать предложение вам необходимо...",
              "description": "Answer"
            }
          },
          "required": [
            "id",
            "question",
            "answer"
          ]
        },
        "UpdateFaqDto": {
          "type": "object",
          "properties": {
            "question": {
              "type": "string",
              "example": "Как мне создать предложение?",
              "description": "Question"
            },
            "answer": {
              "type": "string",
              "example": "Чтобы создать предложение вам необходимо...",
              "description": "Answer"
            }
          },
          "required": [
            "question",
            "answer"
          ]
        },
        "QuestionsCategory": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": "1",
              "description": "Help questions category id"
            },
            "title": {
              "type": "string",
              "example": "Создание предложения",
              "description": "Help questions category title"
            },
            "questions": {
              "description": "Help questions from this category",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/Question"
              }
            }
          },
          "required": [
            "id",
            "title",
            "questions"
          ]
        },
        "Question": {
          "type": "object",
          "properties": {
            "id": {
              "type": "number",
              "example": "1",
              "description": "Help question id"
            },
            "title": {
              "type": "string",
              "example": "Как сделать ...",
              "description": "Help question title"
            },
            "answer": {
              "type": "string",
              "example": "Чтобы сделать это вам необходимо...",
              "description": "Answer on help question"
            },
            "categories": {
              "description": "Help question categories",
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/QuestionsCategory"
              }
            }
          },
          "required": [
            "id",
            "title",
            "answer",
            "categories"
          ]
        },
        "CreateQuestionDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "example": "Как сделать ...",
              "description": "Help question title"
            },
            "answer": {
              "type": "string",
              "example": "Чтобы сделать это вам необходимо...",
              "description": "Answer on help question"
            },
            "category": {
              "description": "Help question initial category",
              "allOf": [
                {
                  "$ref": "#/components/schemas/QuestionsCategory"
                }
              ]
            }
          },
          "required": [
            "title",
            "answer",
            "category"
          ]
        },
        "CreateQuestionsCategoryDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "example": "Создание предложения",
              "description": "Help questions category title"
            }
          },
          "required": [
            "title"
          ]
        },
        "AddQuestionToCategryDto": {
          "type": "object",
          "properties": {
            "question": {
              "description": "Help question (need to extract question id)",
              "allOf": [
                {
                  "$ref": "#/components/schemas/Question"
                }
              ]
            },
            "category": {
              "description": "Help questions category (need to extract questions category id)",
              "allOf": [
                {
                  "$ref": "#/components/schemas/QuestionsCategory"
                }
              ]
            }
          },
          "required": [
            "question",
            "category"
          ]
        },
        "UpdateQuestionDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "example": "Как сделать ...",
              "description": "Help question title"
            },
            "answer": {
              "type": "string",
              "example": "Чтобы сделать это вам необходимо...",
              "description": "Answer on help question"
            }
          },
          "required": [
            "title",
            "answer"
          ]
        },
        "UpdateQuestionsCategoryDto": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "example": "Создание предложения",
              "description": "Help questions category title"
            }
          },
          "required": [
            "title"
          ]
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
