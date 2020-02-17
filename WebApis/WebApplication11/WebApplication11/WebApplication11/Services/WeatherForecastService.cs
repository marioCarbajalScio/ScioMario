using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication11.Repositories;

namespace WebApplication11.Services
{
    public class WeatherForecastService
    {
        private WeatherForecastRepository _weatherForecastRepository;

        public WeatherForecastService(WeatherForecastRepository weatherForecastRepository)
        {
            _weatherForecastRepository = weatherForecastRepository;
        }

        public List<string> GetSummaries()
        {
            return _weatherForecastRepository.GetSummaries();
        }
    }
}
