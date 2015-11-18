let SubmissionController = function ($scope, PARSE, SubmissionService) {

  let vm = this;
  vm.title = 'Submissions';

  vm.note = getNote();

  function getNote () {
    SubmissionService.getSubmissions().then( (response) => {
      vm.note = response.data.results;
    });
  }
};

SubmissionController.$inject = ['$scope', 'PARSE', 'SubmissionService'];

export default SubmissionController;