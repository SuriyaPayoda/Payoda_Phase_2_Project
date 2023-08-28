using IConnect_Version07.DBContext;
using IConnect_Version07.GlobalExceptions;
using IConnect_Version07.LinkModels;
using IConnect_Version07.Models;
using IConnect_Version07.Repository.IService;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace IConnect_Version07.Repository.Service
{
    public class CompanyService:ICompanyService
    {
        public IconnectContext _iconnectContext;

        public CompanyService(IconnectContext iconnectDbContext)
        {
            _iconnectContext = iconnectDbContext;
        }
        public async Task<CompanyRegistration> UploadPhoto(IFormFile file, int Cid)
        {
            try
            {
                if (file == null || file.Length == 0)
                {
                    return null;
                }
                else
                {
                    var fileName = $"{DateTime.Now:yyyyMMddHHmmss}_{Cid}.png";
                    var filePath = Path.Combine("Data/Company", fileName);

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }
                    var ruser = await _iconnectContext.CompanyRegistrations.FindAsync(Cid);
                    if (ruser != null)
                    {
                        ruser.CImage = fileName;
                        _iconnectContext.SaveChanges();
                        ruser = await _iconnectContext.CompanyRegistrations.FindAsync(Cid);

                    }

                    return ruser;

                }
            }
            catch(Exception ex)
            {
                throw new Exception(Exceptions.ExceptionMessages[0]);
            }
        }
        public async Task<List<JobDetail>> JobPost(GetJobDetails jobpost)
        {

            var jobType = await _iconnectContext.JobTypes.FirstOrDefaultAsync(jt => jt.TName == jobpost.TName);

            JobDetail job = new JobDetail();
            if (jobpost != null)
            {
                job.CId = jobpost.CId;
                job.JId = jobpost.JId;
                job.JSkill = jobpost.JSkill;
                job.JSalary = jobpost.JSalary;
                job.JVacancy = jobpost.JVacancy;
                job.JContact = jobpost.JContact;
                job.JUpdatedon = DateTime.Now;
                job.JHighlight = jobpost.JHighlight;
                job.JMaxexperience = jobpost.JMaxexperience;
                job.JMinexperience = jobpost.JMinexperience;
                job.JRole = jobpost.JRole;
                job.JLocation = jobpost.JLocation;
                job.JIsactive = jobpost.Isactive;
                job.JTimeline = jobpost.JTimeline;
                job.TId = jobType.TId;
                _iconnectContext.JobDetails.Add(job);
                await _iconnectContext.SaveChangesAsync();
                return await _iconnectContext.JobDetails.ToListAsync();
            }
            else
            {
                throw new Exception(Exceptions.ExceptionMessages[0]);
            }
        }
        public async Task<JobDetail> UpdateJob(int Jid, JobDetail user)
        {
            var ruser = await _iconnectContext.JobDetails.FindAsync(Jid);
            if (ruser != null)
            {
                ruser.JRole = user.JRole;
                ruser.JTimeline = user.JTimeline;
                ruser.JMinexperience = user.JMinexperience;
                ruser.JMaxexperience = user.JMaxexperience;
                ruser.JVacancy = user.JVacancy;
                ruser.JSalary = user.JSalary;
                ruser.JSkill = user.JSkill;
                ruser.JContact = user.JContact;
                ruser.JHighlight = user.JHighlight;
                ruser.JLocation = user.JLocation;
                ruser.JUpdatedon = DateTime.Now;
                _iconnectContext.SaveChanges();
                ruser = await _iconnectContext.JobDetails.FindAsync(Jid);
                return ruser;

            }
            else
            {
                throw new Exception(Exceptions.ExceptionMessages[0]);
            }

        }
        public async Task<JobApply> Approved(int Uid)
        {
            var ruser = await _iconnectContext.JobApplies.FindAsync(Uid);
            if (ruser != null)
            {
                ruser.JStatus ="Approved";
             
                _iconnectContext.SaveChanges();
                ruser = await _iconnectContext.JobApplies.FindAsync(Uid);
                return ruser;

            }
            else
            {
                throw new Exception(Exceptions.ExceptionMessages[0]);
            }

        }
        public async Task<JobDetail> Delete(int Jid)
        {
            var ruser = await _iconnectContext.JobDetails.FindAsync(Jid);
            if (ruser != null)
            {
                ruser.JIsactive = 1;

                _iconnectContext.SaveChanges();
                ruser = await _iconnectContext.JobDetails.FindAsync(Jid);
                return ruser;

            }
            else
            {
                throw new Exception(Exceptions.ExceptionMessages[0]);
            }

        }
        public async Task<JobDetail> DeleteJob(int Jid)
        {
            var ruser = await _iconnectContext.JobDetails.FindAsync(Jid);
            if (ruser != null)
            {
                ruser.JIsactive = 1;

                _iconnectContext.SaveChanges();
                ruser = await _iconnectContext.JobDetails.FindAsync(Jid);
                return ruser;

            }
            else
            {
                throw new Exception(Exceptions.ExceptionMessages[0]);
            }

        }
        public async Task<List<SeekerDisplay>> GetUserJob(int cid)
        {
            var userData = await (
                from user in _iconnectContext.UserRegistrations
                where user.UIsactive == 0
                join jobApply in _iconnectContext.JobApplies
                    on user.UId equals jobApply.UId
                where jobApply.JStatus == "Pending"
                join company in _iconnectContext.CompanyRegistrations
                    on jobApply.JId equals company.CId
                where company.CId == cid
                select new SeekerDisplay
                {
                    UId = user.UId,
                    UFirstname = user.UFirstname,
                    ULastname = user.ULastname,
                    UPhno = user.UPhno,
                    UEmail = user.UEmail,
                    UCourse = user.UCourse,
                    UCoursetype = user.UCoursetype,
                    USpecification = user.USpecification,
                    UCollege = user.UCollege,
                    UGender = user.UGender,
                    UDob = (DateTime)user.UDob,
                    JRole = _iconnectContext.JobDetails
                        .Where(jd => jd.CId == cid && jd.JId == jobApply.JId)
                        .Select(jd => jd.JRole)
                        .FirstOrDefault(),
                    USkill = jobApply.USkill,
                    UExperience = jobApply.UExperience,
                    UAppliedon = (DateTime)jobApply.UAppliedon,
                }
            ).ToListAsync();

            return userData;
        }

        public async Task<List<SeekerDisplay>> GetUserJobInfo(int cid)
        {
            var userData = await _iconnectContext.UserRegistrations
         .Where(user => user.UIsactive == 0)
         .Join(
             _iconnectContext.JobApplies.Where(ja => ja.JId!=0),
             user => user.UId,
             jobApply => jobApply.UId,
             (user, jobApply) => new
             {
                 User = user,
                 JobApply = jobApply
             }
         )
         .Join(
             _iconnectContext.CompanyRegistrations.Where(company => company.CId == cid), // Add this join
             combined => combined.JobApply.JId,
             company => company.CId,
             (combined, company) => new SeekerDisplay
             {
                 UId = combined.User.UId,
                 UFirstname = combined.User.UFirstname,
                 ULastname = combined.User.ULastname,
                 UPhno = combined.User.UPhno,
                 UEmail = combined.User.UEmail,
                 UCourse = combined.User.UCourse,
                 UCoursetype = combined.User.UCoursetype,
                 USpecification = combined.User.USpecification,
                 UCollege = combined.User.UCollege,
                 UGender = combined.User.UGender,
                 UDob = (DateTime)combined.User.UDob,

                 JRole = _iconnectContext.JobDetails
                     .Where(jd => jd.CId == cid && jd.JId == combined.JobApply.JId)
                     .Select(jd => jd.JRole)
                     .FirstOrDefault(),
                 USkill = combined.JobApply.USkill,
                 UExperience = combined.JobApply.UExperience,
                 UAppliedon = (DateTime)combined.JobApply.UAppliedon,
             }
         )
         .ToListAsync();

            return userData;

        }
       


        public async Task<List<JobView>> GetJobDetails(int cid)
        {
            var jobDetailsWithTypeName = await _iconnectContext.JobDetails
                .Where(jobDetails => jobDetails.CId == cid && jobDetails.JIsactive==0)
                .Join(
                    _iconnectContext.JobTypes,
                    jobDetails => jobDetails.TId,
                    jobType => jobType.TId,
                    (jobDetails, jobType) => new JobView
                    {
                        JId = jobDetails.JId,
                        CId = (int)jobDetails.CId,
                        JRole = jobDetails.JRole,
                        JSkill = jobDetails.JSkill,
                        JMinexperience = jobDetails.JMinexperience,
                        JMaxexperience = jobDetails.JMaxexperience,
                        JVacancy = jobDetails.JVacancy,
                        JSalary = jobDetails.JSalary,
                        JHighlight = jobDetails.JHighlight,
                        JContact = jobDetails.JContact,
                        JTimeline = jobDetails.JTimeline,
                        JUpdatedon = jobDetails.JUpdatedon,
                        JLocation = jobDetails.JLocation,
                        Isactive = jobDetails.JIsactive,
                        TName = jobType.TName
                    }
                )
                .ToListAsync();

            return jobDetailsWithTypeName;
        }
        public async Task<CompanyRegistration> GetCompanyDetails(int cid)
        {
            var company= await _iconnectContext.CompanyRegistrations.FindAsync(cid);
            if (company == null)
            {
                throw new Exception(Exceptions.ExceptionMessages[0]);
            }
            else
            {
                return company;
            }
        }

    }
}
