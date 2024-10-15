# Pokedex

Pokedex is a simple web application built to display a list of Pokémon along with their details. The project utilizes HTML, CSS, and JavaScript to provide a user-friendly interface for browsing Pokémon, viewing their stats, and exploring different Pokémon species. This project is designed as a lightweight front-end app without any backend.

## Features

- **List of Pokémon**: Browse a list of Pokémon with their names,number and images.
- **Pokémon Details**: View detailed information for each Pokémon, including stats, types, and abilities.
- **Responsive Design**: The layout is fully responsive and works well across different screen sizes.
- **Search Functionality**: Easily search for Pokémon by name.

## Tech Stack

- **HTML5**: Structure and layout of the web pages.
- **CSS3**: Styling for a responsive and visually appealing user interface.
- **JavaScript**: For handling interactivity, fetching data from the Pokémon API, and dynamic content rendering.
- **PokéAPI**: Third-party API used to fetch Pokémon data.

## Prerequisites

Before running the project, ensure you have a modern web browser installed. No additional software is required.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Asyabani/Pokedex.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Pokedex
    ```

3. Open the `index.html` file in your browser:
    ```bash
    open index.html
    ```

Alternatively, you can use a local server such as [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for a better development experience.

## Directory Structure

```plaintext
Pokedex/
│
├── assets/                     # Static assets (images, css)
│   ├── css/                    # Stylesheets for the project
│   ├── img/                    # Images used in the project
├── js/                         # JavaScript files for handling data and interactivity
│   ├── api.js                  # Handles API requests to the Pokémon API
│   └── main.js                 # Main JavaScript file controlling the app's logic
├── index.html                  # Main entry point for the web application
├── detail.html                 # Dynamic Detail Item(pokemon)
└── README.md                   # Project documentation
```

## Usage

- Open `index.html` to view the list of Pokémon.
- Click on any Pokémon to view detailed information, including its stats, type, and abilities.
- Use the search bar to quickly find a specific Pokémon by name.

## API Reference

This project utilizes [PokéAPI](https://pokeapi.co/) to fetch Pokémon data. The following endpoints are used:

- `/pokemon`: Retrieves a list of Pokémon along with their basic details.
- `/pokemon/{id or name}`: Retrieves detailed information about a specific Pokémon by its ID or name.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Asyabani/Pokedex/blob/main/LICENSE) file for details.

Feel free to customize and expand the Pokedex application by adding more features, such as filtering by type, implementing pagination, or integrating more data points from the PokéAPI.
