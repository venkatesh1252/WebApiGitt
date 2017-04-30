using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CustomerDataAccess;

namespace Egiants_Assignment_WebApi.Controllers
{
    public class CustomersController : ApiController
    {
        public IEnumerable<Customer> Get()
        {
            using (Egaints_AssingEntities entities = new Egaints_AssingEntities())
            {
                return entities.Customers.ToList();
            } 
        }

        public Customer Get(int id)
        {
            using (Egaints_AssingEntities entities = new Egaints_AssingEntities())
            {
                return entities.Customers.FirstOrDefault(c => c.Id == id);
            }
        }

    }
}
