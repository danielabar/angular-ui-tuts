<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Better Web Apps With AngularUI](#better-web-apps-with-angularui)
  - [The Highlight Utility](#the-highlight-utility)
  - [The Mask Utility](#the-mask-utility)
  - [The Route Utility](#the-route-utility)
  - [The Unique Utility](#the-unique-utility)

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

## UI Modules

[Wrappers](http://angular-ui.github.io/#ui-modules) around existing projects that allow you to use them as Angular directives.

To use them, need to install the ui module AND the library it wraps, for example, [CodeMirror](http://codemirror.net/)

