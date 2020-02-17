using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication11.Models;

namespace WebApplication11.Repositories
{
    public class UserRepository 
    {
        
        private List<User> Users = new List<User>() {
            new User {id = 1, email = "user1@sciodev.com", password = "123" },
            new User {id = 2, email = "user2@sciodev.com", password = "123" },
            new User {id = 3, email = "user3@sciodev.com", password = "123" },
            new User {id = 4, email = "user4@sciodev.com", password = "123" }
        };

        //Devuelve usuarios
        public List<User> GetUsers()
        {
            return Users;
        }
        //Devuelve Un usuario
        public User GetUser(int id)
        {
            try
            {
                User user = Users.Find(x => x.id == id);
                return user;
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            } 
        }
        //Inserta Un usuario
        public string InsertUser(User user)
        {
            //User user = Users.ElementAt(1);
            Users.Add(user);
            return "User added.";
        }

        public string ModifyUser(int id,User user)
        {
            try
            {
                Users[id-1] = user;
                return "User Modifyed."; 
            }catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public string DeleteUser(int id)
        {
            try
            {
                User item = Users.Find(x => x.id == id);
                Users.Remove(item);
                return "User Deleted.";
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }
    }
}
