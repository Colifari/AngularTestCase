using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;
using System.Runtime;
using WebFarm.Models;

namespace WebFarm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimalsController : Controller
    {
        private readonly ILogger<AnimalsController> _logger;
        private readonly IDataContext dataContext;

        public AnimalsController(ILogger<AnimalsController> logger, IDataContext dataContext)
        {
            _logger = logger;
            this.dataContext = dataContext;
        }

        /// <summary>
        /// Returns list of animals
        /// </summary>
        /// <returns></returns>
        [HttpGet(Name = "GetAnimals")]
        public ContentResult Get()
        {
            IEnumerable<string> animals = dataContext.Animals.Select();

            return Content(Newtonsoft.Json.JsonConvert.SerializeObject(animals), "application/json");
        }

        [HttpPut(Name = "PutAnimal")]
        public ActionResult Put(string name)
        {
            return Content(Newtonsoft.Json.JsonConvert.SerializeObject(dataContext.Animals.Create(name)), "application/json");
        }

        [HttpDelete(Name = "DeleteAnimal")]
        public ActionResult Delete(string name)
        {
            return Content(Newtonsoft.Json.JsonConvert.SerializeObject(dataContext.Animals.Delete(name)), "application/json");
        }
    }
}
