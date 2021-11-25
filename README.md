# Demo application

This demo is created to showcase how to crawl a site.

## Description

This demo consists of a crawler backend written in C#/.net core 6.0 and a React Typescript/Javascript FrontEnd. The Crawler is utilizing an external Headless Chrome to crawl the sites. In this demo we use 0browser as our choice of headless Chrome.

## How to run

1. Clone/Pull the repository.
2. Run this command:
> **docker-compose up** 
4. Once applications are running you can access them by going to the URL associated to each service.

### React's url: 
> http://localhost:8080 

### Crawler's swagger url: 
> https://localhost:44326/swagger/index.html
> Please accept ssl warning and continue.

5. You can click on Crawl button to start crawling 0browser or alternatively you can type in your url to crawl.

## Screenshots

Ubuntu 20.04

![image](https://user-images.githubusercontent.com/65181880/141929297-0a0d5d3c-1270-4f92-941f-bc591e48d781.png)

Windows 11

![image](https://user-images.githubusercontent.com/65181880/141929442-20cd5039-1cdc-4d02-8617-8ab01275409d.png)
