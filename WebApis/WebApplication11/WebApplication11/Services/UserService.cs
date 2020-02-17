using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication11.Repositories;
using WebApplication11.Models;

namespace WebApplication11.Services
{
    public class UserService
    {
        private UserRepository _userRepository;

        public UserService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        //Metodos para returnear
        public List<User> GetUsers()
        {
            return _userRepository.GetUsers();
        }

        public User GetUser(int id)
        {
            return  _userRepository.GetUser(id);
        }

        public string InsertUser(User user)
        {
            return _userRepository.InsertUser(user);
        }

        public string ModifyUser(int id, User user)
        {
            return _userRepository.ModifyUser(id,user);
        }

        public string DeleteUser(int id)
        {
            return _userRepository.DeleteUser(id);
        }
    }
}
