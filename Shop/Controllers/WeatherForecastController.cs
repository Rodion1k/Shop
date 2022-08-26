using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Shop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
     
        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet("init")]
        public IEnumerable<Phone> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Phone()
                {
                    Name = "kek",
                    Price = 333,
                })
                .ToArray();
        }
    }
}