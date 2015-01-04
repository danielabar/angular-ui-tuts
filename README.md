Better Web Apps With AngularUI
==========

> Learning [Angular UI](https://angular-ui.github.io/) with Tuts Plus [course](https://code.tutsplus.com/courses/better-web-apps-with-angularui).

## The Highlight Utility

[View](highlighting/index.html) | [Controller](highlighting/app.js)

By default, the filter is case insensitive

  ```html
  <p ng-bind-html='text | highlight:query'></p>
  ```

To make it case sensitive

  ```html
  <p ng-bind-html='text | highlight:query:true'></p>
  ```

## The Mask Utility

[View](mask/index.html) | [Controller](mask/app.js)

Useful for working with forms. Makes it easier for user to enter data that must be in a certain format.
For example, a credit card number should be 16 digits, divided into groups of 4 each.
Phone number could start with 3 digit area code in parantheses, followed by 3 digits, a dash, then 4 digits.

A mask is a simple string. To create it, follow these rules

* For a number, use '9'
* For a letter, use 'A'
* To accept any alphanumeric character, use '*'

## The Route Utility

[View](route/main.html) | [Controller](route/app.js)

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

[View](unique/index.html) | [Controller](unique/app.js)

This utility is used to filter an array of objects by the values of a specific key so that we only have unique values in that key.