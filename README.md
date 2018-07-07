# Jaunt
## Synopsis
  Everybody loves it when weekends arrive. There are plenty of hopes for having a great weekend. All of us want to have a vibrant, joyful and fun weekend with a significant other or a night out by yourself . But as it happens normally with the plans for most of us, the weekends that arrive with great promises leave us void and with the feeling as if the weekends never arrived in the first place. That is why we have Jaunt. Jaunt is a full stack web application that is designed for a date night out, going solo to a place to dine, or night out with friends. Jaunt offers a search of restaurtants, bars, museums, and an random option of categories to select from. Once you select your location and category, Jaunt will pull up locations of interest within a range of miles for you to choose from. It also has a random option if you just can't decide on what to choose. If you want to know what previous users selected or what is trending we have a trending option, which you can choose what is popular in your area from previous Jaunt users. Jaunt makes choosing an undecisive night decisive. 

## Motivation
The motivation was to design a simple to use app that makes choosing somethign simple. 

## Code walk-through for Customer
Breaking down the client side in steps, using screenshots to walk-through the process of Jaunt.

### Home Page
 This screenshost the home page of Jaunt
 
![beginning page](https://user-images.githubusercontent.com/21042727/41106323-7299236a-6a35-11e8-9536-8c9f304a1131.PNG)

 Then the customer will be prompted to make a selection by ID number. Note the quantity of basketballs are at 75.
 
![promptitempurchase](https://user-images.githubusercontent.com/21042727/41106325-73c6a168-6a35-11e8-881c-050c22034d62.PNG)

 The customer will choose to purchase a basketball in this example. I have added in a protection if the user exceeds the quantity available it  will prompt a message and then restart back to purchase screen. This also protects the mysql from any receiving any incorrect data.  
 
 ![exceededquant](https://user-images.githubusercontent.com/21042727/41107784-a75528da-6a38-11e8-887b-c21cda2c6261.PNG)
