using IConnect_Version07.LinkModels;
using IConnect_Version07.Models;

namespace IConnect_Version07.Repository.IService
{
    public interface ICompanyService
    {
        public Task<CompanyRegistration> UploadPhoto(IFormFile file, int Cid);
        public Task<List<JobDetail>> JobPost(GetJobDetails jobpost);
        public Task<JobDetail> UpdateJob(int Jid, JobDetail user);
        public Task<JobDetail> DeleteJob(int Jid);
        //public Task<Boolean> GetResume(string resumeurl);
        public Task<List<SeekerDisplay>> GetUserJobInfo(int cid);
        public Task<List<SeekerDisplay>> GetUserJob(int cid);
        public Task<JobDetail> Delete(int Jid);
        public Task<List<JobView>> GetJobDetails(int cid);
        public Task<JobApply> Approved(int Uid);
        public Task<CompanyRegistration> GetCompanyDetails(int cid);
    }
}
