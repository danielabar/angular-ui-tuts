<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Better Web Apps With AngularUI](#better-web-apps-with-angularui)
  - [The Highlight Utility](#the-highlight-utility)
  - [The Mask Utility](#the-mask-utility)
  - [The Route Utility](#the-route-utility)
  - [The Unique Utility](#the-unique-utility)
  - [The Validate Utility](#the-validate-utility)
  - [UI Modules - IDE's](#ui-modules---ides)
  - [The Google Maps Module](#the-google-maps-module)
    - [Angular and Google Maps](#angular-and-google-maps)
  - [The Calendar Module](#the-calendar-module)
  - [UI-Bootstrap](#ui-bootstrap)
  - [NG Grid Utility](#ng-grid-utility)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Better Web Apps With AngularUI
==========

> Learning [Angular UI](https://angular-ui.github.io/) with Tuts Plus [course](https://code.tutsplus.com/courses/better-web-apps-with-angularui).

## The Highlight Utility

[View](highlighting/app/index.html) | [Controller](highlighting/app/app.js)

By default, the filter is case insensitive

  ```html
  <p ng-bind-html='text | highlight:query'></p>
  ```

To make it case sensitive

  ```html
  <p ng-bind-html='text | highlight:query:true'></p>
  ```

## The Mask Utility

[View](mask/app/index.html) | [Controller](mask/app/app.js)

Useful for working with forms. Makes it easier for user to enter data that must be in a certain format.
For example, a credit card number should be 16 digits, divided into groups of 4 each.
Phone number could start with 3 digit area code in parantheses, followed by 3 digits, a dash, then 4 digits.

A mask is a simple string. To create it, follow these rules

* For a number, use '9'
* For a letter, use 'A'
* To accept any alphanumeric character, use '*'

## The Route Utility

[View](route/app/main.html) | [Controller](route/app/app.js)

Provide templates information about what route is currently being displayed.

If value passed to `ui-route` directive matches the current route, then `$uiRoute` is true, otherwise, its false.

  ```html
  <li ng-repeat="route in routes" ui-route="{{route}}">
    {{route}}
    <span ng-show="$uiRoute">ACTIVE</span>
    <span ng-show="!$uiRoute">INACTIVE</span>
  </li>
  ```

## The Unique Utility

[View](unique/app/index.html) | [Controller](unique/app/app.js)

This utility is used to filter an array of objects by the values of a specific key so that we only have unique values in that key.

Use it just like a any other filter

  ```html
  <tr ng-repeat="item in items | unique: field">
  ```

## The Validate Utility

[View](validate/app/index.html) | [Controller](validate/app/app.js)

Use for form validation. Angular comes with basic form validation, but there are some more complex cases it can't handle.

For example, angular does not natively support password confirmation, even though pretty much every site with a sign up form requires it.

`ui-validate` directive is similar to `ng-click` or any other event handling directive.
Takes either a JavaScript string or reference to a function defined in controller that will be run to validate the given field.

`$value` is the value entered into the current input field.

`ui-validate-watch` directive is used to tell ui-validate when to run. It can watch another field for changes.
It needs quotes because it expects a JavaScript value.

  ```html
  <input name="password" ng-model="password" />
  <input name="confirmPassword" ng-model="confirmPassword"
    ui-validate="$value === password"
    ui-validate-watch='"password"' />
  ```

Can also provide a custom validation function. Silly example, if validation should only pass when entered text is "Cookie Monster!"

  ```html
  <input name="custom_example" ng-model="custom_example" class="form-control"
    ui-validate=" 'myCustomValidate($value)' ">
  ```

  ```javascript
  // controller.js
  $scope.myCustomValidate = function(value) {
    return value === 'Cookie Monster!';
  };
  ```

## UI Modules - IDE's

[View](ides/app/index.html) | [Controller](ides/app/app.js)

[Wrappers](http://angular-ui.github.io/#ui-modules) around existing projects that allow you to use them as Angular directives.

These have dependencies on the libraries they wrap.

## The Google Maps Module

[View](map/app/index.html) | [Controller](map/app/app.js)

  ```bash
  bower install angular-ui-map --save
  ```

Note that ui-map depends on ui-utils.

To work with Google maps, also need to request that library, which can be done via the cdn

  ```html
  <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=onGoogleReady"></script>
  ```

### Angular and Google Maps

By default, Angular starts loading as soon as it encounters `<body ng-app="MyApp">` in `index.html`.
However, when working with Google maps, must wait for that to be loaded first.

Solution is to remove `ng-app...` from index.html, and instead,
manually bootstsrap the Angular application from within the callback specified as part of the google cdn url.

In this example `callback=onGoogleReady` (could use any function name you wish).

Need to give the map div a height in order to actually see the map.

## The Calendar Module

[View](calendar/app/index.html) | [Controller](calendar/app/app.js)

Wrapper around [FullCalendar](http://fullcalendar.io/).

  ```bash
  bower install angular-ui-calendar
  ```

The calendar UI component is primarily made to display events, not to generate new ones and save them,
although you could built that functionality on top of calendar if you wish.

By default, calendar events are not editable, but can change this via options.

## UI-Bootstrap

[View](bootstrap/app/index.html) | [Controller](bootstrap/app/app.js)

Angular directives to use Twitter Bootstrap components easily in Angular. [Docs](http://angular-ui.github.io/bootstrap/)

Reduces the amount of markup needed, for example [Tabs](http://angular-ui.github.io/bootstrap/#/tabs)

  ```bash
  bower install angular-bootstrap --save
  ```

Use the `ui-bootstrap-tpls.js` version (i.e. with html templates) unless you want to write your own templates,
in which case, use `ui-bootstrap-.js`.

Note that UI-Bootstrap does not come with any css, need to install bootstrap and link to the css to get the styling.

  ```bash
  bower install bootstrap --save
  ```

  ```html
  <link rel="stylesheet" href="../public/lib/bootstrap/dist/css/bootstrap.css" />
  ```

## NG Grid Utility

[View](grid/app/index.html) | [Controller](grid/app/app.js)

(Note that setting the grid data in grid options is done as a string)

[ng-grid](http://angular-ui.github.io/ng-grid/) is an older project and being replaced [UI Grid](http://ui-grid.info/),
however, that's still in beta.

  ```bash
  bower install ng-grid --save
  ```

Grid utility is a simple spreadsheet. By default, supports ordering of any field and multi-row select.