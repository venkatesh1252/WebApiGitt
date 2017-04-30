app.service("APIService", function ($http) {
    this.getCustomers = function () {
        return $http.get("api/Customer")
    }
});