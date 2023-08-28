using IConnect_Version07.LinkModels;
using IConnect_Version07.Models;
using IConnect_Version07.Repository.IService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;

namespace IConnect_Version07.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        public ICompanyService _companyService;

        public CompanyController(ICompanyService companyService)
        {
            _companyService = companyService;
        }

        [HttpPut("PhotoUpload")]
        public async Task<ActionResult<CompanyRegistration>> UploadPhoto(IFormFile file, int Cid)
        {
            try
            {
                var users = await _companyService.UploadPhoto(file, Cid);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpPost("JobPost")]
        public async Task<ActionResult<List<JobDetail>>> JobPost(GetJobDetails jobpost)
        {
            try
            {
                var users = await _companyService.JobPost(jobpost);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpPut("UpdateJob")]
        public async Task<ActionResult<JobDetail>> UpdateJob(int Jid, JobDetail user)
        {
            try
            {
                var users = await _companyService.UpdateJob(Jid, user);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpDelete("DeleteJob")]
        public async Task<ActionResult<JobDetail>> DeleteJob(int Jid)
        {
            try
            {
                var users = await _companyService.DeleteJob(Jid);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpGet("GetSeekers")]
        public async Task<ActionResult<List<SeekerDisplay>>> GetUserJobInfo(int cid)
            {
            try
            {
                var users = await _companyService.GetUserJobInfo(cid);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpGet("Getseek")]
        public async Task<ActionResult<List<SeekerDisplay>>> GetUserJob(int cid)
        {
            try
            {
                var users = await _companyService.GetUserJob(cid);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpGet("ViewJob")]
        public async Task<ActionResult<List<JobView>>> GetJobDetails(int cid)
        {
            try
            {
                var users = await _companyService.GetJobDetails(cid);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpPut("Approved")]
        public async Task<ActionResult<List<JobView>>> Approved(int uid)
        {
            try
            {
                var users = await _companyService.Approved(uid);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpPut("Delete")]
        public async Task<ActionResult<List<JobDetail>>> Delete(int jid)
        {
            try
            {
                var users = await _companyService.Delete(jid);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
        [HttpGet("GetCompanydetails")]
        public async Task<ActionResult<CompanyRegistration>> GetCompanyDetails(int cid)
        {
            try
            {
                var users = await _companyService.GetCompanyDetails(cid);
                return Ok(users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.InnerException);
            }
        }
    }
}
