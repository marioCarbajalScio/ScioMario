using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication11.Models;

namespace WebApplication11.Repositories
{
    public class PostRepository
    {
        private List<Post> Posts = new List<Post>() {
            new Post {id = 1, tittle = "Gatitos", content = "123", date = "10/10/2020", userId = 1 },
            new Post {id = 2, tittle = "Perritos", content = "123", date = "10/10/2020", userId = 1 },
            new Post {id = 3, tittle = "Calentamiento Global", content = "123", date = "10/10/2020", userId = 2 },
            new Post {id = 4, tittle = "Enfiemiento Global", content = "123", date = "10/10/2020", userId = 2 }
        };

        //Devuelve post
        public List<Post> GetPosts()
        {
            return Posts;
        }
        //Devuelve Un post
        public Post GetPost(int id)
        {
            try
            {
                Post post = Posts.Find(x => x.id == id);
                return post;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
            
        }
        //Inserta Un usuario
        public string InsertPost(Post post)
        {
            Posts.Add(post);
            return "User added.";
        }

        public string ModifyPost(int id, Post post)
        {
            try
            {
                Posts[id - 1] = post;
                return "User Modifyed.";
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }

        public string DeletePost(int id)
        {
            try
            {
                Post item = Posts.Find(x => x.id == id);
                Posts.Remove(item);
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
