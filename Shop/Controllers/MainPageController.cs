using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Shop.DataAccessLayer;
using Shop.Domain;

namespace Shop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MainPageController : ControllerBase
    {
        public MainPageController()
        {
        }

        [HttpGet]
        public async Task<IEnumerable<Phone>> Get()
        {
            var unitOfWork = new UnitOfWork();
            var lol =unitOfWork.PhonesRepository.GetAll();
            return await unitOfWork.PhonesRepository.GetAll();
        }
    }
}