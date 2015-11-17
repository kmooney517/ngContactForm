let HomeController = function ($scope, PARSE, HomeService) {

  let vm = this;

  vm.title = 'Contact Us';



  vm.newNote = newNote;

  function newNote (noteObj) {
    HomeService.newNote(noteObj).then( (response) => {
    });
  }




  let validateName = function(newVal) {
    if (newVal.length > 0) {
      vm.errMsg1 = 'Looks Good!';
    } else {
      vm.errMsg1 = 'You must enter a name!';
    }
  };

  $scope.$watch('noteObj.name', function (newVal, prevVal) {
    if(!newVal) return;
    validateName(newVal);
  });

  // ********************************

  let validateEmail = function(newVal) {
    let a = newVal.includes('@');

    if (a === true) {
      vm.errMsg2 = 'Looks Good!';
    } else {
      vm.errMsg2 = 'You must enter an @!';
    }
  };

  $scope.$watch('noteObj.email', function (newVal, prevVal) {
    if(!newVal) return;
    validateEmail(newVal);
  });

  // ********************************



  let validateWebsite = function(newVal) {
    let a = newVal.includes('http://');
    let b = newVal.includes('https://');
    if (a === true || b === true) {
      vm.errMsg3 = 'Looks Good!';
    } else {
      vm.errMsg3 = 'You must enter http:// or https:// !';
    }
  };

  $scope.$watch('noteObj.website', function (newVal, prevVal) {
    if(!newVal) return;
    validateWebsite(newVal);
  });

  // ********************************



  let validateMessage = function(newVal) {
    if (newVal.length > 0) {
      vm.errMsg4 = 'Looks Good!';
    } else {
      vm.errMsg4 = 'You can\'t leave this blank!';
    }
  };

  $scope.$watch('noteObj.message', function (newVal, prevVal) {
    if(!newVal) return;
    validateMessage(newVal);
  });

};

HomeController.$inject = ['$scope','PARSE', 'HomeService'];

export default HomeController;