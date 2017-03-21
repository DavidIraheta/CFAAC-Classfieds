import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
//import { Mongo } from 'meteor/mongo';
//import '../imports/api/tasks.js';
//export const Tasks = new Mongo.Collection('tasks');
//import { Tasks } from '../api/tasks.js';

//MyCollection = new Mongo.Collection("my-collection");

//import './body.html';

//Template.body.helpers({
//  tasks(){
//    return Tasks.find({});
//  },
//});

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

MyCollection = new Mongo.Collection("my-collection");
