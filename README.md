# Sales Tax

## Overview

This React Native app was created by Samdipro Nainggolan for the purpose of a coding assignment as a full-stack engineer candidate at EVO Smart Life. The application can be used on a phone to calculate the price of goods after tax.

## Prerequisites

Before you can use this app, make sure you have the following:

- Node.js (https://nodejs.org/)
- npm (Node Package Manager)
- Expo CLI (https://docs.expo.dev/get-started/installation/)

## Installation

1. Clone the repository Or Extract the app zip file

2. Install dependencies:

- npm install

3. Start the development server:

- npm start

4. Open the Expo Go app on your mobile device.

5. Scan the QR code displayed in your terminal using the Expo Go app to open the app.

## Usage

This app calculates the sales tax based on the following rules:

Basic sales tax is applied at a rate of 10% to all goods, except books, food, and medical products, which are exempt.
Import duty is an additional sales tax applied to all imported goods at a rate of 5%, with no exemptions.
When users make purchases, they receive a receipt that lists the name of all the items and their prices (including tax). The receipt also shows the total cost of the items and the total amount of sales taxes paid. The rounding rules for sales tax are as follows: for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.

## Troubleshooting

The Expo Go app sometimes doesn't work as expected. Restarting both the app on your computer and the app on your phone can help resolve the issue.

## Contact

Project maintainer:

Samdipro Nainggolan
samdiprongl@gmail.com

## Acknowledgments

We would like to extend our gratitude to the following individuals and projects for their contributions to this app:

The React Native and Expo teams for providing a robust framework for mobile app development.
The open-source community for their valuable libraries and resources that enhance our app's functionality.
All the developers and contributors who actively maintain and improve the tools and packages we relied on during the development process.
Thank you for making this project possible. Your efforts are greatly appreciated.
