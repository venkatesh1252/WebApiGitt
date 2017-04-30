app.controller('CustomersController', function ($scope, CustomerService) {
    getAll();

    function getAll() {
        var servCall = CustomerService.getCustomers();
        servCall.then(function (d) {
            $scope.Customers = d.data;
        }, function (error) {
            $log.error('Oops! Something went wrong while fetching the data.')
        })
    }
})