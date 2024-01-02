using API.Helpers;
using Microsoft.AspNetCore.Mvc;


// de ce am facut asta? every controller needs the ApiController and every controller needs a route, and every controller needs to derive from the controllerBase. inheritance in C#. DRY

namespace API.Controllers
{
    [ServiceFilter(typeof(LogUserActivity))]
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        
    }
}