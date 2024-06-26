# Sombrero

## Table of Contents
- [Sombrero](#sombrero)
  - [Table of Contents](#table-of-contents)
  - [About application](#about-application)
  - [Tech stack](#tech-stack)
  - [Project structure](#project-structure)
    - [Backend folder](#backend-folder)
    - [Frontend folder](#frontend-folder)
  - [Startup guide](#startup-guide)
  - [Functionality](#functionality)
    - [Home page](#home-page)
    - [Catalog](#catalog)
    - [Toggle color theme](#toggle-color-theme)
    - [Authorization](#authorization)
    - [Account page](#account-page)
    - [Product page](#product-page)
    - [Help pages](#help-pages)
      - [FAQs page](#faqs-page)
      - [Help page](#help-page)
    - [Contacts page](#contacts-page)




## About application

This application is a marketplace. Here you can buy products and put them up for sale. Analogues of the application are services such as <a href="https://www.avito.ru/">Avito</a> and <a href="https://www.kufar.by/l">Kufar</a>. The application layout adapts to any screen size.


## Tech stack

Backend:
* <a href="https://www.typescriptlang.org/">TypeScript</a>
* <a href="https://nestjs.com/">Nest JS</a>
* <a href="https://www.postgresql.org/">PostgreSQL</a>
* <a href="https://jwt.io/">JWT</a>
* <a href="https://www.nodemailer.com/">Nodemailer</a>
* <a href="https://redis.io/">Redis</a>
* <a href="https://swagger.io/">Swagger</a>

Frontend:
* <a href="https://www.typescriptlang.org/">TypeScript</a>
* <a href="https://react.dev/">React</a>
* <a href="https://redux.js.org/">Redux Toolkit</a>
* <a href="https://react-hook-form.com/">React Hook Form</a>
* <a href="https://reactrouter.com/en/main">React Router</a>


## Project structure

### Backend folder

See the backend Rest APi documentation <a href="https://tarhunchikkk.github.io/Sombrero/docs/API.html">here</a>.

The backend folder has the following structure:

<img src="./docs/readme/project/backend_folder.png" />

Nest JS framework is based on a modular architecture where the application is broken down into modules, controllers, services and middleware. In src folder you can see all modules, used in application. 

The **data** folder is necessary for storing product photos and user avatars. It contains files in **_default/** folder, which are used as default photos.

Еhe files in the root of the directory are configuration files for the application and Nest JS framework.

### Frontend folder

The frontend folder has the following structure:

<img src="./docs/readme/project/frontend_folder.png" />

The client application was created using the FSD (Feature Sliced Desigh) architecture. In the src folder you can see the following folders:
* **app** - folder with global project settings. This is where the Redux storage, React Router and TailwindCSS styles are configured;
* **pages** - folder containing all application pages;
* **entities** - folder containing software entities and business logic (server requests, data conversion and so on) associated with them;
* **widgets** - this folder contains independent visual components (slider, accordion, etc.);
* **features** - this folder contains functionality for various features of the application (in this application, such a feature is changing the color theme);
* **shared** - this folder contains all sorts of reusable software entities, such as components, helper functions, constants, etc.

Еhe files in the root of the directory are configuration files for the application and React TypeScript framework.

## Startup guide

To run the application, you need to define a file backend/.env with the following content:

<img src="./docs/readme/project/env.png" alt="Env file" />

Then in the backend and frontend folders you need to run this command to install the necessary packages:
```
npm install
```

Starting the server:
```
npm run start
```
or:
```
nest start
```

Starting the client:
```
npm run dev
```



## Functionality

### Home page

On the home page you will see this slider:

<img src="./docs/readme/pages/slider.png" alt="Home page" />



### Catalog

This page displays all products that are for sale:

<img src="./docs/readme/catalog/catalog.png" alt="Catalog" />

Here you can search by product name and category. This is what searching for products by category looks like:

<img src="./docs/readme/catalog/search_by_category.png" alt="Search" />



### Toggle color theme

The application has the ability to change the color theme. In the example of the product page, the dark theme looks like this:

<img src="./docs/readme/catalog/dark_theme.png" />



### Authorization

The application limits the capabilities of an unauthorized user. For example, if an unauthorized user tries to like a product, the following modal window will appear:

<img src="./docs/readme/account/auth_in_catalog.png" alt="Auth window" />

After registration, a letter with a confirmation code will be sent to the entered email. This verification code must be pasted into the following window:

<img src="./docs/readme/account/confirm_password.png" alt="Confirm" />

Messages are sent using the **Outlook** service.



### Account page

The user page looks like this:

<img src="./docs/readme/account/account.png" alt="Account" />

This page contains products that the user has liked, purchased and put up for sale.

User data editing page:

<img src="./docs/readme/account/edit_account.png" alt="Edit" />



### Product page

If you click on the product image, you will be taken to a page similar to this one:

<img src="./docs/readme/advertisements/advertisement_page1.png" alt="Product" />
<img src="./docs/readme/advertisements/advertisement_page2.png" alt="Product" />



### Help pages

#### FAQs page

The FAQ page looks like this:

<img src="./docs/readme/pages/faqs.png" alt="FAQs page" />

On this page you can see an accordion with answers to frequently asked questions. The accordion works as follows: only one question can be “opened” at a time.

#### Help page

The help page looks like this:

<img src="./docs/readme/pages/help.png" alt="Help page" />

This page contains questions grouped by category. Each question has a link to its answer. You can search by question (if you change the contents of the input field, the displayed links will be filtered).



### Contacts page

The contact page looks like this:

<img src="./docs/readme/pages/contacts.png" />
