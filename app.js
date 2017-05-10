angular.module('nameStuff', [])
       .component('nameForm', {
         template: `
           <p>First Name: <input type="text" ng-model="vm.firstName"></p>
           <p>Nickname: <input type="text" ng-model="vm.nickname"></p>
           <p>Last Name: <input type="text" ng-model="vm.lastName"></p>
           <button ng-click="vm.submitName()">Submit</button>
           <ul>
            <li ng-repeat="name in vm.names track by $index">{{name}} <a href="#" ng-click="vm.removeMe($index)">Delete</a></li>
           </ul>
         `,
         controller: function() {
           var vm = this;

           vm.names = [];

           vm.submitName = function() {
             vm.printedName = '';
             vm.printedName += vm.firstName + " "; // James_
             if(vm.nickname) {
               vm.printedName += '"' + vm.nickname + '" '; //James_"jt"_
             }
             vm.printedName += vm.lastName; //James_"jt"_Taylor
             vm.names.push(vm.printedName);
             vm.firstName = '';
             vm.nickname = '';
             vm.lastName = '';
           }

           vm.removeMe = function(index) {
             vm.names.splice(index, 1);
           }
         },
         controllerAs: 'vm'
       });
