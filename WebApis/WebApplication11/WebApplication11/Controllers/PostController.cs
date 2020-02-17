using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication11.Services;
using WebApplication11.Models;

namespace WebApplication11.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private PostService _postService;
        public PostController(PostService postService)
        {
            _postService = postService;
        }

        // GET: api/Post
        [HttpGet]
        public List<Post> Get()
        {
            return _postService.GetPosts();
        }

        [HttpGet("{id}", Name = "GetPost")]
        public Post Get(int id)
        {
            return _postService.GetPost(id);
        }

        // POST: /User
        [HttpPost]
        public string Post([FromBody] Post post)
        {
            return _postService.InsertPost(post);
        }

        // PUT: /User/5
        [HttpPut("{id}")]
        public string Put(int id, [FromBody] Post post)
        {
            return _postService.ModifyPost(id, post);
        }

        // DELETE: /ApiWithActions/5
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return _postService.DeletePost(id);
        }

    }
}
