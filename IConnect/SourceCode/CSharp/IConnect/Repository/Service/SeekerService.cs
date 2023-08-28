using IConnect_Version07.DBContext;
using IConnect_Version07.GlobalExceptions;
using IConnect_Version07.LinkModels;
using IConnect_Version07.Models;
using IConnect_Version07.Repository.IService;
using Microsoft.EntityFrameworkCore;

namespace IConnect_Version07.Repository.Service
{
    public class SeekerService:ISeekerService
    {
        public IconnectContext _iconnectContext;

        public SeekerService(IconnectContext iconnectContext)
        {
            _iconnectContext = iconnectContext;
        }
        public async Task<UserRegistration> GetSeekerDetails(int uid)
        {
            var company = await _iconnectContext.UserRegistrations.FindAsync(uid);
            if (company == null)
            {
                throw new Exception(Exceptions.ExceptionMessages[0]);
            }
            else
            {
                return company;
            }
        }
        public async Task<UserRegistration> Updateprofile(int Uid, UserRegistration user)
        {
            var ruser = await _iconnectContext.UserRegistrations.FindAsync(Uid);
            if (ruser != null)
            {
                ruser.UFirstname = user.UFirstname;
                ruser.ULastname = user.ULastname;
                ruser.UGender = user.UGender;
                ruser.UCollege = user.UCollege;
                ruser.UGender = user.UGender;
                ruser.UDob = user.UDob;
                ruser.UCourse = user.UCourse;
                ruser.UCoursetype = user.UCoursetype;
                ruser.USpecification = user.USpecification;
                ruser.UUpdatedon = DateTime.Now;
                _iconnectContext.SaveChanges();
                ruser = await _iconnectContext.UserRegistrations.FindAsync(Uid);
                return ruser;

            }
            else
            {
                throw new Exception("Not found");
            }

        }

        public async Task<UserRegistration> UploadPhoto(IFormFile file, int Uid)
        {
            if (file == null || file.Length == 0)
            {
                return null;
            }
            else
            {
                var fileName = $"{DateTime.Now:yyyyMMddHHmmss}_{Uid}.png";
                var filePath = Path.Combine("Data/Seeker/Photo", fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
                var ruser = await _iconnectContext.UserRegistrations.FindAsync(Uid);
                if (ruser != null)
                {
                    ruser.UImage = fileName;
                    _iconnectContext.SaveChanges();
                    ruser = await _iconnectContext.UserRegistrations.FindAsync(Uid);

                }

                return ruser;

            }
        }
        public async Task<UserRegistration> UploadResume(IFormFile file, int Uid)
        {
            if (file == null || file.Length == 0)
            {
                return null;
            }
            else
            {
                var fileName = $"{DateTime.Now:yyyyMMddHHmmss}_{Uid}.pdf";
                var filePath = Path.Combine("Data/Seeker/Resume", fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
                var ruser = await _iconnectContext.UserRegistrations.FindAsync(Uid);
                if (ruser != null)
                {
                    ruser.UResume = fileName;
                    _iconnectContext.SaveChanges();
                    ruser = await _iconnectContext.UserRegistrations.FindAsync(Uid);

                }

                return ruser;

            }
        }
        public async Task<List<JobApply>> JobApply(JobApply job)
        {
            if (job != null)
            {
                job.UAppliedon = DateTime.Now;
                _iconnectContext.JobApplies.Add(job);
                await _iconnectContext.SaveChangesAsync();
                return await _iconnectContext.JobApplies.ToListAsync();
            }
            else
            {
                throw new Exception("Not found");
            }
        }
        public async Task<List<CompanyDisplay>> GetCompanyInfo()
        {
            var companyJobInfo = await _iconnectContext.CompanyRegistrations
                .Where(company => company.CIsactive == 0)
                .Join(
                    _iconnectContext.JobDetails.Where(job => job.JIsactive == 0),
                    company => company.CId,
                    jobDetails => jobDetails.CId,
                    (company, jobDetails) => new CompanyDisplay
                    {
                        CId = company.CId,
                        CName = company.CName,
                        CEmail = company.CEmail,
                        CPhno = company.CPhno,
                        JRole = jobDetails.JRole,
                        JSkill = jobDetails.JSkill,
                        JSalary = jobDetails.JSalary,
                        JMinexperience = jobDetails.JMinexperience,
                        JMaxexperience = jobDetails.JMaxexperience,
                        JContact = jobDetails.JContact,
                        JHighlight = jobDetails.JHighlight,
                        JId = jobDetails.JId,
                        JLocation = jobDetails.JLocation,
                        JTimeline = jobDetails.JTimeline,
                        JUpdatedon = jobDetails.JUpdatedon,
                        JVacancy = jobDetails.JVacancy,
                        TName = _iconnectContext.JobTypes
                            .Where(jobType => jobType.TId == jobDetails.TId)
                            .Select(jobType => jobType.TName)
                            .FirstOrDefault()
                    }
                )
                .ToListAsync();

            return companyJobInfo;
        }


        public async Task<List<ViewStatus>> ViewStatus(int uid)
        {
            var jobApplications = await _iconnectContext.JobApplies
                .Where(jobApply => jobApply.UId == uid)
                .Join(
                    _iconnectContext.JobDetails,
                    jobApply => jobApply.JId,
                    jobDetails => jobDetails.JId,
                    (jobApply, jobDetails) => new ViewStatus
                    {
                        UId = (int)jobApply.UId,
                        CName = _iconnectContext.CompanyRegistrations
                            .Where(company => company.CId == jobDetails.CId)
                            .Select(company => company.CName)
                            .FirstOrDefault(),
                        JRole = jobDetails.JRole,
                        USkill = jobApply.USkill,
                        UExperience = jobApply.UExperience,
                        JStatus = jobApply.JStatus
                    }
                )
                .ToListAsync();

            return jobApplications;
        }
    }
}
