using IConnect_Version07.LinkModels;
using IConnect_Version07.Models;
using IConnect_Version07.Repository.IService;
using IConnect_Version07.Repository.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IConnect_Version07.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeekerController : ControllerBase
    {
        public ISeekerService _seekerService;

        public SeekerController(ISeekerService seekerService)
        {
            _seekerService = seekerService;
        }
        [HttpGet("SeekerProfile")]
        public async Task<ActionResult<List<JobView>>> GetSeekerDetails(int uid)
        {
            try
            {
                var users = await _seekerService.GetSeekerDetails(uid);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpPut("updateSeekerProfile")]
        public async Task<ActionResult<UserRegistration>> Updateprofile(int Uid, UserRegistration user)
        {
            try
            {
                var users = await _seekerService.Updateprofile(Uid, user);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }

        [HttpPut("PhotoUpload")]
        public async Task<ActionResult<UserRegistration>> UploadPhoto(IFormFile file, int Uid)
        {
            try
            {
                var users = await _seekerService.UploadPhoto(file, Uid);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpPut("ResumeUpload")]
        public async Task<ActionResult<UserRegistration>> UploadResume(IFormFile file, int Uid)
        {
            try
            {
                var users = await _seekerService.UploadResume(file, Uid);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpPost("JobApply")]
        public async Task<ActionResult<List<JobApply>>> JobApply(JobApply job)
        {
            try
            {
                var users = await _seekerService.JobApply(job);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpGet("CompanyDetails")]
        public async Task<ActionResult<List<CompanyDisplay>>> GetCompanyInfo()
        {
            try
            {
                var users = await _seekerService.GetCompanyInfo();
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpGet("ViewStatus")]
        public async Task<ActionResult<List<ViewStatus>>> ViewStatus(int uid)
        {
            try
            {
                var users = await _seekerService.ViewStatus(uid);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
    }
}
