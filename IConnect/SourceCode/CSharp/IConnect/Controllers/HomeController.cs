using IConnect_Version07.LinkModels;
using IConnect_Version07.Models;
using IConnect_Version07.Repository.IService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IConnect_Version07.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        public IHomeService _homeService;

        public HomeController(IHomeService homeService)
        {
            _homeService = homeService;
        }
        [HttpPost("SeekerRegister")]
        public async Task<ActionResult<List<UserRegistration>>> UserRegister(UserRegistration user)
        {
            try
            {
                var users = await _homeService.UserRegister(user);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }

        [HttpPost("SeekerLogin")]
        public async Task<ActionResult<GetRole>> SeekerLogin(Login user)
        {
            try
            {
                var l_user = await _homeService.SeekerLogin(user);
                return Ok(l_user);

            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost("CompanyRegister")]
        public async Task<ActionResult<List<CompanyRegistration>>> UserRegister(CompanyRegistration user)
        {
            try
            {
                var users = await _homeService.CompanyRegister(user);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("CompanyLogin")]
        
        public async Task<ActionResult<GetRole>> CompanyLogin(Login user)
        {
            try
            {
                var l_user = await _homeService.CompanyLogin(user);
                return Ok(l_user);

            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
