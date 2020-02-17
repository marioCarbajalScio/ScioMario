using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApplication11.Models;
using WebApplication11.Repositories;
using WebApplication11.Services;

namespace WebApplication11.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private WeatherForecastService _weatherForecastService;
        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, WeatherForecastService weatherForecastService)
        {
            _weatherForecastService = weatherForecastService;
            _logger = logger;
        }

        [HttpGet]
        public List<string> Get()
        {
            /*var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();*/
            _logger.LogInformation(DateTime.Now.ToString());
            return _weatherForecastService.GetSummaries();
        }

        [HttpPost]
        public WeatherForecastModel Post([FromBody]WeatherForecastModel weatherForecast)
        {
            var weatherForecastList = _weatherForecastService.GetSummaries();
            weatherForecastList.Add(weatherForecast.Summary);
            return weatherForecast;
        }

        [HttpPut]
        [Route("actualizaunbonche")]
        public WeatherForecastModel Put([FromBody]WeatherForecastModel weatherForecast)
        {
            return weatherForecast;
        }
    }
}
