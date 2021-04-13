# ForgetMeNot

## About

Forget Me Not is a child security and safety product that me and a team of four others are working on for our Senior Design Project.
The goal of this product is to ensure children are not left alone in cars in extreme temperatures. We do this by detecting if a child is in 
the car after the car has been turned off. When this happens we send out a bluetooth notification to a mobile application that notifies the parent
that their child is in the car. If the car reaches a certain temperature and the child is still in the car, and the car is turned off, we then send another
notification notifying the parent that the child is still in the car, and that they could be unsafe. My responsibility for this project is to create a functional
application that can recieve notifications from the product in the car and allow the parent to respond to such notifications. 

## Design and Technologies

This application is written using JavaScript and the React Native framework. I chose to focus my development on soley Android devices; however, due to the 
nature of React Native and its inherent features, this application can be easily ported to IOS with some minor changes. The application uses both Native modules and
modules from the React Native API to accomplish its tasks. Additionally, I use a peristant storage through AsyncStorage to save critical data. 

## Testing

Currently, there is no way to run and demo this project without additional hardware, specifically an ESP-32 with the correct code written on it. However, I will be adding
an emulator friendly, hardware independent version of this project after development is finished, to allow for demoing. 
