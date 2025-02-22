<a id="readme-top"></a>

<br />
<div align="center">
  <h3 align="center">Comp@Tibility</h3>
  <p align="center">
    Build your own PC set-up!
    <br />
    <a href="https://comp-atibility-1.onrender.com/">View Demo</a>
    <br />
    You may need to wait up to one minute to wake the host up (render.com)
    <br />
    &middot;
    <a href="">Report Bug</a>
    &middot;
    <a href="">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
The application allows users to check the compatibility of PC components assembled within the app.
<br />
Additionally, they can monitor the estimated wattage of the parts combined together.
<br />
<br />
### Compatibility Requirements Implemented
<ol>
  <li>
    CPU & Motherboard
    <ul>
      <li>Sockets must be the same</li>
    </ul>
  </li>
  <li>
    Motherboard & Computer Case
    <ul>
      <li>Form Factor of the motherboard must be supported by Computer Case (EATX, ATX, Micro-ATX, Mini-ITX)</li>
    </ul>
  </li>
  <li>
    Motherboard & Memory
    <ul>
      <li>Memory capacity must not exceed the maximum memory supported by the motherboard</li>
      <li>Memory number of sticks must be smaller than the number of motherboard memory slots</li>
      <li>Memory type must be supported by motherboard (DDR3, DDR4, DDR5)</li>
    </ul>
  </li>
  <li>
    CPU Cooler & Computer Case
    <ul>
      <li>The CPU cooler’s dimensions must fit within the computer case</li>
    </ul>
  </li>
  <li>
    GPU & Power Supply
    <ul>
      <li>The power supply must provide more wattage than the GPU's recommended requirement</li>
    </ul>
  </li>
  <li>
    GPU & Computer Case
    <ul>
      <li>GPU's size must fit within the computer case</li>
    </ul>
  </li>
  <li>
    GPU & Motherboard
    <ul>
      <li>GPU and motherboard interface type must be the same</li>
      <li>GPU interface version must be supported by motherboard</li>
    </ul>
  </li>
  <li>
    Storage & Motherboard
    <ul>
      <li>Storage type must be supported by motherboard</li>
    </ul>
  </li>
</ol>
<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With
<a href="https://nodejs.org/en" alt="node.js website">
  <img src="https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png" height="40"/>
</a>
<a href="https://getbootstrap.com/" alt="bootstrap website">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" height="40"/>
</a>
<a href="http://mysql.com/" alt="mysql website">
  <img src="https://www.pngfind.com/pngs/m/74-744138_mysql-logo-png-mysql-transparent-png.png" height="40"/>
</a>
<a href="https://ejs.co/" alt="ejs website">
  <img src="https://img.icons8.com/color/512/ejs.png" height="40"/>
</a>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started
### Prerequisites
1. Node.js    
  To check if Node.js is already installed on your system, run:
  ```
  node -v  
  ```
  If you need to install or manage Node.js versions more conveniently, it’s highly recommended to use NVM (Node Version Manager).
  - **NVM for Windows:**
  [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)
  
  - **NVM for Mac/Linux:**
  [https://github.com/nvm-sh/nvm.git](https://github.com/nvm-sh/nvm.git)

  Once NVM is installed, you can easily install and use the desired Node.js version. For example:
  ```
  nvm install 22.12.0
  nvm use 22.12.0
  ```
  If you prefer not to use NVM, you can install Node.js manually from [https://nodejs.org](https://nodejs.org).
  <br />
2. MySql  
  You need to install MySql engine on your machine from:
  - [https://www.mysql.com/](https://www.mysql.com/)
### Installation
1. Clone the repository:  
   Run the following commands to clone the repository and navigate to the project directory:
   ```
   git clone https://github.com/Falanger-debug/Comp-Atibility
   cd Comp-Atibility
   ```
2. Get the initial database:
   <ul>
     <li>Download the file called *DatabaseDumpWithStructureAndData* from the data folder</li>
     <li>Open MySqlWorkbench and under *Server* select *Data Import*</li>
     <li>Select *Import from Self-Contained File* and define the path to the previously downloaded file.</li>
     <li>Select *Default Schema to be Imported To* in the center and *Dump Structure and Data* at the bottom, and start your import.</li>
   </ul>
3. Create .env file in Comp-Atibility folder with variables such as:
   <ul>
     <li>PORT</li>
     <li>MYSQL_PORT</li>
     <li>MYSQL_HOST</li>
     <li>MYSQL_USER</li>
     <li>MYSQL_PASSWORD</li>
     <li>MYSQL_DATABASE</li>
   </ul>
4. Install dependencies:  
Install all the required packages by running:
  ```
  npm install
  ```
5. Run the application:  
  Start the application using the following command:
  ```
  npm run dev
  ```
  Once the application is running, open your browser and visit:  
  http://localhost:8000 (if you haven't defined different PORT in .env file)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing
Any contributions you make are **greatly appreciated**. 
<br />
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!  
1. Fork the Project
2. Create your Feature Branch
  ```
  git checkout -b feature/AmazingFeature
  ```
3. Commit your Changes
   ```
   git commit -m "Add some AmazingFeature"
   ```
4. Push to the Branch
  ```
  git push origin feature/AmazingFeature
  ```
5. Open a Pull Request
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License
Distributed under the MIT License.
<p align="right">(<a href="#readme-top">back to top</a>)</p>
