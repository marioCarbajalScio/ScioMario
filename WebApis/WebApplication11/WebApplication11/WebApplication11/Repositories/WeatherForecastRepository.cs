using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication11.Repositories
{
    public class WeatherForecastRepository
    {
        private static readonly List<string> Summaries = new List<string>()
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        public List<string> GetSummaries()
        {
            return Summaries;
        }
    }
}
