app.controller('CustomersController', function ($scope, APIService) {
    getAll();

    function getAll() {
        var servCall = APIService.getCustomers();
        servCall.then(function (d) {
            $scope.subscriber = d.data;
        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }
})