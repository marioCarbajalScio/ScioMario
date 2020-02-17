using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication11.Models
{
    public class Post
    {
        public int id { get; set; }
        public string tittle { get; set; }
        public string content { get; set; }
        public string date { get; set; }
        public int userId { get; set; }

    }
}
