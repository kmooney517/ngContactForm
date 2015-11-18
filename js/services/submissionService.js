let SubmissionService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/note';

  this.getSubmissions = getSubmissions;

  function getSubmissions () {
    return $http.get(url, PARSE.CONFIG);
  }

};

SubmissionService.$inject = ['$http', 'PARSE'];

export default SubmissionService;
