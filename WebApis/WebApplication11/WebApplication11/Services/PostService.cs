using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication11.Models;
using WebApplication11.Repositories;

namespace WebApplication11.Services
{
    public class PostService
    {

        private PostRepository _postRepository;

        public PostService(PostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        //Metodos para returnear
        public List<Post> GetPosts()
        {
            return _postRepository.GetPosts();
        }

        public Post GetPost(int id)
        {
            return _postRepository.GetPost(id);
        }

        public string InsertPost(Post post)
        {
            return _postRepository.InsertPost(post);
        }

        public string ModifyPost(int id, Post post)
        {
            return _postRepository.ModifyPost(id, post);
        }

        public string DeletePost(int id)
        {
            return _postRepository.DeletePost(id);
        }
    }
}
