using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using WebApplication11.Models;
using WebApplication11.Repositories;
using WebApplication11.Services;

namespace WebApplication11.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private UserService _userService;

        public UserController( UserService userService)
        {
            _userService = userService;
        }

        // GET: /User
        [HttpGet]
        public List<User> Get()
        {
            //Regresa todos los usuarios
            return _userService.GetUsers();
        }

        // GET: /User/5
        [HttpGet("{id}", Name = "Get")]
        public User Get(int id)
        {
            return _userService.GetUser(id);
        }

        // POST: /User
        [HttpPost]
        public string Post([FromBody] User user)
        {
            return _userService.InsertUser(user);
        }

        // PUT: /User/5
        [HttpPut("{id}")]
        public string Put(int id, [FromBody] User user)
        {
            return _userService.ModifyUser(id,user);
        }

        // DELETE: /ApiWithActions/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return _userService.DeleteUser(id);
        }
    }
}
